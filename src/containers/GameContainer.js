// @flow
import Game from "../components/Game";
import { connect } from "react-redux";
import { shuffleLetters } from "../actions/letter";
import { checkWord } from "../actions/word";
import type { State } from "../types";

function mapStateToProps(state: State) {
	const { words } = state;
	const { activeLetters, inertLetters, lettersById } = state.letters;
	const guess = activeLetters.map(l => lettersById.glyph).join("");
	return { activeLetters, inertLetters, lettersById, words, guess };
}

export default connect(mapStateToProps, { shuffleLetters, checkWord })(Game);
