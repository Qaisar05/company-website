import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
export default () => {
  const [lgShow, setLgShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <Link to="mediapage">
                  <span className="svg-icon svg-icon-2 me-2">
                    <img
                      alt="Devices"
                      src="dist/assets/media/icons/advidbar/grid.svg"
                    />
                  </span>
                </Link>
                <a
                  href="#"
                  className="btn btn-sm btn-flex btn-light btn-active-primary"
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
            <Table bordered hover className="mt-3">
              <tbody>
                <tr>
                  <td>
                    <div className="form-check form-check-custom form-check-solid">
                      <input
                        className="form-check-input border ms-2"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <span className="ms-12">
                        <img
                          src="dist/assets/media/products/brain-list.png"
                          className="w-50"
                          symbol
                          symbol-45px
                          alt=""
                        />
                      </span>
                      <a
                        href="#"
                        className="text-dark fw-bolder text-hover-primary fs-6 ms-0"
                      >
                        Brain Logo
                      </a>
                    </div>
                    <div className="symbol symbol-45px me-5"></div>
                  </td>
                  <td>
                    <span className="text-muted me-2 fs-7 fw-bold">
                      09/13/2021
                    </span>
                  </td>
                  <td>
                    <div className="d-flex justify-content-start flex-shrink-0">
                      <a
                        href="#"
                        className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                        onClick={handleShow}
                      >
                        <span className="svg-icon svg-icon-3">
                          <img
                            src="dist/assets/media/icons/advidbar/delete.svg"
                            alt=""
                          />
                        </span>
                      </a>
                    </div>
                  </td>
                </tr>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <h5 className="modal-title">Are you want to delete?</h5>
                  </Modal.Header>
                  <div className="modal-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam sodales mollis aliquet.
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
                    <button type="button" className="btn btn-primary">
                      Yes
                    </button>
                  </div>
                </Modal>
                <tr>
                  <td>
                    <div className="form-check form-check-custom form-check-solid">
                      <input
                        className="form-check-input border ms-2"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <span className="ms-12">
                        <img
                          src="dist/assets/media/products/media-list.png"
                          className="w-50"
                          alt=""
                        />
                      </span>
                      <a
                        href="#"
                        className="text-dark fw-bolder text-hover-primary fs-6"
                      >
                        Services image
                      </a>
                    </div>
                  </td>
                  <td>
                    <span className="text-muted me-2 fs-7 fw-bold">
                      09/13/2021
                    </span>
                  </td>
                  <td>
                    <div className="d-flex justify-content-start flex-shrink-0">
                      <a
                        href="#"
                        className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                        onClick={handleShow}
                      >
                        <span className="svg-icon svg-icon-3">
                          <img
                            src="dist/assets/media/icons/advidbar/delete.svg"
                            alt=""
                          />
                        </span>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};
