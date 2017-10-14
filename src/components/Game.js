// @flow
import React from "react";
import WordList from "./WordList";
import LetterLists from "./LetterLists";
import type {
	LetterId,
	LettersById,
	LetterGlyph,
	WordFoundMap
} from "../types";

type GameProps = {
	words: WordFoundMap,
	lettersById: LettersById,
	activeLetters: Array<LetterId>,
	inertLetters: Array<LetterId>,
	checkWord: Function,
	shuffleLetters: Function
};

const ShuffleButton = ({ inertLetters, shuffleLetters }) => (
	<button onClick={() => shuffleLetters(inertLetters)}>Shuffle Balls</button>
);

const SubmitButton = ({ lettersById, activeLetters, checkWord }) => {
	const clickHandler = () => {
		const activeGlyphs: Array<LetterGlyph> = activeLetters.map(
			l => lettersById[l].glyph
		);
		checkWord(activeGlyphs.join(""));
	};
	return <button onClick={clickHandler}>Submit</button>;
};

const Game = (props: GameProps) => {
	const {
		words,
		lettersById,
		activeLetters,
		inertLetters,
		checkWord,
		shuffleLetters
	} = props;
	return (
		<div className="Game">
			<WordList words={words} />
			<LetterLists
				lettersById={lettersById}
				activeLetters={activeLetters}
				inertLetters={inertLetters}
			/>
			<SubmitButton
				lettersById={lettersById}
				activeLetters={activeLetters}
				checkWord={checkWord}
			/>
			<ShuffleButton
				inertLetters={inertLetters}
				shuffleLetters={shuffleLetters}
			/>
		</div>
	);
};

export default Game;
