// @flow
import React from "react";

const Letter = ({ glyph, style }: {glyph: string, style: {}}) =>
	<span style={style} className="Letter">{glyph}</span>

export default Letter;