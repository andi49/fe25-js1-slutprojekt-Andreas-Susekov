import { getDataMovie, searchMovieOrPerson } from "./api.js";
import { searchInputMovie } from "./searchMovie.js";
import { searchInputFuncPeople } from "./searchPeople.js";
import { renderMovies } from "./renderMovie.js";

getDataMovie().then((data) => {
  renderMovies(data.results);
});

/// source
/// https://stackoverflow.com/questions/62436065/carousel-slider-wont-slide-as-expected
/// https://stackoverflow.com/questions/57518428/css-scroll-snap-points-with-navigation-next-previous-buttons

/// carousel knappar som hämtas från deras id sedan lägar man till en eventListener 
function carouselBtn() {
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  const slideAmount = 170;

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: slideAmount, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -slideAmount, behavior: "smooth" });
  });
}


const selected = document.querySelector('#selectTopRated');
const centerTopH1 = document.querySelector('#centerTop')
/// Lägger till en eventListener som ska ändra värde på h1 där användare väljer något caterogy
/// 
selected.addEventListener('change', async (event) => {
  const category = event.target.value; 
  centerTopH1.innerHTML = category  
  const data = await getDataMovie(category); 
  renderMovies(data.results); // sedan skickar vi värdet till fucktionen renderMovies(med värdet)
});



const searchForm = document.querySelector('#searchForm');
const selectElement = document.querySelector('#selectTypeNow');
const searchInput = document.querySelector('#search');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

 const getDisplaySearched = document.querySelector('#getUserSearched')
 getDisplaySearched.classList.remove('errorMessage')
 getDisplaySearched.innerHTML = ""; 

  const category = selectElement.value;
  const type = searchInput.value.trim();

  const result = await searchMovieOrPerson(type, category);

  if (!result.results[0]) {
    const getDisplaySearched = document.querySelector('#getUserSearched');
    getDisplaySearched.classList.add('errorMessage');
    getDisplaySearched.innerHTML = `You search is not found`;
    return;
  }

  if (category === 'movie') {
    searchInputMovie(result);
  } else if (category === 'person') {
    searchInputFuncPeople(result);
  }
});
carouselBtn();
