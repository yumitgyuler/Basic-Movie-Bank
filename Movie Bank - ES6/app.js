const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const deleteAllMoviesButton = document.querySelector("#clear-films");

// Add All Events
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addMovie);
  cardBody.addEventListener("click", deleteMovie);
  deleteAllMoviesButton.addEventListener("click", deleteAllMovies);
  document.addEventListener("DOMContentLoaded", function () {
    let movies = Storage.getMoviesFromStorage();
    AppUI.loadAllMovies(movies);
  });
}
function addMovie(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    //Error Message
    AppUI.displayMessages("All fields must be filled", "danger");
  } else {
    //Create new movie object
    const newMovie = new Movie(title, director, url);
    AppUI.displayMessages("Movie successfully added", "success");
    Storage.addFilmToStorage(newMovie);
    AppUI.addFilmToUI(newMovie);
  }
  AppUI.clearInputs(titleElement, directorElement, urlElement);
  e.preventDefault();
}
function deleteMovie(e) {
  if (e.target.id === "delete-film") {
    AppUI.deleteMovieFromUI(e.target);
    Storage.deleteMovieFromUI(e.target);

    AppUI.displayMessages("The movie was deleted successfully", "success");
  }
}
function deleteAllMovies() {
  if (confirm("Are you sure?")) {
    AppUI.clearAllMoviesFromUI();
    Storage.clearAllMoviesFromStorage();
  }
}
