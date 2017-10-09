import React from "react";
import PropTypes from "prop-types";

const Answer = ({ answer, found }) =>
	found ? <div>{answer}</div> : <div>?</div>;

Answer.propTypes = {
	answer: PropTypes.string.isRequired
};

const AnswerList = ({ words }) => {
	return (
		<div>
			{Object.keys(words).map(a => (
				<Answer key={a} answer={a} found={words[a]} />
			))}
		</div>
	);
};

AnswerList.propTypes = {
	words: PropTypes.objectOf(PropTypes.bool).isRequired
};

export default AnswerList;
