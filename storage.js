function Storage() {}
Storage.prototype.addFilmToStorage = function (newMovie) {
  let movies = this.getMoviesFromStorage();

  movies.push(newMovie);

  localStorage.setItem("movies", JSON.stringify(movies));
};
Storage.prototype.getMoviesFromStorage = function () {
  let movies;

  if (localStorage.getItem("movies") === null) {
    movies = [];
  } else {
    movies = JSON.parse(localStorage.getItem("movies"));
  }

  return movies;
};
Storage.prototype.deleteMovieFromUI = function (element) {
  let movieName =
    element.parentElement.previousElementSibling.previousElementSibling
      .textContent;
  let movies = this.getMoviesFromStorage("movies");

  movies.forEach((movie, index) => {
    if (movie.title === movieName) {
      movies.splice(index, 1);
    }
  });

  localStorage.setItem("movies", JSON.stringify(movies));
};
Storage.prototype.clearAllMoviesFromStorage = function () {
  localStorage.removeItem("movies");
};
