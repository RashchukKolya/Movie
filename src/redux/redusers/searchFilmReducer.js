export default function getFilmReducer(state = [], action) {
  switch (action.type) {
    case "SEARCH_FILM_ACTION":
      let info = action.payload.results;
      let pages = action.payload.total_pages
      return {'info' : info, 'pages' : pages, ...state}
    default:
      return state;
  }
}
