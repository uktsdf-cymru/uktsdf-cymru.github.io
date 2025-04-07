import React, { useEffect, useState } from 'react';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';
import './Gallery.css';

function Gallery() {
    const [albums, setAlbums] = useState({});
    const [currentAlbum, setCurrentAlbum] = useState('');

    useEffect(() => {
        fetch('/gallery/index.html')
            .then((response) => response.text())
            .then((html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const imgElements = doc.querySelectorAll('.img-gallery');
                const albumMap = {};

                imgElements.forEach((img) => {
                    const src = img.getAttribute('src');
                    const title = img.getAttribute('alt') || 'Gallery Image';
                    const match = src.match(/images\/gallery\/([^/]+)/);
                    let album = match ? decodeURIComponent(match[1]) : 'Default';
                    // Optional: Replace dashes/underscores with spaces and capitalize
                    album = album.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

                    const image = {
                        src,
                        title,
                        description: '',
                    };

                    if (!albumMap[album]) albumMap[album] = [];
                    albumMap[album].push(image);
                });

                setAlbums(albumMap);
                setCurrentAlbum(Object.keys(albumMap)[0] || '');
            })
            .catch((error) => console.error('Error loading gallery:', error));
    }, []);

    return (
        <div className="sectionPage">
            <h2>Gallery</h2>

            <div className="album-selector">
                {Object.keys(albums).map((albumName) => (
                    <button
                        key={albumName}
                        onClick={() => setCurrentAlbum(albumName)}
                        className={albumName === currentAlbum ? 'active' : ''}
                    >
                        {albumName}
                    </button>
                ))}
            </div>

            {albums[currentAlbum]?.length > 0 ? (
                <Lightbox images={albums[currentAlbum]} />
            ) : (
                <p>Loading gallery...</p>
            )}
        </div>
    );
}

export default Gallery;
