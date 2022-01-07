import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <div className="toolbar" id="kt_toolbar">
          <div
            id="kt_toolbar_container"
            className="container-fluid d-flex flex-stack"
          >
            <div
              data-kt-swapper="true"
              data-kt-swapper-mode="prepend"
              data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
              className="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0"
            >
              <h1 className="d-flex align-items-center text-dark fw-bolder fs-3 my-1">
                Media
              </h1>
            </div>
            <div className="d-flex align-items-center py-1">
              <div className="me-4">
                <Link to="medialistpage">
                  <span className="svg-icon svg-icon-2 me-2">
                    <img
                      alt="Devices"
                      src="dist/assets/media/icons/advidbar/list.svg"
                    />
                  </span>
                </Link>
                <a
                  href="#"
                  className="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <span className="svg-icon svg-icon-2">
                    <img
                      alt="Devices"
                      src="dist/assets/media/icons/advidbar/folder.svg"
                    />
                  </span>
                  New Folder
                </a>
              </div>
              <div className="me-4">
                <a
                  href="#"
                  className="btn btn-sm btn-flex btn-light btn-active-primary"
                  onClick={() => setLgShow(true)}
                >
                  <span className="svg-icon svg-icon-2">
                    <img
                      alt="Devices"
                      src="dist/assets/media/icons/advidbar/img-gallery.svg"
                    />
                    Stock Footage
                  </span>
                </a>
              </div>
              <a
                href="#"
                className="btn btn-sm btn-flex btn-primary"
                data-bs-toggle="#"
                data-bs-target="#kt_modal_create_app"
                id="kt_toolbar_primary_button"
              >
                <span className="svg-icon svg-icon-2">
                  <img
                    alt="Devices"
                    src="dist/assets/media/icons/advidbar/upload-2.svg"
                  />
                </span>
                Upload
              </a>
            </div>
          </div>
        </div>
        <Modal
          size="xl"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              <div className=" d-flex">
                <h2>Stock Footage</h2>
                <div className="tex d-flex justify-content-start mt-1">
                  <a href="#" className="ps-10">
                    <h4>Photos</h4>
                  </a>
                  <a href="#" className="ps-10">
                    <h4>Footage</h4>
                  </a>
                  <a href="#" className="ps-10">
                    <h4>Soundcloud</h4>
                  </a>
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-body py-lg-10 px-lg-10">
              <div className="row gy-5">
                <div className="col-md-3">
                  <img src="dist/assets/media/products/stock-1.png"></img>
                  <div className="d-flex justify-content-between mt-5">
                    <h6>Lorem ipsum dolor sit</h6>
                    <a href="#">
                      <img
                        src="dist/assets/media/icons/advidbar/add.svg"
                        className="d-flex justify-content-end"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <img src="dist/assets/media/products/stock-2.png"></img>
                  <div className="d-flex justify-content-between mt-5">
                    <h6>Lorem ipsum dolor sit</h6>
                    <a href="#">
                      <img
                        src="dist/assets/media/icons/advidbar/add.svg"
                        className="d-flex justify-content-end"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <img src="dist/assets/media/products/stock-3.png"></img>
                  <div className="d-flex justify-content-between mt-5">
                    <h6>Lorem ipsum dolor sit</h6>
                    <a href="#">
                      <img
                        src="dist/assets/media/icons/advidbar/add.svg"
                        className="d-flex justify-content-end"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <img src="dist/assets/media/products/stock-4.png"></img>
                  <div className="d-flex justify-content-between mt-5">
                    <h6>Lorem ipsum dolor sit</h6>
                    <a href="#">
                      <img
                        src="dist/assets/media/icons/advidbar/add.svg"
                        className="d-flex justify-content-end"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <img src="dist/assets/media/products/stock-1.png"></img>
                  <div className="d-flex justify-content-between mt-5">
                    <h6>Lorem ipsum dolor sit</h6>
                    <a href="#">
                      <img
                        src="dist/assets/media/icons/advidbar/add.svg"
                        className="d-flex justify-content-end"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <img src="dist/assets/media/products/stock-2.png"></img>
                  <div className="d-flex justify-content-between mt-5">
                    <h6>Lorem ipsum dolor sit</h6>
                    <a href="#">
                      <img
                        src="dist/assets/media/icons/advidbar/add.svg"
                        className="d-flex justify-content-end"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <img src="dist/assets/media/products/stock-3.png"></img>
                  <div className="d-flex justify-content-between mt-5">
                    <h6>Lorem ipsum dolor sit</h6>
                    <a href="#">
                      <img
                        src="dist/assets/media/icons/advidbar/add.svg"
                        className="d-flex justify-content-end"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <img src="dist/assets/media/products/stock-4.png"></img>
                  <div className="d-flex justify-content-between mt-5">
                    <h6>Lorem ipsum dolor sit</h6>
                    <a href="#">
                      <img
                        src="dist/assets/media/icons/advidbar/add.svg"
                        className="d-flex justify-content-end"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <div className="post d-flex flex-column-fluid" id="kt_post">
          <div id="kt_content_container" className="container-xxl">
            <div className="form-check form-check-custom form-check-solid">
              <input
                className="form-check-input border"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                <p className="ps-8 pt-3"> Sellect All</p>
              </label>
            </div>
            <div className="row g-5 g-xl-8 mt-2">
              <div
                className="col-xl-2 col-lg-3 col-md-4 border border-secondary"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="product">
                  <div className="image-box  d-flex justify-content-center mt-15">
                    <div className="images" id="image-1">
                      <img
                        src="dist/assets/media/products/brain.png"
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="text-box">
                    <div className="">
                      <div className="col-12  d-flex justify-content-start mt-5">
                        <a href="#">
                          <span>
                            <img
                              src="dist/assets/media/icons/advidbar/edit.svg"
                              alt=""
                              className="me-2"
                            ></img>
                          </span>
                          <b>Brain Logo</b>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 border border-secondary ms-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="product">
                  <div className="image-box  d-flex justify-content-center mt-5">
                    <div className="images" id="image-1">
                      <img
                        src="dist/assets/media/products/media-1.png"
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="text-box">
                    <div className="">
                      <div className="col-12  d-flex justify-content-start mt-5">
                        <a href="#">
                          <span>
                            <img
                              src="dist/assets/media/icons/advidbar/edit.svg"
                              alt=""
                              className="me-2"
                            ></img>
                          </span>
                          <b>Services image</b>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-3 col-md-4 border border-secondary ms-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="product">
                  <div className="image-box  d-flex justify-content-center mt-5">
                    <div className="images" id="image-1">
                      <img
                        src="dist/assets/media/products/text.png"
                        alt=""
                      ></img>
                    </div>
                  </div>
                  <div className="text-box">
                    <div className="">
                      <div className="col-12  d-flex justify-content-start mt-5">
                        <a href="#">
                          <span>
                            <img
                              src="dist/assets/media/icons/advidbar/edit.svg"
                              alt=""
                              className="me-2"
                            ></img>
                          </span>
                          <b>Lorem text</b>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
