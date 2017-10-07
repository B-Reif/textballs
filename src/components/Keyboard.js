// @flow
import React from "react";
import mousetrap from "mousetrap";
import type { Node as ReactNode } from "react";
import type { Letter } from "../types";

type Props = {
	inertLetters: Array<Letter>,
	children: ReactNode,
	pushLetter: Function
};

class Keyboard extends React.Component<Props> {

	initBinds: Function;
	clearBinds: Function;

	constructor(props: Props) {
		super(props);
		this.initBinds = this.initBinds.bind(this);
		this.clearBinds = this.clearBinds.bind(this);
	}

	initBinds(letters: Array<Letter>) {
		const { pushLetter } = this.props;
		letters.forEach(l =>
			mousetrap.bind(l.toLowerCase(), () => pushLetter(l))
		);
	}

	clearBinds(letters: Array<Letter>) {
		letters.forEach(l => mousetrap.unbind(l.toLowerCase()));
	}

	componentDidMount() {
		this.initBinds(this.props.inertLetters);
	}

	componentWillUnmount() {
		this.clearBinds(this.props.inertLetters);
	}

	componentWillReceiveProps(nextProps: Props) {
		this.clearBinds(this.props.inertLetters);
		this.initBinds(nextProps.inertLetters);
	}

	render() {
		const { children } = this.props;
		return React.Children.only(children);
	}
}

export default Keyboard;
