import React from 'react';

import { Link } from 'react-router-dom';
import './info.css';


class Info extends React.Component {
    render() {
        return (
            <div>
                <div className='info-wrapper'>
                    <div className='info-header' style={{backgroundColor:this.props.themeColor[1]}}>
                        <h5>guild info</h5>
                    </div>
                    <div className='info-body'>
                        <div className='info-banner'>
                            {this.props.themeLogo('30px')}
                            <span> {this.props.themeTitle} </span>
                        </div>
                        <div className='info-stats flex-row-even'>
                            <div className='info-stat'>
                                <p>0.0k</p>
                                <h5>Guild Members</h5>
                            </div>
                            <div className='info-stat'>
                                <p>000</p>
                                <h5>Online</h5>
                            </div>
                        </div>
                        <div className='info-message'>
                            <p>泥潭被封，外野莫谈国事，这鸵鸟装不起啊，开个避难所好了 To English readers: This is a subreddit created as a fork of the famous Chinese forum, Saraba1st (or S1 in short)</p>
                        </div>
                        <button className='info-button' style={{backgroundColor: this.props.themeColor[0]}}>JOIN GUILD</button>
                        <button className='info-button' style={{backgroundColor: this.props.themeColor[0]}}>create post</button>
                    </div>
                </div>
                <div className='info-wrapper'>
                    <div className='info-header' style={{backgroundColor:this.props.themeColor[1]}}>
                        <h5>guild officers</h5>
                    </div>
                    <div className='info-body flex-column-center'>
                        <div className='info-officer'>
                            <span className='info-officer-name' style={{color: this.props.themeColor[0]}}>u/placehoder</span>
                            <span className='info-officer-signature'>signature placeholder</span>
                        </div>
                        <div className='info-officer'>
                            <span className='info-officer-name' style={{color: this.props.themeColor[0]}}>u/placehoder</span>
                            <span className='info-officer-signature'>signature placeholder</span>
                        </div>
                        <div className='info-officer'>
                            <span className='info-officer-name' style={{color: this.props.themeColor[0]}}>u/placehoder</span>
                            <span className='info-officer-signature'>signature placeholder</span>
                        </div>
                    </div>
                </div>
                <div className='info-wrapper'>
                    <div className='info-about'>
                        <p>This website is a web development practice project for my personal use.</p>
                        <a href='https://www.xiaoxihome.com' target='_blank' rel='noopener noreferrer' style={{color: this.props.themeColor[0]}}>Author</a>
                    </div>
                </div>
            </div>
        )
    }
}

export { Info };