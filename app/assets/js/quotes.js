var paginationLines = [
  'The end may have come for this page, but the next one is sure to delight!',
  'What are your thoughts on the next page?',
  'If you thought those posts were great, try these!',
  'The next page is where the wild things are... and the next set of posts.'
  ];
var sidebarQuotes = [
  "It's everything your mother warned you about.",
  "Brought to you by a sneeze and a fart.",
  "Powered by the souls of undocumented codes.",
  "Make the independent web great again.",
  "No Ragrets.",
  "These violent delights have violent ends and in their triumph die."
  ];
var randomPaginationLines = Math.floor(Math.random()*paginationLines.length);
var randomPaginationLines = Math.floor(Math.random()*sidebarQuotes.length);

document.getElementById('hey-look').innerHTML = paginationLines[randomPaginationLines];
document.getElementById('sidebar-quote').innerHTML = sidebarQuotes[randomPaginationLines];