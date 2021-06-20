import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk';

import Reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(Reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
