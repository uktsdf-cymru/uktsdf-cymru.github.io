import React, { useState, useEffect } from 'react';
import './NavBar.css';
import NavBarItem from './NavBarItem.js'
import logo from '../tsd-c_logo.png';
import { FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa'; // Import icons from react-icons


function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const [isBurgerMenu, setIsBurgerMenu] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

    useEffect(() => {
        const handleResize = () => {
            const navWidth = document.querySelector('.NavBar ul').offsetWidth;
            const itemsWidth = Array.from(
                document.querySelectorAll('.NavBarItem')
            ).reduce((total, item) => total + item.offsetWidth, 0);

            setIsBurgerMenu(itemsWidth > navWidth);
        };

        // Check on mount and window resize
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
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
                    <div className="burger-menu">
                        <button onClick={toggleMenu} className="burger-icon">
                            M
                        </button>
                        {showMenu && (
                            <div className="dropdown-menu">
                                    <NavBarItem label="HOME" action="/" />
                                    <NavBarItem label="About" action="/about" />
                                    <NavBarItem label="Meet The Team" action="/team" />
                                    <NavBarItem label="Classes" action="/classes" />
                                    <NavBarItem label="Student Library" action="/library" />
                                    <NavBarItem label="Contact Us" action="/contact" />
                            </div>
                        )}
                    </div>
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