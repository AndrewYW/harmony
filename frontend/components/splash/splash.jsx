import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Splash = ({ currentUser }) => {
  const splash = () => (
    <div>
      <nav className="Navbar">
        <div className="navLogo">
          <img src="/assets/favicon.png" alt=""/>
        </div>
        <ul className="navLeft">
        
        </ul>
        <ul className="navRight">
          <li><a href="https://github.com/AndrewYW/harmony/" className="github">
            <FontAwesomeIcon icon={['fab','github']} />
            Github
          </a></li>
          <li><a href="#" className="github">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
            LinkedIn
          </a></li>
        </ul>
      </nav>
    </div>
  )

  return currentUser ? null : splash();
  //hacky test
};

export default Splash;