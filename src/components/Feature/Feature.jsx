import React, { useEffect, useState } from 'react';
import './Feature.css';

export const Feature = () =>{ 
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      let left_bar = document.getElementById('left_bar');
      let right_bar = document.getElementById('right_bar');
      let images = document.getElementById('images-change')
      if (right_bar && left_bar) { 
        window.addEventListener('scroll',()=>{
          let x = window.scrollY;
          console.log("live",x)
          let w = window.innerWidth;
          console.log("iam",w)
          let one = 2574
          let two = 3974
          let three = 4274
          if(768<w && w<=1024){
            one = 2574
            two = 3974
            three = 3800
          }else if(1024<w && w<=1440){
            one = 2770 
            two = 4650
            three = 4700 
          }else if (526<w && w<=768){
            one = 2600 
            two = 4000
            three = 4010 
          }

          if (x <= one) {
            images.style.backgroundImage = `url(/images/feature1.png)`;
        } else if (x > one && x <= two) {
            images.style.backgroundImage = `url(/images/feature2.png)`;
        } else if (x > three) {
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
      {windowWidth <= 526 ? (
        <>
          <div className="feature1-container">
            <div className="feature1-image" id='newimg1'></div>
            <h3 className="left-heading"><span className="size-matters Geist-Mono">Anylyse</span> <i>and</i> <span className="size-matters Oswald">categorize</span></h3>
            <p className="left-text">Our platform analyzes your expense descriptions and automatically categorizes them into predefined categories like Food, Travel, Utilities, and Shopping.</p>
          </div>
          <div className="feature2-container">
            <div className="feature2-image" id="newimg2"></div>
            <h3 className="left-heading"><span className="size-matters Geist-Mono">Track</span> <i>your</i> <span className="size-matters Oswald">expenses</span></h3>
            <p className="left-text">Track all your expenses seamlessly in one place. Our platform ensures that every transaction is recorded and organized, giving you a clear, up-to-date view of your spending habits with minimal effort.</p>
          </div>
          <div className="feature3-container">
          <div className="feature3-image" id="newimg3"></div>
            <h3 className="left-heading"><span className="size-matters Geist-Mono">Visualize</span> <i>expenses with interactive</i> <span className="size-matters Oswald">graphs</span></h3>
            <p className="left-text">View your spending with interactive graphs and charts. Customize them to focus on categories and timeframes for clear insights.</p>
          </div>
        </>
      ):(
        <>
        <div className="left-section-container" id='left_bar'>
          <div className="feature1-container">
            <h3 className="left-heading"><span className="size-matters Geist-Mono">Anylyse</span> <i>and</i> <span className="size-matters Oswald">categorize</span></h3>
            <p className="left-text">Our platform analyzes your expense descriptions and automatically categorizes them into predefined categories like Food, Travel, Utilities, and Shopping.</p>
          </div>
          <div className="feature2-container">
            <h3 className="left-heading"><span className="size-matters Geist-Mono">Track</span> <i>your</i> <span className="size-matters Oswald">expenses</span></h3>
            <p className="left-text">Track all your expenses seamlessly in one place. Our platform ensures that every transaction is recorded and organized, giving you a clear, up-to-date view of your spending habits with minimal effort.</p>
          </div>
          <div className="feature3-container">
            <h3 className="left-heading"><span className="size-matters Geist-Mono">Visualize</span> <i>expenses with interactive</i> <span className="size-matters Oswald">graphs</span></h3>
            <p className="left-text">View your spending with interactive graphs and charts. Customize them to focus on categories and timeframes for clear insights.</p>
          </div>
      </div>
      <div className="right-section-container" id='right_bar' >
        <div className="feature-img-container">
            <div className="feature1-image" id='images-change'></div>
        </div>
      </div>
      </>
      )
    }

      </div>
      </div>
    </>
  )
}