import React, { useEffect, useState } from 'react';
import './Useit.css';

export const Useit = () =>{
  return (
    <>
      <div className="useit-container">
        <div className="title-container">
          <p className='Roboto-Mono'>Try <span className='titleitis Jersey'>Spendyzer</span> Now</p>
        </div>
        <div className="button-container">
          <div className="getstarted">
              <a href="">GET STARTED</a>
          </div>
        </div>
      </div>
    </>
  )
}