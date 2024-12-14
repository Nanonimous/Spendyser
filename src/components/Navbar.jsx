import React, { useState } from 'react';



export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return (
      <nav>
        <div className="container-navbar">
          <div className="main-navbar">
              <a href="#" className="logoname">Spendyser</a>

              <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>

              <ul className="nav-ul">
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">FEATURES</a></li>
                <li><a href="#">CONTACT</a></li>
              </ul>

              <div className="getstarted">
                <a href="">GET STARTED</a>
              </div>

          </div>
        </div>
      </nav>
    )
}