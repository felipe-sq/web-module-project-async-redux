import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from "redux-logger";

import Joke from './components/Joke';
import { jokeReducer } from './reducers/jokeReducer';
import './index.css';
import thunk from 'redux-thunk';
import { Container, Card, Col, Image } from 'react-bootstrap';


const store = createStore(jokeReducer, applyMiddleware(logger, thunk));

function App() {
  return (
    <div className="App">
      <Container>
        <Card>
          <Card.Header as="h1">Random Chuck Norris Joke Generator</Card.Header>
          <Card.Body>Enjoy a chuckle or two!</Card.Body><br/>
          <Col xs={1} md={2} >
            <Image className="d-block mx-auto img-fluid w-10" src="chuck-norris.png" rounded fluid/><br/>
            </Col>
        </Card>
        <Card as="h5" className="text-center">
          <Joke />
        </Card>
      </Container>
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
