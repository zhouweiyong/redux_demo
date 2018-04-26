import {combineReducers} from 'redux'
import todoFilter from './todoFilter';
import todos from './todos';
import myData from './myData';

const todoApp = combineReducers({
    todoFilter,
    todos,
    myData
})

export default todoApp;