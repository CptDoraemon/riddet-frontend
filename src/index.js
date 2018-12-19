//stupid IE
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './components/scrolltotop';

import { Frontpage } from './components/frontpage';




class Index extends React.Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route path="/" exat render={(props) => <Frontpage {...props} />} />
                    </Switch>
                </ScrollToTop>
            </Router>
        )
    }


}

ReactDOM.render(<Index />, document.getElementById('root'));



