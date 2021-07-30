class AppUI {
  static addFilmToUI(newMovie) {
    //     <tr>
    //     <td><img src="" class="img-fluid img-thumbnail"></td>
    //     <td></td>
    //     <td></td>
    //     <td><a href="#" id = "delete-film" class = "btn btn-danger">Remove Movie</a></td>
    //   </tr>

    const filmList = document.getElementById("films");

    filmList.innerHTML += `
      
        <tr>
            <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
            <td>${newMovie.title}</td>
            <td>${newMovie.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Remove Movie</a></td>
          </tr>
        `;
  }

  static clearInputs(firstElement, secondElement, thirdElement) {
    firstElement.value = "";
    secondElement.value = "";
    thirdElement.value = "";
  }
  static displayMessages(message, type) {
    const cardBody = document.querySelector(".card-body");

    //      <div class="alert alert-danger" role="alert">
    //          A simple danger alert—check it out!
    //      </div>

    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);

    setTimeout(function () {
      div.remove();
    }, 2000);
  }
  static loadAllMovies(movies) {
    movies.forEach((movie) => {
      this.addFilmToUI(movie);
    });
  }
  static deleteMovieFromUI(element) {
    element.parentElement.parentElement.remove();
  }
  static clearAllMoviesFromUI() {
    const movieList = document.getElementById("films");

    while (movieList.firstElementChild !== null) {
      movieList.firstElementChild.remove();
    }
  }
}
