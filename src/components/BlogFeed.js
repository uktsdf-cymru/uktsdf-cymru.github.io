import React, { useEffect, useState } from 'react';

function BlogFeed() {
    const [blogHTML, setBlogHTML] = useState('');

    useEffect(() => {
        // Fetch the rendered blog HTML
        fetch('/blog/index.html')
            .then((response) => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Failed to fetch blog content');
            })
            .then((html) => setBlogHTML(html))
            .catch((error) => console.error('Error fetching blog content:', error));
    }, []);

    return (
        <div>
            <h2>Latest Blog Posts</h2>
            {/* Render the fetched HTML */}
            <div dangerouslySetInnerHTML={{ __html: blogHTML }} />
        </div>
    );
}

export default BlogFeed;
