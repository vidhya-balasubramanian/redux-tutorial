import { all } from "redux-saga/effects";

import postsSaga from './PostsSaga';

export default function* rootSaga() {
  yield all([
    postsSaga()
  ])
}