import { searchMovie } from "./api.js";

export function searchInputFunc() {
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#search");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const searcht = searchInput.value.trim();
  console.log("User searched:", searcht);

  const result = await searchMovie(searcht);

  console.log("Search results:", result);
});

}