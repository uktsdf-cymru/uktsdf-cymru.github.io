import React, { useState, useEffect } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './NavBar.css';
import NavBarItem from './NavBarItem.js'
import logo from '../tsd-c_logo.png';
import { FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa'; // Import icons from react-icons


function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close the menu when a link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };
    
    return (
        <>
            <nav className="NavBar">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <Menu
                    pageWrapId={"page-wrap"}
                    outerContainerId={"outer-container"}
                    isOpen={isMenuOpen}
                    onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)} // Sync state with menu
                >
                    <Link to="/" onClick={handleLinkClick}>Home</Link>
                    <Link to="about" onClick={handleLinkClick}>About</Link>
                    <Link to="team" onClick={handleLinkClick}>Meet The Team</Link>
                    <Link to="gallery" onClick={handleLinkClick}>Gallery</Link>
                    <Link to="classes" onClick={handleLinkClick}>Classes</Link>
                    <Link to="library" onClick={handleLinkClick}>Student Library</Link>
                    <Link to="contact" onClick={handleLinkClick}>Contact Us</Link> 
                </Menu>
                <ul className="navbar-items">
                    <NavBarItem label="Home" action="/"/>
                    <NavBarItem label="About" action="about"/>
                    <NavBarItem label="Meet The Team" action="team" />
                    <NavBarItem label="Gallery" action="gallery" />
                    <NavBarItem label="Classes" action="classes" />
                    <NavBarItem label="Student Library" action="library" />
                    <NavBarItem label="Contact Us" action="contact" />
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