import React from 'react';
import { Link } from 'gatsby';


const Navbar = () => {
  return (
    <div className="container-sm Navbar">
        <Link to="/">
          <figure>
            <img src="/mylogo.png" alt="logo" height="30px" />
          </figure>
        </Link>
        <div className="links">
            <Link to="/" className="nav-item">HOME</Link>
            <Link to="/About" className="nav-item">ABOUT</Link>
            <Link to="/Projects" className="nav-item">PROJECTS</Link>
            <Link to="/Contact" className="nav-item">CONTACT</Link>
        </div>
    </div>
  );
};

export default Navbar;
