import { combineReducers } from 'redux';
import { favReducer } from './favReducer';
import movieReducer from './movieReducer';

 const reducer = combineReducers({
    favorites:favReducer,
    movies:movieReducer
});

export default reducer