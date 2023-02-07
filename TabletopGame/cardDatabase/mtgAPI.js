setTimeout(fetch('https://api.scryfall.com')
  .then(response => response.json())
  .then(data => {
    document.getElementById("result").innerHTML = data.result;
  }) 50);
