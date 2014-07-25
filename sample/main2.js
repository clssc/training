$('#title').text('New Title');

$('#text').addClass('blue');

$('#text').after('<p class="red">Dynamically created text in red</p>');

$('#fire')
  .attr('value', 'Click Me!')
  .click(function() {
    alert('Thank you for clicking me!');
  });
