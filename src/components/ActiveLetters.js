import React from "react";
import PropTypes from "prop-types";

const ActiveLetters = ({ letters }) => <div>{letters.join("")}</div>;

ActiveLetters.propTypes = {
	letters: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ActiveLetters;
