import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Breadcomb from "../components/breadcomb";

export default class index extends Component {
    render() {
        return (
          <div className="container-fluid">
            <Breadcomb pageTitle="Add Employee" leadTitle="Employee" />
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="form-group">
                          <label htmlFor="projectname">Name</label>
                          <input
                            type="text"
                            id="projectname"
                            className="form-control"
                            placeholder="Enter project name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="project-overview">Overview</label>
                          <textarea
                            className="form-control"
                            id="project-overview"
                            rows={5}
                            placeholder="Enter some brief about project.."
                            defaultValue={""}
                          />
                        </div>
                        {/* Date View */}
                        <div className="form-group">
                          <label>Start Date</label>
                          <input
                            type="text"
                            className="form-control"
                            data-provide="datepicker"
                            data-date-format="d-M-yyyy"
                            data-date-autoclose="true"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="project-budget">Budget</label>
                          <input
                            type="text"
                            id="project-budget"
                            className="form-control"
                            placeholder="Enter project budget"
                          />
                        </div>
                        <div className="form-group mb-0">
                          <label htmlFor="project-overview">Team Members</label>
                          <select
                            className="form-control select2"
                            data-toggle="select2"
                          >
                            <option>Select</option>
                            <option value="AZ">Mary Scott</option>
                            <option value="CO">Holly Campbell</option>
                            <option value="ID">Beatrice Mills</option>
                            <option value="MT">Melinda Gills</option>
                            <option value="NE">Linda Garza</option>
                            <option value="NM">Randy Ortez</option>
                            <option value="ND">Lorene Block</option>
                            <option value="UT">Mike Baker</option>
                          </select>
                          <div className="mt-2">
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
                                className="rounded-circle avatar-xs"
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
                                className="rounded-circle avatar-xs"
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
                                className="rounded-circle avatar-xs"
                                alt="friend"
                              />
                            </a>
                            <a
                              href="javascript:void(0);"
                              data-toggle="tooltip"
                              data-placement="top"
                              title
                              data-original-title="Lorene Block"
                              className="d-inline-block"
                            >
                              <img
                                src="assets/images/users/avatar-4.jpg"
                                className="rounded-circle avatar-xs"
                                alt="friend"
                              />
                            </a>
                            <a
                              href="javascript:void(0);"
                              data-toggle="tooltip"
                              data-placement="top"
                              title
                              data-original-title="Mike Baker"
                              className="d-inline-block"
                            >
                              <img
                                src="assets/images/users/avatar-5.jpg"
                                className="rounded-circle avatar-xs"
                                alt="friend"
                              />
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end col*/}
                      <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="form-group mt-3 mt-xl-0">
                          <label htmlFor="projectname" className="mb-0">
                            Avatar
                          </label>
                          <p className="text-muted font-14">
                            Recommended thumbnail size 800x400 (px).
                          </p>
                          <form
                            action="/"
                            method="post"
                            className="dropzone"
                            id="myAwesomeDropzone"
                            data-plugin="dropzone"
                            data-previews-container="#file-previews"
                            data-upload-preview-template="#uploadPreviewTemplate"
                          >
                            <div className="fallback">
                              <input name="file" type="file" />
                            </div>
                            <div className="dz-message needsclick">
                              <i className="h3 text-muted dripicons-cloud-upload" />
                              <h4>Drop files here or click to upload.</h4>
                            </div>
                          </form>
                          {/* Preview */}
                          <div
                            className="dropzone-previews mt-3"
                            id="file-previews"
                          />
                          {/* file preview template */}
                          <div className="d-none" id="uploadPreviewTemplate">
                            <div className="card mt-1 mb-0 shadow-none border">
                              <div className="p-2">
                                <div className="row align-items-center">
                                  <div className="col-auto">
                                    <img
                                      data-dz-thumbnail
                                      src="#"
                                      className="avatar-sm rounded bg-light"
                                      alt=""
                                    />
                                  </div>
                                  <div className="col pl-0">
                                    <a
                                      href="javascript:void(0);"
                                      className="text-muted font-weight-bold"
                                      data-dz-name
                                    />
                                    <p className="mb-0" data-dz-size />
                                  </div>
                                  <div className="col-auto">
                                    {/* Button test */}
                                    <a
                                      href
                                      className="btn btn-link btn-lg text-muted"
                                      data-dz-remove
                                    >
                                      <i className="dripicons-cross" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end file preview template */}
                        </div>
                        {/* Date View */}
                        <div className="form-group">
                          <label>Due Date</label>
                          <input
                            type="text"
                            className="form-control"
                            data-provide="datepicker"
                            data-date-format="d-M-yyyy"
                            data-date-autoclose="true"
                          />
                        </div>
                      </div>{" "}
                      {/* end col*/}
                    </div>
                    {/* end row */}
                  </div>{" "}
                  {/* end card-body */}
                </div>{" "}
                {/* end card*/}
              </div>{" "}
              {/* end col*/}
            </div>
          </div>
        );
    }
}
