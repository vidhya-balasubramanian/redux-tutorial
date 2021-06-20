import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {  fetchData } from "./redux/Actions";

import {  ADD, SUBTRACT } from "./redux/Constants";


const App = () => {
  const operationReducerData = useSelector((state) => state.operationReducer);
  const postReducerData = useSelector((state) => state.postReducer);
  const sagaData = useSelector((state) => {
    return state.postSagaReducer
  });

  const dispatch = useDispatch();
  return (
    <div>
      <h3>Redux Thunk</h3>
      <h1>Addition Value: {operationReducerData.additionValue}</h1>
      <h1>Subtraction Value: {operationReducerData.subtractionValue}</h1>
      <h1>Data Count: {postReducerData.data.length}</h1>
      <button onClick={() => dispatch({ type: ADD, value1: "10", value2: 2 })}>ADD</button> &nbsp;
      <button onClick={() => dispatch({ type: SUBTRACT, value1: "10", value2: 2})}>
        SUBTRACT
      </button>{" "}
      &nbsp;
      <button onClick={() => dispatch(fetchData())}>Fetch Data</button>
      {postReducerData.loading ? <p>loading</p> : null}
      <h3>Redux Saga</h3>
      <button onClick={() => dispatch({ type: "FETCHED_POSTS" })}>
        Get Posts
      </button>
      {sagaData.loading ? (
        <p>Loading...</p>
      ) : sagaData.error ? (
        <p>Error, try again</p>
      ) : (
        <p>
          Total Posts Count : {sagaData.posts?.length}
        </p>
      )}
    </div>
  );
};

export default App;
