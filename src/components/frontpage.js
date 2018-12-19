import React from 'react';

import { Link } from 'react-router-dom';
import './frontpage.css';

import { Header } from './header'

class Frontpage extends React.Component {
    render() {
        return (
            <div className='frontpage-wrapper'>
                <Header />
            </div>
        )
    }
}

export { Frontpage };