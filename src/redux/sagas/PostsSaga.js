import { call, put, takeEvery } from "redux-saga/effects";

function* fetchDogAsync() {
  try {
    yield put({ type: "REQUESTED_POSTS" });
    const data = yield call(() => {
      return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      );
    });
    yield put({ type: "REQUESTED_POSTS_SUCCEEDED", posts: data });
  } catch (error) {
    yield put({ type: "REQUESTED_POSTS_FAILED" });
  }
}

export default function* watchFetchDog() {
  yield takeEvery("FETCHED_POSTS", fetchDogAsync);
}
