// @flow
import React from "react";
import PropTypes from "prop-types";

const WordLetter = props => <span className="WordLetter" {...props} />;

type Props = {
	answer: string,
	found: boolean
};

const Word = ({ answer, found }: Props) =>
	found ? (
		<div className="Word">
			{answer.split("").map((l, i) => <WordLetter key={i}>{l}</WordLetter>)}
		</div>
	) : (
		<div className="Word hidden">
			{answer.split("").map((l, i) => <WordLetter key={i}>?</WordLetter>)}
		</div>
	);

export default Word;
