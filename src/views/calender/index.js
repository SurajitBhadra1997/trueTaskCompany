import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcomb from "../components/breadcomb";

export default class index extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* start page title */}
        <Breadcomb pageTitle="Calender" />
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div id="calendar" />
                  </div>
                </div>
              </div>
            </div>
            {/* end card */}
            {/* Add New Event MODAL */}
            <div className="modal fade" id="event-modal" tabIndex={-1}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header pr-4 pl-4 border-bottom-0 d-block">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      ×
                    </button>
                    <h4 className="modal-title">Add New Event</h4>
                  </div>
                  <div className="modal-body pt-3 pr-4 pl-4"></div>
                  <div className="text-right pb-4 pr-4">
                    <button
                      type="button"
                      className="btn btn-light "
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-success save-event  "
                    >
                      Create event
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger delete-event  "
                      data-dismiss="modal"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {/* end modal-content*/}
              </div>
              {/* end modal dialog*/}
            </div>
            {/* end modal*/}
            {/* Modal Add Category */}
            <div className="modal fade" id="add-category" tabIndex={-1}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header border-bottom-0 d-block">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      ×
                    </button>
                    <h4 className="modal-title">Add a category</h4>
                  </div>
                  <div className="modal-body p-4">
                    <form>
                      <div className="form-group">
                        <label className="control-label">Category Name</label>
                        <input
                          className="form-control form-white"
                          placeholder="Enter name"
                          type="text"
                          name="category-name"
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label">
                          Choose Category Color
                        </label>
                        <select
                          className="form-control form-white"
                          data-placeholder="Choose a color..."
                          name="category-color"
                        >
                          <option value="primary">Primary</option>
                          <option value="success">Success</option>
                          <option value="danger">Danger</option>
                          <option value="info">Info</option>
                          <option value="warning">Warning</option>
                          <option value="dark">Dark</option>
                        </select>
                      </div>
                    </form>
                    <div className="text-right">
                      <button
                        type="button"
                        className="btn btn-light "
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary ml-1   save-category"
                        data-dismiss="modal"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end col-12 */}
        </div>
      </div>
    );
  }
}
