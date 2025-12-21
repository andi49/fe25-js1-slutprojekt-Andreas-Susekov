import { getDataTv } from "./api.js";
import {renderTV} from './renderRatedMovies.js'
getDataTv().then((data) => {
   renderTV(data);
});
