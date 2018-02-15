// @flow
import React from "react";

type Props = {
	glyph: string,
	style: {},
	active: boolean,
	pushLetter: () => void,
	popLetter: () => void
};

class Letter extends React.Component<Props> {
	toggleActive: () => void;

	constructor(props: Props) {
		super(props);
		this.toggleActive = this.toggleActive.bind(this);
	}

	toggleActive() {
		const { active, pushLetter, popLetter } = this.props;
		const toggle = active ? popLetter : pushLetter;
		toggle();
	}

	render() {
		const { style, glyph } = this.props;
		return (
			<span onClick={this.toggleActive} style={style} className="Letter">
				{glyph}
			</span>
		);
	}
}

export default Letter;
