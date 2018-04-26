import React from 'react';

export default class AddTodo extends React.Component{
    submit(e){
        e.preventDefault();
        this.props.onClick(this.refs.todoText.value);
        this.refs.todoText.value = "";
    }
    render(){
        return (
            <div>
                <form onSubmit={this.submit.bind(this)}>
                    <input type="text" ref="todoText"/>
                    <button type={"submit"}>添加</button>
                </form>
            </div>
        );
    }
}