export function renderMovies(movies) {
  const base = "https://image.tmdb.org/t/p/w500";
  const carousel = document.getElementById("carousel");

  carousel.innerHTML = "";
  console.log(movies)
  const moveListes = document.createElement("div");
  moveListes.classList.add("movie-list");

  movies.slice(0, 10).forEach((movie) => {
    const movieItem = document.createElement("div");
    movieItem.classList.add("movie-item");

    const img = document.createElement("img");
    img.src = base + movie.poster_path;
    movieItem.appendChild(img);

    const title = document.createElement("h1");
    title.textContent = movie.title;
    movieItem.appendChild(title);

    const releaseDate = document.createElement("p");
    releaseDate.textContent = movie.release_date;
    movieItem.appendChild(releaseDate);

    // https://popup.js.org
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