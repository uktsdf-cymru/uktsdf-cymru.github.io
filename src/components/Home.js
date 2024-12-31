import React, { useEffect, useState } from 'react';
import logo from '../tsd-c_logo.png';
import backgroundImage from '../bg.jpg'; // Import the image
import './Home.css';

function Home() {
    const [backgroundClass, setBackgroundClass] = useState('initial-bg');

    useEffect(() => {
        const timer = setTimeout(() => {
            setBackgroundClass('final-bg');
        }, 2000); // Change background after 2 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`App-content ${backgroundClass}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

export default Home;
