import React, { Component } from 'react'

export default class settings extends Component {
    render() {
        return (
          <div>
            <div className="right-bar">
              <div className="rightbar-title">
                <a
                  href="javascript:void(0);"
                  className="right-bar-toggle float-right"
                >
                  <i className="dripicons-cross noti-icon" />
                </a>
                <h5 className="m-0">Settings</h5>
              </div>
              <div className="rightbar-content h-100" data-simplebar>
                <div className="p-3">
                  <div className="alert alert-warning" role="alert">
                    <strong>Customize </strong> the overall color scheme,
                    sidebar menu, etc.
                  </div>
                  {/* Settings */}
                  <h5 className="mt-3">Color Scheme</h5>
                  <hr className="mt-1" />
                  <div className="custom-control custom-switch mb-1">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="color-scheme-mode"
                      defaultValue="light"
                      id="light-mode-check"
                      defaultChecked
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="light-mode-check"
                    >
                      Light Mode
                    </label>
                  </div>
                  <div className="custom-control custom-switch mb-1">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="color-scheme-mode"
                      defaultValue="dark"
                      id="dark-mode-check"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="dark-mode-check"
                    >
                      Dark Mode
                    </label>
                  </div>
                  {/* Width */}
                  <h5 className="mt-4">Width</h5>
                  <hr className="mt-1" />
                  <div className="custom-control custom-switch mb-1">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="width"
                      defaultValue="fluid"
                      id="fluid-check"
                      defaultChecked
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="fluid-check"
                    >
                      Fluid
                    </label>
                  </div>
                  <div className="custom-control custom-switch mb-1">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="width"
                      defaultValue="boxed"
                      id="boxed-check"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="boxed-check"
                    >
                      Boxed
                    </label>
                  </div>
                  {/* Left Sidebar*/}
                  <h5 className="mt-4">Left Sidebar</h5>
                  <hr className="mt-1" />
                  <div className="custom-control custom-switch mb-1">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="theme"
                      defaultValue="default"
                      id="default-check"
                      defaultChecked
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="default-check"
                    >
                      Default
                    </label>
                  </div>
                  <div className="custom-control custom-switch mb-1">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="theme"
                      defaultValue="light"
                      id="light-check"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="light-check"
                    >
                      Light
                    </label>
                  </div>
                  <div className="custom-control custom-switch mb-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="theme"
                      defaultValue="dark"
                      id="dark-check"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="dark-check"
                    >
                      Dark
                    </label>
                  </div>
                  <div className="custom-control custom-switch mb-1">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="compact"
                      defaultValue="fixed"
                      id="fixed-check"
                      defaultChecked
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="fixed-check"
                    >
                      Fixed
                    </label>
                  </div>
                  <div className="custom-control custom-switch mb-1">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="compact"
                      defaultValue="condensed"
                      id="condensed-check"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="condensed-check"
                    >
                      Condensed
                    </label>
                  </div>
                  <div className="custom-control custom-switch mb-1">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="compact"
                      defaultValue="scrollable"
                      id="scrollable-check"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="scrollable-check"
                    >
                      Scrollable
                    </label>
                  </div>
                  <button
                    className="btn btn-primary btn-block mt-4"
                    id="resetBtn"
                  >
                    Reset to Default
                  </button>
                  
                </div>{" "}
                {/* end padding*/}
              </div>
            </div>
            <div className="rightbar-overlay" />
          </div>
        );
    }
}
