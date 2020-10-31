import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class navSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchHint: false,
      searchstring:"",
    };
  }

  render() {
    return (
      <div className="app-search dropdown d-none d-lg-block">
        <form className="ml-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control dropdown-toggle"
              placeholder="Search..."
              id="top-search"
              onChange={(val) => {
                this.setState({ searchstring: val.target.value });
              }}
              // onClick={() =>
              //   this.setState({ searchHint: !this.state.searchHint })
              // }
            />
            <span className="mdi mdi-magnify search-icon" />
            <div className="input-group-append">
              <button
                className="btn btn-primary m-0"
                type="submit"
                onClick={() =>
                  this.setState({ searchHint: !this.state.searchHint })
                }
                style={{ padding: ".45rem .9rem" }}
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div
          className={`dropdown-menu dropdown-menu-animated dropdown-lg + ${
            this.state.searchHint ? "d-block" : ""
          }`}
          id="search-dropdown"
        >
          {/* item*/}
          <div className="dropdown-header noti-title">
            <h5 className="text-overflow mb-2">
              Found <span className="text-danger">17</span> results
            </h5>
          </div>
          {/* item*/}
          <div className="dropdown-header noti-title">
            <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
          </div>
          <div className="notification-list">
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <div className="media">
                <img
                  className="d-flex mr-2 rounded-circle"
                  src="/assets/images/users/avatar-2.jpg"
                  alt="Generic placeholder image"
                  height={32}
                />
                <div className="media-body">
                  <h5 className="m-0 font-14">Erwin Brown</h5>
                  <span className="font-12 mb-0">UI Designer</span>
                </div>
              </div>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <div className="media">
                <img
                  className="d-flex mr-2 rounded-circle"
                  src="/assets/images/users/avatar-5.jpg"
                  alt="Generic placeholder image"
                  height={32}
                />
                <div className="media-body">
                  <h5 className="m-0 font-14">Jacob Deo</h5>
                  <span className="font-12 mb-0">Developer</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
