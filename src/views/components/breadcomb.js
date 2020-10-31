import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class breadcomb extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <div className="page-title-right">
                  <ol className="breadcrumb py-0 m-0">
                    <li className="breadcrumb-item">
                      <Link to="/dashboard">
                        <i className="mdi mdi-home-outline"></i>{" "} Home
                      </Link>
                    </li>
                    {this.props.leadTitle ? (
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">
                          {this.props.leadTitle}
                        </a>
                      </li>
                    ) : null}
                    <li className="breadcrumb-item active">
                      {this.props.pageTitle}
                    </li>
                  </ol>
                </div>
                <h4 className="page-title">{this.props.pageTitle} </h4>
              </div>
            </div>
          </div>
        );
    }
}
