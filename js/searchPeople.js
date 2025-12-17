export function searchInputFuncPeople(result) {
  const searchInput = document.querySelector("#search");


  const searcht = searchInput.value.trim();


  console.log("User searched:", searcht);

  console.log("Search for:", result);

  const firstImgSide = document.querySelector("#firstImg");
  // firstImgSide.remove()

  const getDisplaySearched = document.querySelector("#getUserSearched");
  const contaier = document.querySelector("#showSearchedObj");
  contaier.innerHTML = "";
  getDisplaySearched.innerHTML = `You searched for ${searcht}`;

  result.results.forEach((resultData) => {
    const base = "https://image.tmdb.org/t/p/w500";

    const wrapperDiv = document.createElement("div");
    const name = document.createElement("h2");
    const pictureOfActor = document.createElement("img");
    const knownFor = document.createElement("p");
    const movieSeriesType = document.createElement("ul");
    const movieSeriesTypeList = document.createElement("li");

    wrapperDiv.classList.add("item");
    wrapperDiv.appendChild(name);
    wrapperDiv.appendChild(pictureOfActor);
    wrapperDiv.appendChild(knownFor);
    movieSeriesType.appendChild(movieSeriesTypeList);
    wrapperDiv.appendChild(movieSeriesTypeList);

    contaier.appendChild(wrapperDiv);

    name.innerHTML = resultData.original_name;
    pictureOfActor.src = base + resultData.profile_path;
    knownFor.innerHTML = `Known for in department ${resultData.known_for_department}`;
    movieSeriesTypeList.innerHTML = resultData.known_for[0].media_type;
  });
}
