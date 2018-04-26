import React from 'react';
import AddTodoCon from "./sub/AddTodoCon";
import ShowListCon from "./sub/ShowListCon";

export default class Todo extends React.Component {
    render() {
        return (
            <div>
                <div>TODO LIST</div>
                <AddTodoCon/>
                <ShowListCon/>
            </div>
        );
    }
}