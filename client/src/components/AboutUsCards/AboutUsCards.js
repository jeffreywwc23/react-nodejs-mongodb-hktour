import React from 'react';
import './AboutUsCards.css';

import video from '../../assets/img/video.mp4';

export default function AboutUsCards() {
    return (
        <div className="banner">
            <video muted autoPlay loop type="mp4">
                <source src={video} type="video/mp4" />
            </video>

            <div className="textBox">
                <h1>About Us</h1>
                <span className="info__spacer"></span>
                <p>Our expertise is to create trips tailored to the needs of our customers, in order for them to truly experience each destination rather than view it. We can serve travel arrangements for solo travelers, families, couples, groups of friends, business trips and large groups for all budgets.
                We offer a wide variety of excursions and private tours with multilingual personal guides and escorts, from 1 person to a large group of people, with luxurious buses or our V.I.P. Minibus, including exquisite mainland and island cultural sightseeing.
                </p>
            </div>

            <div className="videoBox">
                <video src={video} muted autoPlay loop type="mp4"></video>
            </div>
        </div>
    )
};

