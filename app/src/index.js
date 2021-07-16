import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from "redux-logger";
 
import Joke from './components/Joke';
import { jokeReducer } from './reducers/jokeReducer';
import './index.css';
import styled from 'styled-components';

import thunk from 'redux-thunk';
import { Container, Card, Col, Image, Badge } from 'react-bootstrap';

 
const store = createStore(jokeReducer, applyMiddleware(logger, thunk));
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin: 36px 105px;
  padding: 16px;
  background-color: white;
  width: auto;
`;
function App() {
  return (
    <div className="App">
      <MainDiv>
        <Container>
              <h1>Random Chuck Norris Joke Generator</h1>  
          <Card>
            <Card.Body>Enjoy a chuckle or two!</Card.Body><br/>
            <Col xs={1} md={2} >
              <Image className="d-block mx-auto img-fluid w-10" src="chuck-norris.png" rounded fluid/><br/>
              </Col>
          </Card>
          </Container>
        </MainDiv>
        <MainDiv>
          <Container>
          <Card className="text-center">
            <Joke />
          </Card>
        </Container>
      </MainDiv>
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