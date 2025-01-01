// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation(); // useLocation returns the current location object

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0); // Wait for the DOM to fully load before scrolling
        }, 100); // Delay of 100ms
    }, [location]);

    return null; // This component does not need to render anything
};

export default ScrollToTop;
