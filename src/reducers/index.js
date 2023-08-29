import { combineReducers } from 'redux';
import { favReducer } from './favReducer';
import movieReducer from './movieReducer';

const reducer = combineReducers({
    favReducer :favReducer,
    movieReducer:movieReducer
});

export default reducer