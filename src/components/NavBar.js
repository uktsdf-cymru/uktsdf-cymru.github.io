import React from 'react';
import './NavBar.css';
import NavBarItem from './NavBarItem.js'
import logo from '../tsd-c_logo.jpg';

function NavBar() {
    return (
        <>
            <nav className="NavBar">
                <ul>
                    <NavBarItem label="HOME" action="/"/>
                    <NavBarItem label="Meet The Team" action="/team"/>
                    <NavBarItem label="Classes" action="/classes" />
                    <NavBarItem label="Student Library" action="/library" />
                    <NavBarItem label="Contact Us" action="/contact" />
                </ul>
            </nav>
        </>
    );
}

export default NavBar