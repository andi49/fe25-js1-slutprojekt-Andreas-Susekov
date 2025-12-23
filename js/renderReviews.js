export function renderReviews(reviews, movieItem) {
  
//Hämtar första review från api
// Sedan kontrollerar om det finns
//  om de finns en reviw för filemerna som kommer det renderas på hemsidan
const review = reviews[0];

if (reviews[0]) {
  const div = document.createElement("div");
  div.classList.add("tv-item");

  const arthur = document.createElement("h1");
  arthur.innerHTML = review.author;

  const contentReview = document.createElement("p");
  contentReview.innerHTML = review.content;
  contentReview.classList.add("tv-item-text");

  div.appendChild(arthur);
  div.appendChild(contentReview);
  movieItem.appendChild(div);
}    
}
