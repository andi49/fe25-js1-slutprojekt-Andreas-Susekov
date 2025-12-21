export function renderReviews(reviews, container) {
  
const review = reviews[0];

if (review) {
  const div = document.createElement("div");
  div.classList.add("tv-item");

  const arthur = document.createElement("h1");
  arthur.textContent = review.author;

  const contentReview = document.createElement("p");
  contentReview.textContent = review.content;
  contentReview.classList.add("tv-item-text");

  div.appendChild(arthur);
  div.appendChild(contentReview);
  container.appendChild(div);


  
}    
}
