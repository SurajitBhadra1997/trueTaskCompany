import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcomb from "../../components/breadcomb";

export default class index extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Breadcomb pageTitle="My Team Report" />
        <div className="row justify-content-center">
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
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3">
                <div className="card-body p-0">
                  <h4 className="header-title mb-4">
                    Projects by Resource Tasks
                  </h4>
                  <div
                    id="update-donut"
                    className="apex-charts"
                    data-colors="#727cf5,#6c757d,#0acf97,#fa5c7c"
                  />
                </div>
              </div>
              <div className="col-md-9">
                <div className="card-body p-0">
                  <h4 className="header-title mb-0">
                    Effort Completed and Remaining by Resource
                  </h4>
                  <div
                    id="basic-bar"
                    className="apex-charts"
                    data-colors="#39afd1"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="card-body p-0">
                  <h4 className="header-title mb-4">Tasks by status</h4>
                  <div
                    id="simple-pie"
                    className="apex-charts"
                    data-colors="#727cf5,#6c757d,#0acf97,#fa5c7c,#e3eaef"
                  />
                </div>
              </div>
              <div className="col-md-9 pt-3">
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
        </div>
      </div>
    );
  }
}
