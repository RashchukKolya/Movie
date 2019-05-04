import axios from "axios";
export function getListMovie(num) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&page=${num}`
  );
}

export function getSearchMovie(input, num) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&query=${input}&page=${num}&include_adult=false`
  );
}
