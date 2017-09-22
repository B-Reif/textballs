import words from "./words";
import deepFreeze from "deep-freeze";
import actionTypes from "../action-types";

describe("words reducer", () => {
	const initialState = deepFreeze({
		TEST: true,
		TESTING: false
	});

	it("handles initial state", () => {
		expect(words()).toEqual({});
	});

	it("returns initial state on an unsupported action", () => {
		expect(words(initialState, { type: "BOGUS" })).toEqual(initialState);
	});

	it("handles INIT_WORDS", () => {
		const payload = ["FOOD", "FOO", "DOO"];
		const action = { type: actionTypes.INIT_WORDS, payload };
		const expectedState = { FOOD: false, FOO: false, DOO: false };

		expect(words(initialState, action)).toEqual(expectedState);
	});

	it("handles CHECK_WORD", () => {
		const payload = "TESTING";
		const action = { type: actionTypes.CHECK_WORD, payload };
		const expectedState = { TEST: true, TESTING: true };

		expect(words(initialState, action)).toEqual(expectedState);
	});

	it("returns initial state if CHECK_WORD payload is absent", () => {
		const payload = "BOGUS";
		const action = { type: actionTypes.CHECK_WORD, payload };
		expect(words(initialState, action)).toEqual(initialState);
	});
});
