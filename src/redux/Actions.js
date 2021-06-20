import {FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './Constants';

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