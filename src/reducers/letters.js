// @flow
import type {
	Action,
	Letter,
	LetterId,
	LettersById,
	LettersSet
} from "../types";
import { INIT_LETTERS, PUSH_LETTER, POP_LETTER, CHECK_WORD } from "../action-types";

const defaultAction: Action = { type: null, payload: null };

const initialState: LettersSet = {
	lettersById: {},
	inertLetters: [],
	activeLetters: []
};

export default function letters(
	state: LettersSet = initialState,
	action: Action = defaultAction
): LettersSet {
	const { lettersById, inertLetters, activeLetters } = state;
	switch (action.type) {
		case INIT_LETTERS: {
			const glyphs = action.payload;
			const letters: Array<Letter> = glyphs.map((glyph, index) => ({
				id: index.toString(),
				glyph
			}));
			const lettersById: LettersById = letters.reduce(
				(acc, letter) => ({
					...acc,
					[letter.id]: letter
				}),
				{}
			);
			const inertLetters: Array<LetterId> = letters.map(({ id }) => id);
			return {
				lettersById,
				inertLetters,
				activeLetters: []
			};
		}
		// PUSH_LETTER moves a given letter from Inert to Active.
		case PUSH_LETTER: {
			const letterId: LetterId = action.payload;
			return {
				lettersById,
				inertLetters: inertLetters.filter(id => id !== letterId),
				activeLetters: activeLetters.concat(letterId)
			};
		}
		// POP_LETTER moves a letter from Active to Inert.
		case POP_LETTER: {
			const letterId: LetterId = action.payload;
			if (letterId === undefined) return state;
			if (!activeLetters.includes(letterId)) return state;
			return {
				lettersById,
				inertLetters: [letterId].concat(inertLetters),
				activeLetters: activeLetters.filter(id => id !== letterId)
			};
		}
		case CHECK_WORD: {
			return {
				lettersById,
				inertLetters: activeLetters.concat(inertLetters),
				activeLetters: []
			}
		}
		default:
			return state;
	}
}
