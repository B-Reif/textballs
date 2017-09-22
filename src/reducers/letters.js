// @flow
import type {
	Action,
	Letter,
	Letters,
	InertLetters,
	ActiveLetters
} from "../types";
import { PUSH_LETTER, POP_LETTER } from "../action-types";

const defaultAction: Action = { type: null, payload: null };

const initialState: Letters = {
	inertLetters: [],
	activeLetters: []
};

export default function letters(
	state: Letters = initialState,
	action: Action = defaultAction
): Letters {
	const { inertLetters, activeLetters } = state;
	switch (action.type) {
		// PUSH_LETTER moves the first instance of a given letter
		// from the Inert array to the end of the Active array.
		case PUSH_LETTER:
			(action.payload: Letter);
			const inertIndex = inertLetters.indexOf(action.payload);
			return {
				inertLetters: [
					...inertLetters.slice(0, inertIndex),
					...inertLetters.slice(inertIndex + 1)
				],
				activeLetters: activeLetters.concat([action.payload])
			};
		// POP_LETTER moves the last letter of the Active array
		// to the end of the Inert array.
		case POP_LETTER:
			const lastLetter = activeLetters[activeLetters.length - 1];
			return {
				inertLetters: inertLetters.concat([lastLetter]),
				activeLetters: activeLetters.slice(0, activeLetters.length - 1)
			};
		default:
			return state;
	}
}
