import { all } from 'redux-saga/effects';
import { listDogsSaga } from './listDogsSaga';

export default function* rootSaga() {
   yield all([
      listDogsSaga()
   ]);
}