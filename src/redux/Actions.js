import { ADD, SUBTRACT, FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './Constants';

export const addAction = (value1, value2) => ({
  type: ADD,
  value1,
  value2
});
export const subtractionAction = (value1, value2) => ({
  type: SUBTRACT,
  value1,
  value2
});

export const fetchData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  const quoteUrl = "https://jsonplaceholder.typicode.com/posts";

  fetch(quoteUrl)
      .then(response => response.json())
      .then(
          data => dispatch({ type: FETCH_DATA_SUCCESS, result: data }),
          error => dispatch({ type: FETCH_DATA_ERROR, error: error.message || 'Unexpected Error!!!' })
      )
};