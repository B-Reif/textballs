import Keyboard from "../components/Keyboard";
import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
	return {
		inertLetters: state.letters.inertLetters
	}
}

export default connect(mapStateToProps)(Keyboard);
