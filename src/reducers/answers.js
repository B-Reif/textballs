// @flow
import type { Action } from "../types";
type AnswerMap = {[word: string]: boolean};

const initialState: AnswerMap = {}

export default function answers(state: AnswerMap = initialState, action: Action = {}) {
	const { type, payload } = action;
	switch (type) {
		default:
			return state;
	}
}