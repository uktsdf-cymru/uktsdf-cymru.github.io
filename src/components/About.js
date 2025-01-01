import React, { useEffect } from 'react';
import './About.css';

const About = () => {
    const sections = [
        {
            title: "What is Tang Soo (Soo Bhak) Do",
            content: `Tang Soo Do is a Korean Martial Art much the same as karate and can include 
            fighting principles from Tai Chi, Taekkyeon and Subak, as well as northern and southern 
            Chinese martial arts. From its beginnings in 1944 to today, Tang Soo Do is used by some 
            Kwans to identify their traditional Korean fusion of fighting styles.`,
        },
        {
            title: "UKTSDF Mission Statement",
            content: `The United Kingdom Tang Soo (Soo Bahk) Do Federation [UKTSDF] is dedicated to the provision 
            of high quality Korean Martial Art education and training. The Federation aims to strengthen its 
            contribution to the international provision of higher Tang Soo Do education/training and to develop 
            further its national and international reputation. It intends to build upon the existing productive 
            linkages with existing national governing bodies and to meet any specific needs especially disabled 
            students, women and children. The UKTSDF intends to remain an institution, which is responsive to 
            changing environmental and technical excellence, and its management will work constantly to sustain 
            and develop further and internal climate, which is receptive to the aim. The total activity of the 
            UKTSDF will be dedicated towards providing a stimulated learning environment for students. The 
            instructors will be encouraged to explore new ideas in teaching, learning and research to pursue 
            technical initiatives compatible with the UKTSDF ethos.`,
        },
        {
            title: "United Kingdom History",
            content: `In 1972 The Chief Instructor of Southeast Asia, Grand Master Kang Uk Lee gave permission 
            for one of his students from Malaysia, Mr Ivan C H Tnay Black Belt 2nd Dan, to start Tang Soo Do 
            classes in the United Kingdom. Mr Ivan C H Tnay arrived in the United Kingdom in the Autumn of 1972 
            to study Accountancy. Mr Tnay taught Tang Soo Do at the YMCA in Watford until Grand Master K U Lee's 
            arrival in the Spring of 1974. Grand Master Lee came to the United Kingdom as the representative of 
            the Korean Soo Bahk Do Association.

            The United Kingdom Tang Soo (Soo Bahk) Do Federation (UKTSDF) was founded in 1974. Grand Master K U Lee 
            was appointed the Chief Instructor/Technical Advisor and Mr. Ivan C H Tnay, the founder Secretary 
            General. In 1976 Grand Master Lee was elected as President, the position he still holds today. The 
            UKTSDF expanded to all parts of the United Kingdom.

            After three decades of Tang Soo Do promotion in the UK, the Federation has trained over 27,000 members 
            and is the official sole governing body for the Korean Martial Art of Tang Soo Do in Great Britain as 
            recognised by Sport England. From its foundation in 1974 as a martial arts body offering Tang Soo Do 
            training, the UKTSDF has risen to become one of Britain's leading martial arts organisations under the 
            leadership of our President.

            The Federation had to register its emblem of a closed fist flanked with a circle of laurel leaves above
            Korean or Chinese wordings in 1987 to prevent other Tang Soo Do organisations in the United Kingdom from
            passing-off as the UKTSDF. The said Federation Championship Team participated in the 12th World
            Championships held in Greece in 2007 and will be sending a strong team of 20 participants to the
            forthcoming 13th World Championship to be held in Adelaide, Australia in 2009.

            The technical improvement, championship successes and popularity of the UKTSDF over the years have
            naturally been a source of immense satisfaction. So too, has the development of students'/members'
            facilities, seminars, referee/judges' courses and newsletters within the UKTSDF. The history of the
            UKTSDF is one of continued expansion - physically and technically. The UKTSDF textbook was written by
            Grand Master Kang Uk Lee and published by A & C Black Limited of London in April 1998.

            A substantial portion of that success must be credited to the rigorously planned teaching method, which
            was introduced by our President, Grand Master Lee and implemented by the Executive Committee, Master
            instructors and assistant instructors. Throughout our period of expansion our basic priority has
            remained: to provide the best possible environment, technically and socially, for everyone who teaches
            and trains with the United Kingdom Tang Soo (Soo Bahk) Do Federation.
            `,
        },
    ];

    useEffect(() => {
        const handleVisibility = () => {
            const elements = document.querySelectorAll('.section');
            elements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                // doesn't work for some reason??
                //if (rect.top < window.innerHeight) {
                //    el.classList.add('visible');
                //}
                el.classList.add('visible');
            });
        };

        // Check visibility on page load
        handleVisibility();

        // Add scroll event listener
        window.addEventListener('scroll', handleVisibility);

    }, []);

    return (
        <div className="About">
        <div className="sectionPage">
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`section ${index % 2 === 0 ? 'light-bg' : 'dark-bg'}`}
                >
                    <h2 className="section-title">{section.title}</h2>
                    <p className="section-content">{section.content}</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default About;
