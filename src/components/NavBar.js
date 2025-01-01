import React from 'react';
import './NavBar.css';
import NavBarItem from './NavBarItem.js'
import logo from '../tsd-c_logo.jpg';
import { FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa'; // Import icons from react-icons


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