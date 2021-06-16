import { ADD, SUBTRACT } from '../Constants';

const initialState = {
  additionValue: 0,
  subtractionValue: 0
}
export const operationReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD: {
      return {
        ...state,
        additionValue: actions.value1 + actions.value2
      }
    }
    case SUBTRACT: {
      return {
        ...state,
        subtractionValue: actions.value1 - actions.value2
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
};
