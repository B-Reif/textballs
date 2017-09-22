// @flow
import type {
	Action,
	Letter,
	Letters,
	InertLetters,
	ActiveLetters
} from "../types";
import actions from "../action-types";
const { PUSH_LETTER, POP_LETTER } = actions;

// PUSH_LETTER moves a letter from the Inert array to the Active array.
// POP_LETTER does the opposite.

function inertLetters(state: InertLetters = [], action: Action): InertLetters {
	switch (action.type) {
		case PUSH_LETTER: {
			(action.payload: Letter);
			const index = state.indexOf(action.payload);
			return [...state.slice(0, index), ...state.slice(index + 1)];
		}
		case POP_LETTER:
			(action.payload: Letter);
			return state.concat([action.payload]);
		default:
			return state;
	}
}

function activeLetters(
	state: ActiveLetters = [],
	action: Action
): ActiveLetters {
	switch (action.type) {
		case PUSH_LETTER:
			(action.payload: Letter);
			return state.concat([action.payload]);
		case POP_LETTER: {
			// In this case we'd like the LAST instance of the letter, not the first.
			(action.payload: Letter);
			const reversed = state.slice().reverse();
			const index = reversed.indexOf(action.payload);
			return [
				...reversed.slice(0, index),
				...reversed.slice(index + 1)
			].reverse();
		}
		default:
			return state;
	}
}

const initialState = {
	inertLetters: [],
	activeLetters: []
};

export default function letters(
	state: Letters = initialState,
	action: Action
): Letters {
	switch (action.type) {
		case PUSH_LETTER:
		case POP_LETTER:
			return {
				inertLetters: inertLetters(state.inertLetters, action),
				activeLetters: activeLetters(state.activeLetters, action)
			};
		default:
			return state;
	}
}
