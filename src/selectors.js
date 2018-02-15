// @flow
import { createSelector } from "reselect";
import type { State } from "./types";

const getActiveLetters = (state: State) => state.letters.activeLetters;
const getInertLetters = (state: State) => state.letters.inertLetters;
const getLettersById = (state: State) => state.letters.lettersById;

export const getGuess = createSelector(
	getActiveLetters,
	getLettersById,
	(activeLetters, lettersById) =>
		activeLetters.map(l => lettersById.glyph).join("")
);
