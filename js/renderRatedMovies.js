import { getDataReviews } from "./api.js";
import { renderReviews } from "./renderReviews.js";

/// Hämtar data från api och lägger in det i renderMovieTV och ger den i nytt namn mediaList
export function renderMovieTV(mediaList) {
  const base = "https://image.tmdb.org/t/p/w500";

  const moveListes = document.createElement("div");
  moveListes.classList.add("tv-list");

  /// här slicar vi dem fem första obejkten i mediaList
  /// sedan ger varje obejkt engen pararmeter med namnet item
  mediaList.results.slice(0, 5).forEach((item) => {
    const movieItem = document.createElement("div");
    movieItem.classList.add("tv-item");

    const img = document.createElement("img");
    img.src = base + item.poster_path;
    movieItem.appendChild(img);

    const title = document.createElement("h1");
    title.textContent = item.title
    title.classList.add("tv-item");
    movieItem.appendChild(title);

    const releaseDate = document.createElement("p");
    
    releaseDate.textContent = item.release_date

    /// Här gör vi en direkt kalelse till api för specifika filmer
    /// där vi tar id för filmerna som vi loopar i foreach.
    getDataReviews(item.id).then((rew) => {
      renderReviews(rew.results, movieItem);
      console.log(rew);


      // Local Storage
     // https://youtu.be/-ZRDZyUjEEI?si=iiMiPgiJqCZARl2a
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    // 


    // här skapar en vi en varibel som heter inputkey
    // den används för att se i Largring i konsolen på browser för varje input som skrivs
    /// Vi skapar userInput som ska spara ner vad som skrivs i textArea
    // Vi gör att spara det i savedComment 
    
      const inputKey = "Comment" + " " + item.id;

      const userInput = document.createElement("textarea");
      const contentReview = document.createElement("p");
      contentReview.classList.add("textArea");

      // Här vissar vi tidigare sparad kommentar om den finns! 
      const savedComment = localStorage.getItem(inputKey)
      contentReview.innerHTML = savedComment;

      /// Här sparar vi uppdaterar kommentar live :()
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

  document.body.append(moveListes);
}
