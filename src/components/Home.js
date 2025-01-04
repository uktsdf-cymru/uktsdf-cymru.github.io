import React, { useEffect, useState } from 'react';
import logo from '../tsd-c_logo.png';
import backgroundImage from '../bg.jpg';
import './Home.css';
import BlogFeed from './BlogFeed';

function Home() {
    const [backgroundClass, setBackgroundClass] = useState('initial-bg');

    useEffect(() => {
        // Change background after 2 seconds
        const timer = setTimeout(() => {
            setBackgroundClass('final-bg');
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {/* Call-to-action section */}
            <div
                className={`App-content ${backgroundClass}`}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <img src={logo} className="App-logo" alt="logo" />
                {/*
                <h1>Welcome to Our Website</h1>
                <p>Join us and discover the benefits of training today!</p>
                <button className="cta-button">Get Started</button>
                */}
            </div>
            <BlogFeed/>
        </div>
    );
}

export default Home;
