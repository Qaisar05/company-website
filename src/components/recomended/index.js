import React from 'react';
import { Link } from 'react-router-dom';

export default () =>{
    return (
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
					<div class="toolbar" id="kt_toolbar">
						<div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
							<div data-kt-swapper="true" data-kt-swapper-mode="prepend"
								data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
								class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
								<h1 class="d-flex align-items-center text-dark fw-bolder fs-3 my-1">Recomended Templates
								</h1>
							</div>
						</div>
					</div>
					<div class="post d-flex flex-column-fluid" id="kt_post">
						<div id="kt_content_container" class="container-xxl">
							<div class="row g-5 g-xl-8">
								<div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
									<div class="product">
										<div class="image-box">
											<div class="images" id="image-1">
												<img src="dist/assets/media/products/templ-1.png" alt=""></img>
											</div>
										</div>
										<div class="text-box pt-3 pt-3">
											<div class="row">
												<div class="col-8">
													<h4 class="item pt-2">Lorem ipsum </h4>
												</div>
												<div class="col-4 d-flex justify-content-end">
												<Link to="editmediapage"><button type="button"
														class="btn btn-outline-dark d-flex justify-content-end"><b>Edit</b><span><img
																src="dist/assets/media/icons/advidbar/edit.svg" alt=""
																class="ms-2"></img></span></button></Link>
												</div>
											</div>
											<div>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star"></span>
												<span class="fa fa-star"></span>
											</div>
											<div class="row">
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/watch.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>7s</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/gallery.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>3</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/adjust.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>15</p>
												</div>
											</div>
											<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Fusce quis vitae in nunc</p>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
									<div class="product">
										<div class="image-box">
											<div class="images" id="image-1">
												<img src="dist/assets/media/products/templ-2.png" alt=""></img>
											</div>
										</div>
										<div class="text-box pt-3">
											<div class="row">
												<div class="col-8">
													<h4 class="item pt-2">Lorem ipsum </h4>
												</div>
												<div class="col-4 d-flex justify-content-end">
													<button type="button"
														class="btn btn-outline-dark d-flex justify-content-end"><b>Edit</b><span><img
																src="dist/assets/media/icons/advidbar/edit.svg" alt=""
																class="ms-2"></img></span></button>
												</div>
											</div>
											<div>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star"></span>
												<span class="fa fa-star"></span>
											</div>
											<div class="row">
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/watch.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>7s</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/gallery.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>3</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/adjust.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>15</p>
												</div>
											</div>
											<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Fusce quis vitae in nunc</p>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
									<div class="product">
										<div class="image-box">
											<div class="images" id="image-1">
												<img src="dist/assets/media/products/templ-3.png" alt=""></img>
											</div>
										</div>
										<div class="text-box pt-3">
											<div class="row">
												<div class="col-8">
													<h4 class="item pt-2">Lorem ipsum </h4>
												</div>
												<div class="col-4 d-flex justify-content-end">
													<button type="button"
														class="btn btn-outline-dark d-flex justify-content-end"><b>Edit</b><span><img
																src="dist/assets/media/icons/advidbar/edit.svg" alt=""
																class="ms-2"></img></span></button>
												</div>
											</div>
											<div>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star"></span>
												<span class="fa fa-star"></span>
											</div>
											<div class="row">
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/watch.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>7s</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/gallery.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>3</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/adjust.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>15</p>
												</div>
											</div>
											<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Fusce quis vitae in nunc</p>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
									<div class="product">
										<div class="image-box">
											<div class="images" id="image-1">
												<img src="dist/assets/media/products/templ-4.png" alt=""></img>
											</div>
										</div>
										<div class="text-box pt-3">
											<div class="row">
												<div class="col-8">
													<h4 class="item pt-2">Lorem ipsum </h4>
												</div>
												<div class="col-4 d-flex justify-content-end">
													<button type="button"
														class="btn btn-outline-dark d-flex justify-content-end"><b>Edit</b><span><img
																src="dist/assets/media/icons/advidbar/edit.svg" alt=""
																class="ms-2"></img></span></button>
												</div>
											</div>
											<div>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star"></span>
												<span class="fa fa-star"></span>
											</div>
											<div class="row">
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/watch.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>7s</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/gallery.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>3</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/adjust.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>15</p>
												</div>
											</div>
											<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Fusce quis vitae in nunc</p>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
									<div class="product">
										<div class="image-box">
											<div class="images" id="image-1">
												<img src="dist/assets/media/products/templ-1.png" alt=""></img>
											</div>
										</div>
										<div class="text-box pt-3">
											<div class="row" >
												<div class="col-8">
													<h4 class="item pt-2">Lorem ipsum </h4>
												</div>
												<div class="col-4 d-flex justify-content-end">
													<button type="button"
														class="btn btn-outline-dark d-flex justify-content-end"><b>Edit</b><span><img
																src="dist/assets/media/icons/advidbar/edit.svg" alt=""
																class="ms-2"></img></span></button>
												</div>
											</div>
											<div>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star"></span>
												<span class="fa fa-star"></span>
											</div>
											<div class="row">
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/watch.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>7s</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/gallery.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>3</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/adjust.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>15</p>
												</div>
											</div>
											<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Fusce quis vitae in nunc</p>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
									<div class="product">
										<div class="image-box">
											<div class="images" id="image-1">
												<img src="dist/assets/media/products/templ-2.png" alt=""></img>
											</div>
										</div>
										<div class="text-box pt-3">
											<div class="row" >
												<div class="col-8">
													<h4 class="item pt-2">Lorem ipsum </h4>
												</div>
												<div class="col-4 d-flex justify-content-end">
													<button type="button"
														class="btn btn-outline-dark d-flex justify-content-end"><b>Edit</b><span><img
																src="dist/assets/media/icons/advidbar/edit.svg" alt=""
																class="ms-2"></img></span></button>
												</div>
											</div>
											<div>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star"></span>
												<span class="fa fa-star"></span>
											</div>
											<div class="row">
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/watch.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>7s</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/gallery.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>3</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/adjust.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>15</p>
												</div>
											</div>
											<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Fusce quis vitae in nunc</p>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
									<div class="product">
										<div class="image-box">
											<div class="images" id="image-1">
												<img src="dist/assets/media/products/templ-3.png" alt=""></img>
											</div>
										</div>
										<div class="text-box pt-3">
											<div class="row">
												<div class="col-8">
													<h4 class="item pt-2">Lorem ipsum </h4>
												</div>
												<div class="col-4 d-flex justify-content-end">
													<button type="button"
														class="btn btn-outline-dark d-flex justify-content-end"><b>Edit</b><span><img
																src="dist/assets/media/icons/advidbar/edit.svg" alt=""
																class="ms-2"></img></span></button>
												</div>
											</div>
											<div>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star"></span>
												<span class="fa fa-star"></span>
											</div>
											<div class="row">
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/watch.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>7s</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/gallery.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>3</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/adjust.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>15</p>
												</div>
											</div>
											<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Fusce quis vitae in nunc</p>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
									<div class="product">
										<div class="image-box">
											<div class="images" id="image-1">
												<img src="dist/assets/media/products/templ-4.png" alt=""></img>
											</div>
										</div>
										<div class="text-box pt-3">
											<div class="row">
												<div class="col-8">
													<h4 class="item pt-2">Lorem ipsum </h4>
												</div>
												<div class="col-4 d-flex justify-content-end">
													<button type="button"
														class="btn btn-outline-dark d-flex justify-content-end"><b>Edit</b><span><img
																src="dist/assets/media/icons/advidbar/edit.svg" alt=""
																class="ms-2"></img></span></button>
												</div>
											</div>
											<div>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star"></span>
												<span class="fa fa-star"></span>
											</div>
											<div class="row">
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/watch.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>7s</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/gallery.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>3</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/adjust.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>15</p>
												</div>
											</div>
											<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Fusce quis vitae in nunc</p>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
									<div class="product">
										<div class="image-box">
											<div class="images" id="image-1">
												<img src="dist/assets/media/products/templ-1.png" alt=""></img>
											</div>
										</div>
										<div class="text-box pt-3">
											<div class="row">
												<div class="col-8">
													<h4 class="item pt-2">Lorem ipsum </h4>
												</div>
												<div class="col-4 d-flex justify-content-end">
													<button type="button"
														class="btn btn-outline-dark d-flex justify-content-end"><b>Edit</b><span><img
																src="dist/assets/media/icons/advidbar/edit.svg" alt=""
																class="ms-2"></img></span></button>
												</div>
											</div>
											<div>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star"></span>
												<span class="fa fa-star"></span>
											</div>
											<div class="row">
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/watch.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>7s</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/gallery.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>3</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/adjust.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>15</p>
												</div>
											</div>
											<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Fusce quis vitae in nunc</p>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
									<div class="product">
										<div class="image-box">
											<div class="images" id="image-1">
												<img src="dist/assets/media/products/templ-2.png" alt=""></img>
											</div>
										</div>
										<div class="text-box pt-3">
											<div class="row">
												<div class="col-8">
													<h4 class="item pt-2">Lorem ipsum </h4>
												</div>
												<div class="col-4 d-flex justify-content-end">
													<button type="button"
														class="btn btn-outline-dark d-flex justify-content-end"><b>Edit</b><span><img
																src="dist/assets/media/icons/advidbar/edit.svg" alt=""
																class="ms-2"></img></span></button>
												</div>
											</div>
											<div>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star"></span>
												<span class="fa fa-star"></span>
											</div>
											<div class="row">
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/watch.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>7s</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/gallery.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>3</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/adjust.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>15</p>
												</div>
											</div>
											<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Fusce quis vitae in nunc</p>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
									<div class="product">
										<div class="image-box">
											<div class="images" id="image-1">
												<img src="dist/assets/media/products/templ-3.png" alt=""></img>
											</div>
										</div>
										<div class="text-box pt-3">
											<div class="row">
												<div class="col-8">
													<h4 class="item pt-2">Lorem ipsum </h4>
												</div>
												<div class="col-4 d-flex justify-content-end">
													<button type="button"
														class="btn btn-outline-dark d-flex justify-content-end"><b>Edit</b><span><img
																src="dist/assets/media/icons/advidbar/edit.svg" alt=""
																class="ms-2"></img></span></button>
												</div>
											</div>
											<div>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star"></span>
												<span class="fa fa-star"></span>
											</div>
											<div class="row">
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/watch.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>7s</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/gallery.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>3</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/adjust.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>15</p>
												</div>
											</div>
											<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Fusce quis vitae in nunc</p>
										</div>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
									<div class="product">
										<div class="image-box">
											<div class="images" id="image-1">
												<img src="dist/assets/media/products/templ-4.png" alt=""></img>
											</div>
										</div>
										<div class="text-box pt-3">
											<div class="row">
												<div class="col-8">
													<h4 class="item pt-2">Lorem ipsum </h4>
												</div>
												<div class="col-4 d-flex justify-content-end">
													<button type="button"
														class="btn btn-outline-dark d-flex justify-content-end"><b>Edit</b><span><img
																src="dist/assets/media/icons/advidbar/edit.svg" alt=""
																class="ms-2"></img></span></button>
												</div>
											</div>
											<div>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star checked"></span>
												<span class="fa fa-star"></span>
												<span class="fa fa-star"></span>
											</div>
											<div class="row">
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/watch.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>7s</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/gallery.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>3</p>
												</div>
												<div class="col-sm-1">
													<img src="dist/assets/media/icons/advidbar/adjust.svg" alt=""></img>
												</div>
												<div class="col-sm-1">
													<p>15</p>
												</div>
											</div>
											<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Fusce quis vitae in nunc</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
    )
}