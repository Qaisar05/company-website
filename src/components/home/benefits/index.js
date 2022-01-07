import React from 'react';
import './index.css';

export default () =>{
    return (

<section id="benefits" className="benefits" data-aos="fade-up">
      <div className="container">

        <div className="section-title">
          <h2 className="d-flex flex-column align-items-center justify-content-center">The most complete video editing tool!</h2>
        </div>

        <div className="row content pt-5">
          <div className="col-md-5" data-aos="fade-right" data-aos-delay="100">
            <img src=" assets/imgs/benefit-1.png" className="img-fluid" alt=""></img>
          </div>
          <div className="col-md-7 pt-4" data-aos="fade-left" data-aos-delay="100">
            <h3>Simplest Drag and Drop Editor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper
               ipsum non elit ullamcorper molestie. Vestibulum a luctus metus. Ut in risus
               rhoncus ex vulputate eleifend ut sit amet quam. 
            </p>
          </div>
        </div>

        <div className="row content">
          <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
            <img src=" assets/imgs/benefit-2.png" className="img-fluid" alt=""></img>
          </div>
          <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
            <h3>Get stated with a stock</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper
               ipsum non elit ullamcorper molestie. Vestibulum a luctus metus. Ut in risus
               rhoncus ex vulputate eleifend ut sit amet quam. 
            </p>
          </div>
        </div>

        <div className="row content">
          <div className="col-md-5" data-aos="fade-right">
            <img src=" assets/imgs/benefit-3.png" className="img-fluid" alt=""></img>
          </div>
          <div className="col-md-7 pt-5" data-aos="fade-left">
            <h3>One-click animation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper
               ipsum non elit ullamcorper molestie. Vestibulum a luctus metus. Ut in risus
               rhoncus ex vulputate eleifend ut sit amet quam. 
            </p>            
          </div>
        </div>

        <div className="row content">
          <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
            <img src=" assets/imgs/benefit-4.png" className="img-fluid" alt=""></img>
          </div>
          <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
            <h3>Simple control over timeline</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper
               ipsum non elit ullamcorper molestie. Vestibulum a luctus metus. Ut in risus
               rhoncus ex vulputate eleifend ut sit amet quam. 
            </p>
          </div>
        </div>

      </div>
    </section>
    )
}