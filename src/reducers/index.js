import { combineReducers } from 'redux';
import quiz from './quiz';

const reducers = combineReducers({
    quiz: quiz,
});

export default reducers;
