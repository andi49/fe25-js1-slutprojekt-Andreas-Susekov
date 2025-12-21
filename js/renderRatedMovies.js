import {getDataReviews} from './api.js'
import { renderReviews } from './renderReviews.js';
export  function renderTV(dataTwo) {
    const base = "https://image.tmdb.org/t/p/w500";

    const moveListes = document.createElement("div");
    moveListes.classList.add("tv-list");

    dataTwo.results.slice(0, 5).forEach((datas) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("tv-item");

      const img = document.createElement("img");
      img.src = base + datas.poster_path;
      movieItem.appendChild(img);

      const title = document.createElement("h1");
      localStorage.setItem("name", (title.textContent = datas.title));
      title.classList.add("tv-item");
      movieItem.appendChild(title);

      const releaseDate = document.createElement("p");
      localStorage.setItem( "releaseData",(releaseDate.textContent = datas.release_date));

      
      getDataReviews(datas.id).then((lol) => {
          renderReviews(lol.results, movieItem)

          console.log(lol)     
          
          const inputKey = "Comment" + " " + datas.id;

      const userInput = document.createElement("textarea");
 
      const userRew = document.createElement("p");
      const contentReview = document.createElement("p");
     contentReview.classList.add('textArea')
      const savedComment = localStorage.getItem(inputKey) || "";

      contentReview.innerHTML = savedComment;

      userInput.addEventListener("keyup", () => {
        localStorage.setItem(inputKey, userInput.value);
        contentReview.innerHTML = userInput.value;
      });

      movieItem.appendChild(userInput);
      movieItem.appendChild(contentReview);
      });

      movieItem.appendChild(releaseDate);
      moveListes.appendChild(movieItem);

      
    });

    // console.log(data.results);
    document.body.append(moveListes);
  }