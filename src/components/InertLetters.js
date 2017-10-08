// @flow
import React from "react";
import PropTypes from "prop-types";
import type { LettersById, LetterId } from "../types";

type Props = {
	lettersById: LettersById,
	letters: Array<LetterId>,
};

const InertLetters = (props: Props) => {
	const { letters, lettersById } = props;
	const glyphs: Array<string> = letters.map(id => lettersById[id].glyph);
	return <div>{glyphs.join("")}</div>;
}

InertLetters.propTypes = {
	lettersById: PropTypes.object.isRequired,
	letters: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default InertLetters;
