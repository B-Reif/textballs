// @flow
import { createSelector } from "reselect";
import type { State } from "./types";

const getActiveLetters = (state: State) => state.letters.activeLetters;
const getLettersById = (state: State) => state.letters.lettersById;
const getWords = (state: State) => state.words;

export const getGuess = createSelector(
	getActiveLetters,
	getLettersById,
	(activeLetters, lettersById) =>
		activeLetters.map(l => lettersById[l].glyph).join("")
);

export const getWordsFoundByLength = createSelector(getWords, words => {
	return Object.keys(words).reduce((acc, word) => {
		const { length } = word;
		const found = words[word];
		const lengthMap = acc[length] || {
			found: 0,
			total: 0
		};
		return {
			...acc,
			[length]: {
				found: lengthMap.found + (found | 0),
				total: lengthMap.total + 1
			}
		};
	}, {});
});
