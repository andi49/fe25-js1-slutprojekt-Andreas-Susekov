import { getDataMovie, searchMovieOrPerson } from "./api.js";
import { searchInputFunc } from "./searchMovie.js";
import {searchInputFuncPeople} from "./searchPeople.js"

// import { popularMovie } from "./popularMovie.js";

function renderMovies(movies) {
  const base = "https://image.tmdb.org/t/p/w500";
  const carousel = document.getElementById("carousel");

  carousel.innerHTML = "";

  const moveListes = document.createElement("div");
  moveListes.classList.add("movie-list");

  movies.slice(0, 10).forEach((movie, i) => {
    const movieItem = document.createElement("div");
    movieItem.classList.add("movie-item");

    const img = document.createElement("img");
    img.src = base + movie.poster_path;
    img.classList.add(`slide-${i}`);
    movieItem.appendChild(img);

    const title = document.createElement("h1");
    title.textContent = movie.title;
    movieItem.appendChild(title);

    const releaseDate = document.createElement("p");
    releaseDate.textContent = movie.release_date;
    movieItem.appendChild(releaseDate);

    
  img.addEventListener("click", () => {
    const myPopup = new Popup({
      id: "my-popup",
      title: `<p style="font-Size:2rem">${movie.title}</p>`,
      borderRadius: "50px",
      closeColor: "red",
      content: `
    <img src="${img.src}" style="width: 20%;">
  <h2>Release: ${movie.release_date}</h2>
  <p style="font-Size:1rem;"> ${movie.overview} </p>
    `,
      style: {
        width: "50px",
        maxWidth: "50%",
      },
    });

    myPopup.show();
  });
moveListes.appendChild(movieItem);
    });

   carousel.appendChild(moveListes);
}

getDataMovie().then((data) => {
  renderMovies(data.results);
});

function carouselBtn() {
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  const slideAmount = 170;

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: slideAmount, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -slideAmount, behavior: "smooth" });
  });
}



const selected = document.querySelector("#selectTop");

selected.addEventListener("change", async (event) => {
  const category = event.target.value;

  const data = await getDataMovie(category);
  console.log(data);

  renderMovies(data.results);
});



const selectedTwo = document.querySelector("#selectTypeNow");

selectedTwo.addEventListener("change", async (event) => {
  const category = event.target.value;
    console.log(category)

  const dataTwo = await searchMovieOrPerson(category);
  console.log(dataTwo);

  if(category === "movie" ) {
    searchInputFunc()
  } else if (category === "person") {
    searchInputFuncPeople()
  }
});



searchInputFunc();
carouselBtn();


