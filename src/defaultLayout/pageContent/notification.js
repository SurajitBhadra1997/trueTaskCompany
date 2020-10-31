import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class notification extends Component {
  render() {
    return (
      <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">
        {/* item*/}
        <div className="dropdown-item noti-title">
          <h5 className="m-0">
            <span className="float-right">
              <a href="javascript: void(0);" className="text-dark">
                <small>Clear All</small>
              </a>
            </span>
            Notification
          </h5>
        </div>
        <div style={{ maxHeight: "230px" }} data-simplebar>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <div className="notify-icon bg-primary">
              <i className="mdi mdi-comment-account-outline" />
            </div>
            <p className="notify-details">
              Caleb Flakelar commented on Admin
              <small className="text-muted">1 min ago</small>
            </p>
          </a>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <div className="notify-icon bg-info">
              <i className="mdi mdi-account-plus" />
            </div>
            <p className="notify-details">
              New user registered.
              <small className="text-muted">5 hours ago</small>
            </p>
          </a>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <div className="notify-icon">
              <img
                src="/assets/images/users/avatar-2.jpg"
                className="img-fluid rounded-circle"
                alt=""
              />{" "}
            </div>
            <p className="notify-details">Cristina Pride</p>
            <p className="text-muted mb-0 user-msg">
              <small>Hi, How are you? What about our next meeting</small>
            </p>
          </a>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <div className="notify-icon bg-primary">
              <i className="mdi mdi-comment-account-outline" />
            </div>
            <p className="notify-details">
              Caleb Flakelar commented on Admin
              <small className="text-muted">4 days ago</small>
            </p>
          </a>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <div className="notify-icon">
              <img
                src="/assets/images/users/avatar-4.jpg"
                className="img-fluid rounded-circle"
                alt=""
              />{" "}
            </div>
            <p className="notify-details">Karen Robinson</p>
            <p className="text-muted mb-0 user-msg">
              <small>Wow ! this admin looks good and awesome design</small>
            </p>
          </a>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <div className="notify-icon bg-info">
              <i className="mdi mdi-heart" />
            </div>
            <p className="notify-details">
              Carlos Crouch liked
              <b>Admin</b>
              <small className="text-muted">13 days ago</small>
            </p>
          </a>
        </div>
        {/* All*/}
        <a
          href="javascript:void(0);"
          className="dropdown-item text-center text-primary notify-item notify-all"
        >
          View All
        </a>
      </div>
    );
  }
}
