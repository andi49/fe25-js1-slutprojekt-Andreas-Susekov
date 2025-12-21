export function searchInputFuncPeople(result) {
  const searchInput = document.querySelector("#search");
  const searcht = searchInput.value.trim();
 
  console.log("User searched:", searcht);
  console.log("Search results:", result);

    if (!navigator.onLine) {
  const getDisplaySearched = document.querySelector('#getUserSearched');
    getDisplaySearched.classList.add('errorMessage');
    getDisplaySearched.innerHTML = `Check your wifi (probably down)`;
    console.error("Check your wifi (probably down)");
    return;
  }

    if (!result) {
    const getDisplaySearched = document.querySelector('#getUserSearched');
    getDisplaySearched.classList.add('errorMessage');
    getDisplaySearched.innerHTML = `Server is (probably down)`;
    console.error("Server is (probably down)");
    return;
  }

/// här kollar vi om använder skrivit något fel och get dem en "error message"
    if (!result.results[0]) {
      const getDisplaySearched = document.querySelector('#getUserSearched');
      getDisplaySearched.classList.add('errorMessage');
      getDisplaySearched.innerHTML = `You search is not found`;
      return;
    }

  // const firstImgSide = document.querySelector("#firstImg");
  // firstImgSide.remove();

  const getDisplaySearched = document.querySelector("#getUserSearched");
  const contaier = document.querySelector("#showSearchedObj");
  contaier.innerHTML = "";
  getDisplaySearched.innerHTML = `You searched for ${searcht}`;

const base = "https://image.tmdb.org/t/p/w500";
  
 /// Loopar igenom api resultat och skapar html-element
 /// element fylls på med "Element/data" från api som sedan renderas på hemsida 
  result.results.forEach((resultData) => {
    const wrapperDiv = document.createElement("div");
    const name = document.createElement("h2");
    const pictureOfActor = document.createElement("img");
    const knownFor = document.createElement("p");
   

    wrapperDiv.classList.add("item");
    wrapperDiv.appendChild(name);
    wrapperDiv.appendChild(pictureOfActor);
    wrapperDiv.appendChild(knownFor);

    contaier.appendChild(wrapperDiv);

    name.innerHTML = resultData.original_name;
    pictureOfActor.src = base + resultData.profile_path;
    knownFor.innerHTML = `Known for in department ${resultData.known_for_department}`;

    resultData.known_for.forEach((item) => {
      const movieSeriesType = document.createElement("ul");
      movieSeriesType.classList.add('listStyle')
      const movieSeriesTypeList = document.createElement("li");
     
      movieSeriesType.appendChild(movieSeriesTypeList);
       wrapperDiv.appendChild(movieSeriesType)

      movieSeriesTypeList.textContent = `${item.media_type}: ${item.title}`;
    });
  });
}
