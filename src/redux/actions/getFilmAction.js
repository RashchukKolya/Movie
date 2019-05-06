import { getListMovie, getSearchMovie } from "../api/api";

export const getFilmAction = data => ({
  type: "GET_FILM_ACTION",
  payload: data
});

export const fetchData = num => dispatch => {
  return getListMovie(num)
    .then(res => dispatch(getFilmAction(res.data)))
    .catch(error => console.error(error));
};

export const searchFilmAction = data => ({
  type: "SEARCH_FILM_ACTION",
  payload: data
});

export const searchData = (input, num) => dispatch => {
  return getSearchMovie(input, num)
    .then(res => dispatch(searchFilmAction(res.data)))
    .catch(error => console.error(error));
};

export const sortByYearUp = data => ({
  type: "SORT_BY_YEAR_UP",
  payload: data
});

export const sortByYearDown = data => ({
  type: "SORT_BY_YEAR_DOWN",
  payload: data
});

export const sortByRatingUp = data => ({
  type: "SORT_BY_RATING_UP",
  payload: data
});

export const sortByRatingDown = data => ({
  type: "SORT_BY_RATING_DOWN",
  payload: data
});
