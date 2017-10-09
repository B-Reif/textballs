// @flow
import React from "react";
import PropTypes from "prop-types";
import type { LettersById, LetterId, LetterGlyph } from "../types";

type Props = {
	lettersById: LettersById,
	letters: Array<LetterId>
};

const InertLetters = (props: Props) => {
	const { letters, lettersById } = props;
	const glyphs: Array<LetterGlyph> = letters.map(id => lettersById[id].glyph);
	return <div className="InertLetters">{glyphs.join("")}</div>;
};

InertLetters.propTypes = {
	lettersById: PropTypes.object.isRequired,
	letters: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default InertLetters;
