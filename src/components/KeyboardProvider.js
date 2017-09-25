import React from "react";
import mousetrap from "mousetrap";
import PropTypes from "prop-types";

class KeyboardProvider extends React.Component {
	componentDidMount() {
		const { inertLetters } = this.props;
		const letters = inertLetters.map(l => l.toLowerCase())
		letters.forEach(l => mousetrap.bind(l, e => console.log(l)));
	}

	render() {
		const { children } = this.props;
		return React.Children.only(children);
	}
}

KeyboardProvider.propTypes = {
	inertLetters: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default KeyboardProvider;
