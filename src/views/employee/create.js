import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Breadcomb from "../components/breadcomb";

export default class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             phone:"",
             name:"",
             email:"",
             selectedFiles:[],
             firstFile: "",
             date:""
        }
    }
    // async componentDidMount(){

    // }
    onChangeFirst = async (event) => {
        let data = [];
        let file = {
          preview: URL.createObjectURL(event.target.files[0]),
        };
        this.setState({
          firstFile: event.target.files[0],
          selectedFiles: [
            {
              preview: URL.createObjectURL(event.target.files[0]),
            },
          ],
        });
        console.log("selected files", this.state.selectedFiles);
        setTimeout(() => {
          console.log("selected files", this.state.firstFile);
        }, 3000);
      };
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
                            placeholder="Enter employee name"
                            onChange={(val)=>{
                                this.setState({name:val.target.value})
                              }}
                              value={this.state.name}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="project-overview">Phone</label>
                          <input
                            type="text"
                            id="projectname"
                            className="form-control"
                            placeholder="Enter employee phone"
                            onChange={(val)=>{
                                this.setState({phone:val.target.value})
                              }}
                              value={this.state.phone}
                          />
                          {/* <textarea
                            className="form-control"
                            id="project-overview"
                            rows={5}
                            placeholder="Enter some brief about project.."
                            defaultValue={""}
                          /> */}
                        </div>
                        {/* Date View */}
                        <div className="form-group">
                          <label>Joining Date</label>
                          <input
                            type="text"
                            className="form-control"
                            data-provide="datepicker"
                            data-date-format="d-M-yyyy"
                            data-date-autoclose="true"
                            onChange={(val)=>{
                                this.setState({date:val.target.value})
                              }}
                              value={this.state.date}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="project-budget">Email Address</label>
                          <input
                            type="text"
                            id="project-budget"
                            className="form-control"
                            placeholder="Enter email address"
                            onChange={(val)=>{
                                this.setState({email:val.target.value})
                              }}
                              value={this.state.email}
                          />
                        </div>
                        {/* <div className="form-group mb-0">
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
                        </div> */}
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
                            </div>
                            {/* File Upload */}
                            <form
                              method="post"
                              className="dropzone"
                              id="myAwesomeDropzone"
                              data-plugin="dropzone"
                              data-previews-container="#file-previews"
                              data-upload-preview-template="#uploadPreviewTemplate"
                            >
                              <div className="fallback">
                                <input
                                  name="file"
                                  type="file"
                                  multiple
                                  onChange={this.onChangeFirst}
                                />
                              </div>
                              <div className="dz-message needsclick">
                                <i className="h1 text-muted dripicons-cloud-upload" />
                                <h3>Drop files here or click to upload.</h3>
                                <span className="text-muted font-13">
                                  (This is just a demo dropzone. Selected files
                                  are
                                  <strong>not</strong> actually uploaded.)
                                </span>
                              </div>
                            </form>
                            {/* Preview */}
                            <div
                              className="dropzone-previews mt-3"
                              id="file-previews"
                            />
                            {/* file preview template */}
                            {this.state.selectedFiles.length > 0 ? (
                              <div
                                className="d-block"
                                id="uploadPreviewTemplate"
                              >
                                <div className="card mt-1 mb-0 shadow-none border">
                                  <div className="p-2">
                                    <div className="row align-items-center">
                                      {this.state.selectedFiles.map(
                                        (item, index) => {
                                          return (
                                            <div className="col-auto">
                                              <img
                                                data-dz-thumbnail
                                                alt={item.name}
                                                src={item.preview}
                                                className="avatar-sm rounded bg-light"
                                                alt="preview"
                                              />
                                              <a
                                                href
                                                className="text-muted close"
                                                data-dz-remove
                                                onClick={() => {
                                                  this.setState({
                                                    firstFile: "",
                                                    selectedFiles: [],
                                                  });
                                                }}
                                              >
                                                <i className="dripicons-cross" />
                                              </a>
                                            </div>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : null}
                            {/* Date View */}
                            <button
                            type="button"
                            className="btn btn-info"
                            // onClick={() => {
                            //   this.nextStep();
                            // }}
                       >
                       Submit
                       </button>
                          </div>
                          
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
