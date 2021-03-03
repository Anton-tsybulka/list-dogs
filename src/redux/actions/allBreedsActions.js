import {
    GET_IMAGES_REQUESTED,
} from './actionTypes';

export const getAllBreeds = (data) => {
    return {
        type: GET_IMAGES_REQUESTED,
        payload: data,
    };
};