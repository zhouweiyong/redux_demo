import AddTodo from './AddTodo';
import {addTodo} from "../../../actions/todo";
import {connect} from 'react-redux';

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

const AddTodoCon = connect(mapStateToProps, mapDispatchToProps)(AddTodo);
export default AddTodoCon;