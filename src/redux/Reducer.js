import { ADD, SUBTRACT } from './Constants';

const initialState = {
  additionValue: 0,
  subtractionValue: 0,
  loading: false,
  data: null,
  error: ''
}
export const operationReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "FETCH_REQUEST": {
      return {
        ...state,
        loading: true
      }
    }
    case "FETCH_REQUEST_SUCCESS": {
      return {
        ...state,
        loading: false,
        data: actions.payload,
      }
    }
    case 'FETCH_REQUEST_ERROR': {
      return {
        ...state,
        loading: false,
        error: actions.error
      }
    }
    case ADD: {
      return {
        ...state,
        additionValue: 10+2
      }
    }
    case SUBTRACT: {
      return {
        ...state,
        subtractionValue: 10-2
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
};

// combined reducer increment decrement
// redux thunk -> for asynchronous operation => middleware