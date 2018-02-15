// @flow
import Letter from "../components/Letter";
import { connect } from "react-redux";
import { pushLetter, popLetter } from "../actions/letter";
import type { LetterId } from "../types";

type OwnProps = { id: LetterId };
type Props = { active: boolean };

function mapStateToProps(state, ownProps: OwnProps): Props {
	const active = state.letters.activeLetters.includes(ownProps.id);
	return { active };
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		pushLetter: () => dispatch(pushLetter(ownProps.id)),
		popLetter: () => dispatch(popLetter(ownProps.id))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Letter);
