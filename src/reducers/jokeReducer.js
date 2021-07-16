import { FETCH_JOKE_DATA, FETCH_JOKE_OK } from "../actions/jokeActions"


const initialState = {
  joke: 'Your Joke is Loading',
  loading: false,
  error: ''
}

export const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKE_DATA:
      return {
        ...state,
        loading: true
      }
    case FETCH_JOKE_OK:
      return {
        ...state,
        joke: action.payload,
        loading: false
      }
    default:
      return state;
  }
}