import React from 'react';
import './index.css';

export default () =>{
    return (
<section id="why-us" className="why-us py-5">
    <div className="container-fluid">
      <div className="row pt-5">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-stretch">
          <div className="content" data-aos="fade-up">
            <h3>Promote your 
              business with video 
              animation ads</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
            <div className="button d-flex flex-column align-items-start justify-content-center pt-4">
              <button type="button" className="bton btn-lg">Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 align-items-stretch"> 
        <img src="assets/imgs/why-us.png" className="img-fluid hero-img" alt="" data-aos="zoom-in"></img>        
        </div>
      </div>
    </div>    
  </section>
  )
}