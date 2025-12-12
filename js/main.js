import { getData } from "./api.js";

getData().then((data) => {
  const base = "https://image.tmdb.org/t/p/w500";
  console.log(data);

  const movieRow = document.querySelector("#movieCarusel");

  const moveListes = document.createElement("div");
  moveListes.classList.add("movie-list");

  for (let i = 0; i < 10; i++) {
    const movieItem = document.createElement("div");
    movieItem.classList.add("movie-item");

    const img = document.createElement("img");
    img.src = base + data.results[i].poster_path;
    img.classList.add(`slide-${i}`);
    movieItem.appendChild(img);

    const fakeH1 = document.createElement("h1");
    fakeH1.textContent = data.results[i].title;
    movieItem.appendChild(fakeH1);

    const fakeP = document.createElement("p");
    fakeP.textContent = data.results[i].release_date;
    movieItem.appendChild(fakeP);

    moveListes.appendChild(movieItem);
    carousel.appendChild(movieItem);
    movieRow.appendChild(moveListes);

    img.addEventListener("click", () => {
      const myPopup = new Popup({
        id: "my-popup",
        title: `<p style="font-Size:2rem">${data.results[i].title}</p>`,
        borderRadius: "50px",
        closeColor: "red",
        content: `
    <img src="${img.src}" style="width: 20%;">
  <h2>Release: ${data.results[i].release_date}</h2>
  <p style="font-Size:1rem;"> ${data.results[i].overview} </p>
    `,
        style: {
          width: "50px",
          maxWidth: "50%",
        },
      });

      myPopup.show();
    });
  }
});

function carouselBtn() {
  const carousel = document.getElementById("carousel");
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

carouselBtn();

