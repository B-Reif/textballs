import { combineReducers } from "redux";
import letters from "./letters";
import words from "./words";

export default combineReducers({
	letters,
	words
});
