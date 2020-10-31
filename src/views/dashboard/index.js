import React, { Component } from "react";
import ProducTable from "./dashParts/producTable";
import Activity from "./dashParts/activity";
import DropDown from "./dashParts/dropdown";
import { Link } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";


export default class index extends Component {
   constructor(props) {
    super(props);
    this.state = {
      active_subscription:"",
      active_user:"",
      new_subscription:"",
      cancelled_subscription:"",
   
    };
  
  }
  componentDidMount() {
  this.getDashboardDetails();
  }

  getDashboardDetails = async ()=>
  {
    let data = {
      
    };

    let result = await HttpClient.requestData(
      "dashboard-details",
      "POST",
      data
    );

    console.log("result product", result);

    if (result && result.status) 
    {
      this.setState({
       
        active_subscription:result.active_subscription,
        active_user:result.active_user,
        new_subscription:result.new_subscription,
        cancelled_subscription:result.cancelled_subscription,
      });
    }

  }

  render() {
    return (
      <div className="container-fluid">
        {/* start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <form className="form-inline">
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control form-control-light"
                        id="dash-daterange"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-primary border-primary text-white">
                          <i className="mdi mdi-calendar-range font-13" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="javascript: void(0);"
                    className="btn btn-primary ml-2"
                  >
                    <i className="mdi mdi-autorenew" />
                  </a>
                  <a
                    href="javascript: void(0);"
                    className="btn btn-primary ml-1"
                  >
                    <i className="mdi mdi-filter-variant" />
                  </a>
                </form>
              </div>
              <h4 className="page-title">Dashboard</h4>
            </div>
          </div>
        </div>
        {/* end page title */}
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-right">
                      <i className="mdi mdi-account-multiple widget-icon" />
                    </div>
                    <h5
                      className="text-muted font-weight-normal mt-0"
                      title="Number of Customers"
                    >
                    Active User
                    </h5>
    <h3 className="mt-3 mb-3">{this.state.active_user}</h3>
                    <p className="mb-0 text-muted">
                      <span className="text-success mr-2">
                        <i className="mdi mdi-arrow-up-bold" /> 5.27%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-right">
                      <i className="mdi mdi-cart-plus widget-icon" />
                    </div>
                    <h5
                      className="text-muted font-weight-normal mt-0"
                      title="Number of Orders"
                    >
                      Active Subscription
                    </h5>
    <h3 className="mt-3 mb-3">{this.state.active_subscription}</h3>
                    <p className="mb-0 text-muted">
                      <span className="text-danger mr-2">
                        <i className="mdi mdi-arrow-down-bold" /> 1.08%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* end col*/}
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-lg-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-right">
                      <i className="mdi mdi-currency-usd widget-icon" />
                    </div>
                    <h5
                      className="text-muted font-weight-normal mt-0"
                      title="Average Revenue"
                    >
                      New_Subscription
                    </h5>
    <h3 className="mt-3 mb-3">{this.state.new_subscription}</h3>
                    <p className="mb-0 text-muted">
                      <span className="text-danger mr-2">
                        <i className="mdi mdi-arrow-down-bold" /> 7.00%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                  {/* end card-body*/}
                </div>
                {/* end card*/}
              </div>
              {/* end col*/}
              <div className="col-lg-6">
                <div className="card widget-flat">
                  <div className="card-body">
                    <div className="float-right">
                      <i className="mdi mdi-pulse widget-icon" />
                    </div>
                    <h5
                      className="text-muted font-weight-normal mt-0"
                      title="Growth"
                    >
                     Cancelled Subscription
                    </h5>
    <h3 className="mt-3 mb-3">{this.state.cancelled_subscription}</h3>
                    <p className="mb-0 text-muted">
                      <span className="text-success mr-2">
                        <i className="mdi mdi-arrow-up-bold" /> 4.87%
                      </span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                  {/* end card-body*/}
                </div>
                {/* end card*/}
              </div>
              {/* end col*/}
            </div>
          </div>
          {/* end col */}
          <div className="col-xl-7  col-lg-6">
            <div className="card">
              <div className="card-body">
                <DropDown />
                <h4 className="header-title mb-3">Projections Vs Actuals</h4>
                <div
                  id="high-performing-product"
                  className="apex-charts"
                  data-colors="#727cf5,#e3eaef"
                />
              </div>
            </div>
          </div>
          {/* end col */}
        </div>
        {/* end row */}
        <div className="row">
          <div className="col-xl-6 col-lg-12 order-lg-2 order-xl-1">
            <div className="card">
              <ProducTable />
            </div>
            {/* end card*/}
          </div>
          {/* end col*/}
          <div className="col-xl-3 col-lg-6 order-lg-1">
            <div className="card">
              <div className="card-body">
                <DropDown />
                <h4 className="header-title">Total Sales</h4>
                <div
                  id="average-sales"
                  className="apex-charts mb-4 mt-4"
                  data-colors="#727cf5,#0acf97,#fa5c7c,#ffbc00"
                />
                <div className="chart-widget-list">
                  <p>
                    <i className="mdi mdi-square text-primary" /> Direct
                    <span className="float-right">$300.56</span>
                  </p>
                  <p>
                    <i className="mdi mdi-square text-danger" /> Affilliate
                    <span className="float-right">$135.18</span>
                  </p>
                  <p>
                    <i className="mdi mdi-square text-success" /> Sponsored
                    <span className="float-right">$48.96</span>
                  </p>
                  <p className="mb-0">
                    <i className="mdi mdi-square text-warning" /> E-mail
                    <span className="float-right">$154.02</span>
                  </p>
                </div>
              </div>
            </div>
            {/* end card*/}
          </div>
          {/* end col*/}
          <div className="col-xl-3 col-lg-6 order-lg-1">
            <div className="card">
              <div className="card-body">
                <DropDown />
                <h4 className="header-title mb-2">Recent Activity</h4>
                <div data-simplebar style={{ maxHeight: "424px" }}>
                  <Activity />
                </div>
              </div>
            </div>
          </div>
          {/* end col */}
        </div>
        {/* end row 2nd */}
      </div>
    );
  }
}