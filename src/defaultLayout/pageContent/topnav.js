import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class topnav extends Component {
    render() {
        return (
          <div className="topnav">
            <div className="container-fluid">
              <nav className="navbar navbar-dark navbar-expand-lg topnav-menu">
                <div
                  className="collapse navbar-collapse"
                  id="topnav-menu-content"
                >
                  <ul className="navbar-nav">
                    {/* <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle arrow-none"
                        to="/project-list2"
                        id="topnav-apps"
                      >
                        <i className="uil-package mr-1" />
                        My Task
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle arrow-none"
                        to="/project-list1"
                        id="topnav-apps"
                      >
                        <i className="uil-copy-alt mr-1" />
                        Board
                      </Link>
                    </li> */}
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle arrow-none"
                        to="/calender"
                        id="topnav-apps"
                      >
                        <i className="uil-apps mr-1" />
                         Welcome to Trutask Admin Panel
                      </Link>
                    </li>
                    {/* <li
                      className="nav-item dropdown"
                      style={{ marginLeft: "125%" }}
                    >
                      <a
                        className="nav-link dropdown-toggle arrow-none"
                        href="index.php"
                        id="topnav-apps"
                      >
                        Welcome to Trutask Admin Panel
                      </a>
                    </li> */}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        );
    }
}
