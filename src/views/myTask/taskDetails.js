import React, { Component } from "react";

export default class TaskDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  onClickClose() {
    this.props.onModalClose(false);
  }

  render() {
    return (
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-body p-0">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
              onClick={() => this.onClickClose()}
            >
              ×
            </button>
            <div className="card shadow-none">
              <div className="card-body">
                <div className="dropdown card-widgets mr-2">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="uil uil-ellipsis-h" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="uil uil-file-upload mr-1" />
                      Attachment
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="uil uil-edit mr-1" />
                      Edit
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="uil uil-file-copy-alt mr-1" />
                      Mark as Duplicate
                    </a>
                    <div className="dropdown-divider" />
                    {/* item*/}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item text-danger"
                    >
                      <i className="uil uil-trash-alt mr-1" />
                      Delete
                    </a>
                  </div>
                  {/* end dropdown menu*/}
                </div>
                {/* end dropdown*/}
                <div className="custom-control custom-checkbox float-left">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="completedCheck"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="completedCheck"
                  >
                    Mark as completed
                  </label>
                </div>
                {/* end custom-checkbox*/}
                <hr className="mt-4 mb-2" />
                <div className="row">
                  <div className="col">
                    <h4>Draft the new contract document for sales team</h4>
                    <div className="row">
                      <div className="col-12">
                        {/* assignee */}
                        <p className="mt-2 mb-1 text-muted">Assigned To</p>
                        <div className="media">
                          <img
                            src="assets/images/users/avatar-9.jpg"
                            alt="Arya S"
                            className="rounded-circle mr-2"
                            height={24}
                          />
                          <div className="media-body">
                            <h5 className="mt-1 font-14">Arya Stark</h5>
                          </div>
                        </div>
                        {/* end assignee */}
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                    <div className="row">
                      <div className="col-6">
                        {/* assignee */}
                        <p className="mt-2 mb-1 text-muted">Start Date</p>
                        <div className="media">
                          <i className="uil uil-schedule font-18 text-success mr-1" />
                          <div className="media-body">
                            <h5 className="mt-1 font-14">Today 10am</h5>
                          </div>
                        </div>
                        {/* end assignee */}
                      </div>
                      {/* end col */}
                      <div className="col-6">
                        {/* start due date */}
                        <p className="mt-2 mb-1 text-muted">End Date</p>
                        <div className="media">
                          <i className="uil uil-schedule font-18 text-success mr-1" />
                          <div className="media-body">
                            <h5 className="mt-1 font-14">Today 10am</h5>
                          </div>
                        </div>
                        {/* end due date */}
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                    <div className="row">
                      <div className="col-12">
                        {/* assignee */}
                        <p className="mt-2 mb-1 text-muted">Tags</p>
                        {/* Multiple Select */}
                        <select
                          className="select2 form-control select2-multiple"
                          data-toggle="select2"
                          multiple="multiple"
                          data-placeholder="Choose ..."
                        >
                          <optgroup label="Alaskan/Hawaiian Time Zone">
                            <option value="AK">Alaska</option>
                            <option value="HI">Hawaii</option>
                          </optgroup>
                          <optgroup label="Pacific Time Zone">
                            <option value="CA">California</option>
                            <option value="NV">Nevada</option>
                            <option value="OR">Oregon</option>
                            <option value="WA">Washington</option>
                          </optgroup>
                          <optgroup label="Mountain Time Zone">
                            <option value="AZ">Arizona</option>
                            <option value="CO">Colorado</option>
                            <option value="ID">Idaho</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NM">New Mexico</option>
                            <option value="ND">North Dakota</option>
                            <option value="UT">Utah</option>
                            <option value="WY">Wyoming</option>
                          </optgroup>
                          <optgroup label="Central Time Zone">
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="IL">Illinois</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="OK">Oklahoma</option>
                            <option value="SD">South Dakota</option>
                            <option value="TX">Texas</option>
                            <option value="TN">Tennessee</option>
                            <option value="WI">Wisconsin</option>
                          </optgroup>
                          <optgroup label="Eastern Time Zone">
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="IN">Indiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="OH">Ohio</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WV">West Virginia</option>
                          </optgroup>
                        </select>
                        {/* end assignee */}
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                    {/* task description */}
                    <div className="row mt-3">
                      <div className="col">
                        <div id="taskDesk">
                          <p>This is a task description with markup support</p>
                          <ul>
                            <li>Select a text to reveal the toolbar.</li>
                            <li>Edit rich document on-the-fly, so elastic!</li>
                          </ul>
                          <p>End of air-mode area</p>
                        </div>
                      </div>
                      {/* end col */}
                    </div>
                    {/* end task description */}
                    {/* start sub tasks/checklists */}
                    <h5 className="mt-4 mb-2 font-16">Checklists/Sub-tasks</h5>
                    <div className="custom-control custom-checkbox mt-1">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="checklist1"
                      />
                      <label
                        className="custom-control-label strikethrough"
                        htmlFor="checklist1"
                      >
                        Find out the old contract documents
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox mt-1">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="checklist2"
                      />
                      <label
                        className="custom-control-label strikethrough"
                        htmlFor="checklist2"
                      >
                        Organize meeting sales associates to understand need in
                        detail
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox mt-1">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="checklist3"
                      />
                      <label
                        className="custom-control-label strikethrough"
                        htmlFor="checklist3"
                      >
                        Make sure to cover every small details
                      </label>
                    </div>
                    {/* end sub tasks/checklists */}
                    {/* start attachments */}
                    <h5 className="mt-4 mb-2 font-16">Attachments</h5>
                    <div className="card mb-2 shadow-none border">
                      <div className="p-1">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <div className="avatar-sm">
                              <span className="avatar-title rounded">.ZIP</span>
                            </div>
                          </div>
                          <div className="col pl-0">
                            <a
                              href="javascript:void(0);"
                              className="text-muted font-weight-bold"
                            >
                              sales-assets.zip
                            </a>
                            <p className="mb-0">2.3 MB</p>
                          </div>
                          <div className="col-auto">
                            {/* Button */}
                            <a
                              href="javascript:void(0);"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Download"
                              className="btn btn-link text-muted btn-lg p-0"
                            >
                              <i className="uil uil-cloud-download" />
                            </a>
                            <a
                              href="javascript:void(0);"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Delete"
                              className="btn btn-link text-danger btn-lg p-0"
                            >
                              <i className="uil uil-multiply" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2 shadow-none border">
                      <div className="p-1">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <img
                              src="assets/images/projects/project-1.jpg"
                              className="avatar-sm rounded"
                              alt="file-image"
                            />
                          </div>
                          <div className="col pl-0">
                            <a
                              href="javascript:void(0);"
                              className="text-muted font-weight-bold"
                            >
                              new-contarcts.docx
                            </a>
                            <p className="mb-0">1.25 MB</p>
                          </div>
                          <div className="col-auto">
                            {/* Button */}
                            <a
                              href="javascript:void(0);"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Download"
                              className="btn btn-link text-muted btn-lg p-0"
                            >
                              <i className="uil uil-cloud-download" />
                            </a>
                            <a
                              href="javascript:void(0);"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Delete"
                              className="btn btn-link text-danger btn-lg p-0"
                            >
                              <i className="uil uil-multiply" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end attachments */}
                    {/* comments */}
                    <div className="row mt-3">
                      <div className="col">
                        <h5 className="mb-2 font-16">Comments</h5>
                        <div className="media mt-3 p-1">
                          <img
                            src="assets/images/users/avatar-9.jpg"
                            className="mr-2 rounded-circle"
                            height={36}
                            alt="Arya Stark"
                          />
                          <div className="media-body">
                            <h5 className="mt-0 mb-0">
                              <span className="float-right text-muted font-12">
                                4:30am
                              </span>
                              Arya Stark
                            </h5>
                            <p className="mt-1 mb-0 text-muted">
                              Should I review the last 3 years legal documents
                              as well?
                            </p>
                          </div>
                        </div>
                        {/* end comment */}
                        <hr />
                        <div className="media mt-2 p-1">
                          <img
                            src="assets/images/users/avatar-5.jpg"
                            className="mr-2 rounded-circle"
                            height={36}
                            alt="Dominc B"
                          />
                          <div className="media-body">
                            <h5 className="mt-0 mb-0">
                              <span className="float-right text-muted font-12">
                                3:30am
                              </span>
                              Gary Somya
                            </h5>
                            <p className="mt-1 mb-0 text-muted">
                              @Arya FYI..I have created some general guidelines
                              last year.
                            </p>
                          </div>
                        </div>
                        {/* end comment*/}
                        <hr />
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                    <div className="row mt-2">
                      <div className="col">
                        <div className="border rounded">
                          <form action="#" className="comment-area-box">
                            <textarea
                              rows={3}
                              className="form-control border-0 resize-none"
                              placeholder="Your comment..."
                              defaultValue={""}
                            />
                            <div className="p-2 bg-light">
                              <div className="float-right">
                                <button
                                  type="submit"
                                  className="btn btn-sm btn-success"
                                >
                                  <i className="uil uil-message mr-1" />
                                  Submit
                                </button>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  className="btn btn-sm px-1 btn-light"
                                >
                                  <i className="uil uil-cloud-upload" />
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-sm px-1 btn-light"
                                >
                                  <i className="uil uil-at" />
                                </a>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* end .border*/}
                      </div>
                      {/* end col*/}
                    </div>
                    {/* end row*/}
                    {/* end comments */}
                  </div>
                  {/* end col */}
                </div>
                {/* end row*/}
              </div>
              {/* end card-body */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
