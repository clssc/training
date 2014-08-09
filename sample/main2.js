$('#title').text('New Title');

$('#text').addClass('blue');

$('#text').after('<p class="red">Dynamically created text in red</p>');

function submitData() {
  var data = {
    'name': 'sample1',
    'phone': '310-310-3310'
  };

  var messageBody = JSON.stringify(data);
  console.log('sending', messageBody);
  $.ajax({
    type: 'POST',
    url: 'https://script.google.com/macros/s/AKfycbzuYsOLiP8HS5D-X2PmGYVnQ9-84kmPmstsQPmvKTS3HO3gfGx1/exec',
    data: messageBody,
    dataType: 'text'
  }).done(function(ok) {
    alert('server said ' + ok);
  }).fail(function(err) {
    alert('server rejected ' + err);
  });
}

$('#fire')
  .attr('value', 'Click Me!')
  .click(function() {
    submitData();
  });
