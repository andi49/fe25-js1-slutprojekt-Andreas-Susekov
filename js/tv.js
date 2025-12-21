import { getDataMovieTv } from "./api.js";
import {renderMovieTV} from './renderRatedMovies.js'
getDataMovieTv().then((data) => {
   renderMovieTV(data);
});
