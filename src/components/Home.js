import React, { useEffect, useState } from 'react';
import logo from '../tsd-c_logo.png';
import backgroundImage from '../bg.jpg';
import './Home.css';
import BlogFeed from './BlogFeed';
import UpcomingEvents from './UpcomingEvents';

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
                <div className="cta-container">
                    <img src={logo} className="App-logo animate-logo" alt="logo" />
                    <div className="text-container animate-text">
                        <h1 className="cta-heading">Tang Soo Do Cymru</h1>
                        <p className="cta-subtext">Join us and discover the benefits of training today!</p>
                    </div>
                </div>
            </div>
            <UpcomingEvents/>
            <BlogFeed/>
        </div>
    );
}

export default Home;
