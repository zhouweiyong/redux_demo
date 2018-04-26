import {ADD_TODO, SET_TODO_FILTER, TOGGLE_TODO} from "../constants/actionTypes";

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text: text
    }
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index: index
    }
}

export function setTodoFilter(filter) {
    return {
        type: SET_TODO_FILTER,
        filter: filter
    }
}

