import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchJoke } from "../actions/jokeActions";

const Joke = (props) => {
  useEffect(() => { props.fetchJoke(); }, []);
  if (props.loading) {
    return <><h2>Loading joke... </h2></>
  }
  return (
    <>
      <h2> {props.joke} </h2>
      <button onClick={props.fetchJoke}>Get new Joke!</button>
    </>
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