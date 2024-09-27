import axios from "axios";
export const FETCH_JOKE_DATA = "FETCH_JOKE_DATA";
export const FETCH_JOKE_OK = "FETCH_JOKE_OK";
export const FETCH_JOKE_ERROR = "FETCH_JOKE_ERROR";

export const fetchJoke = () => (dispatch) => {
    
  dispatch({ type: FETCH_JOKE_DATA });
  axios.get("https://api.icndb.com/jokes/random")
    .then(res => {
      console.log(res.data.value);
      dispatch({ type: FETCH_JOKE_OK, payload: res.data.value.joke});
    })
      // display error message if any
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_JOKE_ERROR, payload: err });
    })
}