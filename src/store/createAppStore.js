import {createStore} from 'redux';
import todoApp from "../reducers/todoApp";

// 数据格式跟todoApp中的reducer格式一样的，key值也一样
const defaultState={
    todoFilter:'',
    todos:[],
    myData:0
};


export const createAppStore = (initialState=defaultState) => {
    return createStore(todoApp, initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined);

}