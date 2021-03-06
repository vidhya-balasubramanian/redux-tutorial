import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import reportWebVitals from './reportWebVitals';

import App from './App';


import Reducer from './redux/reducers';
import RootSaga from './redux/sagas';


// Sagas
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  Reducer,
  applyMiddleware(thunk, sagaMiddleware)
);
sagaMiddleware.run(RootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
