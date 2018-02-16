// @flow
import Game from "../components/Game";
import { connect } from "react-redux";
import { shuffleLetters } from "../actions/letter";
import { getGuess } from "../selectors";
import { checkWord } from "../actions/word";
import type { State } from "../types";

function mapStateToProps(state: State) {
	const { activeLetters, inertLetters, lettersById } = state.letters;
	const guess = getGuess(state);
	return { activeLetters, inertLetters, lettersById, guess };
}

export default connect(mapStateToProps, { shuffleLetters, checkWord })(Game);
