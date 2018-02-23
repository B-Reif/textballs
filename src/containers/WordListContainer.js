// @flow
import { connect } from "react-redux";
import WordList from "../components/WordList";
import type { State, WordFoundMap } from "../types";

type Props = { words: WordFoundMap };

function mapStateToProps(state: State): Props {
	return { words: state.words };
}

export default connect(mapStateToProps)(WordList);
