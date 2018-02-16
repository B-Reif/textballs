// @flow
import React from "react";
import MediaQuery from "react-responsive";
import WordListContainer from "../containers/WordListContainer";
import WordListSmallContainer from "../containers/WordListSmallContainer";
import LetterLists from "./LetterLists";
import type { LetterId, LettersById, WordFoundMap } from "../types";

type ShuffleButtonProps = {
	inertLetters: Array<LetterId>,
	shuffleLetters: (Array<LetterId>) => void
};

const ShuffleButton = ({
	inertLetters,
	shuffleLetters
}: ShuffleButtonProps) => (
	<button onClick={() => shuffleLetters(inertLetters)}>Shuffle Balls</button>
);

type SubmitProps = {
	word: string,
	checkWord: string => void
};

const SubmitButton = ({ word, checkWord }: SubmitProps) => (
	<button onClick={() => checkWord(word)}>Submit</button>
);

type GameProps = {
	guess: string,
	words: WordFoundMap,
	lettersById: LettersById,
	activeLetters: Array<LetterId>,
	inertLetters: Array<LetterId>,
	checkWord: string => void,
	shuffleLetters: () => void
};

const Game = (props: GameProps) => {
	const {
		guess,
		lettersById,
		activeLetters,
		inertLetters,
		checkWord,
		shuffleLetters
	} = props;
	return (
		<div className="Game">
			<MediaQuery maxDeviceWidth={600}>
				<WordListSmallContainer />
			</MediaQuery>
			<MediaQuery minDeviceWidth={601}>
				<WordListContainer />
			</MediaQuery>
			<LetterLists
				lettersById={lettersById}
				activeLetters={activeLetters}
				inertLetters={inertLetters}
			/>
			<SubmitButton word={guess} checkWord={checkWord} />
			<ShuffleButton
				inertLetters={inertLetters}
				shuffleLetters={shuffleLetters}
			/>
		</div>
	);
};

export default Game;
