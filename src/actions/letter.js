// @flow
import actionTypes from "../action-types";
import type {
	LetterId,
	InitLettersAction,
	PushLetterAction,
	PopLetterAction,
} from "../types";

export const initLetters = (glyphs: Array<string>): InitLettersAction => ({
	type: actionTypes.INIT_LETTERS,
	payload: glyphs
});

export const pushLetter = (letter: LetterId): PushLetterAction => ({
	type: actionTypes.PUSH_LETTER,
	payload: letter
});

export const popLetter = (letter: LetterId): PopLetterAction => ({
	type: actionTypes.POP_LETTER,
	payload: letter
});
