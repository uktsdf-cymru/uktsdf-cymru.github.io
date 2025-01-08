import React, { useEffect, useState } from 'react';

function UpcomingEvents() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch the JSON file from the public directory
        fetch('/events.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch events data');
                }
                return response.json();
            })
            .then((data) => {
                // Filter out past events
                const today = new Date();
                const filteredEvents = data.filter((event) => {
                    const eventDate = new Date(event.date);
                    return eventDate >= today;
                });
                setEvents(filteredEvents);
            })
            .catch((error) => console.error('Error loading events:', error));
    }, []);

    return (
        <div className="upcoming-events">
            <h2>Upcoming Events</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Event</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {events.length > 0 ? (
                        events.map((event, index) => (
                            <tr key={index}>
                                <td>{event.date}</td>
                                <td>{event.event}</td>
                                <td>{event.location}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No upcoming events found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UpcomingEvents;
