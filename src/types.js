// @flow
import actionTypes from "./action-types";

// ============
// STATE TYPES
// ============

export type Letter = string;

type InertLetters = Array<Letter>;
type ActiveLetters = Array<Letter>;
export type LettersSet = {
	inertLetters: InertLetters,
	activeLetters: ActiveLetters
};

export type Word = string;

export type WordFoundMap = {
	[word: Word]: boolean
};

// ============
// ACTION TYPES
// ============

type BaseAction<T, P> = { type: T, payload: P };

type LetterAction =
	| BaseAction<typeof actionTypes.INIT_LETTERS, Array<Letter>>
	| BaseAction<typeof actionTypes.PUSH_LETTER, Letter>
	| BaseAction<typeof actionTypes.POP_LETTER, Letter>;

type AnswerAction =
	| BaseAction<typeof actionTypes.INIT_WORDS, Array<string>>
	| BaseAction<typeof actionTypes.CHECK_WORD, string>;

type DefaultAction = BaseAction<null, null>;

export type Action = AnswerAction | LetterAction | DefaultAction;
