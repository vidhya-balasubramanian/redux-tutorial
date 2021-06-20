import { combineReducers } from 'redux';
import { operationReducer } from './OperationReducer'
import { postReducer } from './PostReducer'
import { postSagaReducer } from './PostsSagaReducer';

export default combineReducers({
    operationReducer,
    postReducer,
    postSagaReducer
})