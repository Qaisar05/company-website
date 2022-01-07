import React from "react";
import "./index.css";
export default () => {
  return (
    <body id="kt_body" className="bg-body">
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed">
          <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            <div className="w-lg-50 bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
              <form
                className="form w-100"
                novalidate="novalidate"
                id="kt_sign_up_form"
              >
                <div className="mb-10 text-center">
                  <h1 className="text-dark mb-3">Create a free account</h1>
                  <div className="text-gray-400 fw-bold fs-4">
                    Register for FREE
                  </div>
                </div>
                <div className="fv-row mb-7">
                  <label className="form-label fw-bolder text-dark fs-6">
                    Full Name
                  </label>
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="email"
                    placeholder=""
                    name="email"
                    autocomplete="off"
                  />
                </div>
                <div className="fv-row mb-7">
                  <label className="form-label fw-bolder text-dark fs-6">
                    Email
                  </label>
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="email"
                    placeholder=""
                    name="email"
                    autocomplete="off"
                  />
                </div>
                <div className="mb-10 fv-row" data-kt-password-meter="true">
                  <div className="mb-1">
                    <label className="form-label fw-bolder text-dark fs-6">
                      Password
                    </label>
                    <div className="position-relative mb-3">
                      <input
                        className="form-control form-control-lg form-control-solid"
                        type="password"
                        placeholder=""
                        name="password"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
                <div className="fv-row mb-5">
                  <label className="form-label fw-bolder text-dark fs-6">
                    Confirm Password
                  </label>
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="password"
                    placeholder=""
                    name="confirm-password"
                    autocomplete="off"
                  />
                </div>
                <div className="fv-row mb-10">
                  <label className="form-check form-check-custom form-check-solid form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="toc"
                      value="1"
                    />
                    <span className="form-check-label fw-bold text-gray-700 fs-6">
                      I Agree
                      <a href="#" className="ms-1 link-primary">
                        Terms and conditions
                      </a>
                      .
                    </span>
                  </label>
                </div>
                <div className="cta text-center">
                  <div className="button d-flex flex-column align-items-center justify-content-center pt-4">
                    <button type="button" className="bton btn-lg">
                      Get Started
                    </button>
                  </div>
                  <div className="text-center text-muted text-uppercase fw-bolder mb-5">
                    or
                  </div>
                  <div className="row d-flex justify-content-center">
                    <a
                      href="#"
                      className="btn btn-flex flex-center btn-light btn-lg mb-5"
                    >
                      Sign In with
                      <img src="assets/imgs/icons/fb.svg" className="ms-3" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-flex flex-center btn-light btn-lg mb-5 ms-3"
                    >
                      Sign In with
                      <img
                        src="assets/imgs/icons/google.svg"
                        className="ms-3"
                      />
                    </a>
                  </div>
                  <div className="text-centere mb-3">
                    Already have an account{" "}
                    <a href="#">
                      <u>Sign In</u>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
