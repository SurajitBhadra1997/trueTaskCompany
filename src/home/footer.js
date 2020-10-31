import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
          <footer className="bg-dark py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  {/*<img src="assets/images/logo.png" alt="" class="logo-dark" height="18" />*/}
                  TRUTASK
                  <p className="text-white-50 mt-4">
                    Trutask makes it easier to build better websites with
                    <br /> great speed. Save hundreds of hours of design
                    <br /> and development by using it.
                  </p>
                  <ul className="social-list list-inline mt-3">
                    <li className="list-inline-item text-center">
                      <a
                        href="javascript: void(0);"
                        className="social-list-item border-primary text-primary"
                      >
                        <i className="mdi mdi-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item text-center">
                      <a
                        href="javascript: void(0);"
                        className="social-list-item border-danger text-danger"
                      >
                        <i className="mdi mdi-google" />
                      </a>
                    </li>
                    <li className="list-inline-item text-center">
                      <a
                        href="javascript: void(0);"
                        className="social-list-item border-info text-info"
                      >
                        <i className="mdi mdi-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item text-center">
                      <a
                        href="javascript: void(0);"
                        className="social-list-item border-secondary text-secondary"
                      >
                        <i className="mdi mdi-github-circle" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 mt-3 mt-lg-0">
                  <h5 className="text-white">Company</h5>
                  <ul className="list-unstyled pl-0 mb-0 mt-3">
                    <li className="mt-2">
                      <a href="javascript: void(0);" className="text-white-50">
                        About Us
                      </a>
                    </li>
                    <li className="mt-2">
                      <a href="javascript: void(0);" className="text-white-50">
                        Documentation
                      </a>
                    </li>
                    <li className="mt-2">
                      <a href="javascript: void(0);" className="text-white-50">
                        Blog
                      </a>
                    </li>
                    <li className="mt-2">
                      <a href="javascript: void(0);" className="text-white-50">
                        Affiliate Program
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 mt-3 mt-lg-0">
                  <h5 className="text-white">Apps</h5>
                  <ul className="list-unstyled pl-0 mb-0 mt-3">
                    <li className="mt-2">
                      <a href="javascript: void(0);" className="text-white-50">
                        Ecommerce Pages
                      </a>
                    </li>
                    <li className="mt-2">
                      <a href="javascript: void(0);" className="text-white-50">
                        Email
                      </a>
                    </li>
                    <li className="mt-2">
                      <a href="javascript: void(0);" className="text-white-50">
                        Social Feed
                      </a>
                    </li>
                    <li className="mt-2">
                      <a href="javascript: void(0);" className="text-white-50">
                        Projects
                      </a>
                    </li>
                    <li className="mt-2">
                      <a href="javascript: void(0);" className="text-white-50">
                        Tasks Management
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-2 mt-3 mt-lg-0">
                  <h5 className="text-white">Discover</h5>
                  <ul className="list-unstyled pl-0 mb-0 mt-3">
                    <li className="mt-2">
                      <a href="javascript: void(0);" className="text-white-50">
                        Help Center
                      </a>
                    </li>
                    <li className="mt-2">
                      <a href="javascript: void(0);" className="text-white-50">
                        Our Products
                      </a>
                    </li>
                    <li className="mt-2">
                      <a href="javascript: void(0);" className="text-white-50">
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="mt-5">
                    <p className="text-white-50 mt-4 text-center mb-0">
                      © 2018 - 2020 Trutask. Design and coded by Trutask
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        );
    }
}
