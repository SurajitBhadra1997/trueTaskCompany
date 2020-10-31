import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class navbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg py-lg-3 navbar-dark">
            <div className="container">
              {/* logo */}
              <Link to="/home" className="navbar-brand mr-lg-5">
                {/*<img src="assets/images/logo.png" alt="" class="logo-dark" height="18" />*/}
                TRUTASK
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="mdi mdi-menu" />
              </button>
              {/* menus */}
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                {/* left menu */}
                <ul className="navbar-nav mr-auto align-items-center">
                  <li className="nav-item mx-lg-1">
                    <Link className="nav-link active" to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mx-lg-1">
                    <a className="nav-link" href>
                      Features
                    </a>
                  </li>
                  <li className="nav-item mx-lg-1">
                    <a className="nav-link" href>
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mx-lg-1">
                    <a className="nav-link" href>
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mx-lg-1">
                    <a className="nav-link" href>
                      Integration
                    </a>
                  </li>
                  <li className="nav-item mx-lg-1">
                    <a className="nav-link" href>
                      Contact
                    </a>
                  </li>
                  {/* <li className="nav-item mx-lg-1">
                    <Link className="nav-link" to="/dashboard">
                      Dashboard
                    </Link>
                  </li> */}
                </ul>
                {/* right menu */}
                <ul className="navbar-nav ml-auto align-items-center">
                  <li className="nav-item mr-0">
                    <Link to="/signin" className="nav-link d-lg-none">
                      Signin now
                    </Link>
                    <Link
                      to="/signin"
                      className="btn btn-sm btn-light btn-rounded d-none d-lg-inline-flex"
                    >
                      <i className="mdi mdi-basket mr-2" />
                      Signin now
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}
