import React from 'react';
import {
    Link
} from 'react-router-dom'
import {connect} from "react-redux";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h3>首页</h3>
                <div><Link to={"mydata"}>我的数据{this.props.num}</Link></div>
                <div><Link to={"myinfo"}>我的信息</Link></div>
                <div><Link to={"todo"}>todo list</Link></div>
            </div>
        );
    }
}
export default Home;