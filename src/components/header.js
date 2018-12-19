import React from 'react';

import { Link } from 'react-router-dom';
import './header.css';

import { IoIosAnalytics, IoIosBonfire, IoIosSearch, IoIosTrendingUp, IoIosStats, IoIosCube, IoMdPerson, IoMdArrowDropdown } from "react-icons/io";


function HeaderFixedLogo (props) {
    return (
        <div className='header-fixed-logo flex-row-even'>
            <IoIosAnalytics size='30px'/>
            <span>riddet</span>
        </div>
    )
}

function HeaderFixedSubs (props) {
    return (
        <button className='header-fixed-subs flex-row-even pointer'>
            <IoIosBonfire size='20px' className='header-fixed-subs-icon'/>
            <span>r/saraba1st</span>
        </button>
    )
}

function HeaderFixedSearch (props) {
    return (
        <div className='header-fixed-search flex-row-even'>
            <IoIosSearch size='20px'/>
            <input value='...search'/>
        </div>
    )
}

function HeaderFixedTools (props) {
    return (
        <div className='header-fixed-tools flex-row-even'>
            <IoIosTrendingUp size='20px' className='pointer'/>
            <IoIosStats size='20px' className='pointer'/>
            <IoIosCube size='20px' className='pointer'/>
        </div>
    )
}

function HeaderFixedSignup (props) {
    return (
        <div className='header-fixed-signup-login flex-row-even'>
            <button className='header-fixed-signup pointer'>LOG IN</button>
            <button className='header-fixed-login pointer'>SIGN UP</button>
        </div>
    )
}

function HeaderFixedUser (props) {
    return (
        <button className='header-fixed-user flex-row-even pointer'>
            <IoMdPerson size='25px'/>
            <IoMdArrowDropdown size='25px'/>
        </button>
    )
}


class HeaderFixed extends React.Component {
    render() {
        return (
            <div className='header-fixed flex-row-even'>
                    <HeaderFixedLogo />
                    <HeaderFixedSubs />
                    <HeaderFixedSearch />
                    <HeaderFixedTools />
                    <HeaderFixedSignup />
                    <HeaderFixedUser />
            </div>
        );
    }
}

function Banner1 (props) {
    return (
        <div>

        </div>
    )
}

function Banner2 (props) {
    return (
        <div>

        </div>
    )
}

function Banner3 (props) {
    return (
        <div>

        </div>
    )
}


class Header extends React.Component {
    render() {
        return (
            <div className='header-wrapper'>
                <HeaderFixed />
                <Banner1 />
                <Banner2 />
                <Banner3 />
            </div>
        )
    }
}

export { Header };