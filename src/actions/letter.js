// @flow
import actionTypes from "../action-types";
import type {
	LetterId,
	LetterGlyph,
	InitLettersAction,
	PushLetterAction,
	PopLetterAction,
	ShuffleLettersAction
} from "../types";
import { shuffle } from "lodash";

export const initLetters = (glyphs: Array<LetterGlyph>): InitLettersAction => ({
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

export const shuffleLetters = (letters: Array<LetterId>): ShuffleLettersAction => {
	const shuffledLetters = shuffle(letters);
	return {
		type: actionTypes.SHUFFLE_LETTERS,
		payload: shuffledLetters
	}
}
