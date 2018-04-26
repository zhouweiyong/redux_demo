import {INCREASE, REUDCE} from '../constants/actionTypes';

export default function myData (state = 0, action){
    switch (action.type) {
        case INCREASE:
            return state + action.num;
            break;
        case REUDCE:
            return state - action.num;
            break;
        default:
            return state;
            break;
    }
}