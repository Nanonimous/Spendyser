import React, { useState ,useEffect} from 'react';
import './Useit.css';

export const Useit = () => {
  const [isPressed, setIsPressed] = useState(false);

  // Handle mousedown event
  const handleMouseDown = () => {
    setIsPressed(true);
  };

  // Handle mouseup event
  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <>
      <div className="useit-container">
        <div className="title-container">
        <h2 className='useit-text Roboto-Mono'>So, What Your <span className='text1 Geist-Mono'>Waiting</span> for ?</h2>
        </div>
        <div className="img-container">
          <a href='https://zenotion.college/'> <div
            className="hover-area"
            onMouseDown={handleMouseDown}   // Trigger when mouse button is pressed
            onMouseUp={handleMouseUp}       // Trigger when mouse button is released
          ></div>
          </a>
          <img
            src="/images/button.png"
            className={`button ${isPressed ? 'pressed' : ''}`} // Apply 'pressed' class when button is pressed
            alt=""
          />
          <img src="/images/startNow.png" className="get-started" alt="" />
        </div>
      </div>
    </>
  );
};
