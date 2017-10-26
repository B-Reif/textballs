import React, { Component } from "react";
import { createStore } from "redux";
import { initLetters } from "./actions/letter";
import { initWords } from "./actions/word";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import KeyboardContainer from "./containers/KeyboardContainer";
import GameContainer from "./containers/GameContainer";
import { sample, shuffle } from "lodash";
import games from "./games.json";

const getGame = () => sample(games).map(word => word.toUpperCase()).sort((a, b) => a.length - b.length);

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

	componentWillMount() {
		const game = getGame();
		const key = game[game.length - 1];
		const letters = shuffle(key.split(""))
		store.dispatch(initLetters(letters));
		store.dispatch(initWords(game));
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
