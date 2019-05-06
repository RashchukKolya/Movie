export default function getFilmReducer(state = {}, action) {
  switch (action.type) {
    case "GET_FILM_ACTION":
      let info = action.payload.results;
      let pages = action.payload.total_pages;
      return { ...state, info: info, pages: pages };

    case "SORT_BY_YEAR_UP":
      let a = [...action.payload];
      const sortByYearUp = (a, b) =>
        Number.parseInt(a.release_date) - Number.parseInt(b.release_date);
      let sortedUp = a.sort(sortByYearUp);
      return { ...state, info: sortedUp };

    case "SORT_BY_YEAR_DOWN":
      console.log("work");
      let b = [...action.payload];
      const sortByYearDown = (a, b) =>
        Number.parseInt(b.release_date) - Number.parseInt(a.release_date);
      let sortedDown = b.sort(sortByYearDown);
      console.log("sort", sortedDown);
      return { ...state, info: sortedDown };

    case "SORT_BY_RATING_UP":
      let c = [...action.payload];
      const sortByRatingUp = (a, b) => a.vote_average - b.vote_average;
      let sorteRatdUp = c.sort(sortByRatingUp);
      return { ...state, info: sorteRatdUp };

    case "SORT_BY_RATING_DOWN":
      let d = [...action.payload];
      const sortByRatingDown = (a, b) => b.vote_average - a.vote_average;
      let sortedRatDown = d.sort(sortByRatingDown);
      return { ...state, info: sortedRatDown };

    default:
      return state;
  }
}
