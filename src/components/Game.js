// @flow
import React from "react";
import WordList from "./WordList";
import ActiveLetters from "./ActiveLetters";
import InertLetters from "./InertLetters";
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
			<ActiveLetters lettersById={lettersById} letters={activeLetters} />
			<InertLetters lettersById={lettersById} letters={inertLetters} />
		</div>
	);
};

export default Game;
