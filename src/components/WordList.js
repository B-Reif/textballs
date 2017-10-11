import React from "react";
import PropTypes from "prop-types";
import Word from "./Word";

const WordList = ({ words }) => {
	return (
		<div className="WordList">
			{Object.keys(words).map(a => (
				<Word key={a} answer={a} found={words[a]} />
			))}
		</div>
	);
};

WordList.propTypes = {
	words: PropTypes.objectOf(PropTypes.bool).isRequired
};

export default WordList;
