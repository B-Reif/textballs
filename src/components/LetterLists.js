// @flow
import React from "react";
import LetterContainer from "../containers/LetterContainer";
import { Motion, spring as baseSpring } from "react-motion";
import type { Node } from "react";
import type { LettersById, LetterId } from "../types";

const spring = val =>
	baseSpring(val, {
		stiffness: 260,
		damping: 20
	});

type Props = {
	lettersById: LettersById,
	inertLetters: Array<LetterId>,
	activeLetters: Array<LetterId>
};

const layout = (index, active) => {
	const x = 2 + index * 60;
	const y = active ? 10 : 90;
	return [x, y];
};

class LetterLists extends React.Component<Props> {
	renderLetter: (id: string, index: number, active: boolean) => Node;

	constructor(props: Props) {
		super(props);
		this.renderLetter = this.renderLetter.bind(this);
	}

	renderLetter(id: string, index: number, active: boolean) {
		const { lettersById } = this.props;
		const [x, y] = layout(index, active);
		const style = {
			translateX: spring(x),
			translateY: spring(y)
		};
		return (
			<Motion key={id} style={style}>
				{({ translateX, translateY }) => {
					return (
						<LetterContainer
							id={id}
							glyph={lettersById[id].glyph}
							style={{
								transform: `translate3d(${translateX}px, ${translateY}px, 0)`
							}}
						/>
					);
				}}
			</Motion>
		);
	}

	render() {
		const { inertLetters, activeLetters } = this.props;
		const inertChildren = inertLetters.map((id, index) =>
			this.renderLetter(id, index, false)
		);
		const activeChildren = activeLetters.map((id, index) =>
			this.renderLetter(id, index, true)
		);
		const children = inertChildren.concat(activeChildren);
		return (
			<div className="LetterLists">
				{children}
				<div className="ActiveLetters" />
				<div className="InertLetters" />
			</div>
		);
	}
}

export default LetterLists;
