import {call, put, takeEvery} from 'redux-saga/effects'

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

function* fetchUser(action) {
  try {
    const data = yield call(() => fetch(API_ENDPOINT).then(r => r.json()));
    yield put({type: "GET_POSTS_SUCCESS", user: data});
  } catch (e) {
    yield put({type: "GET_POSTS_ERROR", message: e.message});
  }
}

export function* postsSaga() {
  yield takeEvery("GET_POSTS", fetchUser);
}