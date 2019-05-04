import { getListMovie, getSearchMovie } from "../api/api";

export const getFilmAction = data => ({
  type: "GET_FILM_ACTION",
  payload: data
});

export const fetchData = (num) => dispatch => {
  return (
    getListMovie(num)
      .then(res => dispatch(getFilmAction(res.data)))
      // .then(res => console.log(res.data))
      .catch(error => console.error(error))
  );
};

export const searchFilmAction = data => ({
  type: "SEARCH_FILM_ACTION",
  payload:data
});

export const searchData = (input, num) => dispatch =>{
  return (
    getSearchMovie(input, num)
      .then(res => dispatch(searchFilmAction(res.data)))
      // .then(res => console.log(res.data))
      .catch(error => console.error(error))
  )
}