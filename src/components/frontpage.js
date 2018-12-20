import React from 'react';

import { Link } from 'react-router-dom';
import './frontpage.css';

import { IoIosBonfire } from "react-icons/io";
import { Header } from './header'

class Frontpage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            view: 'card',
            sort: 'hot'
        };
        this.toggleView = this.toggleView.bind(this);
        this.toggleSort = this.toggleSort.bind(this);
    }
    toggleView (e) {
        this.setState({
            view: e
        })
    }
    toggleSort(e) {
        this.setState({
            sort: e.target.title
        })
    }
    render() {
        const themeColor = ['rgb(145, 125, 47)', 'rgb(220, 197, 100)', 'rgb(249, 245, 226)'];
        const themeLogo = function (size) {
            return (
                <IoIosBonfire size={size}/>
            )
        };
        const themeTitle = 'r/saraba1st';
        return (
            <div className='frontpage-wrapper'>
                <Header themeColor={themeColor} themeLogo={themeLogo} themeTitle={themeTitle} view={this.state.view} toggleView={this.toggleView} sort={this.state.sort} toggleSort={this.toggleSort}/>
            </div>
        )
    }
}

export { Frontpage };