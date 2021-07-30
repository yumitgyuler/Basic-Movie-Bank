class Storage {
  static addFilmToStorage(newMovie) {
    let movies = this.getMoviesFromStorage();

    movies.push(newMovie);

    localStorage.setItem("movies", JSON.stringify(movies));
  }
  static getMoviesFromStorage() {
    let movies;

    if (localStorage.getItem("movies") === null) {
      movies = [];
    } else {
      movies = JSON.parse(localStorage.getItem("movies"));
    }

    return movies;
  }
  static deleteMovieFromUI(element) {
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
  }
  static clearAllMoviesFromStorage() {
    localStorage.removeItem("movies");
  }
}
