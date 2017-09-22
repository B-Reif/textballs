import letters from "./letters";
import deepFreeze from "deep-freeze";
import actionTypes from "../action-types";

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

	it("handles PUSH_LETTER", () => {
		const action = { type: actionTypes.PUSH_LETTER, payload: "T" };
		const expectedState = {
			inertLetters: ["E", "S", "T"],
			activeLetters: ["I", "N", "G", "T"]
		};
		expect(letters(initialState, action)).toEqual(expectedState);
	});

	it("handles POP_LETTER", () => {
		const action = { type: actionTypes.POP_LETTER };
		const expectedState = {
			inertLetters: ["T", "E", "S", "T", "G"],
			activeLetters: ["I", "N"]
		}
		expect(letters(initialState, action)).toEqual(expectedState);
	});
});
