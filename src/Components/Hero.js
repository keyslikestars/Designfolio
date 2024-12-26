import React from 'react';
import '../Hero.css';
import michael from '../assets/homeTwoBannerImg.png';

const Hero = () => {

    return (
        <div className="hero-section">
            <div className='img-contentsection'>
                <div className="hero-image">
                    <img src={michael} alt="Michael" />
                </div>
                <div className="text-content">
                    <div className='subtext-content'>
                        <p className="welcome-text">I'M GLAD YOU'RE HERE.</p>
                        <h1>
                            Hello I’m <span className="highlight">Arun</span><br />
                            A Freelance Web Developer
                        </h1>
                        <p className="description">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                        </p>
                        <button className="chatbtn">Let’s Chat ➔</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
