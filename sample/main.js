var title = document.getElementById('title');
title.innerHTML = "New Title";

var text = document.getElementById('text');
text.setAttribute('class', 'blue');

var p = document.createElement('p');
p.innerHTML = 'Dynamically created text in red';
p.setAttribute('class', 'red');
document.body.appendChild(p);
