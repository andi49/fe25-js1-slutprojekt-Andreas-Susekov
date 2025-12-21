import {getDataReviews} from './api.js'
import { renderReviews } from './renderReviews.js';

export  function renderMovieTV(mediaList) {
    const base = "https://image.tmdb.org/t/p/w500";

    const moveListes = document.createElement("div");
    moveListes.classList.add("tv-list");

    mediaList.results.slice(0, 5).forEach((item) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("tv-item");

      const img = document.createElement("img");
      img.src = base + item.poster_path;
      movieItem.appendChild(img);

      const title = document.createElement("h1");
      localStorage.setItem("name", (title.textContent = item.title));
      title.classList.add("tv-item");
      movieItem.appendChild(title);

      const releaseDate = document.createElement("p");
      localStorage.setItem( "releaseData",(releaseDate.textContent = item.release_date));

      
      getDataReviews(item.id).then((rew) => {
          renderReviews(rew.results, movieItem)

          console.log(rew)     
          
          const inputKey = "Comment" + " " + item.id;

      const userInput = document.createElement("textarea");
 
   
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