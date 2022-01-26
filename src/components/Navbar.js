import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <div className="Navbar">
        <h1>Lorie</h1>
        <div className="links">
            <Link to="/">HOME</Link>
            <Link to="/About">ABOUT</Link>
            <Link to="/Projects">PROJECTS</Link>
            <Link to="/Contact">CONTACT</Link>
        </div>
    </div>
  );
};

export default Navbar;
