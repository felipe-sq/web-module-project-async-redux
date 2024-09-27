import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchJoke } from "../actions/jokeActions";
import { Container, Card, Button, Badge } from 'react-bootstrap';
import styled from 'styled-components';

const Joke = (props) => {
  useEffect(() => { props.fetchJoke(); }, []);
  if (props.loading) {
    return <><h2>Loading joke... </h2></>
  }
  return (
    <MainDiv>
      <Container>
        <Card>
          <h2>{props.joke}</h2><br/>
          <button className="joke-btn" onClick={props.fetchJoke}>Get new Joke!</button>
        </Card>
      </Container> 
    </MainDiv>
  )
}

const mapStateToProps = (state) => {
  return {
    joke: state.joke,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, {fetchJoke})(Joke);

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin: 36px 80px;
  padding: 16px;
  background-color: white;
  width: auto;
`;