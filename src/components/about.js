import React from 'react';
import profPic from '../images/aboutMe.jpg'

const About = props => {
  return (
    <div id="about">
      <h3 class="title">About Me</h3>
      <div id="two-cols">
        <div class="about-img"> <img src={profPic} alt="Daniel Rolon"></img> </div>
        <div class="about-bio">
          <p>Hi! I am full stack web developer,
          dedicated to learning and creating all things code.
          My passion for programming started out with video games
          and quickly lead to a fascination with how users
          interact with software.
          I aspire to use my background in game design to
          create wonderful user experiences in the software and web applications I develop.</p>
        </div>
        <p>&nbsp;</p>
      </div>
      <hr />
    </div>
  );
}

export default About;
