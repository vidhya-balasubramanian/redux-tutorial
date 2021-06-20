import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addAction, subtractionAction, fetchData } from "./redux/Actions";

const App = () => {
  const operationReducerData = useSelector((state) => state.operationReducer);
  const postReducerData = useSelector((state) => state.postReducer);


  const dispatch = useDispatch();
  return (
    <div>
      <h1>Addition Value: {operationReducerData.additionValue}</h1>
      <h1>Subtraction Value: {operationReducerData.subtractionValue}</h1>
      <h1>Data Count: {postReducerData.data.length}</h1>
      <button onClick={() => dispatch(addAction(10, 2))}>ADD</button> &nbsp;
      <button onClick={() => dispatch(subtractionAction(10, 2))}>SUBTRACT</button> &nbsp;
      <button onClick={() => dispatch(fetchData())}>Fetch Data</button>
      {postReducerData.loading ? <p>loading</p> : null}
      <h3>Redux Saga</h3>
      <button onClick={() => dispatch({ type: "GET_POSTS" })}>Get POSTS</button>

    </div>
  );
};

export default App;
