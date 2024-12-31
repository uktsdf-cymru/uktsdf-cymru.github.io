import React from 'react';
import './InstructorDetail.css';

const InstructorDetail = ({ instructor, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div className="instructor-detail">
                    <img src={instructor.picture} alt={instructor.name} className="instructor-image" />
                    <div className="instructor-bio">
                        <h2>{instructor.name}</h2>
                        {instructor.bio.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorDetail;