import React, { Component } from "react";

export default class dropdown extends Component {
  render() {
    return (
      <div className="dropdown float-right">
        <a
          href="#"
          className="dropdown-toggle arrow-none card-drop"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="mdi mdi-dots-vertical" />
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a href="javascript:void(0);" className="dropdown-item">
            Sales Report
          </a>

          <a href="javascript:void(0);" className="dropdown-item">
            Export Report
          </a>

          <a href="javascript:void(0);" className="dropdown-item">
            Profit
          </a>

          <a href="javascript:void(0);" className="dropdown-item">
            Action
          </a>
        </div>
      </div>
    );
  }
}
