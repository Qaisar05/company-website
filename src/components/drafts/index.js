import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Dropdown } from "react-bootstrap";
import { Button, ButtonGroup, DropdownButton, MenuItem } from "react-bootstrap";
export default () => {
  return (
    <div
      className="content d-flex flex-column flex-column-fluid"
      id="kt_content"
    >
      <div className="toolbar" id="kt_toolbar">
        <div id="kt_toolbar_container" className="container d-flex">
          <div
            data-kt-swapper="true"
            data-kt-swapper-mode="prepend"
            data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
            className="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0"
          >
            <h1 className="d-flex align-items-center text-dark fw-bolder fs-3 my-1">
              Drafts
            </h1>
          </div>
          <div className="d-flex">
            <ul className="nav nav-tabs nav-line-tabs mb-0 fs-5 ms-10">
              <NavDropdown title="Video Type" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <img src="dist/assets/media/icons/advidbar/accessories-sm.svg"></img>{" "}
                  Accessories
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  <img src="dist/assets/media/icons/advidbar/parts-sm.svg"></img>{" "}
                  Parts
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  <img src="dist/assets/media/icons/advidbar/services-sm.svg"></img>{" "}
                  Services
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <img src="dist/assets/media/icons/advidbar/devices-sm.svg"></img>{" "}
                  Device
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Duration" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <li className="ms-4"> 1m+</li>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <li className="ms-4"> 30-60s</li>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <li className="ms-4"> 15-30s</li>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <li className="ms-4"> 0-15s</li>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Format" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <li className="ms-4"> Square</li>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <li className="ms-4"> Portrait</li>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                  <li className="ms-4"> Lanscape</li>
                </NavDropdown.Item>
              </NavDropdown>
            </ul>
          </div>
        </div>
      </div>
      <div className="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" className="container-xxl">
          <h3 className="pb-5">09/14/2021 Tuesday</h3>
          <div className="row g-5 g-xl-8">
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="product">
                <div className="image-box">
                  <div className="images" id="image-1">
                    <img
                      src="dist/assets/media/products/templ-1.png"
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="text-box pt-3">
                  <div className="row">
                    <div className="col-8">
                      <h4 className="item pt-2">Lorem ipsum </h4>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="btn btn-outline-dark btn-sm"
                          id="dropdown-basic"
                        >
                          <b>More</b>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/editing.svg"></img>{" "}
                            Editing
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/copy.svg"></img>{" "}
                            Make a Copy
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/rename.svg"></img>{" "}
                            Rename Project
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/favourite.svg"></img>{" "}
                            Add to Favourite
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/remove.svg"></img>{" "}
                            Delete Project
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce quis vitae in nunc
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="product">
                <div className="image-box">
                  <div className="images" id="image-1">
                    <img
                      src="dist/assets/media/products/templ-2.png"
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="text-box pt-3">
                  <div className="row">
                    <div className="col-8">
                      <h4 className="item pt-2">Lorem ipsum </h4>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="btn btn-outline-dark btn-sm"
                          id="dropdown-basic"
                        >
                          <b>More</b>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/editing.svg"></img>{" "}
                            Editing
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/copy.svg"></img>{" "}
                            Make a Copy
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/rename.svg"></img>{" "}
                            Rename Project
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/favourite.svg"></img>{" "}
                            Add to Favourite
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/remove.svg"></img>{" "}
                            Delete Project
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce quis vitae in nunc
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="product">
                <div className="image-box">
                  <div className="images" id="image-1">
                    <img
                      src="dist/assets/media/products/templ-3.png"
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="text-box pt-3">
                  <div className="row">
                    <div className="col-8">
                      <h4 className="item pt-2">Lorem ipsum </h4>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="btn btn-outline-dark btn-sm"
                          id="dropdown-basic"
                        >
                          <b>More</b>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/editing.svg"></img>{" "}
                            Editing
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/copy.svg"></img>{" "}
                            Make a Copy
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/rename.svg"></img>{" "}
                            Rename Project
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/favourite.svg"></img>{" "}
                            Add to Favourite
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/remove.svg"></img>{" "}
                            Delete Project
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce quis vitae in nunc
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="product">
                <div className="image-box">
                  <div className="images" id="image-1">
                    <img
                      src="dist/assets/media/products/templ-4.png"
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="text-box pt-3">
                  <div className="row">
                    <div className="col-8">
                      <h4 className="item pt-2">Lorem ipsum </h4>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="btn btn-outline-dark btn-sm"
                          id="dropdown-basic"
                        >
                          <b>More</b>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/editing.svg"></img>{" "}
                            Editing
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/copy.svg"></img>{" "}
                            Make a Copy
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/rename.svg"></img>{" "}
                            Rename Project
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/favourite.svg"></img>{" "}
                            Add to Favourite
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/remove.svg"></img>{" "}
                            Delete Project
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce quis vitae in nunc
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="py-5">09/13/2021 Monday</h3>
          <div className="row g-5 g-xl-8">
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="product">
                <div className="image-box">
                  <div className="images" id="image-1">
                    <img
                      src="dist/assets/media/products/templ-1.png"
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="text-box pt-3">
                  <div className="row">
                    <div className="col-8">
                      <h4 className="item pt-2">Lorem ipsum </h4>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="btn btn-outline-dark btn-sm"
                          id="dropdown-basic"
                        >
                          <b>More</b>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/editing.svg"></img>{" "}
                            Editing
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/copy.svg"></img>{" "}
                            Make a Copy
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/rename.svg"></img>{" "}
                            Rename Project
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/favourite.svg"></img>{" "}
                            Add to Favourite
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/remove.svg"></img>{" "}
                            Delete Project
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce quis vitae in nunc
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="product">
                <div className="image-box">
                  <div className="images" id="image-1">
                    <img
                      src="dist/assets/media/products/templ-2.png"
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="text-box pt-3">
                  <div className="row">
                    <div className="col-8">
                      <h4 className="item pt-2">Lorem ipsum </h4>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="btn btn-outline-dark btn-sm"
                          id="dropdown-basic"
                        >
                          <b>More</b>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/editing.svg"></img>{" "}
                            Editing
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/copy.svg"></img>{" "}
                            Make a Copy
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/rename.svg"></img>{" "}
                            Rename Project
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/favourite.svg"></img>{" "}
                            Add to Favourite
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/remove.svg"></img>{" "}
                            Delete Project
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce quis vitae in nunc
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="product">
                <div className="image-box">
                  <div className="images" id="image-1">
                    <img
                      src="dist/assets/media/products/templ-3.png"
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="text-box pt-3">
                  <div className="row">
                    <div className="col-8">
                      <h4 className="item pt-2">Lorem ipsum </h4>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="btn btn-outline-dark btn-sm"
                          id="dropdown-basic"
                        >
                          <b>More</b>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/editing.svg"></img>{" "}
                            Editing
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/copy.svg"></img>{" "}
                            Make a Copy
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/rename.svg"></img>{" "}
                            Rename Project
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/favourite.svg"></img>{" "}
                            Add to Favourite
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/remove.svg"></img>{" "}
                            Delete Project
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce quis vitae in nunc
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="product">
                <div className="image-box">
                  <div className="images" id="image-1">
                    <img
                      src="dist/assets/media/products/templ-4.png"
                      alt=""
                    ></img>
                  </div>
                </div>
                <div className="text-box pt-3">
                  <div className="row">
                    <div className="col-8">
                      <h4 className="item pt-2">Lorem ipsum </h4>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="btn btn-outline-dark btn-sm"
                          id="dropdown-basic"
                        >
                          <b>More</b>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/editing.svg"></img>{" "}
                            Editing
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/copy.svg"></img>{" "}
                            Make a Copy
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/rename.svg"></img>{" "}
                            Rename Project
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/favourite.svg"></img>{" "}
                            Add to Favourite
                          </Dropdown.Item>
                          <NavDropdown.Divider />
                          <Dropdown.Item href="#/action-1">
                            <img src="dist/assets/media/icons/advidbar/remove.svg"></img>{" "}
                            Delete Project
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce quis vitae in nunc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
