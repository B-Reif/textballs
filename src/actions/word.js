// @flow
import { CHECK_WORD, INIT_WORDS } from "../action-types";
import type { CheckWordAction, InitWordsAction } from "../types";

export const checkWord = (payload: string): CheckWordAction => ({
	type: CHECK_WORD,
	payload
});

export const initWords = (payload: Array<string>): InitWordsAction => ({
	type: INIT_WORDS,
	payload
});
