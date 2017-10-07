// @flow
import React from "react";
import AnswerList from "./AnswerList";
import ActiveLetters from "./ActiveLetters";
import InertLetters from "./InertLetters";

import type { Letter } from "../types";

const demoAnswers = {
	FLYING: false,
	LYING: false,
	FLING: false,
	FLY: false
};

type Props = {
	activeLetters: Array<Letter>,
	inertLetters: Array<Letter>
};

const Game = (props: Props) => {
	const { activeLetters, inertLetters } = props;
	return <div>
		<AnswerList answerMap={demoAnswers} />
		<ActiveLetters letters={activeLetters} />
		<InertLetters letters={inertLetters} />
	</div>
}

export default Game;
