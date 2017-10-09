// @flow
import actionTypes from "./action-types";

// ============
// STATE TYPES
// ============

export type LetterId = string;
export type LetterGlyph = string;

export type Letter = {
	id: LetterId,
	glyph: LetterGlyph
};

export type LettersById = {
	[LetterId]: Letter
};

type InertLetters = Array<LetterId>;
type ActiveLetters = Array<LetterId>;
export type LettersSet = {
	lettersById: LettersById,
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

// Letter actions
export type InitLettersAction = BaseAction<typeof actionTypes.INIT_LETTERS, Array<LetterGlyph>>;
export type PushLetterAction = BaseAction<typeof actionTypes.PUSH_LETTER, LetterId>;
export type PopLetterAction = BaseAction<typeof actionTypes.POP_LETTER, LetterId>;

type LetterAction =
	| InitLettersAction
	| PushLetterAction
	| PopLetterAction;

export type InitWordsAction = BaseAction<typeof actionTypes.INIT_WORDS, Array<string>>;
export type CheckWordAction = BaseAction<typeof actionTypes.CHECK_WORD, string>;

type WordAction =
	| InitWordsAction
	| CheckWordAction

type DefaultAction = BaseAction<null, null>;

export type Action = WordAction | LetterAction | DefaultAction;
