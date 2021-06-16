import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../Constants';

const initialState = {
  loading: false,
  data: [],
  error: ''
}
export const postReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_DATA: {
      return {
        ...state,
        loading: true
      }
    }
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: actions.result,
      }
    }
    case FETCH_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: actions.error
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
};
