import { ADD, SUBTRACT } from './Constants';

export const addAction = () => ({
  type: ADD,
});
export const subtractionAction = () => ({
  type: SUBTRACT,
});

export const fetchQuote = () => dispatch => {
  dispatch({ type: "FETCH_REQUEST" });
  const quoteUrl = "https://zenquotes.io/api/random";

  fetch(quoteUrl)
      .then(response => response.json())
      .then(
          data => dispatch({ type: "FETCH_REQUEST_SUCCESS", data }),
          error => dispatch({ type: "FETCH_REQUEST_ERROR", error: error.message || 'Unexpected Error!!!' })
      )
};