// @flow
import { connect } from "react-redux";
import WordList from "../components/WordList";
import type { State } from "../types";

function mapStateToProps(state: State) {
	return { words: state.words };
}

export default connect(mapStateToProps)(WordList);
