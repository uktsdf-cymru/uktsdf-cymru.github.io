import React, { useEffect, useState } from 'react';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';
import './Gallery.css';

function Gallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('/gallery/index.html')
            .then((response) => response.text())
            .then((html) => {
                // Parse the gallery HTML to extract image details
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const imgElements = doc.querySelectorAll('.img-gallery');
                const imageUrls = Array.from(imgElements).map((img) => ({
                    src: img.getAttribute('src'),
                    title: img.getAttribute('alt') || 'Gallery Image',
                    description: '', // Optional description
                }));
                setImages(imageUrls);
            })
            .catch((error) => console.error('Error loading gallery:', error));
    }, []);

    return (
        <div className="sectionPage">
            <h2>Gallery</h2>
            {images.length > 0 ? (
                <Lightbox
                    images={images}
                />
            ) : (
                <p>Loading gallery...</p>
            )}
        </div>
    );
}

export default Gallery;
