import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const SocialMedia = props => {
  return (
    <footer id="social-media">

      <ul>
        <li><a href="https://twitter.com/DanRolonC" target="blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="https://www.facebook.com/drolonc" target="blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li><a href="https://www.linkedin.com/in/danielrolonc/" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
      </ul>

      <p>All content on this site is copyright &copy; {new Date().getFullYear()}</p>
      <p>Daniel Rolon</p>

    </footer>
  );
}

export default SocialMedia;
