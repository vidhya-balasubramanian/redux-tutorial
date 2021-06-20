// Reducer
const initialState = {
    posts: [],
    loading: false,
    error: false,
  };
export const postSagaReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REQUESTED_POSTS':
        return {
          posts: [],
          loading: true,
          error: false,
        };
      case 'REQUESTED_POSTS_SUCCEEDED':
        return {
          posts: action.posts,
          loading: false,
          error: false,
        };
      case 'REQUESTED_POSTS_FAILED':
        return {
          posts: [],
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  };