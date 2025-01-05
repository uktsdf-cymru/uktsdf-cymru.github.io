import React, { useEffect, useState } from 'react';

function Gallery() {

    const [galleryHTML, setGalleryHTML] = useState('');

    useEffect(() => {
        // Fetch the rendered gallery HTML
        fetch('/gallery')
            .then((response) => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Failed to fetch gallery content');
            })
            .then((html) => setGalleryHTML(html))
            .catch((error) => console.error('Error fetching gallery content:', error));
    }, []);

    return (
        <div className='sectionPage'>
            <div dangerouslySetInnerHTML={{ __html: galleryHTML }} />
        </div>
    );
}

export default Gallery;