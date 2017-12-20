var uptimeElement = document.querySelector(".uptime-number");
  checkAndDisplayUptime = function() {
    var e1 = new XMLHttpRequest;
    e1.open("get", "https://updown.io/api/checks?api-key=ro-aNa87VGVKAjK8d9qa8Dk", !0), e1.responseType = "json", e1.onload = function() {
      if (200 === e1.status) {
        var a1 = e1.response;
        if (null !== a1[0].uptime) {
          uptimeElement.innerHTML = a1[0].uptime + "%"
        }
        else {
          uptimeElement.innerHTML = "unknown %";
        }
      }
    }, e1.send()
  };

null !== uptimeElement && setTimeout(function() {
checkAndDisplayUptime()
}, 5e3);