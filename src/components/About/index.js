import React from 'react';
import './index.css';

const About = () => {
  return (
    <section className="about-section container-fluid py-5">
      <div className="row w-100 align-items-center about-row">
        
        <div className="col-md-4 about-image-wrapper text-center">
          <img
            src="https://i.postimg.cc/ZRBnPcMg/Rectangle-1.png"
            alt="Pointing Hand"
            className="img-fluid about-image"
          />
        </div>

        <div className="col-md-8 about-text">
          <h2 className="about-heading">
            <span className="about-heading-highlight">T</span>his is it. :)
          </h2>
          <p className="about-paragraph">
            Anish Kr. Sinha is an Indian <strong>UI/UX Designer & Front End Developer</strong> with a passion for designing beautiful and functional user experiences.
            He’s obsessed with designing cool & clean stuff for the web and mobile. He has been creating since he hung his first painting on the wall at age 11.
          </p>
          <p className="about-paragraph">
            He holds a <strong>bachelor degree in Computer Applications</strong>. For the last 3 years, he has worked with small businesses, events, nonprofits and more.
            Currently based in <strong>Bihar, India</strong>, working as an independent creative.
          </p>
          <p className="about-paragraph">
            He loves <strong>3D floor plan</strong> design and branding work. Outside of design, you'll find him hanging out with his girlfriend, watching series, sketching, or following YouTube tutorials.
          </p>
          <p className="about-email"><strong>Email:</strong> anish@example.com</p>
        </div>

      </div>
    </section>
  );
};

export default About;
