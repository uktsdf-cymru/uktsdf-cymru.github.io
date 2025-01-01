import React, { useState, useEffect } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import './NavBar.css';
import NavBarItem from './NavBarItem.js'
import logo from '../tsd-c_logo.png';
import { FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa'; // Import icons from react-icons


function NavBar() {
    
    return (
        <>
            <nav className="NavBar">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
                    <a  href="/">Home</a>
                    <a  href="/about">About</a>
                    <a  href="/team">Meet The Team</a>
                    <a href="/classes">Classes</a> 
                    <a  href="/library">Student Library</a> 
                    <a  href="/contact">Contact Us</a> 
                </Menu>
                <ul className="navbar-items">
                    <NavBarItem label="Home" action="/"/>
                    <NavBarItem label="About" action="/about"/>
                    <NavBarItem label="Meet The Team" action="/team" />
                    <NavBarItem label="Classes" action="/classes" />
                    <NavBarItem label="Student Library" action="/library" />
                    <NavBarItem label="Contact Us" action="/contact" />
                </ul>
                <div className="social-icons">
                    <a
                        href="https://www.facebook.com/regiononewales"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook size={24} />
                    </a>
                    <a
                        href="https://www.youtube.com/@Tangsoodocymru"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube size={24} />
                    </a>
                    <a
                        href="https://www.tiktok.com/@tsdcymru"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTiktok size={24} />
                    </a>
                </div>
            </nav>
        </>
    );
}

export default NavBar