// @flow
import React, { Component } from "react";
import { createStore } from "redux";
import { initLetters } from "./actions/letter";
import { initWords } from "./actions/word";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import KeyboardContainer from "./containers/KeyboardContainer";
import GameContainer from "./containers/GameContainer";
import { sample, shuffle, random } from "lodash";

const getGame = () => {
	const gameFileIndex = random(0, 106);
	// $FlowFixMe (flow wants this to be a string literal)
	return import(`./games/games${gameFileIndex}.json`).then(
		games =>
			sample(games)
				.map(word => word.toUpperCase())
				.sort((a, b) => a.length - b.length),
		error => console.error("Could not fetch game")
	);
};

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component<{}> {
	componentWillMount() {
		const game = getGame().then(game => {
			const key = game[game.length - 1];
			const letters = shuffle(key.split(""));
			store.dispatch(initLetters(letters));
			store.dispatch(initWords(game));
		});
	}

	render() {
		return (
			<Provider store={store}>
				<KeyboardContainer>
					<div className="App">
						<h1>Textballs</h1>
						<GameContainer />
					</div>
				</KeyboardContainer>
			</Provider>
		);
	}
}

export default App;
