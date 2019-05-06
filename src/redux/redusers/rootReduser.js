import { combineReducers } from "redux";
import getFilmReducer from "./getFilmReducer";

const rootReducer = combineReducers({
  filmList: getFilmReducer
});

export default rootReducer;
