/* eslint import/no-webpack-loader-syntax: off */
import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import KeyboardProvider from "./components/KeyboardProvider";
import Game from "./components/Game";
import logo from "./logo.svg";
import "./App.css";
// import succinct from "!raw-loader!./succinct.txt";

// console.log(succinct);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <KeyboardProvider inertLetters={"FLYING".split("")}>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Game />
          </div>
        </KeyboardProvider>
      </Provider>
    );
  }
}

export default App;
