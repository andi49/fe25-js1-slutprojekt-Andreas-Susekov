export function searchInputMovie(result) {
  const searchInput = document.querySelector("#search");
  const searcht = searchInput.value.trim();
 
  console.log("User searched:", searcht);
  console.log("Search results:", result);

  // const firstImgSide = document.querySelector("#firstImg");
  // firstImgSide.remove();

  const getDisplaySearched = document.querySelector("#getUserSearched");
  const contaier = document.querySelector("#showSearchedObj");
  contaier.innerHTML = "";
  getDisplaySearched.innerHTML = `You searched for ${searcht}`;

const base = "https://image.tmdb.org/t/p/w500";

  result.results.forEach((element) => {
    const wrapperDiv = document.createElement("div");
    const titleMovie = document.createElement("h2");
    const imgMovie = document.createElement("img");
    const releaseDateMovie = document.createElement("p");
    const shortDesc = document.createElement("p");

    wrapperDiv.classList.add("item");
    wrapperDiv.appendChild(titleMovie);
    wrapperDiv.appendChild(imgMovie);
    wrapperDiv.appendChild(releaseDateMovie);
    wrapperDiv.appendChild(shortDesc);

      contaier.appendChild(wrapperDiv);

    titleMovie.innerHTML = element.title;
    imgMovie.src = base + element.poster_path;
    releaseDateMovie.innerHTML = element.release_date;
    shortDesc.innerHTML = element.overview;
  });
}
