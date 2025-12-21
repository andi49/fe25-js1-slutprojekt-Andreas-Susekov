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

/// selectedCatergorys kollar efter en change från select 
/// När användaren byter Top_Rated till Popular spara vi det i category
/// Sedan skickar det till function getDataMovie() som inehåller våran API LÄNK
/// slutligen skicas data vidare till renderMovies() för rendera filmerna 
const selectedCatergorys = document.querySelector('#selectTopRated');
const centerTopH1 = document.querySelector('#centerTop')

selectedCatergorys.addEventListener('change', async (event) => {
  const category = event.target.value; 
  centerTopH1.innerHTML = category  
  const data = await getDataMovie(category); 
  renderMovies(data.results); 
});



//// Här hämtar vi 3 olika element från dom
/// Lägger formen i eventlistener med typen submit
// Om användaren tidigare skrivit något fel och fått ett meddelande tas det bort när formuläret skickas med korrekt "value"

/// catergory hämtar värde från selectMovieOrPerson
/// om användaren om har valt (movie eller person)
/// type hämtar värder från sökfält
/// sedan skickar vi det searchMovieOrPerson(type, category) till API link med dessa två parameter. 
///  Beorende vad använder har valt för catergory som den kommer rendera först! 

const searchForm = document.querySelector('#searchForm');
const selectMovieOrPerson = document.querySelector('#selectTypeNow');
const searchInput = document.querySelector('#search');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

const getDisplaySearched = document.querySelector('#getUserSearched')
 getDisplaySearched.classList.remove('errorMessage')
 getDisplaySearched.innerHTML = ""; 

  const category = selectMovieOrPerson.value;
  const type = searchInput.value.trim();

  const result = await searchMovieOrPerson(type, category);



  if (category === 'movie') {
    searchInputMovie(result);
  } else if (category === 'person') {
    searchInputFuncPeople(result);
  }


});
carouselBtn();
