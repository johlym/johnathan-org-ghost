var paginationLines = [
  'The end may have come for this page, but the next one is sure to delight!',
  'What are your thoughts on the next page?',
  'If you thought those posts were great, try these!',
  'The next page is where the wild things are... and the next set of posts.'
  ];
var randomPaginationLines = Math.floor(Math.random()*paginationLines.length);

document.getElementById('hey-look').innerHTML = paginationLines[randomPaginationLines];