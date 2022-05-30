import { combineReducers } from 'redux'
import todos from './todos'
import test from './test'

const myReducers = combineReducers({
    todos,
    test
});

export default myReducers;