import React, { useEffect } from 'react';
import './MainLanch.css'

export const MainLanch = () =>{

  useEffect(() => {
    let city_comp = document.getElementById('city');
    let moon_comp = document.getElementById('moon');
    let sky_comp = document.getElementById('sky');
    let text_comp = document.getElementById('main-text');
    if (city_comp && moon_comp && sky_comp && text_comp) { // Check if the element exists
      window.addEventListener("scroll",()=>{
        let val = window.scrollY;
        moon_comp.style.top = (val * 0.5) + "px"; 
        sky_comp.style.top = (val * 0.3) + "px"; 
        city_comp.style.top = (val * 0.1) + "px"; 
        text_comp.style.top = (val * 0.55) + "px";
      })
    }
  }, []);

  return (
    <>
    <div className="container-main">
      <div className="images-container">
        <div className="image-city" id="city"></div>
        <div className="center-text" id="main-text">
          <p>Expense Analyser</p>
        </div>
        <div className="image-moon" id="moon"></div>
        <div className="image-sky" id="sky"></div>
      </div>
    </div>
    <div className="about-container">
      <h4>About <span className='spec-font-spendyser'>Spendyser</span></h4>
      <p><span className='spec-font-spendyser'>Spendyser</span> is an intelligent web application designed to help users <span className='spec-font-other1'><i>analyze</i></span> their expense <span className='spec-font-other1'><i>descriptions</i></span> and <span className='spec-font-other1'><i>categorize</i></span> them into predefined categories. It empowers users to understand their spending habits better by offering clear <span className='spec-font-other2'><i>visualizations</i></span> of their expenses using <span className='spec-font-other2'><i>graphs</i></span> and <span className='spec-font-other2'><i>charts</i></span>. Whether you're tracking personal finances or managing small business expenses, Spendyzer ensures your spending insights are just a few clicks away.</p>
    </div>
    </>
  )
}