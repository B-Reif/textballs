// @flow
import React from "react";
import WordList from "./WordList";
import LetterLists from "./LetterLists";
import type { LetterId, LettersById, WordFoundMap } from "../types";

type Props = {
	words: WordFoundMap,
	lettersById: LettersById,
	activeLetters: Array<LetterId>,
	inertLetters: Array<LetterId>
};

const Game = (props: Props) => {
	const { words, lettersById, activeLetters, inertLetters } = props;
	return (
		<div className="Game">
			<WordList words={words} />
			<LetterLists
				lettersById={lettersById}
				activeLetters={activeLetters}
				inertLetters={inertLetters}
			/>
		</div>
	);
};

export default Game;
