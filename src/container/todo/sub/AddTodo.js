import React from 'react';
import {addTodo} from "../../../actions/todo";
import {connect} from 'react-redux';

 class AddTodo extends React.Component{
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

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (text) => {
            dispatch(addTodo(text));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)