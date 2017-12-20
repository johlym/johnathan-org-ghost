var microBlogFeedElement = document.querySelector(".micro-feed");
  checkAndDisplayMicroBlog = function () {
    var e2 = new XMLHttpRequest;
    e2.open("get", "https://micro.johnathan.org/feed.json", !0), e2.responseType = "json", e2.onload = function () {
      if (200 === e2.status) {
        var a2 = e2.response;
        var i2 = a2.items.slice(0,3);
        microBlogFeedElement.innerHTML = "";
        i2.forEach(function(i){
          console.log(i);
          microBlogFeedElement.innerHTML += i.content_html + "<hr />";
        })
      }
    }, e2.send()
  };

null !== microBlogFeedElement && setTimeout(function() {
checkAndDisplayMicroBlog()
}, 5e3);