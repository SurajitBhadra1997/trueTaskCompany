import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcomb from "../../components/breadcomb";
import TimeLine from "react-gantt-timeline";

export default class index extends Component {
  constructor(props) {
    super(props)
  let d1 = new Date();
  let d2 = new Date();
  d2.setDate(d2.getDate() + 5);
  let d3 = new Date();
  d3.setDate(d3.getDate() + 8);
  let d4 = new Date();
  d4.setDate(d4.getDate() + 20);
  this.data = [
    {
      id: 1,
      start: d1,
      end: d2,
      name: "Demo Task 1",
    },
    {
      id: 2,
      start: d3,
      end: d4,
      name: "Demo Task 2",
      color: "orange",
    },
    {
      id: 3,
      start: d1,
      end: d3,
      name: "Demo Task 3",
      color: "green",
    },
  ];
  this.links = [
    { id: 1, start: 1, end: 2 },
    { id: 2, start: 1, end: 3 },
  ];
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div className="container-fluid">
        <Breadcomb pageTitle="Project Timeline" />
        <div className="row justify-content-center mt-3">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title mb-4">Vender onboarding</h4>
                <div className="media border-bottom pb-2 mb-2">
                  <div className="media-body">
                    <h5 className="mt-0 mb-0">Risa Pearson</h5>
                    <span className="font-13">richard.john@mail.com</span>
                  </div>
                </div>
                <div className="media border-bottom pb-2 mb-2">
                  <div className="media-body">
                    <h5 className="mt-0 mb-0">Risa Pearson</h5>
                    <span className="font-13">richard.john@mail.com</span>
                  </div>
                </div>
                <div className="media border-bottom pb-2 mb-2">
                  <div className="media-body">
                    <h5 className="mt-0 mb-0">Risa Pearson</h5>
                    <span className="font-13">richard.john@mail.com</span>
                  </div>
                </div>
                <div className="media border-bottom pb-2 mb-2">
                  <div className="media-body">
                    <h5 className="mt-0 mb-0">Risa Pearson</h5>
                    <span className="font-13">richard.john@mail.com</span>
                  </div>
                </div>
                <div className="media border-bottom pb-2 mb-2">
                  <div className="media-body">
                    <h5 className="mt-0 mb-0">Risa Pearson</h5>
                    <span className="font-13">richard.john@mail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* gantt view */}
          <div className="col-md-9 bg-white">
            <div className="pl-xl-3">
              <div className="time-line-container">
                <TimeLine data={this.data} links={this.links} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
