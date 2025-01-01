import React, { useState, useEffect } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import './NavBar.css';
import NavBarItem from './NavBarItem.js'
import logo from '../tsd-c_logo.png';
import { FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa'; // Import icons from react-icons


function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const [isBurgerMenu, setIsBurgerMenu] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

    useEffect(() => {
        const debounce = (fn, delay) => {
            let timeout;
            return (...args) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => fn(...args), delay);
            };
        };

        const handleResize = debounce(() => {
            const nav = document.querySelector('.NavBar ul');
            const items = document.querySelectorAll('.NavBarItem');
            if (!nav || items.length === 0) {
                return; // Exit if elements are not found
            }
            const navWidth = nav.offsetWidth;
            const itemsWidth = Array.from(items).reduce((total, item) => total + item.offsetWidth, 0);
            setIsBurgerMenu(itemsWidth > navWidth);
        }, 200);

        handleResize(); // Initial call to set the state based on the current size
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); // Cleanup listener
    }, []);

    return (
        <>
            <nav className="NavBar">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                {!isBurgerMenu ? (
                <ul>
                    <NavBarItem label="HOME" action="/"/>
                    <NavBarItem label="About" action="/about"/>
                    <NavBarItem label="Meet The Team" action="/team" />
                    <NavBarItem label="Classes" action="/classes" />
                    <NavBarItem label="Student Library" action="/library" />
                    <NavBarItem label="Contact Us" action="/contact" />
                </ul>
                ) : (
                    <Menu>
                            <NavBarItem label="HOME" action="/" />
                            <NavBarItem label="About" action="/about" />
                            <NavBarItem label="Meet The Team" action="/team" />
                            <NavBarItem label="Classes" action="/classes" />
                            <NavBarItem label="Student Library" action="/library" />
                            <NavBarItem label="Contact Us" action="/contact" />
                    </Menu>
                )}
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