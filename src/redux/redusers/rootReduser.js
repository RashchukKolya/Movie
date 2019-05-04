import { combineReducers } from "redux";
import getFilmReducer from "./getFilmReducer";
import searchFilmReducer from './searchFilmReducer';

const rootReducer = combineReducers({
  filmList: getFilmReducer,
  searchFilmList: searchFilmReducer
});

export default rootReducer;
