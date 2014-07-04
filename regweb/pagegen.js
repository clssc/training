/**
 * @fileoverview Web page generator for Westside Chinese School registration.
 * This code is supposed to be run using node.js. Usage:
 *   node pagegen.js 
 *      --template=<template> The template to process
 *      --css=<CSS> Optional, the CSS file to include
 *      --js=<JS> Optional, the JS file to include
 *      --message=<message file>
 *      --outputdir=<output path> Optional, default to where the template is
 * @author Arthur Hsu (arthurhsu@westsidechineseschool.org)
 *
 * This code requires package minimist.
 */
var path = require('path');
var fs = require('fs');
var argv = require('yargs').argv;

var message = {};

function argsCheck() {
  if (!argv.hasOwnProperty('template') ||
      !argv.hasOwnProperty('message')) {
    console.log('Usage: node pagegen.js');
    console.log('  --template=<template> The template to process');
    console.log('  --css=<CSS> Optional, the CSS file to include');
    console.log('  --js=<JS> Optional, the JS file to include');
    console.log('  --message=<message file>');
    console.log('  --outputdir=<output path> Optional, default to where' +
      ' the template is');
    process.exit(1);
  }
}


/** @enum {number} */
var States = {
  UNKNOWN: 0,
  START_LABEL: 1,
  END_LABEL: 2,
  START_BLOCK: 3,
  END_BLOCK: 4,
  LINE: 5
};


/**
 * Extract label in brackets, for example, @@start{something} => something.
 * @param {string} line
 * @return {?string} label
 */
function extractLabel(line) {
  var matches = line.match(/\{(.*)\}/);
  return matches ? matches[1] : null;
}


/**
 * @param {number} currentState
 * @param {string} line
 * @return {{
 *   state: number,
 *   label: ?string,
 *   message: ?string
 * }}
 */
function getState(state, line) {
  var result = {
    state: state
  };
  line = line.trim();

  if (line.indexOf('@@start') != -1) {
    result.state = States.START_LABEL;
  } else if (line.indexOf('@@line') != -1) {
    result.state = States.LINE;
    result.message = line.substring(line.indexOf(' ') + 1);
  } else if (line.indexOf('@@endblock') != -1) {
    result.state = States.END_BLOCK;
  } else if (line.indexOf('@@block') != -1) {
    result.state = States.START_BLOCK;
  } else if (line.indexOf('@@end') != -1) {  // must be placed after @endblock
    result.state = States.END_LABEL;
  } else {
    result.message = line;
  }

  result.label = extractLabel(line);
  return result;
}

function buildMessage() {
  var messagePath = path.resolve(argv.message);
  var lines = fs.readFileSync(messagePath, 'utf8').split('\n');

  var validTransitions = {
    0: [1],
    1: [2, 3, 5],
    2: [1, 2],
    3: [3, 4],
    4: [2, 3, 4],
    5: [2, 3, 5]
  };

  var state = States.UNKNOWN;
  var label = null;
  var lang = null;
  for (var i = 0; i < lines.length; ++i) {
    var result = getState(state, lines[i]);
    if (validTransitions[state].indexOf(result.state) == -1) {
      throw new Error('Invalid message file');
    }
    switch (result.state) {
      case States.START_LABEL:
	label = result.label;
        message[label] = {};
	break;

      case States.LINE:
	message[label][result.label] = result.message;
	break;

      case States.END_LABEL:
	label = null;
	break;

      case States.START_BLOCK:
	if (result.label != null) {
	  // Beginning of the block
	  lang = result.label;
	} else {
	  message[label][lang] += result.message + '<br />';
	}
	break;

      case States.END_BLOCK:
	lang = null;
	break;
    }
    state = result.state;
  }
}

function main() {
  argsCheck();
  buildMessage();
}

main();

