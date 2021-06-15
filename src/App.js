import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addAction, subtractionAction, fetchQuote } from "./redux/Actions";

const App = () => {
  const operations = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Addition Value: {operations.additionValue}</h1>
      <h1>Subtraction Value: {operations.subtractionValue}</h1>
      <button onClick={() => dispatch(addAction())}>ADD</button> &nbsp;
      <button onClick={() => dispatch(subtractionAction())}>SUBTRACT</button> &nbsp;
      <button onClick={() => dispatch(fetchQuote())}>Fetch Quote</button>
      {operations.loading ? <p>loading</p> : null}
    </div>
  );
};

export default App;
