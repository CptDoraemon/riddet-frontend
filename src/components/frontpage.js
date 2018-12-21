import React from 'react';

import { Link } from 'react-router-dom';
import './frontpage.css';

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
        return (
            <div className='frontpage-wrapper'>
                <Header themeColor={this.props.themeColor} themeLogo={this.props.themeLogo} themeTitle={this.props.themeTitle} view={this.state.view} toggleView={this.toggleView} sort={this.state.sort} toggleSort={this.toggleSort}/>
                <div className='main-content-wrapper'>
                    <div className='main-content-wrapper-box'>
                        <div className='posts-wrapper'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                        <div className='infos-wrapper'>
                            <Info themeColor={this.props.themeColor} themeLogo={this.props.themeLogo} themeTitle={this.props.themeTitle}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Frontpage };