import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcomb from "../../components/breadcomb";

export default class index extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Breadcomb pageTitle="Project Milestone Analysis" />
        <div className="row justify-content-center">
          <div className="col-md-9">
            <h4 className="header-title mb-2">
              Recent Milestone (last 30 days)
            </h4>
            <div className="my_table">
              <table className="table table-centered mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Product</th>
                    <th>Courier</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ASOS Ridley High Waist</td>
                    <td>FedEx</td>
                    <td>
                      <i className="mdi mdi-circle text-success" /> Delivered
                    </td>
                  </tr>
                  <tr>
                    <td>Marco Lightweight Shirt</td>
                    <td>DHL</td>
                    <td>
                      <i className="mdi mdi-circle text-warning" /> Shipped
                    </td>
                  </tr>
                  <tr>
                    <td>Half Sleeve Shirt</td>
                    <td>Bright</td>
                    <td>
                      <i className="mdi mdi-circle text-info" /> Order Received
                    </td>
                  </tr>
                  <tr>
                    <td>Lightweight Jacket</td>
                    <td>FedEx</td>
                    <td>
                      <i className="mdi mdi-circle text-success" /> Delivered
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-body p-0">
              <h4 className="header-title mb-2">
                Projects by Completed Milestone
              </h4>
              <div
                id="update-donut"
                className="apex-charts"
                data-colors="#727cf5,#6c757d,#0acf97,#fa5c7c"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-md-9">
            <h4 className="header-title mb-2">
              Upcoming Milestone (next 30 days)
            </h4>
            <div className="my_table">
              <table className="table table-centered mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th>Product</th>
                    <th>Courier</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ASOS Ridley High Waist</td>
                    <td>FedEx</td>
                    <td>
                      <i className="mdi mdi-circle text-success" /> Delivered
                    </td>
                  </tr>
                  <tr>
                    <td>Marco Lightweight Shirt</td>
                    <td>DHL</td>
                    <td>
                      <i className="mdi mdi-circle text-warning" /> Shipped
                    </td>
                  </tr>
                  <tr>
                    <td>Half Sleeve Shirt</td>
                    <td>Bright</td>
                    <td>
                      <i className="mdi mdi-circle text-info" /> Order Received
                    </td>
                  </tr>
                  <tr>
                    <td>Lightweight Jacket</td>
                    <td>FedEx</td>
                    <td>
                      <i className="mdi mdi-circle text-success" /> Delivered
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-body p-0">
              <h4 className="header-title mb-2">
                Projects by Upcoming Milestones
              </h4>
              <div className="mt-3 chartjs-chart" style={{ height: "320px" }}>
                <canvas
                  id="donut-chart-example"
                  data-colors="#727cf5,#fa5c7c,#0acf97,#ebeff2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
