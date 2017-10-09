// @flow
import React from "react";
import PropTypes from "prop-types";
import Letter from "./Letter";
import type { LettersById, LetterId } from "../types";

type Props = {
	lettersById: LettersById,
	letters: Array<LetterId>
};

const ActiveLetters = (props: Props) => {
	const { letters, lettersById } = props;
	return (
		<div className="ActiveLetters">
			{letters.map(id => (
				<Letter key={id} id={id} glyph={lettersById[id].glyph} />
			))}
		</div>
	);
};

ActiveLetters.propTypes = {
	lettersById: PropTypes.object.isRequired,
	letters: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ActiveLetters;
