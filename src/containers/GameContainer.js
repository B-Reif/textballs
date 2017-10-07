import Game from "../components/Game";
import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
	return {
		inertLetters: state.letters.inertLetters,
		activeLetters: state.letters.activeLetters,
	}
}

export default connect(mapStateToProps)(Game);