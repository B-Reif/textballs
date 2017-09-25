import React from "react";
import PropTypes from "prop-types";

const InertLetters = ({ letters }) => <div>{letters.join("")}</div>;

InertLetters.propTypes = {
	letters: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default InertLetters;
