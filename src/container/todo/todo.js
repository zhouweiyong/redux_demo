import React from 'react';
import AddTodo from "./sub/AddTodo";
import ShowListCon from "./sub/ShowListCon";

export default class Todo extends React.Component {
    render() {
        return (
            <div>
                <div>TODO LIST</div>
                <AddTodo/>
                <ShowListCon/>
            </div>
        );
    }
}