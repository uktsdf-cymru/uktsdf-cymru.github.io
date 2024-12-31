import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InstructorDetail from './InstructorDetail';
import './Instructors.css';

const instructors = [
    {
        name: 'Master Nicholas Houghton 6th Dan',
        picture: '/images/nic.png',
        bio: [
            'As the lead instructor for South Wales, Master Houghton 6th Dan continues to pass down the knowledge from his instructor.Starting training in martial arts in 1988 beginning with Judo and boxing and continuing with Tang Soo Do in 1990. This was under the instruction of Master Eammon Mc Gonigle and Grandmaster Chin.',
            'After relocating to South Wales 2004 he set up Tang Soo Do Cymru, with the help of his assistant instructors he runs 11 classes each week including after school clubs and ladies only sessions.',
            'Master Houghton had his first international trip in 1993, taking part in the United Kingdom demonstration team, also competing in the Greece National Championships winning second place.After retuning taking his midnight blue belt(black belt) in 1994 and his masters belt in 2007.',
            'Master Houghton was encouraged to cross train and gain experience in many different combat styles of martial arts including Judo, Ninjutsu, Muay Thai, Boxing, MMA, Karate, krav maga and Jiujitsu.',
        ],
    },
    {
        name: 'Rhiannon O\'Neil 3rd Dan',
        picture: '/images/rhix.png',
        bio: [
            'Assistant Instructor for Tiny Tigers, Dragons and Mixed session.',
            'Rhix, as she is affectionatley known, started Tang Soo Do in 2007 at the age of 12, Rhix has taken part in world championships in Malaysia 2015, United Kingdom 2018 and she is competing once again in the United Kingdom 2025.'
        ],
    },
    {
        name: 'Tom Jenkins-Welch 2nd Dan',
        picture: '/images/tom.png',
        bio: [
            'Dragons instructor and assistant in mixed sessions.',
            'Tom is preparing for his first world championships in United Kingdom in September 2025.'
        ],
    },
    {
        name: 'David Shaw 3rd Dan',
        picture: '/images/david.png',
        bio: [
            'Assistant in the mixed sessions',
            'David has taken part in the United Kingdom world championships in 2018 winning second place.'
        ],
    },
    {
        name: 'Emma Mudie 2nd Dan',
        picture: '/images/emma.png',
        bio: [
            'Lead instructor for Tiny Tigers, safeguarding officer, Ladies class instructor and assistant for mixed sessions and Dragons.',
            'Emma first got involved in Tang Soo Do when her son Jack joined in 2015. After watching from the back and being the TSD "mum", in 2018 she was encouraged to join by our late Grand Master Lee who felt that Tang Soo Do is a family tradition, and it really pleases her to see so many parents training with their children.',
            'Emma retired as a Police Officer after 30 years\' service specialising in children and safeguarding. She now work as a special needs support assistant for a child with behavioural difficulties.'
        ],
    },
];

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="arrow next" onClick={onClick}>
            &#9654;
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="arrow prev" onClick={onClick}>
            &#9664;
        </div>
    );
};

const Instructors = () => {
    const [selectedInstructor, setSelectedInstructor] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="sectionPage">
            <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
                <Slider {...settings}>
                    {instructors.map((instructor, index) => (
                        <div key={index} onClick={() => setSelectedInstructor(instructor)}>
                            <div className="image-container">
                                    <img src={instructor.picture} alt={instructor.name} />
                            </div>
                            <h3>{instructor.name}</h3>
                        </div>
                    ))}
                </Slider>
            </div>
            {selectedInstructor && (
                <InstructorDetail
                    instructor={selectedInstructor}
                    onClose={() => setSelectedInstructor(null)}
                />
            )}
        </div>
    );
};

export default Instructors
