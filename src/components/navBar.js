import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = props => {
  return (
    <nav>
      <ul>
        <li><Link
          to="top"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >Home</Link></li>
        <li><Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >About</Link></li>
        <li><Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >Projects</Link></li>
        <li><Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >Contact</Link></li>
        <li><Link
          to="social-media"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >Links</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;