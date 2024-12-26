import React from "react";
import "../about.css";
import Abouttwo from "../assets/aboutTwo.png";
const About = () => {
  return (
    <section className="about-me">
      <div className="about-container">
        <div className="about-content">
          <h4 className="about-heading">About Me</h4>
          <h1 className="about-title">
            I’m developing Responsive Websites.
          </h1>
          <p className="about-description">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC, making
            it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not
            simply random text.
          </p>
          <div className="skills">
            <div className="skill ts">
                  <div className="progress-bar">
                      <div className="progress" style={{ width: "90%" }}></div>
                  </div>
            </div>
            <div className="skill fd">
              <div className="progress-bar">
                <div className="progress" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill ra">
              <div className="progress-bar">
                <div className="progress" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={Abouttwo} alt="About Me" />
        </div>
      </div>
    </section>
  );
};

export default About;
