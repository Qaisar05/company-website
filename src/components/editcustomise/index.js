import React from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Button, Modal } from "react-bootstrap";
export default () => {
  return (
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
              Customize
            </h1>
            <div className="d-flex ps-20">
              <a
                href="#"
                className="btn btn-sm btn-flex btn-light btn-active-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                Untitled Project
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center py-1">
            <div className="me-4"></div>
            <div className="me-4">
              <a
                href="#"
                className="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                <span className="svg-icon svg-icon-2">
                  <img
                    alt="Devices"
                    src="dist/assets/media/icons/advidbar/img-gallery.svg"
                  />
                </span>
                Preview Image
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
                  src="dist/assets/media/icons/advidbar/video.svg"
                />
              </span>
              Produce Video
            </a>
          </div>
        </div>
      </div>
      <div className="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" className="container-xxl">
          <div className="row">
            <div className="col-md-3">
              <h2>Customize</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sodales mollis aliquet.
              </p>
              <div className="row">
                <div className="col-md-1 pt-4">
                  <img src="dist/assets/media/icons/advidbar/folder-sm.svg"></img>
                </div>
                <div className="col-md-10">
                  <Accordion default="0">
                    <Card className="border-light">
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                        >
                          <h5> Fonts</h5>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <div className="row">
                            <div className="col-md-5">
                              <p>Font 1</p>
                            </div>
                            <div className="col-md-7">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_1"
                              >
                                <p>Default Font</p>
                              </a>
                            </div>
                            <div className="col-md-5">
                              <p>Font 2</p>
                            </div>
                            <div className="col-md-7">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_1"
                              >
                                <p>Default Font</p>
                              </a>
                            </div>
                            <div className="col-md-5">
                              <p>Font 3</p>
                            </div>
                            <div className="col-md-7">
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#kt_modal_1"
                              >
                                <p>Default Font</p>
                              </a>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-md-1 pt-4">
                  <img src="dist/assets/media/icons/advidbar/folder-sm.svg"></img>
                </div>
                <div className="col-md-10">
                  <Accordion default="0">
                    <Card className="border-light">
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                        >
                          <h5> Color</h5>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <div className="row">
                            <div className="col-md-7">
                              <p>Background</p>
                            </div>
                            <div className="col-md-5 d-flex justify-content-end">
                              <input
                                type="color"
                                id="head"
                                name="head"
                                value="#39D8FF"
                              ></input>
                            </div>
                            <div className="col-md-7">
                              <p>Text</p>
                            </div>
                            <div className="col-md-5 d-flex justify-content-end">
                              <input
                                type="color"
                                id="head"
                                name="head"
                                value="#5BDBBF"
                              ></input>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="embed-responsive embed-responsive-21by9">
                <iframe
                  className="embed-responsive-item w-100"
                  img
                  src="dist/assets/media/products/video.mp4"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="d-flex justify-content-center pt-3">
                <a href="#">
                  <img src="dist/assets/media/icons/advidbar/undo.svg"></img>
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <a href="#">
                <img
                  src="dist/assets/media/products/media-sm.png"
                  className="w-100"
                ></img>
                <div className="bottom-left">#1</div>
              </a>
              <a href="#">
                <img
                  src="dist/assets/media/products/media-sm-2.png"
                  className="w-100 mt-3"
                ></img>
                <div className="bottom-left">#2</div>
              </a>
              <a href="#">
                <img
                  src="dist/assets/media/products/media-sm-3.png"
                  className="w-100 mt-3"
                ></img>
                <div className="bottom-left">#3</div>
              </a>
              <a href="#">
                <img
                  src="dist/assets/media/products/media-sm-4.png"
                  className="w-100 mt-3"
                ></img>
                <div className="bottom-left">#4</div>
              </a>
            </div>
          </div>
          <div className="modal fade" tabindex="-1" id="kt_modal_1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Font</h5>
                  <div
                    className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span className="svg-icon svg-icon-2x">
                      <img src="dist/assets/media/icons/advidbar/cross.svg"></img>
                    </span>
                  </div>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="radio"
                          value=""
                          id="flexRadioDefault"
                        />
                        <label
                          className="form-check-label ms-10"
                          for="flexRadioDefault"
                        >
                          Default Font
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <a href="#" className="text-muted">
                        use default fonts
                      </a>
                    </div>
                    <div className="col-md-6 mt-5">
                      <div className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="radio"
                          value=""
                          id="flexRadioDefault"
                        />
                        <label
                          className="form-check-label ms-10"
                          for="flexRadioDefault"
                        >
                          Google Font
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mt-5">
                      <a href="#" className="text-muted">
                        use google fonts
                      </a>
                    </div>
                    <div className="col-md-6 mt-5">
                      <div className="form-check form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="radio"
                          value=""
                          id="flexRadioDefault"
                        />
                        <label
                          className="form-check-label ms-10"
                          for="flexRadioDefault"
                        >
                          My Font
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mt-5">
                      <a href="#" className="text-muted">
                        media liberary fonts
                      </a>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" tabindex="-1" id="kt_modal_2">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Image</h5>
                  <div
                    className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span className="svg-icon svg-icon-2x">
                      <img src="dist/assets/media/icons/advidbar/cross.svg"></img>
                    </span>
                  </div>
                </div>
                <div className="modal-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    lacinia condimentum elit..
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Add Image
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_3"
                      >
                        <img src="dist/assets/media/icons/advidbar/upload-sm.svg"></img>{" "}
                        Upload
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="dist/assets/media/icons/advidbar/gallery-sm.svg"></img>{" "}
                        Media Liberary
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <img src="dist/assets/media/icons/advidbar/camera.svg"></img>{" "}
                        Stock Image
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" tabindex="-1" id="kt_modal_3">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Image</h5>
                  <div
                    className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span className="svg-icon svg-icon-2x">
                      <img src="dist/assets/media/icons/advidbar/cross.svg"></img>
                    </span>
                  </div>
                </div>
                <div className="modal-body">
                  <div>
                    <img
                      src="dist/assets/media/products/replace.png"
                      className="p-10"
                    ></img>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                  >
                    Crop
                  </button>
                  <button type="button" className="btn btn-primary">
                    Replace Image
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
