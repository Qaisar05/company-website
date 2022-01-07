import React from 'react';

export default () =>{
    return (

<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
					<div class="toolbar" id="kt_toolbar">
						<div id="kt_toolbar_container" class="container d-flex">
							<div data-kt-swapper="true" data-kt-swapper-mode="prepend"
								data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
								class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
								<h1 class="d-flex align-items-center text-dark fw-bolder fs-3 my-1">My Videos</h1>
							</div>
							<div class="d-flex">
								<ul class="nav nav-tabs nav-line-tabs mb-0 fs-6 ms-10">
									<li class="nav-item dropdown">
										<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
											role="button" aria-expanded="false">Video Type</a>
										<ul class="dropdown-menu">
											<li><a class="dropdown-item" href="#"><img
														src="dist/assets/media/icons/advidbar/accessories-sm.svg"></img> Accessories</a></li>
											<li>
												<hr class="dropdown-divider"></hr>
											</li>
											<li><a class="dropdown-item" href="#"><img
														src="dist/assets/media/icons/advidbar/parts-sm.svg"></img> Parts</a></li>
											<li>
												<hr class="dropdown-divider"></hr>
											</li>
											<li><a class="dropdown-item" href="#"><img
														src="dist/assets/media/icons/advidbar/services-sm.svg"></img> Services</a>
											</li>
											<li>
												<hr class="dropdown-divider"></hr>
											</li>
											<li><a class="dropdown-item" href="#"><img
														src="dist/assets/media/icons/advidbar/devices-sm.svg"></img> Devices</a>
											</li>
										</ul>
									</li>
									<li class="nav-item dropdown">
										<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
											role="button" aria-expanded="false">Duration</a>
										<ul class="dropdown-menu">
											<li><a class="dropdown-item" href="#"><input class="form-check-input me-1"
														type="checkbox" value="" id="flexCheckDefault"></input> Variable
													Duration</a></li>
											<li>
												<hr class="dropdown-divider"></hr>
											</li>
											<li><a class="dropdown-item" href="#"><input class="form-check-input me-1"
														type="checkbox" value="" id="flexCheckDefault"></input> 1m+</a></li>
											<li>
												<hr class="dropdown-divider"></hr>
											</li>
											<li><a class="dropdown-item" href="#"><input class="form-check-input me-1"
														type="checkbox" value="" id="flexCheckDefault"></input> 30-60s</a></li>
											<li>
												<hr class="dropdown-divider"></hr>
											</li>
											<li><a class="dropdown-item" href="#"><input class="form-check-input me-1"
														type="checkbox" value="" id="flexCheckDefault"></input> 15-30s</a></li>
											<li>
												<hr class="dropdown-divider"></hr>
											</li>
											<li><a class="dropdown-item" href="#"><input class="form-check-input me-1"
														type="checkbox" value="" id="flexCheckDefault"></input> 0-15s</a></li>
										</ul>
									</li>
									<li class="nav-item dropdown">
										<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
											role="button" aria-expanded="false">Format</a>
										<ul class="dropdown-menu">
											<li><a class="dropdown-item" href="#"><input class="form-check-input me-1"
														type="checkbox" value="" id="flexCheckDefault"></input> Square</a></li>
											<li>
												<hr class="dropdown-divider"></hr>
											</li>
											<li><a class="dropdown-item" href="#"><input class="form-check-input me-1"
														type="checkbox" value="" id="flexCheckDefault"></input> Portrait</a>
											</li>
											<li>
												<hr class="dropdown-divider"></hr>
											</li>
											<li><a class="dropdown-item" href="#"><input class="form-check-input me-1"
														type="checkbox" value="" id="flexCheckDefault"></input> Landscape</a>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="post d-flex flex-column-fluid" id="kt_post">
						<div id="kt_content_container" class="container-xxl">
							<h3 class="pb-5">09/14/2021 Tuesday</h3>
							<div class="row g-5 g-xl-8">
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
														class="btn btn-outline-dark btn-sm d-flex justify-content-end"
														data-bs-toggle="dropdown" aria-expanded="false">
														<b>More</b><span><img src="dist/assets/media/icons/advidbar/more.svg"
																alt="" class="ms-2"></img></span>
													</button>
													<ul class="dropdown-menu">
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/editing.svg"></img>
																Editing</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/copy.svg"></img> Make a
																Copy</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/rename.svg"></img> Rename
																Project</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/favourite.svg"></img> Add
																to Favourite</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/remove.svg"></img> Delete
																Project</a></li>
													</ul>
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
														class="btn btn-outline-dark btn-sm d-flex justify-content-end"
														data-bs-toggle="dropdown" aria-expanded="false">
														<b>More</b><span><img src="dist/assets/media/icons/advidbar/more.svg"
																alt="" class="ms-2"></img></span>
													</button>
													<ul class="dropdown-menu">
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/editing.svg"></img>
																Editing</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/copy.svg"></img> Make a
																Copy</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/rename.svg"></img> Rename
																Project</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/favourite.svg"></img> Add
																to Favourite</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/remove.svg"></img> Delete 
																Project</a></li>
													</ul>
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
														class="btn btn-outline-dark btn-sm d-flex justify-content-end"
														data-bs-toggle="dropdown" aria-expanded="false">
														<b>More</b><span><img src="dist/assets/media/icons/advidbar/more.svg"
																alt="" class="ms-2"></img></span>
													</button>
													<ul class="dropdown-menu">
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/editing.svg"></img>
																Editing</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/copy.svg"></img> Make a
																Copy</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/rename.svg"></img> Rename
																Project</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/favourite.svg"></img> Add
																to Favourite</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/remove.svg"></img> Delete
																Project</a></li>
													</ul>
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
														class="btn btn-outline-dark btn-sm d-flex justify-content-end"
														data-bs-toggle="dropdown" aria-expanded="false">
														<b>More</b><span><img src="dist/assets/media/icons/advidbar/more.svg"
																alt="" class="ms-2"></img></span>
													</button>
													<ul class="dropdown-menu">
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/editing.svg"></img>
																Editing</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/copy.svg"></img> Make a
																Copy</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/rename.svg"></img> Rename
																Project</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/favourite.svg"></img> Add
																to Favourite</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/remove.svg"></img> Delete
																Project</a></li>
													</ul>
												</div>
											</div>
											<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing
												elit. Fusce quis vitae in nunc</p>
										</div>
									</div>
								</div>
							</div>
							<h3 class="py-5">09/13/2021 Monday</h3>
							<div class="row g-5 g-xl-8">
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
														class="btn btn-outline-dark btn-sm d-flex justify-content-end"
														data-bs-toggle="dropdown" aria-expanded="false">
														<b>More</b><span><img src="dist/assets/media/icons/advidbar/more.svg"
																alt="" class="ms-2"></img></span>
													</button>
													<ul class="dropdown-menu">
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/editing.svg"></img>
																Editing</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/copy.svg"></img> Make a
																Copy</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/rename.svg"></img> Rename
																Project</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/favourite.svg"></img> Add
																to Favourite</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/remove.svg"></img> Delete
																Project</a></li>
													</ul>
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
														class="btn btn-outline-dark btn-sm d-flex justify-content-end"
														data-bs-toggle="dropdown" aria-expanded="false">
														<b>More</b><span><img src="dist/assets/media/icons/advidbar/more.svg"
																alt="" class="ms-2"></img></span>
													</button>
													<ul class="dropdown-menu">
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/editing.svg"></img>
																Editing</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/copy.svg"></img> Make a
																Copy</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/rename.svg"></img> Rename
																Project</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/favourite.svg"></img> Add
																to Favourite</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/remove.svg"></img> Delete
																Project</a></li>
													</ul>
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
														class="btn btn-outline-dark btn-sm d-flex justify-content-end"
														data-bs-toggle="dropdown" aria-expanded="false">
														<b>More</b><span><img src="dist/assets/media/icons/advidbar/more.svg"
																alt="" class="ms-2"></img></span>
													</button>
													<ul class="dropdown-menu">
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/editing.svg"></img>
																Editing</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/copy.svg"></img> Make a
																Copy</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/rename.svg"></img> Rename
																Project</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/favourite.svg"></img> Add
																to Favourite</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/remove.svg"></img> Delete
																Project</a></li>
													</ul>
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
														class="btn btn-outline-dark btn-sm d-flex justify-content-end"
														data-bs-toggle="dropdown" aria-expanded="false">
														<b>More</b><span><img src="dist/assets/media/icons/advidbar/more.svg"
																alt="" class="ms-2"></img></span>
													</button>
													<ul class="dropdown-menu">
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/editing.svg"></img>
																Editing</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/copy.svg"></img> Make a
																Copy</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/rename.svg"></img> Rename
																Project</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/favourite.svg"></img> Add
																to Favourite</a></li>
														<li>
															<hr class="dropdown-divider"></hr>
														</li>
														<li><a class="dropdown-item" href="#"><img
																	src="dist/assets/media/icons/advidbar/remove.svg"></img> Delete
																Project</a></li>
													</ul>
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