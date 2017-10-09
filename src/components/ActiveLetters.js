// @flow
import React from "react";
import PropTypes from "prop-types";
import type { LettersById, LetterId, LetterGlyph } from "../types";

type Props = {
	lettersById: LettersById,
	letters: Array<LetterId>
};

const ActiveLetters = (props: Props) => {
	const { letters, lettersById } = props;
	const glyphs: Array<LetterGlyph> = letters.map(id => lettersById[id].glyph);
	return <div className="ActiveLetters">{glyphs.join("")}</div>;
};

ActiveLetters.propTypes = {
	lettersById: PropTypes.object.isRequired,
	letters: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ActiveLetters;
