// Heter Access Token Auth i TMDB
export async function getDataTopRated() {
  const BAERER_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmVkOTkxMzRhYWYxZjBiYTBhZmU0ZWEwZmFjMDdhNiIsIm5iZiI6MTc2NTM2NDYyMS4yNDgsInN1YiI6IjY5Mzk1MzhkNDAyMmI4MTExZWFmMDY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ZJyuuRfGvaFqtxi6kGMaqCVxS4A09pr-M9-C3Ib1TI";

  const url = "https://api.themoviedb.org/3/movie/top_rated";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BAERER_KEY}`,
    },
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  }
  
   catch (err) {
    console.error("Data error", err);
    return null;
  }
}

export async function getDataPopular() {
  const BAERER_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmVkOTkxMzRhYWYxZjBiYTBhZmU0ZWEwZmFjMDdhNiIsIm5iZiI6MTc2NTM2NDYyMS4yNDgsInN1YiI6IjY5Mzk1MzhkNDAyMmI4MTExZWFmMDY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ZJyuuRfGvaFqtxi6kGMaqCVxS4A09pr-M9-C3Ib1TI";

  const url = "https://api.themoviedb.org/3/movie/popular";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BAERER_KEY}`,
    },
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  }
  
   catch (err) {
    console.error("Data error", err);
    return null;
  }
}

export async function searchMovie(searcht) {
  const BAERER_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmVkOTkxMzRhYWYxZjBiYTBhZmU0ZWEwZmFjMDdhNiIsIm5iZiI6MTc2NTM2NDYyMS4yNDgsInN1YiI6IjY5Mzk1MzhkNDAyMmI4MTExZWFmMDY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ZJyuuRfGvaFqtxi6kGMaqCVxS4A09pr-M9-C3Ib1TI";


  const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searcht}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${BAERER_KEY}`,
    },
  };

  try {
    const res = await fetch(searchUrl, options);

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  }
  
   catch (err) {
    console.error("Data error", err);
    return null;
  }
}
// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

//
