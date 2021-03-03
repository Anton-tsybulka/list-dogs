import {
    GET_IMAGES_REQUESTED,
    GET_IMAGES_SUCCESS,
    IMAGES_FAILED,    
} from '../actions/actionTypes';
 
const initialState = {
    data: [],
    loading: false,
    error: null,
};
 
export default function checkListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_IMAGES_REQUESTED:
            return { ...state, loading: true };
        case GET_IMAGES_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case IMAGES_FAILED:
            return { ...state, error: action.message};

        default:
            return state;
    }
}