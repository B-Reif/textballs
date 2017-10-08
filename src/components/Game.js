// @flow
import React from "react";
import AnswerList from "./AnswerList";
import ActiveLetters from "./ActiveLetters";
import InertLetters from "./InertLetters";
import type { LetterId, LettersById } from "../types";

const demoAnswers = {
	FLYING: false,
	LYING: false,
	FLING: false,
	FLY: false
};

type Props = {
	lettersById: LettersById,
	activeLetters: Array<LetterId>,
	inertLetters: Array<LetterId>
};

const Game = (props: Props) => {
	const { lettersById, activeLetters, inertLetters } = props;
	return (
		<div>
			<AnswerList answerMap={demoAnswers} />
			<ActiveLetters lettersById={lettersById} letters={activeLetters} />
			<InertLetters lettersById={lettersById} letters={inertLetters} />
		</div>
	);
};

export default Game;
