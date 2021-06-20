import postsSaga from './PostsSaga'

export default function* RootSaga() {
  yield [
    postsSaga()
  ]
}

