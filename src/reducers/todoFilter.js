import {SET_TODO_FILTER, TODO_FILTER} from "../constants/actionTypes";

export default function todoFilter(state = TODO_FILTER.SHOW_ALL, action) {
    switch (action.type) {
        case SET_TODO_FILTER:
            return action.filter;
            break;
        default:
            return state;
            break;
    }
}