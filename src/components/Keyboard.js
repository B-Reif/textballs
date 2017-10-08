// @flow
import React from "react";
import mousetrap from "mousetrap";
import { uniqBy } from "lodash";
import type { Node as ReactNode } from "react";
import type { Letter, LettersById, LetterId } from "../types";

type Props = {
	lettersById: LettersById,
	inertLetters: Array<LetterId>,
	activeLetters: Array<LetterId>,
	children: ReactNode,
	pushLetter: Function,
	popLetter: Function
};

class Keyboard extends React.Component<Props> {
	bindGlyphs: Function;
	bindBackspace: Function;
	clearBinds: Function;

	constructor(props: Props) {
		super(props);
		this.bindGlyphs = this.bindGlyphs.bind(this);
		this.bindBackspace = this.bindBackspace.bind(this);
		this.clearBinds = this.clearBinds.bind(this);
	}

	bindGlyphs() {
		const { pushLetter, inertLetters, lettersById } = this.props;
		const letters: Array<Letter> = inertLetters.map(id => lettersById[id]);
		const uniqLetters: Array<Letter> = uniqBy(letters, "glyph");
		uniqLetters.forEach(({ id, glyph }) =>
			mousetrap.bind(glyph.toLowerCase(), () => pushLetter(id))
		);
	}

	bindBackspace() {
		const { activeLetters, popLetter } = this.props;
		if (activeLetters.length === 0) return;
		const lastLetter: LetterId = activeLetters[activeLetters.length - 1];
		mousetrap.bind("backspace", () => popLetter(lastLetter));
	}

	clearBinds(lettersById: LettersById) {
		const glyphs: Array<string> = Object.keys(lettersById).map(
			id => lettersById[id].glyph
		);
		glyphs.forEach(glyph => mousetrap.unbind(glyph.toLowerCase()));
		mousetrap.unbind("backspace");
	}

	componentDidMount() {
		this.bindGlyphs();
		this.bindBackspace()
	}

	componentDidUpdate() {
		this.bindGlyphs();
		this.bindBackspace();
	}

	componentWillUnmount() {
		this.clearBinds(this.props.lettersById);
	}

	componentWillReceiveProps() {
		this.clearBinds(this.props.lettersById);
	}

	render() {
		return React.Children.only(this.props.children);
	}
}

export default Keyboard;
