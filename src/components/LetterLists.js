// @flow
import React from "react";
import PropTypes from "prop-types";
import Letter from "./Letter";
import { Motion } from "react-motion";
import type { LettersById, LetterId } from "../types";

type Props = {
	lettersById: LettersById,
	inertLetters: Array<LetterId>,
	activeLetters: Array<LetterId>
};

const layout = (index, active) => {
	const x = index * 100;
	const y = active ? 0 : 100;
	return [x, y];
};

class LetterLists extends React.Component<Props> {
	render() {
		const { lettersById, inertLetters, activeLetters } = this.props;
		const inertChildren = inertLetters.map((id, index) => {
			let [x, y] = layout(index, false);
			let style = {
				translateX: x,
				translateY: y
			};
			return (
				<Motion key={id} style={style}>
					{({ translateX, translateY }) => {
						return (
							<Letter
								id={id}
								glyph={lettersById[id].glyph}
								style={{
									transform: `translate3d(${translateX}px, ${translateY}px`
								}}
							/>
						);
					}}
				</Motion>
			);
			return;
		});
		const activeChildren = activeLetters.map(id => (
			<Letter key={id} id={id} glyph={lettersById[id].glyph} />
		));
		return (
			<div className="LetterLists">
				{activeChildren}
				{inertChildren}
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
