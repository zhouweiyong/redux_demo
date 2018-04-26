import {ADD_TODO, SET_TODO_FILTER, TODO_FILTER, TOGGLE_TODO} from "../constants/actionTypes";

const initialState = {
    todoFilter: TODO_FILTER.SHOW_ALL,
    todos: []
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TODO_FILTER:
            return Object.assign({}, state, {
                todoFilter: action.filter
            })
            break;
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
            break
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map(function (todo, index) {
                    if (action.index==index) {
                        return {
                            text: todo.text,
                            completed: !todo.completed
                        }
                    }
                    return todo;
                })
            })
            break;
        default:
            return state;
            break;
    }
}