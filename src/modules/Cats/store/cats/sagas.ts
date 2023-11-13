import { takeLatest, call, put } from 'redux-saga/effects';
import { getCats } from '@/modules/Cats/store/cats/actions';

function* fetchCatsSaga(action: ReturnType<typeof getCats>) {
  try {
  } catch (e) {
    console.log('e ->', e);
  } finally {
  }
}

export default function* watchCatsSaga() {
  yield takeLatest(getCats.type, fetchCatsSaga);
}
