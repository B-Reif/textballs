// @flow
import React from "react";
import Mousetrap from "mousetrap";
import { uniqBy } from "lodash";
import type { Node as ReactNode } from "react";
import type { Letter, LettersById, LetterId, LetterGlyph } from "../types";

type Props = {
	lettersById: LettersById,
	inertLetters: Array<LetterId>,
	activeLetters: Array<LetterId>,
	children: ReactNode,
	pushLetter: (id: LetterId) => void,
	popLetter: (id: LetterId) => void,
	checkWord: (word: string) => void,
	shuffleLetters: (Array<LetterId>) => void
};

class Keyboard extends React.Component<Props> {
	bindGlyphs: () => void;
	bindBackspace: () => void;
	unbindGlyphs: (letters: LettersById) => void;
	checkWord: () => void;

	constructor(props: Props) {
		super(props);
		this.bindGlyphs = this.bindGlyphs.bind(this);
		this.bindBackspace = this.bindBackspace.bind(this);
		this.unbindGlyphs = this.unbindGlyphs.bind(this);
		this.checkWord = this.checkWord.bind(this);
	}

	bindGlyphs() {
		const { pushLetter, inertLetters, lettersById } = this.props;
		const letters: Array<Letter> = inertLetters.map(id => lettersById[id]);
		const uniqLetters: Array<Letter> = uniqBy(letters, "glyph");
		uniqLetters.forEach(({ id, glyph }) =>
			Mousetrap.bind(glyph.toLowerCase(), () => pushLetter(id))
		);
	}

	bindBackspace() {
		const { activeLetters, popLetter } = this.props;
		if (activeLetters.length === 0) return;
		const lastLetter: LetterId = activeLetters[activeLetters.length - 1];
		Mousetrap.bind("backspace", () => popLetter(lastLetter));
	}

	checkWord() {
		const { activeLetters, lettersById, checkWord } = this.props;
		const activeGlyphs: Array<LetterGlyph> = activeLetters.map(
			id => lettersById[id].glyph
		);
		const word = activeGlyphs.join("");
		checkWord(word);
	}

	unbindGlyphs(lettersById: LettersById) {
		const glyphs: Array<LetterGlyph> = Object.keys(lettersById).map(
			id => lettersById[id].glyph
		);
		glyphs.forEach(glyph => Mousetrap.unbind(glyph.toLowerCase()));
	}

	componentDidMount() {
		const { shuffleLetters } = this.props;
		this.bindGlyphs();
		this.bindBackspace();
		Mousetrap.bind("enter", this.checkWord);
		Mousetrap.bind("space", () => shuffleLetters(this.props.inertLetters));
	}

	componentWillUnmount() {
		this.unbindGlyphs(this.props.lettersById);
		Mousetrap.unbind("backspace");
		Mousetrap.unbind("enter");
		Mousetrap.unbind("space");
	}

	componentDidUpdate() {
		this.bindGlyphs();
		this.bindBackspace();
	}

	componentWillReceiveProps() {
		this.unbindGlyphs(this.props.lettersById);
		Mousetrap.unbind("backspace");
	}

	render() {
		return React.Children.only(this.props.children);
	}
}

export default Keyboard;
