import { searchMovie } from "./api.js";

export function searchInputFunc() {
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#search");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searcht = searchInput.value.trim();
  console.log("User searched:", searcht);

  const result = await searchMovie(searcht);

  console.log("Search results:", result);

  const firstImgSide = document.querySelector('#firstImg')
  firstImgSide.remove()

  const getDisplaySearched = document.querySelector('#getUserSearched')
  const fakeDiv = document.querySelector('#showSearchedObj')
  // getDisplaySearched.innerHTML = searcht 

    result.results.forEach(element => {
       const base = "https://image.tmdb.org/t/p/w500";

      const wrapperDiv = document.createElement('div')
        const fakeH2 = document.createElement('h2')
        const fakeIMgTag = document.createElement('img')
        const fakePtag = document.createElement('p')
        const shortDesc = document.createElement('p')

          wrapperDiv.classList.add('item')
     
           wrapperDiv.appendChild(fakeH2)
           wrapperDiv.appendChild(fakeIMgTag)
            wrapperDiv.appendChild(fakePtag)
            wrapperDiv.appendChild(shortDesc)
          document.getElementById('showSearchedObj').appendChild(wrapperDiv)

           fakeH2.innerText = element.title
           fakeIMgTag.src =  element.src = base + element.poster_path;
           fakePtag.innerText = element.release_date
           shortDesc.innerText = element.overview
    });
});

}
