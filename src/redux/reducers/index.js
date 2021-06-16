import { combineReducers } from 'redux';
import { operationReducer } from './OperationReducer'
import { postReducer } from './PostReducer'

export default combineReducers({
    operationReducer,
    postReducer
})