// @flow
import React from "react";
import PropTypes from "prop-types";
import Letter from "./Letter";
import { Motion, spring as baseSpring } from "react-motion";
import type { LettersById, LetterId } from "../types";

const spring = val => baseSpring(val, {
	stiffness: 260, damping: 20
})

type Props = {
	lettersById: LettersById,
	inertLetters: Array<LetterId>,
	activeLetters: Array<LetterId>
};

const layout = (index, active) => {
	const x = index * 60;
	const y = active ? 10 : 90;
	return [x, y];
};

class LetterLists extends React.Component<Props> {
	renderLetter: Function

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
						<Letter
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
		const { lettersById, inertLetters, activeLetters } = this.props;
		const letters = Object.keys(lettersById);
		const children = letters.map(id => {
			const activeIndex = activeLetters.indexOf(id);
			const listIndex =
				activeIndex === -1 ? inertLetters.indexOf(id) : activeIndex;
			return this.renderLetter(id, listIndex, activeIndex !== -1);
		});
		return (
			<div className="LetterLists">
				{children}
				<div className="ActiveLetters" />
				<div className="InertLetters" />
			</div>
		);
	}
}

LetterLists.propTypes = {
	lettersById: PropTypes.objectOf(PropTypes.object).isRequired,
	inertLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
	activeLetters: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default LetterLists;
