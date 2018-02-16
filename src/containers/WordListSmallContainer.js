// @flow
import { connect } from "react-redux";
import WordListSmall from "../components/WordListSmall";
import { getWordsFoundByLength } from "../selectors";
import type { State } from "../types";

function mapStateToProps(state: State) {
	return {
		words: getWordsFoundByLength(state)
	};
}

export default connect(mapStateToProps)(WordListSmall);
