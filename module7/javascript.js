var lastVisit = localStorage.getItem("sbloggerVisit");

if (lastVisit === null) {
  lastVisit = "Welcome!";
} else {
  lastVisit = new Date(parseInt(lastVisit)).toLocaleString();
}

document.getElementById("lastVisitDate").innerHTML = "Your last visit: " + lastVisit;

