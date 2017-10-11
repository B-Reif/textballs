// @flow
import React from "react";

type Props = {
	glyph: string,
	style: {},
	active: boolean,
	pushLetter: Function,
	popLetter: Function,
};

class Letter extends React.Component<Props> {

	toggleActive: Function

	constructor(props: Props) {
		super(props);
		this.toggleActive = this.toggleActive.bind(this);
	}

	toggleActive() {
		const { active, pushLetter, popLetter } = this.props;
		if (active) return popLetter();
		return pushLetter();
	}

	render() {
		const { style, glyph } = this.props;
		return <span onClick={this.toggleActive} style={style} className="Letter">{glyph}</span>
	}
}

export default Letter;