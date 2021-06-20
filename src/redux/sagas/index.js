import postsSaga from './PostsSaga'

debugger
export default function* RootSaga() {
  yield [
    postsSaga()
  ]
}

