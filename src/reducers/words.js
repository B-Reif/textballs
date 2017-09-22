// @flow
import type { Action, Word, WordFoundMap } from "../types";
import actions from "../action-types";
const { INIT_WORDS, CHECK_WORD } = actions;

const initialState: WordFoundMap = {};

export default function words(
	state: WordFoundMap = initialState,
	action: Action
): WordFoundMap {
	switch (action.type) {
		case INIT_WORDS:
			(action.payload: Array<Word>);
			return action.payload.reduce(
				(acc, word) => ({ ...acc, word: false }),
				{}
			);
		case CHECK_WORD:
			(action.payload: Word);
			return { ...state, [action.payload]: true };
		default:
			return state;
	}
}
