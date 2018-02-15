// @flow
import Keyboard from "../components/Keyboard";
import { connect } from "react-redux";
import { pushLetter, popLetter, shuffleLetters } from "../actions/letter";
import { checkWord } from "../actions/word";
import type { State } from "../types";

function mapStateToProps(state: State) {
	return state.letters;
}

export default connect(mapStateToProps, {
	pushLetter,
	popLetter,
	shuffleLetters,
	checkWord
})(Keyboard);
