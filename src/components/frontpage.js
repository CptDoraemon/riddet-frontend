import React from 'react';

import { Link } from 'react-router-dom';
import './frontpage.css';

import { IoIosBonfire } from "react-icons/io";
import { Header } from './header';
import { Card } from './card';
import { Info } from './info';

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
        const themeTitle = 'g/saraba1st';
        return (
            <div className='frontpage-wrapper'>
                <Header themeColor={themeColor} themeLogo={themeLogo} themeTitle={themeTitle} view={this.state.view} toggleView={this.toggleView} sort={this.state.sort} toggleSort={this.toggleSort}/>
                <div className='main-content-wrapper'>
                    <div className='main-content-wrapper-box'>
                        <div className='posts-wrapper'>
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        <div className='infos-wrapper'>
                            <Info themeColor={themeColor} themeLogo={themeLogo} themeTitle={themeTitle}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Frontpage };