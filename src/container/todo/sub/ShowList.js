import React from 'react';

export default class ShowList extends React.Component {

    render() {
        console.log(this.props.todos);

        return (
            <div>
                <ul>
                    {this.props.todos.map((todo,index)=>{
                        return (<li key={index}>{todo.text}</li>);
                    })}
                </ul>
            </div>
        );
    }
}