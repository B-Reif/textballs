import Keyboard from "../components/Keyboard";
import { connect } from "react-redux";
import { pushLetter } from "../actions/letter";

function mapStateToProps(state, ownProps) {
	return {
		inertLetters: state.letters.inertLetters
	}
}

export default connect(mapStateToProps, { pushLetter })(Keyboard);
