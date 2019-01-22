import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Navbar = ({ currentUser }) => {
  const navbar = () => (
    <nav className="Navbar">
      <div className="navLogo">
        <img src="" alt=""/>
      </div>
      <ul className="navLeft">
      
      </ul>
      <ul className="navRight">
        <a href="https://github.com/AndrewYW/harmony/" className="github">
          <FontAwesomeIcon icon={['fab','github']} />
        </a>
      </ul>
    </nav>
  )

  return currentUser ? null : navbar();
};

export default Navbar;