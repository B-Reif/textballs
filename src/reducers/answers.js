// @flow
import type { Action, AnswerMap } from "../types";
import actions from "../action-types";
const { INIT_ANSWERS, CHECK_WORD } = actions;

const initialState: AnswerMap = {};

export default function answers(
	state: AnswerMap = initialState,
	action: Action
): AnswerMap {
	const payload = action.payload;
	switch (action.type) {
		case INIT_ANSWERS: {
			(action.payload: Array<string>);
			return action.payload.reduce(
				(acc, word) => ({ ...acc, word: false }),
				{}
			);
			break;
		}
		case CHECK_WORD: {
			(action.payload: string);
			return { ...state, [payload]: true };
			break;
		}
		default:
			return state;
	}
	return state;
}
