// @flow
import type { Action, Letter, LettersSet } from "../types";
import { INIT_LETTERS, PUSH_LETTER, POP_LETTER } from "../action-types";

const defaultAction: Action = { type: null, payload: null };

const initialState: LettersSet = {
	inertLetters: [],
	activeLetters: []
};

export default function letters(
	state: LettersSet = initialState,
	action: Action = defaultAction
): LettersSet {
	const { inertLetters, activeLetters } = state;
	switch (action.type) {
		case INIT_LETTERS: {
			const letters: Array<Letter> = action.payload;
			return {
				inertLetters: letters.slice(),
				activeLetters: []
			}
		}
		// PUSH_LETTER moves the first instance of a given letter
		// from the Inert array to the end of the Active array.
		case PUSH_LETTER:
			const letter: Letter = action.payload;
			const inertIndex = inertLetters.indexOf(letter);
			return {
				inertLetters: [
					...inertLetters.slice(0, inertIndex),
					...inertLetters.slice(inertIndex + 1)
				],
				activeLetters: activeLetters.concat([letter])
			};
		// POP_LETTER moves the last letter of the Active array
		// to the end of the Inert array.
		case POP_LETTER:
			const lastLetter = activeLetters[activeLetters.length - 1];
			if (lastLetter === undefined) return state;
			return {
				inertLetters: inertLetters.concat([lastLetter]),
				activeLetters: activeLetters.slice(0, activeLetters.length - 1)
			};
		default:
			return state;
	}
}
