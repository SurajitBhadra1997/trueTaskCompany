import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "./menu";

export default class index extends Component {
  render() {
    return (
      <div className="left-side-menu">
        {/* LOGO */}
        <Link to="/" className="logo text-center logo-light">
          <span className="logo-lg">
            {/*<img src="/assets/images/logo.png" alt="" height="16">*/}
            Trutask
          </span>
          <span className="logo-sm">
            {/*<img src="/assets/images/logo_sm.png" alt="" height="16">*/}
            Trutask
          </span>
        </Link>
        {/* LOGO */}
        <Link to="/" className="logo text-center logo-dark">
          <span className="logo-lg">
            {/*<img src="/assets/images/logo-dark.png" alt="" height="16">*/}
            Trutask
          </span>
          <span className="logo-sm">
            {/*<img src="/assets/images/logo_sm_dark.png" alt="" height="16">*/}
            Trutask
          </span>
        </Link>
        <div className="h-100" id="left-side-menu-container" data-simplebar>
          <Menu />
          {/* Help Box */}
          <div className="help-box text-white text-center">
            <a
              href="javascript: void(0);"
              className="float-right close-btn text-white"
            >
              <i className="mdi mdi-close" />
            </a>
            <img
              src="/assets/images/help-icon.svg"
              height={90}
              alt="Helper Icon Image"
            />
            <h5 className="mt-3">Invite your Team</h5>
            <p className="mb-3">and start collaborating</p>
            <a
              href="javascript: void(0);"
              className="btn btn-outline-light btn-sm"
            >
              Invite to Trutask
            </a>
          </div>
          <div className="clearfix" />
        </div>
        {/* Sidebar -left */}
      </div>
    );
  }
}
