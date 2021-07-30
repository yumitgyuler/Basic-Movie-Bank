const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const deleteAllMoviesButton = document.querySelector("#clear-films");

// Create UI Object
const ui = new UI();

//Create Storege Object
const storage = new Storage();

// Add All Events
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addMovie);
  cardBody.addEventListener("click", deleteMovie);
  deleteAllMoviesButton.addEventListener("click", deleteAllMovies);
  document.addEventListener("DOMContentLoaded", function () {
    let movies = storage.getMoviesFromStorage();
    ui.loadAllMovies(movies);
  });
}
function addMovie(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    //Error Message
    ui.displayMessages("All fields must be filled", "danger");
  } else {
    //Create new movie object
    const newMovie = new Movie(title, director, url);
    ui.displayMessages("Movie successfully added", "success");
    storage.addFilmToStorage(newMovie);
    ui.addFilmToUI(newMovie);
  }
  ui.clearInputs(titleElement, directorElement, urlElement);
  e.preventDefault();
}
function deleteMovie(e) {
  if (e.target.id === "delete-film") {
    ui.deleteMovieFromUI(e.target);
    storage.deleteMovieFromUI(e.target);

    ui.displayMessages("The movie was deleted successfully", "success");
  }
}
function deleteAllMovies() {
  if (confirm("Are you sure?")) {
    ui.clearAllMoviesFromUI();
    storage.clearAllMoviesFromStorage();
  }
}
