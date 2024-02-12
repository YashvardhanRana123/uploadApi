import { takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';
import {
    UPLOAD_IMAGE_REQUEST,
    uploadImageSuccess,
    uploadImageFailure,
} from './actions';

function* uploadImageSaga(action){
    try{
        const response = yield call(axios.post, '/api/upload', action.payload.formData);
        yield put (uploadImageSuccess(response.data));
    }catch (error)
    {
        yield put(uploadImageFailure(error));
    }
    }
export function* watchUploadImage() {
    yield takeLatest(UPLOAD_IMAGE_REQUEST, uploadImageSaga);
}
