// @flow
import Game from "../components/Game";
import { connect } from "react-redux";
import { checkWord } from "../actions/word";

function mapStateToProps(state, ownProps) {
	return { ...state.letters, words: state.words, ...ownProps };
}

export default connect(mapStateToProps, { checkWord })(Game);
