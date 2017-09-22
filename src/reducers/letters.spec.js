import letters from "./letters";
import deepFreeze from "deep-freeze";
import { INIT_LETTERS, PUSH_LETTER, POP_LETTER } from "../action-types";

describe("letters reducer", () => {
	const initialState = deepFreeze({
		inertLetters: ["T", "E", "S", "T"],
		activeLetters: ["I", "N", "G"]
	});

	it("handles initial state", () => {
		expect(letters()).toEqual({
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
			inertLetters: payload,
			activeLetters: []
		}
		expect(letters(initialState, action)).toEqual(expectedState);
	})

	it("handles PUSH_LETTER", () => {
		const action = { type: PUSH_LETTER, payload: "T" };
		const expectedState = {
			inertLetters: ["E", "S", "T"],
			activeLetters: ["I", "N", "G", "T"]
		};
		expect(letters(initialState, action)).toEqual(expectedState);
	});

	it("handles POP_LETTER", () => {
		const action = { type: POP_LETTER };
		const expectedState = {
			inertLetters: ["T", "E", "S", "T", "G"],
			activeLetters: ["I", "N"]
		}
		expect(letters(initialState, action)).toEqual(expectedState);
	});
});
