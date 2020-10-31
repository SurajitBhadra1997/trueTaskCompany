import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import moment from "moment";
window.jQuery = window.$ = $;

export default class collapsible extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  async componentDidMount() {}
  onClickOpen() {
    this.props.onModalOpen(true,this.props.task);
  }
  render() {
    return (
      <div className="card-body">
        <div className="row justify-content-sm-between">
          <div className="col-sm-12 mb-2 mb-sm-0">
            <div className="custom-control custom-checkbox" id="context-click"
            onClick={() => this.onClickOpen()}
            data-toggle="modal"
               data-target="#add-new-task-modal"
            >
              {/* <input
                type="checkbox"
                className="custom-control-input"
                id="task1"
                onClick={() => this.onClickOpen()}
              /> */}
              <label className="custom-control-label" htmlFor="task1">
              {this.props.task_title?this.props.task_title:"No title"}
              </label>
            </div>
            {/* end checkbox */}
          </div>
          {/* end col */}
          <div className="col-sm-12">
            <div className="d-flex justify-content-between mt-2">
            {this.props.image!=""?(
              <div>
                <img
                  src="assets/images/users/avatar-9.jpg"
                  alt="image"
                  className="avatar-xs rounded-circle mr-1"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Assigned to Arya S"
                />
              </div>):
                <div
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  backgroundColor: "grey",
                  height: "24px",
                  width: "24px",
                  color: "white",
                  lineHeight: "24px",
                }}
                className="rounded-circle avatar-xs mr-2"
              >
                {this.props.asigned_to
                  .charAt(0)
                  .toUpperCase() 
                  }
              </div>
              }
              <div>
                <ul className="list-inline font-13 text-right">
                  <li className="list-inline-item">
                    <i className="uil uil-schedule font-16 mr-1" /> {moment(this.props.asigned_on).format('DD MMM YYYY')}
                  </li>
                  <li className="list-inline-item ml-1">
                    <i className="uil uil-align-alt font-16 mr-1" /> 3/7
                  </li>
                  <li className="list-inline-item ml-1">
                    <i className="uil uil-comment-message font-16 mr-1" />
                    21
                  </li>
                  <li className="list-inline-item ml-2">
                    <span className="badge badge-danger-lighten p-1">{this.props.priority}</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* end .d-flex*/}
          </div>
          {/* end col */}
        </div>

        {/* <div className="row justify-content-sm-between mt-2">
          <div className="col-sm-6 mb-2 mb-sm-0">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="task2"
                onClick={() => this.onClickOpen()}
              />
              <label className="custom-control-label" htmlFor="task2">
                iOS App home page
              </label>
            </div> */}
            {/* end checkbox */}
          {/* </div> */}
          {/* end col */}
          {/* <div className="col-sm-6">
            <div className="d-flex justify-content-between">
              <div>
                <img
                  src="assets/images/users/avatar-2.jpg"
                  alt="image"
                  className="avatar-xs rounded-circle mr-1"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Assigned to James B"
                />
              </div>
              <div>
                <ul className="list-inline font-13 text-right">
                  <li className="list-inline-item">
                    <i className="uil uil-schedule font-16 mr-1" /> Today 4pm
                  </li>
                  <li className="list-inline-item ml-1">
                    <i className="uil uil-align-alt font-16 mr-1" /> 2/7
                  </li>
                  <li className="list-inline-item ml-1">
                    <i className="uil uil-comment-message font-16 mr-1" />
                    48
                  </li>
                  <li className="list-inline-item ml-2">
                    <span className="badge badge-danger-lighten p-1">High</span>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* end .d-flex*/}
          {/* </div> */}
          {/* end col */}
        {/* </div> */}

        {/* <div className="row justify-content-sm-between mt-2">
          <div className="col-sm-6 mb-2 mb-sm-0">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="task3"
                onClick={() => this.onClickOpen()}
              />
              <label className="custom-control-label" htmlFor="task3">
                Write a release note
              </label>
            </div> */}
            {/* end checkbox */}
          {/* </div> */}
          {/* end col */}
          {/* <div className="col-sm-6">
            <div className="d-flex justify-content-between">
              <div>
                <img
                  src="assets/images/users/avatar-4.jpg"
                  alt="image"
                  className="avatar-xs rounded-circle mr-1"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Assigned to Kevin C"
                />
              </div> */}
              {/* <div>
                <ul className="list-inline font-13 text-right mb-0">
                  <li className="list-inline-item">
                    <i className="uil uil-schedule font-16 mr-1" /> Today 6pm
                  </li>
                  <li className="list-inline-item ml-1">
                    <i className="uil uil-align-alt font-16 mr-1" /> 18/21
                  </li>
                  <li className="list-inline-item ml-1">
                    <i className="uil uil-comment-message font-16 mr-1" />
                    73
                  </li>
                  <li className="list-inline-item ml-2">
                    <span className="badge badge-info-lighten p-1">Medium</span>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* end .d-flex*/}
          {/* </div> */}
          {/* end col */}
        {/* </div> */}
      </div>
    );
  }
}
