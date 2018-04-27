import {ADD_TODO, TOGGLE_TODO} from "../constants/actionTypes";



export default function todos(state = [], action) {

    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
            break;
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (action.index == index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            })
            break;
        default:
            return state;
            break;
    }
}