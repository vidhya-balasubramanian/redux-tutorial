import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { operationReducer } from './Reducer';

export const store = createStore(operationReducer, applyMiddleware(thunk));