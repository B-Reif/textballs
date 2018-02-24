// @flow
import React from "react";
import Word from "./Word";

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
				<Word answer={"☆".repeat(parseInt(length, 10))} found={foundAll} />
			</div>
		);
	});
	return <div>{children}</div>;
};

export default WordListSmall;
