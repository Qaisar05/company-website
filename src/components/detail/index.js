import React from 'react';
import './index.css';

export default () =>{
    return (

<section id="view-templates" className="view-templates mt-5">
    <div className="container" data-aos="fade-up">

      <div className="col-xl-12 col-lg-12 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div className="product">
          <div className="image-box">
            <div className="images" id="image-1">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item w-100" src="assets/imgs/video.mp4" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="text-box">
            <div className="row pt-3">
              <div className="col-8">
                <h4 className="item pt-2">Fusce quis turpis</h4>
              </div>
              <div className="col-4 d-flex justify-content-end">
                <button type="button" className="btn btn-light d-flex justify-content-end"><b>Edit</b><span><img
                      src="assets/imgs/icons/edit.svg" alt="" className="ms-2"></img></span></button>
              </div>
            </div>
            <div>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <div className="d-sm-inline-flex">
              <div className="">
                <img src="assets/imgs/icons/watch.svg" alt=""></img>
              </div>
              <div className="ps-2">
                <p>7s</p>
              </div>
              <div className="ps-5">
                <img src="assets/imgs/icons/gallery.svg" alt=""></img>
              </div>
              <div className="ps-2">
                <p>3</p>
              </div>
              <div className="ps-5">
                <img src="assets/imgs/icons/adjust.svg" alt=""></img>
              </div>
              <div className="ps-2">
                <p>15</p>
              </div>

            </div>


            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis vitae in nunc
            </p>


          </div>
        </div>

      </div>
    </div>
    <div className="d-flex justify-content-center">
        <h3 className="fs-3">Similar Videos</h3>
      </div>
  </section>
  
    )
}