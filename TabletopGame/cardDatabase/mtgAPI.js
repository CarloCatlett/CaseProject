document.getElementById("search-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var query = document.getElementById("query").value;


setTimeout(fetch('https://api.scryfall.com')
  .then(response => response.json())
  .then(data => {
      var results = data.results;
      var resultList = "";
      for (var i = 0; i < results.length; i++) {
        resultList += "<li>" + results[i].title + "</li>";
      }
     document.getElementById("results").innerHTML = "<ul>" + resultList + "</ul>";
    });
  }) 50);
