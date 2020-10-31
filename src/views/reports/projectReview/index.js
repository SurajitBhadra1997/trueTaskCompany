import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcomb from "../../components/breadcomb";

export default class index extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Breadcomb pageTitle="Project Review Report" />
        <div className="row justify-content-center">
          <div className="col-md-2">
            <div className="card text-white bg-danger overflow-hidden">
              <div className="card-body">
                <div className="toll-free-box text-center">
                  <p>
                    Overall <br />
                    Progress
                  </p>
                  <div className="progress progress-lg">
                    <div
                      className="progress-bar progress-lg bg-success"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <h4 className="mb-0">50%</h4>
                </div>
              </div>{" "}
              {/* end card-body*/}
            </div>
          </div>
          <div className="col-md-8 card">
            <div className="progress progress mb-1 mt-1">
              <div
                className="progress-bar progress bg-info"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="row justify-content-center">
              <div className="col-md-3 text-center border-right">
                <div className="w-100 ">
                  <p className="mb-0 font-weight-bold">Planning</p>
                  <p className="text-success mb-0">
                    <i
                      className="mdi mdi-checkbox-marked-circle-outline mdi-48px"
                      aria-hidden="true"
                    />
                  </p>
                  <p className="mb-0 small text-muted">Completed</p>
                </div>
              </div>
              <div className="col-md-3 text-center border-right">
                <div className="w-100 ">
                  <p className="mb-0 font-weight-bold">Design</p>
                  <p className="text-success mb-0">
                    <i
                      className="mdi mdi-checkbox-marked-circle-outline mdi-48px"
                      aria-hidden="true"
                    />
                  </p>
                  <p className="mb-0 small text-muted">Completed</p>
                </div>
              </div>
              <div className="col-md-3 text-center border-right">
                <div className="w-100 ">
                  <p className="mb-0 font-weight-bold">Development</p>
                  <p className="text-danger mb-0">
                    <i
                      className="mdi mdi-developer-board mdi-48px"
                      aria-hidden="true"
                    />
                  </p>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="w-100">
                  <p className="mb-0 font-weight-bold">Testing</p>
                  <p className="text-info mb-0">
                    <i
                      className="mdi mdi-clock-fast mdi-48px"
                      aria-hidden="true"
                    />
                  </p>
                  <p className="mb-0 small text-muted">Waiting</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card text-white bg-success overflow-hidden">
              <div className="card-body">
                <div className="toll-free-box text-center">
                  <p>
                    Projected <br />
                    Launch Date
                  </p>
                  <h4>
                    {" "}
                    <i className="mdi mdi-flag" /> 121 days
                  </h4>
                </div>
              </div>{" "}
              {/* end card-body*/}
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-md-10">
            <div className="row justify-content-center">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-body p-1">
                    <h4 className="header-title mb-3 text-center">
                      Project Summery
                    </h4>
                    <div
                      data-simplebar
                      style={{ maxHeight: "320px", overflowX: "hidden" }}
                    >
                      <div className="row py-1 align-items-center">
                        <div className="col-auto">
                          <p className="mb-0 text-muted">Start Date</p>
                        </div>
                        <div className="col">
                          <p className="text-success text-right pr-2 mb-0">
                            24-05-20
                          </p>
                        </div>
                      </div>
                      <div className="row py-1 align-items-center">
                        <div className="col-auto">
                          <p className="mb-0 text-muted">Start Date</p>
                        </div>
                        <div className="col">
                          <p className="text-success text-right pr-2 mb-0">
                            24-05-20
                          </p>
                        </div>
                      </div>
                      <div className="row py-1 align-items-center">
                        <div className="col-auto">
                          <p className="mb-0 text-muted">Start Date</p>
                        </div>
                        <div className="col">
                          <p className="text-success text-right pr-2 mb-0">
                            24-05-20
                          </p>
                        </div>
                      </div>
                      <div className="row py-1 align-items-center">
                        <div className="col-auto">
                          <p className="mb-0 text-muted">Start Date</p>
                        </div>
                        <div className="col">
                          <p className="text-success text-right pr-2 mb-0">
                            24-05-20
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* end slimscroll */}
                  </div>
                  {/* end card-body */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="card widget-flat">
                  <div className>
                    <h4 className="mb-4 mt-2 text-center">Avg handle time</h4>
                    <div
                      id="spark2"
                      className="apex-charts mb-3"
                      data-colors="#34bfa3"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="my_table card">
                  <h4 className="mb-0 text-center">Upcoming deadlines</h4>
                  <table className="table table-sm table-centered mb-0">
                    <thead className="thead-secondary">
                      <tr>
                        <th>Product</th>
                        <th>Courier</th>
                        <th>Process</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ASOS Ridley High Waist</td>
                        <td>FedEx</td>
                        <td>
                          <div className="progress progress-lg">
                            <div
                              className="progress-bar progress-lg bg-success"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>
                          <i className="mdi mdi-circle text-success" />{" "}
                          Delivered
                        </td>
                      </tr>
                      <tr>
                        <td>Marco Lightweight Shirt</td>
                        <td>DHL</td>
                        <td>
                          <div className="progress progress-lg">
                            <div
                              className="progress-bar progress-lg bg-warning"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>
                          <i className="mdi mdi-circle text-warning" /> Shipped
                        </td>
                      </tr>
                      <tr>
                        <td>Half Sleeve Shirt</td>
                        <td>Bright</td>
                        <td>
                          <div className="progress progress-lg">
                            <div
                              className="progress-bar progress-lg bg-info"
                              role="progressbar"
                              style={{ width: "25%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>
                          <i className="mdi mdi-circle text-info" /> Order
                          Received
                        </td>
                      </tr>
                      <tr>
                        <td>Lightweight Jacket</td>
                        <td>FedEx</td>
                        <td>
                          <div className="progress progress-lg">
                            <div
                              className="progress-bar progress-lg bg-success"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </td>
                        <td>
                          <i className="mdi mdi-circle text-success" />{" "}
                          Delivered
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body p-1">
                <h4 className="header-title mb-2 text-center">Project Log</h4>
                <div data-simplebar style={{ maxHeight: "330px" }}>
                  <div className="timeline-alt pb-0">
                    <div className="timeline-item">
                      <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon" />
                      <div className="timeline-item-info">
                        <a
                          href="#"
                          className="text-info font-weight-bold mb-1 d-block"
                        >
                          You sold an item
                        </a>
                        <small>
                          Paul Burgess just purchased “Hyper - Admin Dashboard”!
                        </small>
                        <p className="mb-0 pb-2">
                          <small className="text-muted">5 minutes ago</small>
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon" />
                      <div className="timeline-item-info">
                        <a
                          href="#"
                          className="text-primary font-weight-bold mb-1 d-block"
                        >
                          Product on the Bootstrap Market
                        </a>
                        <small>
                          Dave Gamache added
                          <span className="font-weight-bold">
                            Admin Dashboard
                          </span>
                        </small>
                        <p className="mb-0 pb-2">
                          <small className="text-muted">30 minutes ago</small>
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon" />
                      <div className="timeline-item-info">
                        <a
                          href="#"
                          className="text-info font-weight-bold mb-1 d-block"
                        >
                          Robert Delaney
                        </a>
                        <small>
                          Send you message
                          <span className="font-weight-bold">
                            "Are you there?"
                          </span>
                        </small>
                        <p className="mb-0 pb-2">
                          <small className="text-muted">2 hours ago</small>
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon" />
                      <div className="timeline-item-info">
                        <a
                          href="#"
                          className="text-primary font-weight-bold mb-1 d-block"
                        >
                          Audrey Tobey
                        </a>
                        <small>
                          Uploaded a photo
                          <span className="font-weight-bold">"Error.jpg"</span>
                        </small>
                        <p className="mb-0 pb-2">
                          <small className="text-muted">14 hours ago</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end timeline */}
                </div>{" "}
                {/* end slimscroll */}
              </div>
              {/* end card-body */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
