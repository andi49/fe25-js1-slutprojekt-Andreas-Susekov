import { searchMovieOrPerson } from "./api.js";

export function searchInputFuncPeople() {
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#search");
const selectElement = document.querySelector("#selectTypeNow");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searcht = searchInput.value.trim();
   const type = selectElement.value;
 
  console.log("User searched:", searcht);

  const result = await searchMovieOrPerson(searcht, type);

  console.log("Search for:", result);

  const firstImgSide = document.querySelector('#firstImg')
  // firstImgSide.remove()

  const getDisplaySearched = document.querySelector('#getUserSearched')
  const fakeDiv = document.querySelector('#showSearchedObj')
  getDisplaySearched.innerHTML = `You searched for ${searcht}` 

    result.results.forEach(element => {
       const base = "https://image.tmdb.org/t/p/w500";

      const wrapperDiv = document.createElement('div')
        const name = document.createElement('h2')
        const pictureOfActor = document.createElement('img')
       

          wrapperDiv.classList.add('item')
     
           wrapperDiv.appendChild(name)
           wrapperDiv.appendChild(pictureOfActor)
          document.getElementById('showSearchedObj').appendChild(wrapperDiv)

           name.innerText = element.name
           pictureOfActor.src =  element.src = base + element.profile_path;
           
    });
});

}
