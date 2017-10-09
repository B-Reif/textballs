// @flow
import Game from "../components/Game";
import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
	return { ...state.letters, words: state.words, ...ownProps }
}

export default connect(mapStateToProps)(Game);