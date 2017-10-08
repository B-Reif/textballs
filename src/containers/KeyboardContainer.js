// @flow
import Keyboard from "../components/Keyboard";
import { connect } from "react-redux";
import { pushLetter, popLetter } from "../actions/letter";

function mapStateToProps(state, ownProps) {
	return { ...state.letters, ...ownProps };
}

export default connect(mapStateToProps, { pushLetter, popLetter })(Keyboard);
