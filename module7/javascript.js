var lastVisit = localStorage.getItem("lastVisitDate");

if (lastVisit === null) {
  lastVisit = 0;
}

var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  var href = links[i].getAttribute("href");
  var date = localStorage.getItem(href);

  if (date !== null && date > lastVisit) {
    links[i].innerHTML += " (New)";
  }

  localStorage.setItem(href, Date.now());
}

localStorage.setItem("lastVisitDate", Date.now());
