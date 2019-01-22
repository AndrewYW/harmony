import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser }) => {
  const navbar = () => (
    <nav className="Navbar">
      <div className="navLogo">
        asdfjlkadfs
      </div>
      <ul className="navLeft">
      
      </ul>
      <ul className="navRight">
      
      </ul>
    </nav>
  )

  return currentUser ? null : navbar();
};

export default Navbar;