// @flow
import { connect } from "react-redux";
import WordListSmall from "../components/WordListSmall";
import { getWordsFoundByLength } from "../selectors";
import type { State, WordsFoundByLengthMap } from "../types";

type Props = { words: WordsFoundByLengthMap };

function mapStateToProps(state: State): Props {
	return { words: getWordsFoundByLength(state) };
}

export default connect(mapStateToProps)(WordListSmall);
