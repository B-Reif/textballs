import React from "react";
import PropTypes from "prop-types";

const Answer = ({ answer, found }) =>
	found ? <div>{answer}</div> : <div>?</div>;

Answer.propTypes = {
	answer: PropTypes.string.isRequired
};

const AnswerList = ({ answerMap }) => {
	return (
		<div>
			{Object.keys(answerMap).map(a => (
				<Answer key={a} answer={a} found={answerMap[a]} />
			))}
		</div>
	);
};

AnswerList.propTypes = {
	answerMap: PropTypes.objectOf(PropTypes.bool).isRequired
};

export default AnswerList;
