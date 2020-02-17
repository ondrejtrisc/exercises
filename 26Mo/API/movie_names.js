const load_movies = () => {

  fetch('http://www.cbp-exercises.test/26Mo/API/')
    .then(response => response.json())
    .then(json => {
      const list = document.getElementById('list');
      for (movie of json) {
        const item = document.createElement('li');
        item.textContent = movie;
        list.appendChild(item);
      }
    });

};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('button').addEventListener('click', load_movies);
});