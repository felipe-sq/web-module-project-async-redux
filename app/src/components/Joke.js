import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchJoke } from "../actions/jokeActions";
import { Container, Card, Button, Badge } from 'react-bootstrap';

const Joke = (props) => {
  useEffect(() => { props.fetchJoke(); }, []);
  if (props.loading) {
    return <><h2>Loading joke... </h2></>
  }
  return (
    <Container>
      <Card>
        <Card.Title> {props.joke} </Card.Title><br/>
        <button className="joke-btn" onClick={props.fetchJoke}>Get new Joke!</button>
      </Card>
    </Container>
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