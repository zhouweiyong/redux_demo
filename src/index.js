import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import registerServiceWorker from './registerServiceWorker';
import Home from "./container/home/home";
import MyData from "./container/mydata/myData";
import MyInfo from "./container/myinfo/myInfo";
import todoApp from "./reducers/todoApp";
import {NotFund} from "./container/error/notfoud";
import Todo from "./container/todo/todo";


class Index extends React.Component {
    render() {
        const store = createStore(todoApp);
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route path={"/mydata"} component={MyData}/>
                            <Route path={"/myinfo"} component={MyInfo}/>
                            <Route path={"/todo"} component={Todo}/>
                            <Route path={"/*"} component={NotFund}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(
    <Index/>
    , document.getElementById('root'));
registerServiceWorker();
