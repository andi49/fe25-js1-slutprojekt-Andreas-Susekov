import { getDataMovie, searchMovieOrPerson } from "./api.js";
import { searchInputMovie } from "./searchMovie.js";
import { searchInputFuncPeople } from "./searchPeople.js";
import { renderMovies } from "./renderMovie.js";

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

const searchForm = document.querySelector("#searchForm");
const selectElement = document.querySelector("#selectTypeNow");
const searchInput = document.querySelector("#search");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const category = selectElement.value;
  const type = searchInput.value.trim();

  const result = await searchMovieOrPerson(type, category);

  if (category === "movie") {
    searchInputMovie(result);
  } else if (category === "person") {
    searchInputFuncPeople(result);
  }
});
carouselBtn();
