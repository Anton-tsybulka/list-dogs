import { combineReducers } from 'redux';
import allBreedsReducer from './allBreedsReducer';

const rootReducer = combineReducers({
   breeds: allBreedsReducer
});

export default rootReducer;