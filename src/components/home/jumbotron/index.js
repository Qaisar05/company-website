import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './index.css';

export default () =>{
    return (
        <section id="hero" className="d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center justify-content-center" data-aos="fade-up">
          <h1>Experience the power of video ads
          </h1>
          <h2>To represent a shop
          </h2>
          <img src="assets/imgs/header.png" className="img-fluid hero-img" alt="" data-aos="zoom-in" data-aos-delay="150"></img>
        </div>
        </section>
    )
}