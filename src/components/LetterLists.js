// @flow
import React from "react";
import PropTypes from "prop-types";
import Letter from "./Letter";
import type { LettersById, LetterId } from "../types";

type Props = {
	lettersById: LettersById,
	inertLetters: Array<LetterId>,
	activeLetters: Array<LetterId>
};

class LetterLists extends React.Component<Props> {
	render() {
		const { lettersById, inertLetters, activeLetters } = this.props;
		const inertChildren = inertLetters.map(id => (
			<Letter key={id} id={id} glyph={lettersById[id].glyph} />
		));
		const activeChildren = activeLetters.map(id => (
			<Letter key={id} id={id} glyph={lettersById[id].glyph} />
		));
		return (
			<div className="LetterLists">
				<div className="ActiveLetters">{activeChildren}</div>
				<div className="InertLetters">{inertChildren}</div>
			</div>
		);
	}
}

LetterLists.propTypes = {
	lettersById: PropTypes.objectOf(PropTypes.object).isRequired,
	inertLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
	activeLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default LetterLists;
