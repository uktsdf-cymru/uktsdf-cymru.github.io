import React, { useEffect, useState } from 'react';
import logo from '../tsd-c_logo.png';
import backgroundImage from '../bg.jpg';
import './Home.css';

function Home() {
    const [backgroundClass, setBackgroundClass] = useState('initial-bg');
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        // Change background after 2 seconds
        const timer = setTimeout(() => {
            setBackgroundClass('final-bg');
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Fetch blog posts from Jekyll's JSON endpoint
        fetch('https://<your-github-pages-url>/blog.json')
            .then((response) => response.json())
            .then((data) => setBlogPosts(data))
            .catch((error) => console.error('Error fetching blog posts:', error));
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

            {/* Blog section */}
            <div className="blog-section">
                {blogPosts.length > 0 ? (
                    <ul className="blog-list">
                        {blogPosts.map((post) => (
                            <li key={post.id} className="blog-post">
                                <a href={post.url}>{post.title}</a>
                                <p>
                                    <small>{new Date(post.date).toLocaleDateString()}</small>
                                </p>
                                <p>{post.excerpt}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading blog posts...</p>
                )}
            </div>
        </div>
    );
}

export default Home;
