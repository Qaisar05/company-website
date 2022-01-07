import React from "react";
import { Link } from "react-router-dom";
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
                id="kt_sign_in_form"
                action="#"
              >
                <div className="text-center mb-10">
                  <h1 className="text-dark mb-3">Welcome Back</h1>
                  <div className="text-gray-400 fw-bold fs-4">
                    Signin to create your video.
                  </div>
                </div>
                <div className="fv-row mb-10">
                  <label className="form-label fs-6 fw-bolder text-dark">
                    Email
                  </label>
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="text"
                    name="email"
                    autocomplete="off"
                  />
                </div>
                <div className="fv-row mb-10">
                  <div className="d-flex flex-stack mb-2">
                    <label className="form-label fw-bolder text-dark fs-6 mb-0">
                      Password
                    </label>
                    <a
                      href="../../demo1/dist/authentication/flows/basic/password-reset.html"
                      className="link-primary fs-6 fw-bolder"
                    >
                      Forgot Password ?
                    </a>
                  </div>
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="password"
                    name="password"
                    autocomplete="off"
                  />
                </div>
                <div className="cta text-center">
                  <div className="button d-flex flex-column align-items-center justify-content-center pt-4">
                    <Link to="recomendedpage">
                      <button type="button" className="bton btn-lg">
                        Sign In
                      </button>
                    </Link>
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
                      <img
                        src="assets/imgs/icons/fb.svg"
                        className=" ms-3"
                      ></img>
                    </a>
                    <a
                      href="#"
                      className="btn btn-flex flex-center btn-light btn-lg mb-5 ms-3"
                    >
                      Sign In with
                      <img
                        src="assets/imgs/icons/google.svg"
                        className=" ms-3"
                      />
                    </a>
                  </div>
                  <div className="text-centere mb-3">
                    Don't have an account yet?{" "}
                    <a href="#">
                      <u>Sign up</u>
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
