import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Dropdown } from "react-bootstrap";
import { Button, ButtonGroup, DropdownButton, MenuItem } from "react-bootstrap";
export default () => {
  return (
    <body id="kt_body" class="bg-body">
      <div class="d-flex flex-column flex-root">
        <div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed">
          <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            <div class="w-lg-50 bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
              <form
                class="form w-100"
                novalidate="novalidate"
                id="kt_sign_up_form"
              >
                <div class="mb-10 text-center">
                  <h1 class="text-dark mb-3">Nite Walker - im.nitewalker</h1>
                  <div class="text-dark fw-bold fs-3">Basic Information</div>
                </div>
                <div class="fv-row mb-7">
                  <label class="form-label fw-bolder text-dark fs-6">
                    Username
                  </label>
                  <input
                    class="form-control form-control-lg form-control-solid"
                    type="email"
                    placeholder="im.nitewalker"
                    name="email"
                    autocomplete="off"
                  />
                </div>
                <div class="fv-row mb-7">
                  <label class="form-label fw-bolder text-dark fs-6">
                    Email
                  </label>
                  <input
                    class="form-control form-control-lg form-control-solid"
                    type="email"
                    placeholder="im.nitewalker@gmail.com"
                    name="email"
                    autocomplete="off"
                  />
                </div>
                <div class="fv-row mb-7">
                  <label class="form-label fw-bolder text-dark fs-6">
                    Full Name
                  </label>
                  <input
                    class="form-control form-control-lg form-control-solid"
                    type="email"
                    placeholder="Nite Walker"
                    name="email"
                    autocomplete="off"
                  />
                </div>
                <div class="fv-row mb-7">
                  <label class="form-label fw-bolder text-dark fs-6">
                    Category
                  </label>
                  <select
                    class="form-select form-control form-control-lg form-control-solid"
                    aria-label="Select example"
                  >
                    <option>Sellect Category</option>
                    <option value="1">Accessories</option>
                    <option value="2">Parts</option>
                    <option value="3">Services</option>
                    <option value="3">Devices</option>
                  </select>
                </div>
                <div class="text-center">
                  <button
                    type="submit"
                    id="kt_sign_in_submit"
                    class="btn btn-lg btn-primary mb-5"
                  >
                    <span class="indicator-label">Save Info</span>
                  </button>
                </div>
                <div class="mb-10 text-center mt-5">
                  <div class="text-dark fw-bold fs-3">Change Password</div>
                </div>
                <div class="fv-row mb-7">
                  <label class="form-label fw-bolder text-dark fs-6">
                    Old Password
                  </label>
                  <input
                    class="form-control form-control-lg form-control-solid"
                    type="email"
                    placeholder=""
                    name="email"
                    autocomplete="off"
                  />
                </div>
                <div class="fv-row mb-7">
                  <label class="form-label fw-bolder text-dark fs-6">
                    New Password
                  </label>
                  <input
                    class="form-control form-control-lg form-control-solid"
                    type="email"
                    placeholder=""
                    name="email"
                    autocomplete="off"
                  />
                </div>
                <div class="fv-row mb-7">
                  <label class="form-label fw-bolder text-dark fs-6">
                    Repeat Password
                  </label>
                  <input
                    class="form-control form-control-lg form-control-solid"
                    type="email"
                    placeholder=""
                    name="email"
                    autocomplete="off"
                  />
                </div>
                <div class="text-center">
                  <button
                    type="submit"
                    id="kt_sign_in_submit"
                    class="btn btn-lg btn-primary mb-5"
                  >
                    <span class="indicator-label">Save Password</span>
                  </button>
                </div>
                <div class="mb-10 text-center mt-5">
                  <div class="text-dark fw-bold fs-3">Profile Picture</div>
                </div>
                <div class="image d-flex justify-content-center">
                  <img src="dist/assets/media/products/profile-pic.png" />
                </div>

                <div class="text-center mt-5">
                  <button
                    type="submit"
                    id="kt_sign_in_submit"
                    class="btn btn-lg btn-primary mb-5"
                  >
                    <span class="indicator-label">Upload</span>
                  </button>
                </div>
                <div class="mb-10 text-center mt-5">
                  <div class="text-dark fw-bold fs-3">Delete Account</div>
                </div>
                <div class="text-center d-flex justify-content-center">
                  <p>
                    Deleting account will cause all of your data to be deleted.
                    This action is permanent and cannot be reverted.
                  </p>
                </div>

                <div class="text-center mt-5">
                  <button
                    type="submit"
                    id="kt_sign_in_submit"
                    class="btn btn-lg btn-light mb-5"
                  >
                    <span class="indicator-label">Delete Account</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
