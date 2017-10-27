// @flow
import Game from "../components/Game";
import { connect } from "react-redux";
import { shuffleLetters } from "../actions/letter";
import { checkWord } from "../actions/word";
import type { State } from "../types";

function mapStateToProps(state: State) {
	return { ...state.letters, words: state.words };
}

export default connect(mapStateToProps, { shuffleLetters, checkWord })(Game);
