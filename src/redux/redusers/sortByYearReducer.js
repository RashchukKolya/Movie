export default function sortByYearReducer(state, action) {
  switch (action.type) {
    case "SORT_BY_YEAR_UP":
      const sortByYearUp = (a, b) =>
        Number.parseInt(a.release_date) - Number.parseInt(b.release_date);
      let sortedUp = action.payload.sort(sortByYearUp);
      return { ...state, info: sortedUp };

    case "SORT_BY_YEAR_DOWN":
      const sortByYearDown = (a, b) =>
        Number.parseInt(b.release_date) - Number.parseInt(a.release_date);
      let sortedDown = action.payload.sort(sortByYearDown);
      return {...state, info: sortedDown };
    default:
      return state;
  }
}
