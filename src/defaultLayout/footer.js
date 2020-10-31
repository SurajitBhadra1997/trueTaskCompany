import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class footer extends Component {
    render() {
        return (
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  2020 © Trutask - All rights reserved
                </div>
                <div className="col-md-6">
                  <div className="text-md-right footer-links d-none d-md-block">
                    <a href="javascript: void(0);">About</a>
                    <a href="javascript: void(0);">Support</a>
                    <a href="javascript: void(0);">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        );
    }
}
