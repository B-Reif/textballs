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
			(action.payload: Array<Word>);
			return action.payload.reduce(
				(acc, word) => ({ ...acc, [word]: false }),
				{}
			);
		case CHECK_WORD:
			(action.payload: Word);
			if (!state.hasOwnProperty(action.payload)) return state;
			return { ...state, [action.payload]: true };
		default:
			return state;
	}
}
