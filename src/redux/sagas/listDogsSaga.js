import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
const apiUrl = 'https://dog.ceo/api/breed/hound/images/random/3';

const getAllBreeds = () =>
   axios
      .get(apiUrl)
      .then((result) => result.data.message)
      .catch((error) => {
         throw error;
      });

function* fetchListDogs() {
   try {
      const allBreeds = yield call(getAllBreeds);
      yield put({ type: 'GET_IMAGES_SUCCESS', payload: allBreeds });
   } catch (error) {
      yield put({ type: 'IMAGES_FAILED', message: error.message });
   }
}

function* listDogsSaga() {
   yield takeEvery('GET_IMAGES_REQUESTED', fetchListDogs);
}

export { listDogsSaga };

/* 'https://dog.ceo/api/breed/hound/images' */ //images
/* 'https://dog.ceo/api/breeds/list/all' */    //allBreeds