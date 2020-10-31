import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcomb from "../../components/breadcomb";

export default class index extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Breadcomb pageTitle="Task Overview" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row justify-content-center row6Box">
              <div className="col-md-2">
                <div className="btn btn-light mb-2">
                  <p>Projects</p>
                  <h4 className="text-dark">20</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="btn btn-light mb-2">
                  <p>Effort</p>
                  <h4 className="text-dark">18k</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="btn btn-light mb-2">
                  <p>Effort Completed</p>
                  <h4 className="text-dark">6,596</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="btn btn-light mb-2">
                  <p>Effort Remaning</p>
                  <h4 className="text-dark">11k</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="btn btn-light mb-2">
                  <p>Projects</p>
                  <h4 className="text-dark">20</h4>
                </div>
              </div>
              <div className="col-md-2">
                <div className="btn btn-light mb-2">
                  <p>Effort</p>
                  <h4 className="text-dark">18k</h4>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-3">
                <div className="card-body p-0">
                  <h4 className="header-title mb-2">Tasks by Status</h4>
                  <div
                    id="update-donut"
                    className="apex-charts"
                    data-colors="#727cf5,#6c757d,#0acf97,#fa5c7c"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-body p-0">
                  <h4 className="header-title mb-2">
                    Tasks by Project &gt; Bucket
                  </h4>
                  <div
                    id="simple-pie"
                    className="apex-charts"
                    data-colors="#727cf5,#6c757d,#0acf97,#fa5c7c,#e3eaef"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h4 className="header-title mb-4">
                  Effort by Project &gt; Bucket
                </h4>
                <div className="row no-gutters myHeightDiv">
                  <div className="col-md-2 bg-warning">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                  <div className="col-md-2 bg-secondary">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                  <div className="col-md-2 bg-info">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                  <div className="col-md-2 bg-success">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                  <div className="col-md-2 bg-danger">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                  <div className="col-md-2 bg-primary">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters myHeightDiv">
                  <div className="col-md-2 bg-info">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                  <div className="col-md-2 bg-success">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                  <div className="col-md-2 bg-danger">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                  <div className="col-md-2 bg-primary">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                  <div className="col-md-2 bg-warning">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                  <div className="col-md-2 bg-secondary">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters myHeightDiv">
                  <div className="col-md-2 bg-secondary">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                  <div className="col-md-2 bg-info">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                  <div className="col-md-2 bg-warning">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                  <div className="col-md-2 bg-danger">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                  <div className="col-md-2 bg-primary">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                  <div className="col-md-2 bg-success">
                    <div className="d-flex flex-column">
                      <h6 className="ml-0 mt-0 mr-auto mb-auto text-white">
                        Vender Onboarding
                      </h6>
                      <p className="ml-0 mb-0 mr-auto mt-auto text-white">7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="d-flex flex-column">
              <div className="btn btn-light mb-2">
                <p>Projects</p>
                <h4 className="text-dark">20</h4>
              </div>
              <div className="btn btn-light mb-2">
                <p>Effort</p>
                <h4 className="text-dark">18k</h4>
              </div>
              <div className="btn btn-light mb-2">
                <p>Effort Completed</p>
                <h4 className="text-dark">6,596</h4>
              </div>
              <div className="btn btn-light mb-2">
                <p>Effort Remaning</p>
                <h4 className="text-dark">11k</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-md-12">
            <div className="my_table">
              <table className="table table-centered mb-0">
                <thead className="thead-dark">
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
                      <i className="mdi mdi-circle text-success" /> Delivered
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
                      <i className="mdi mdi-circle text-info" /> Order Received
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
                      <i className="mdi mdi-circle text-success" /> Delivered
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
