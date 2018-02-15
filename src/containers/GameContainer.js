// @flow
import Game from "../components/Game";
import { connect } from "react-redux";
import { shuffleLetters } from "../actions/letter";
import { checkWord } from "../actions/word";
import type { State } from "../types";

function mapStateToProps(state: State) {
	const { words } = state;
	const { activeLetters, inertLetters, lettersById } = state.letters;
	return { activeLetters, inertLetters, lettersById, words };
}

export default connect(mapStateToProps, { shuffleLetters, checkWord })(Game);
