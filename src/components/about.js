import React from 'react';
import profPic from '../images/aboutMe.jpg';

const About = props => {
  return (
    <div id="about">
      <h3 class="title">About Me</h3>
      <div id="two-cols">
        <div class="about-img"> <img src={profPic} alt="Daniel Rolon"></img> </div>
        <div class="about-bio">
          <p>Hi! I am a full stack web developer,
          dedicated to learning and creating all things code.
          My passion for programming started out with video games
          and quickly lead to a fascination with how users
          interact with software.
          I aspire to use my background in game design and web development to
          create wonderful user experiences in the software I develop.</p>
          <p>If you would like to contact me, please send me an email at: <a href = "mailto: daniel.rolon@yahoo.com">daniel.rolon@yahoo.com</a></p>
        </div>
        <p>&nbsp;</p>
      </div>
      <hr />
    </div>
  );
}

export default About;
