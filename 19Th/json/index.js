fetch('https://swapi.co/api/people/')
  .then(response => response.json())
  .then(json => {
    console.log(json.results);
  });

