import React from 'react';
import './index.css';

export default () =>{
    return (

 <section id="connect" className="connect section-bg ">
 <div className="container" data-aos="fade-up">
   <div className="row">
     <div className="col-md-6">
       <h6>Connect with Animator</h6>
       <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
       <div className="social-links mt-3">
         <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
         <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
         <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
         <a href="#" className="pinterest"><i className="bi bi-google"></i></a>
         <a href="#" className="youtube"><i className="bi bi-youtube"></i></a>
       </div>
     </div>
     <div className="col-md-6 mt-4 mt-md-0">
       <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
         <h6>Get News, Offers & Tips
         </h6>
         <p>The generated Lorem Ipsum is therefore always free from repetition, 
           injected humour, or non-characteristic words etc.</p>
           <form className="row g-3 mb-2">                                        
             <div className="col-auto">
               <input type="text" className="form-control form-control-solid rounded-20"   placeholder="Enter Email Address"></input>
             </div>
             <div className="col-auto">
               <button type="button" className="btn btn-lg">Join
               </button>
             </div>
           </form>
       </div>
     </div>
   </div>
 </div>
</section>
)
}