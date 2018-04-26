import React from 'react';
import {connect} from 'react-redux';
import {INCREASE} from "../../constants/actionTypes";

class MyData extends React.Component {
    render() {
        return (
            <div>
                <h3>我的数据</h3>
                <div>数值为：{this.props.num}</div>
                <div>
                    <button onClick={this.props.onClick}>增加20个</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        num: state.myData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            console.log("mydata....")
            dispatch({
                type: INCREASE,
                num: 20
            });
        }
    }
}
MyData = connect(mapStateToProps, mapDispatchToProps)(MyData);
export default MyData;