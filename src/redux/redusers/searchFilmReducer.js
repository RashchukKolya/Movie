export default function getFilmReducer(state = [], action) {
  switch (action.type) {
    case "SEARCH_FILM_ACTION":
      return action.payload;
    default:
      return state;
  }
}
