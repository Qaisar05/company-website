import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Dropdown } from "react-bootstrap";

export default () => {
  const [lgShow, setLgShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              Media
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
              <h2>Media</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sodales mollis aliquet.{" "}
              </p>
              <div className="row">
                <div className="col-md-1 pt-4">
                  <img src="dist/assets/media/icons/advidbar/folder-sm.svg"></img>
                </div>
                <div className="col-md-9">
                  <Accordion default="0">
                    <Card className="border-light">
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                        >
                          <h5> Scene 05</h5>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <div className="row">
                            <div className="col-md-5">
                              <p>Title 1</p>
                            </div>
                            <div className="col-md-7">
                              <a href="#" onClick={handleShow}>
                                <p>Enter Text</p>
                              </a>
                            </div>
                            <div className="col-md-5">
                              <p>Title 2</p>
                            </div>
                            <div className="col-md-7">
                              <a href="#" onClick={handleShow}>
                                <p>Enter Text</p>
                              </a>
                            </div>
                            <div className="col-md-5">
                              <p>Image</p>
                            </div>
                            <div className="col-md-7">
                              <a href="#" onClick={() => setLgShow(true)}>
                                <p>Upload</p>
                              </a>
                            </div>
                            <div className="col-md-5">
                              <p>Image</p>
                            </div>
                            <div className="col-md-7">
                              <a href="#" onClick={() => setLgShow(true)}>
                                <p>Upload</p>
                              </a>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <h5 className="modal-title">Enter Text</h5>
                        </Modal.Header>
                        <div className="modal-body">
                          <input
                            type="text"
                            className="form-control form-control-solid"
                            placeholder="Enter Text Here"
                          />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-light"
                            data-bs-dismiss="modal"
                            onClick={handleClose}
                          >
                            Cancel
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save
                          </button>
                        </div>
                      </Modal>
                      <Modal
                        size="md"
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="example-modal-sizes-title-lg">
                            <h5 className="modal-title">Image</h5>
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut lacinia condimentum elit..
                          </p>
                        </Modal.Body>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-light"
                            data-bs-dismiss="modal"
                            onClick={handleClose}
                          >
                            Cancel
                          </button>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="primary"
                              id="dropdown-basic"
                            >
                              Add Image
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                <img src="dist/assets/media/icons/advidbar/upload-sm.svg"></img>{" "}
                                Upload
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                <img src="dist/assets/media/icons/advidbar/gallery-sm.svg"></img>{" "}
                                Media
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                <img src="dist/assets/media/icons/advidbar/camera.svg"></img>{" "}
                                Stock Image
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </Modal>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <div className="embed-responsive embed-responsive-21by9">
                <iframe
                  className="embed-responsive-item w-100 h-393"
                  src="dist/assets/media/products/video.mp4"
                  alt="Video"
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
        </div>
      </div>
    </div>
  );
};
