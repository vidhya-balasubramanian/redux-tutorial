export const postSagaReducer = (prevState = {}, action) => {
  switch (action.type) {
    case "GET_POSTS": {
      return Object.assign({}, prevState, {isFetching: true});
    }
    case "GET_POSTS_SUCCESS": {
      return Object.assign({}, prevState, {isFetching: false}, {posts: action.data});
    }
    case "GET_POSTS_ERROR": {
      return Object.assign({}, prevState, {isFetching: false}, {error: action.error});
    }
    default:
      return prevState;
  }
}