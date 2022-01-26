import React from 'react';
import Navbar from './Navbar';
import '../styles/global.css';
import { Link } from 'gatsby';

const Layout = ({children}) => {
  return (
      <div className="layout">
          <Navbar/>
          <div className="content">
              { children }
          </div>
          <footer>
            <div className="footer-links">
                <Link to="https://www.facebook.com/labp228/" target="_blank">
                    <img src="/facebook-pngrepo-com.png" alt ="facebook" style={{maxWidth: "100%", height: "40px"}}/>
                </Link>
                <Link to="https://github.com/LorieAnnPascual" target="_blank">
                    <img src="/github-pngrepo-com.png" alt ="github" style={{maxWidth: "100%", height: "40px"}}/>
                </Link>
            </div>
            <p>Copyright &copy; 2022 Lorie Ann Pascual</p>
          </footer>
      </div>
  );
};

export default Layout;
