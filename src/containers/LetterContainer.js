// @flow
import Letter from "../components/Letter";
import { connect } from "react-redux";
import { pushLetter, popLetter } from "../actions/letter";

function mapStateToProps(state, ownProps) {
	const active = state.letters.activeLetters.includes(ownProps.id)
	return { ...ownProps, active };
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		pushLetter: () => dispatch(pushLetter(ownProps.id)),
		popLetter: () => dispatch(popLetter(ownProps.id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Letter);
