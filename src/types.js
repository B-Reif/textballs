// @flow
import actionTypes from "./action-types";

type BaseAction<T, P> = { +type: T, +payload: P };

export type Action =
    BaseAction<typeof actionTypes.INIT_ANSWERS, Array<string>> |
    BaseAction<typeof actionTypes.CHECK_WORD, string>;

export type AnswerMap = {
	[word: string]: boolean
};
