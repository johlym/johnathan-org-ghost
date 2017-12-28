var m = document.querySelector(".micro-feed");
var u1 = 'johlym.micro.blog';
var u2 = 'micro.johnathan.org';
  checkAndDisplayMicroBlog = function () {
    var e2 = new XMLHttpRequest;
    e2.open("get", "https://micro.johnathan.org/feed.json", !0), e2.responseType = "json", e2.onload = function () {
      if (200 === e2.status) {
        var a2 = e2.response;
        var i2 = a2.items.slice(0,3);
        m.innerHTML = "";
        i2.forEach(function(i){
          console.log(i);
          o = ['<div class="micro-feed-object">',
          i.content_html,
          '<small>',
          moment(Date.parse(i.date_published)).fromNow(),
          '</small>',
          '</div>'];
          m.innerHTML += o.join('');
        })
      }
    }, e2.send()
  };

null !== m && setTimeout(function() {
checkAndDisplayMicroBlog()
}, 5e3);