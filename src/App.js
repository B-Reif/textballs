import React, { Component } from "react";
import { createStore } from "redux";
import { initLetters } from "./actions/letter";
import { initWords } from "./actions/word";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import KeyboardContainer from "./containers/KeyboardContainer";
import GameContainer from "./containers/GameContainer";

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
	componentWillMount() {
		store.dispatch(initLetters("GYLFNI".split("")));
		store.dispatch(initWords(["FLYING", "LYING", "FLING", "FLY", "GIN"]));
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
