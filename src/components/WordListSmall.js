// @flow
import React from "react";
import Word from "./Word";

import type { WordFoundMap } from "../types";

type Props = {
	words: {
		[wordLength: string]: {
			found: number,
			total: number
		}
	}
};

const WordListSmall = ({ words }: Props) => {
	const children = Object.keys(words).map(length => {
		const label = `${words[length].found} / ${words[length].total}`;
		const foundAll = words[length].found === words[length].total;
		return (
			<div className="WordListSmallRow" key={length}>
				<label>{label}</label>
				<Word answer={"☆".repeat(parseInt(length))} found={foundAll} />
			</div>
		);
	});
	return <div>{children}</div>;
};

export default WordListSmall;
