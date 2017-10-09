// @flow
import Keyboard from "../components/Keyboard";
import { connect } from "react-redux";
import { pushLetter, popLetter, shuffleLetters } from "../actions/letter";
import { checkWord } from "../actions/word";

function mapStateToProps(state, ownProps) {
	return { ...state.letters, ...ownProps };
}

export default connect(mapStateToProps, {
	pushLetter,
	popLetter,
	shuffleLetters,
	checkWord
})(Keyboard);
