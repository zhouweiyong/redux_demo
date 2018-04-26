import {connect} from 'react-redux';
import ShowList from "./ShowList";

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const ShowListCon = connect(mapStateToProps,mapDispatchToProps)(ShowList);
export default ShowListCon;

