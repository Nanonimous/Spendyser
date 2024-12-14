import React, { useState, useEffect } from 'react';



export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
      const handleResize = () => {
          // If the screen width is greater than 768px, close the menu
          if (window.innerWidth > 768) {
              setIsMenuOpen(false);
          }
      };

      // Attach the event listener on mount
      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on unmount
      return () => {
          window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
      <nav>
        <div className="container-navbar">
          <div className="main-navbar">
              <a href="#" className="logoname">Spendyser</a>

              <div className="hamburger" onClick={toggleMenu}>
                <img src='/images/menu1.png' className={!isMenuOpen ? 'burger-logo' : 'burger-logo-active'} alt="" />
              </div>

              <ul className={`nav-ul ${isMenuOpen ? 'nav-active' : 'nav-deactive'}`}>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">FEATURES</a></li>
                <li><a href="#">CONTACT</a></li>
                {isMenuOpen ? <li><div className='getstarted-ham'><a href="#">GET STARTED</a></div></li> : ''}
              </ul>

              <div className="getstarted">
                <a href="">GET STARTED</a>
              </div>

          </div>
        </div>
      </nav>
    )
}