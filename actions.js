export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';


export const uploadImageRequest = (FormData) =>({
    type: UPLOAD_IMAGE_REQUEST,
    payload: {FormData},
})

export const uploadImageSuccess = (data) =>({
    type: UPLOAD_IMAGE_SUCCESS,
    payload: {data},
})

export const uploadImageFailure = (error) =>({
    type: UPLOAD_IMAGE_FAILURE,
    payload: {error},
})
