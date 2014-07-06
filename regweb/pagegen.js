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
 * This code requires package yargs.
 */
var path = require('path');
var fs = require('fs');
var argv = require('yargs').argv;
var messageBuilder = require('./message.js');


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


function main() {
  argsCheck();

  var messagePath = path.resolve(argv.message);
  var lines = fs.readFileSync(messagePath, 'utf8').split('\n');
  var message = messageBuilder.buildMessage(lines);

  console.log(JSON.stringify(message));
}

main();

