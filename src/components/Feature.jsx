import React, { useEffect } from 'react';
import './feature.css';

export const Feature = () =>{ 
  
    useEffect(() => {
      let left_bar = document.getElementById('left_bar');
      let right_bar = document.getElementById('right_bar');
      let images = document.getElementById('images-change')
      if (right_bar && left_bar) { 
        window.addEventListener('scroll',()=>{
          let x = window.scrollY;
          console.log(x)
          if (x <= 2674) {
            console.log('Image 1');
            images.style.backgroundImage = `url(/images/feature1.png)`;
        } else if (x > 2474 && x <= 3974) {
            console.log('Image 2');
            images.style.backgroundImage = `url(/images/feature2.png)`;
        } else if (x > 4274) {
            console.log('Image 3');
            images.style.backgroundImage = `url(/images/feature3.png)`;
        }
          left_bar.scrollTop =  (x-1850)*0.5
        })
      }
    }, []); 
        


  return (
    <>
    <div className="feature-container">
      <p className="feature-heading">Features</p>
      <div className="main-sticky-container" id="main-sticky">
        <div className="left-section-container" id='left_bar'>
          <div className="feature1-container">
            <h3 className="left-heading"><span className="">Anylyse</span> and categorize</h3>
            <p className="left-text">Our platform analyzes your expense descriptions and automatically categorizes them into predefined categories like Food, Travel, Utilities, and Shopping.</p>
          </div>
          <div className="feature2-container">
            <h3 className="left-heading">Track your expenses</h3>
            <p className="left-text">Track all your expenses seamlessly in one place. Our platform ensures that every transaction is recorded and organized, giving you a clear, up-to-date view of your spending habits with minimal effort.</p>
          </div>
          <div className="feature3-container">
            <h3 className="left-heading">Visualize expenses with interactive graphs</h3>
            <p className="left-text">View your spending with interactive graphs and charts. Customize them to focus on categories and timeframes for clear insights.</p>
          </div>
      </div>
        <div className="right-section-container" id='right_bar' >
          <div className="feature-img-container">
              <div className="feature1-image" id='images-change'></div>
          </div>
          {/* <div className="feature-img-container">
            <div className="feature2-image"></div>
          </div>
          <div className="feature-img-container">
            <div className="feature3-image"></div>
          </div> */}
        </div>   
      </div>
      </div>
    </>
  )
}