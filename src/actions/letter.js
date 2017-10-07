// @flow
import actionTypes from "../action-types";
import type {
	Letter,
	InitLettersAction,
	PushLetterAction,
	PopLetterAction,
} from "../types";

export const initLetters = (glyphs: Array<string>): InitLettersAction => ({
	type: actionTypes.INIT_LETTERS,
	payload: glyphs
});

export const pushLetter = (letter: Letter): PushLetterAction => ({
	type: actionTypes.PUSH_LETTER,
	payload: letter
});

export const popLetter = (letter: Letter): PopLetterAction => ({
	type: actionTypes.POP_LETTER,
	payload: letter
});
