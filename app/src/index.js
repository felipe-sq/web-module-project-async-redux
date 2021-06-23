import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from "redux-logger";

import Joke from './components/Joke';
import { jokeReducer } from './reducers/jokeReducer';
import './index.css';
import thunk from 'redux-thunk';

const store = createStore(jokeReducer, applyMiddleware(logger, thunk));

function App() {
  return (
    <div className="App">
      <h1>Random Chuck Norris Joke Generator</h1>
      <Joke />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
