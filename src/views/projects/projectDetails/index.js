import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcomb from "../../components/breadcomb";

export default class index extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Breadcomb pageTitle="Project Details" leadTitle="Project" />
        <div className="row">
          <div className="col-xl-8 col-lg-6">
            {/* project card */}
            <div className="card d-block">
              <div className="card-body">
                <div className="dropdown float-right">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none card-drop"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="dripicons-dots-3" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="mdi mdi-pencil mr-1" />
                      Edit
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="mdi mdi-delete mr-1" />
                      Delete
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="mdi mdi-email-outline mr-1" />
                      Invite
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="mdi mdi-exit-to-app mr-1" />
                      Leave
                    </a>
                  </div>
                </div>
                {/* project title*/}
                <h3 className="mt-0">App design and development</h3>
                <div className="badge badge-secondary mb-3">Ongoing</div>
                <h5>Project Overview:</h5>
                <p className="text-muted mb-2">
                  With supporting text below as a natural lead-in to additional
                  contenposuere erat a ante. Voluptates, illo, iste itaque
                  voluptas corrupti ratione reprehenderit magni similique?
                  Tempore, quos delectus asperiores libero voluptas quod
                  perferendis! Voluptate, quod illo rerum? Lorem ipsum dolor sit
                  amet.
                </p>
                <p className="text-muted mb-4">
                  Voluptates, illo, iste itaque voluptas corrupti ratione
                  reprehenderit magni similique? Tempore, quos delectus
                  asperiores libero voluptas quod perferendis! Voluptate, quod
                  illo rerum? Lorem ipsum dolor sit amet. With supporting text
                  below as a natural lead-in to additional contenposuere erat a
                  ante.
                </p>
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-4">
                      <h5>Start Date</h5>
                      <p>
                        17 March 2018{" "}
                        <small className="text-muted">1:00 PM</small>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-4">
                      <h5>End Date</h5>
                      <p>
                        22 December 2018{" "}
                        <small className="text-muted">1:00 PM</small>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-4">
                      <h5>Budget</h5>
                      <p>$15,800</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5>Team Members:</h5>
                  <a
                    href="javascript:void(0);"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Mat Helme"
                    className="d-inline-block"
                  >
                    <img
                      src="assets/images/users/avatar-6.jpg"
                      className="rounded-circle img-thumbnail avatar-sm"
                      alt="friend"
                    />
                  </a>
                  <a
                    href="javascript:void(0);"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Michael Zenaty"
                    className="d-inline-block"
                  >
                    <img
                      src="assets/images/users/avatar-7.jpg"
                      className="rounded-circle img-thumbnail avatar-sm"
                      alt="friend"
                    />
                  </a>
                  <a
                    href="javascript:void(0);"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="James Anderson"
                    className="d-inline-block"
                  >
                    <img
                      src="assets/images/users/avatar-8.jpg"
                      className="rounded-circle img-thumbnail avatar-sm"
                      alt="friend"
                    />
                  </a>
                  <a
                    href="javascript:void(0);"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Mat Helme"
                    className="d-inline-block"
                  >
                    <img
                      src="assets/images/users/avatar-4.jpg"
                      className="rounded-circle img-thumbnail avatar-sm"
                      alt="friend"
                    />
                  </a>
                  <a
                    href="javascript:void(0);"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Michael Zenaty"
                    className="d-inline-block"
                  >
                    <img
                      src="assets/images/users/avatar-5.jpg"
                      className="rounded-circle img-thumbnail avatar-sm"
                      alt="friend"
                    />
                  </a>
                  <a
                    href="javascript:void(0);"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="James Anderson"
                    className="d-inline-block"
                  >
                    <img
                      src="assets/images/users/avatar-3.jpg"
                      className="rounded-circle img-thumbnail avatar-sm"
                      alt="friend"
                    />
                  </a>
                </div>
              </div>{" "}
              {/* end card-body*/}
            </div>{" "}
            {/* end card*/}
            <div className="card">
              <div className="card-body">
                <h4 className="mt-0 mb-3">Comments (258)</h4>
                <textarea
                  className="form-control form-control-light mb-2"
                  placeholder="Write message"
                  id="example-textarea"
                  rows={3}
                  defaultValue={""}
                />
                <div className="text-right">
                  <div className="btn-group mb-2">
                    <button
                      type="button"
                      className="btn btn-link btn-sm text-muted font-18"
                    >
                      <i className="dripicons-paperclip" />
                    </button>
                  </div>
                  <div className="btn-group mb-2 ml-2">
                    <button type="button" className="btn btn-primary btn-sm">
                      Submit
                    </button>
                  </div>
                </div>
                <div className="media mt-2">
                  <img
                    className="mr-3 avatar-sm rounded-circle"
                    src="assets/images/users/avatar-3.jpg"
                    alt="Generic placeholder image"
                  />
                  <div className="media-body">
                    <h5 className="mt-0">Jeremy Tomlinson</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin. Cras purus odio, vestibulum
                    in vulputate at, tempus viverra turpis. Fusce condimentum
                    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                    in faucibus.
                    <div className="media mt-3">
                      <a className="pr-3" href="#">
                        <img
                          src="assets/images/users/avatar-4.jpg"
                          className="avatar-sm rounded-circle"
                          alt="Generic placeholder image"
                        />
                      </a>
                      <div className="media-body">
                        <h5 className="mt-0">Kathleen Thomas</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <a href="javascript:void(0);" className="text-danger">
                    Load more{" "}
                  </a>
                </div>
              </div>{" "}
              {/* end card-body*/}
            </div>
            {/* end card*/}
          </div>{" "}
          {/* end col */}
          <div className="col-lg-6 col-xl-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3">Progress</h5>
                <div className="mt-3 chartjs-chart" style={{ height: "320px" }}>
                  <canvas id="line-chart-example" />
                </div>
              </div>
            </div>
            {/* end card*/}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3">Files</h5>
                <div className="card mb-1 shadow-none border">
                  <div className="p-2">
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
                          Hyper-admin-design.zip
                        </a>
                        <p className="mb-0">2.3 MB</p>
                      </div>
                      <div className="col-auto">
                        {/* Button */}
                        <a
                          href="javascript:void(0);"
                          className="btn btn-link btn-lg text-muted"
                        >
                          <i className="dripicons-download" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-1 shadow-none border">
                  <div className="p-2">
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
                          Dashboard-design.jpg
                        </a>
                        <p className="mb-0">3.25 MB</p>
                      </div>
                      <div className="col-auto">
                        {/* Button */}
                        <a
                          href="javascript:void(0);"
                          className="btn btn-link btn-lg text-muted"
                        >
                          <i className="dripicons-download" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-0 shadow-none border">
                  <div className="p-2">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <div className="avatar-sm">
                          <span className="avatar-title bg-secondary rounded">
                            .MP4
                          </span>
                        </div>
                      </div>
                      <div className="col pl-0">
                        <a
                          href="javascript:void(0);"
                          className="text-muted font-weight-bold"
                        >
                          Admin-bug-report.mp4
                        </a>
                        <p className="mb-0">7.05 MB</p>
                      </div>
                      <div className="col-auto">
                        {/* Button */}
                        <a
                          href="javascript:void(0);"
                          className="btn btn-link btn-lg text-muted"
                        >
                          <i className="dripicons-download" />
                        </a>
                      </div>
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
