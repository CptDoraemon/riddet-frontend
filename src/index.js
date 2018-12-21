//stupid IE
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './components/scrolltotop';
import { IoIosBonfire } from "react-icons/io";

import { Frontpage } from './components/frontpage';
import { Login } from './components/login';






class Index extends React.Component {
    render() {
        const themeColor = ['rgb(145, 125, 47)', 'rgb(220, 197, 100)', 'rgb(249, 245, 226)'];
        const themeLogo = function (size) {
            return (
                <IoIosBonfire size={size}/>
            )
        };
        const themeTitle = 'g/saraba1st';
        return (
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route path="/" exact render={(props) => <Frontpage {...props} themeColor={themeColor} themeLogo={themeLogo} themeTitle={themeTitle}/>} />
                        <Route path="/login" exact render={(props) => <Login {...props} /> } />
                    </Switch>
                </ScrollToTop>
            </Router>
        )
    }


}

ReactDOM.render(<Index />, document.getElementById('root'));



