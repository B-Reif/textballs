import React from "react";
import AnswerList from "./AnswerList";
import ActiveLetters from "./ActiveLetters";
import InertLetters from "./InertLetters";

const demoAnswers = {
	FLYING: false,
	LYING: false,
	FLING: false,
	FLY: false
};

const demoLetters = "FLYING".split("");

const Game = () => (
	<div>
		<AnswerList answerMap={demoAnswers} />
		<ActiveLetters letters={[]} />
		<InertLetters letters={demoLetters} />
	</div>
);

export default Game;
