/* eslint import/no-webpack-loader-syntax: off */
import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { FrozenTrie } from "./Bits";
import rootReducer from "./reducers";
import logo from "./logo.svg";
import "./App.css";
// import succinct from "!raw-loader!./succinct.txt";

// console.log(succinct);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  componentDidMount() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "succinct.txt", false);
    xhr.send(null);

    var parts = xhr.responseText.split(",");
    // console.log(parts);
    var dict = new FrozenTrie(parts[2], parts[1], parts[0]);

    var start = new Date().getTime();
    for (var i = 0, l = 100; i < l; i++) {
      // console.log(dict.lookup("test"));
    }
    alert(new Date().getTime() - start);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
