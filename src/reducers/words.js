// @flow
import type { Action, Word, WordFoundMap } from "../types";
import actions from "../action-types";
const { INIT_WORDS, CHECK_WORD } = actions;

const defaultAction: Action = { type: null, payload: null };
const initialState: WordFoundMap = {};

export default function words(
	state: WordFoundMap = initialState,
	action: Action = defaultAction
): WordFoundMap {
	switch (action.type) {
		case INIT_WORDS:
			const words: Array<Word> = action.payload;
			return words.reduce((acc, word) => ({ ...acc, [word]: false }), {});
		case CHECK_WORD:
			const word: Word = action.payload;
			if (!state.hasOwnProperty(word)) return state;
			return { ...state, [word]: true };
		default:
			return state;
	}
}
