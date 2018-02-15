// @flow
import React from "react";
import PropTypes from "prop-types";
import Word from "./Word";
import type { WordFoundMap } from "../types";

type Props = { words: WordFoundMap };

const WordList = ({ words }: Props) => {
	return (
		<div className="WordList">
			{Object.keys(words).map(a => (
				<Word key={a} answer={a} found={words[a]} />
			))}
		</div>
	);
};

export default WordList;
