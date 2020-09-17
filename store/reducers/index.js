import {combineReducers} from 'redux';
import movieReducer from './movie';
import userReducer from './user';

const rootReducer = combineReducers({
    movieReducer,
    userReducer
})

export default rootReducer;