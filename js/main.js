import { getData } from "./api.js";

getData().then(data => {
 console.log(data.results[0].original_title)
});