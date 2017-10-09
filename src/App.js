import React, { Component } from "react";
import { createStore } from "redux";
import { initLetters } from "./actions/letter";
import { initWords } from "./actions/word";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import KeyboardContainer from "./containers/KeyboardContainer";
import GameContainer from "./containers/GameContainer";
import logo from "./logo.svg";
import "./App.css";

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
	componentWillMount() {
		store.dispatch(initLetters("FLYING".split("")));
		store.dispatch(initWords(["FLYING", "LYING", "FLING", "FLY", "GIN"]));
	}

	render() {
		return (
			<Provider store={store}>
				<KeyboardContainer>
					<div className="App">
						<div className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<h2>Welcome to React</h2>
						</div>
						<p className="App-intro">
							To get started, edit <code>src/App.js</code> and
							save to reload.
						</p>
						<GameContainer />
					</div>
				</KeyboardContainer>
			</Provider>
		);
	}
}

export default App;
