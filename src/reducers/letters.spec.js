import letters from "./letters";
import deepFreeze from "deep-freeze";
import { INIT_LETTERS, PUSH_LETTER, POP_LETTER, CHECK_WORD } from "../action-types";

describe("letters reducer", () => {
	const initialState = deepFreeze({
		lettersById: {
			0: {
				id: "0",
				glyph: "T"
			},
			1: {
				id: "1",
				glyph: "E"
			},
			2: {
				id: "2",
				glyph: "S"
			},
			3: {
				id: "3",
				glyph: "T"
			},
			4: {
				id: "4",
				glyph: "I"
			},
			5: {
				id: "5",
				glyph: "N"
			},
			6: {
				id: "6",
				glyph: "G"
			}
		},
		inertLetters: [0, 1, 2, 3],
		activeLetters: [4, 5, 6]
	});

	it("handles initial state", () => {
		expect(letters()).toEqual({
			lettersById: {},
			inertLetters: [],
			activeLetters: []
		});
	});

	it("returns initial state on an unsupported action", () => {
		expect(letters(initialState, { type: "BOGUS" })).toEqual(initialState);
	});

	it("handles INIT_LETTERS", () => {
		const payload = ["J", "Q", "U", "E", "R", "Y"];
		const action = { type: INIT_LETTERS, payload };
		const expectedState = {
			lettersById: {
				0: {
					id: "0",
					glyph: "J"
				},
				1: {
					id: "1",
					glyph: "Q"
				},
				2: {
					id: "2",
					glyph: "U"
				},
				3: {
					id: "3",
					glyph: "E"
				},
				4: {
					id: "4",
					glyph: "R"
				},
				5: {
					id: "5",
					glyph: "Y"
				}
			},
			inertLetters: ["0", "1", "2", "3", "4", "5"],
			activeLetters: []
		};
		expect(letters(initialState, action)).toEqual(expectedState);
	});

	it("handles PUSH_LETTER", () => {
		const action = { type: PUSH_LETTER, payload: 0 };
		const expectedState = {
			...initialState,
			inertLetters: [1, 2, 3],
			activeLetters: [4, 5, 6, 0]
		};
		expect(letters(initialState, action)).toEqual(expectedState);
	});

	it("handles POP_LETTER", () => {
		const action = { type: POP_LETTER, payload: 6 };
		const expectedState = {
			...initialState,
			inertLetters: [6, 0, 1, 2, 3],
			activeLetters: [4, 5]
		};
		expect(letters(initialState, action)).toEqual(expectedState);
	});

	// it("handles CHECK_WORD", () => {
	// 	const action = { type: CHECK_WORD };
	// })

});
