import React from "react";
import mousetrap from "mousetrap";
import PropTypes from "prop-types";

class KeyboardProvider extends React.Component {
	constructor(props) {
		super(props);
		this.initBinds = this.initBinds.bind(this);
		this.clearBinds = this.clearBinds.bind(this);
	}

	initBinds(letters) {
		letters.forEach(l =>
			mousetrap.bind(l.toLowerCase(), e => console.log(l))
		);
	}

	clearBinds(letters) {
		letters.forEach(l => mousetrap.unbind(l.toLowerCase()));
	}

	componentDidMount() {
		this.initBinds(this.props.inertLetters);
	}

	componentWillReceiveProps(nextProps) {
		this.clearBinds(this.props.inertLetters);
		this.initBinds(nextProps.inertLetters);
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
