import React from "react";
import PropTypes from "prop-types";

const WordLetter = props => <span className="WordLetter" {...props} />

const Word = ({ answer, found }) =>
	found ? (
		<div className="Word">
			{answer.split("").map((l, i) => <WordLetter key={i}>{l}</WordLetter>)}
		</div>
	) : (
		<div className="Word hidden">
			{answer.split("").map((l, i) => <WordLetter key={i}>?</WordLetter>)}
		</div>
	);

Word.propTypes = {
	answer: PropTypes.string.isRequired
};

export default Word;