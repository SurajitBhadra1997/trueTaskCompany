import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcomb from "../../components/breadcomb";

export default class index extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Breadcomb pageTitle="Program List" />
        <div className="row mb-2">
          <div className="col-sm-4">
            <a href="wizard.php" className="btn btn-warning btn-rounded mb-3">
              <i className="mdi mdi-plus" /> Create Program
            </a>
          </div>
          <div className="col-sm-8">
            <div className="text-sm-right">
              <div className="btn-group mb-3">
                <button type="button" className="btn btn-primary">
                  All
                </button>
              </div>
              <div className="btn-group mb-3 ml-1">
                <button type="button" className="btn btn-light">
                  Ongoing
                </button>
                <button type="button" className="btn btn-light">
                  Finished
                </button>
              </div>
              <div className="btn-group mb-3 ml-2 d-none d-sm-inline-block">
                <button type="button" className="btn btn-secondary">
                  <i className="dripicons-view-apps" />
                </button>
              </div>
              <div className="btn-group mb-3 d-none d-sm-inline-block">
                <button type="button" className="btn btn-link text-muted">
                  <i className="dripicons-checklist" />
                </button>
              </div>
            </div>
          </div>
          {/* end col*/}
        </div>
        {/* end row*/}
        <div className="row">
          <div className="col-md-6 col-xl-3">
            {/* project card */}
            <div className="card d-block">
              <div className="card-body">
                <div className="dropdown card-widgets">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none"
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
                <h4 className="mt-0">
                  <a href="wizard.php" className="text-title">
                    App design and development
                  </a>
                </h4>
                <div className="badge badge-success mb-3">Finished</div>
                <p className="text-muted font-13 mb-3">
                  With supporting text below as a natural lead-in to additional
                  contenposuere erat a ante...
                  <a
                    href="javascript:void(0);"
                    className="font-weight-bold text-muted"
                  >
                    view more
                  </a>
                </p>
                {/* project detail*/}
                <p className="mb-1">
                  <span className="pr-2 text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-format-list-bulleted-type text-muted" />
                    <b>21</b> Tasks
                  </span>
                  <span className="text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-comment-multiple-outline text-muted" />
                    <b>741</b> Comments
                  </span>
                </p>
                <div>
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
                    className="d-inline-block text-muted font-weight-bold ml-2"
                  >
                    +7 more
                  </a>
                </div>
              </div>{" "}
              {/* end card-body*/}
              <ul className="list-group list-group-flush">
                <li className="list-group-item p-3">
                  {/* project progress*/}
                  <p className="mb-2 font-weight-bold">
                    Progress <span className="float-right">100%</span>
                  </p>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "100%" }}
                    ></div>
                    {/* /.progress-bar */}
                  </div>
                  {/* /.progress */}
                </li>
              </ul>
            </div>{" "}
            {/* end card*/}
          </div>{" "}
          {/* end col */}
          <div className="col-md-6 col-xl-3">
            {/* project card */}
            <div className="card d-block">
              <div className="card-body">
                <div className="dropdown card-widgets">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none"
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
                <h4 className="mt-0">
                  <a href="apps-projects-details.html" className="text-title">
                    Coffee detail page - Main Page
                  </a>
                </h4>
                <div className="badge badge-secondary mb-3">Ongoing</div>
                <p className="text-muted font-13 mb-3">
                  This card has supporting text below as a natural lead-in to
                  additional content is a little bit longer...
                  <a
                    href="javascript:void(0);"
                    className="font-weight-bold text-muted"
                  >
                    view more
                  </a>
                </p>
                {/* project detail*/}
                <p className="mb-1">
                  <span className="pr-2 text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-format-list-bulleted-type text-muted" />
                    <b>81</b> Tasks
                  </span>
                  <span className="text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-comment-multiple-outline text-muted" />
                    <b>103</b> Comments
                  </span>
                </p>
                <div>
                  <a
                    href="javascript:void(0);"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Mat Helme"
                    className="d-inline-block"
                  >
                    <img
                      src="assets/images/users/avatar-1.jpg"
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
                      src="assets/images/users/avatar-2.jpg"
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
                      src="assets/images/users/avatar-3.jpg"
                      className="rounded-circle avatar-xs"
                      alt="friend"
                    />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="d-inline-block text-muted font-weight-bold ml-2"
                  >
                    +3 more
                  </a>
                </div>
              </div>{" "}
              {/* end card-body*/}
              <ul className="list-group list-group-flush">
                <li className="list-group-item p-3">
                  {/* project progress*/}
                  <p className="mb-2 font-weight-bold">
                    Progress <span className="float-right">28%</span>
                  </p>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={28}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "28%" }}
                    ></div>
                    {/* /.progress-bar */}
                  </div>
                  {/* /.progress */}
                </li>
              </ul>
            </div>{" "}
            {/* end card*/}
          </div>{" "}
          {/* end col */}
          <div className="col-md-6 col-xl-3">
            {/* project card */}
            <div className="card d-block">
              <div className="card-body">
                <div className="dropdown card-widgets">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none"
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
                <h4 className="mt-0">
                  <a href="apps-projects-details.html" className="text-title">
                    Poster illustation design
                  </a>
                </h4>
                <div className="badge badge-secondary mb-3">Ongoing</div>
                <p className="text-muted font-13 mb-3">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid...
                  <a
                    href="javascript:void(0);"
                    className="font-weight-bold text-muted"
                  >
                    view more
                  </a>
                </p>
                {/* project detail*/}
                <p className="mb-1">
                  <span className="pr-2 text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-format-list-bulleted-type text-muted" />
                    <b>12</b> Tasks
                  </span>
                  <span className="text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-comment-multiple-outline text-muted" />
                    <b>482</b> Comments
                  </span>
                </p>
                <div>
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
                      src="assets/images/users/avatar-5.jpg"
                      className="rounded-circle avatar-xs"
                      alt="friend"
                    />
                  </a>
                </div>
              </div>{" "}
              {/* end card-body*/}
              <ul className="list-group list-group-flush">
                <li className="list-group-item p-3">
                  {/* project progress*/}
                  <p className="mb-2 font-weight-bold">
                    Progress <span className="float-right">63%</span>
                  </p>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={63}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "63%" }}
                    ></div>
                    {/* /.progress-bar */}
                  </div>
                  {/* /.progress */}
                </li>
              </ul>
            </div>{" "}
            {/* end card*/}
          </div>{" "}
          {/* end col */}
          <div className="col-md-6 col-xl-3">
            {/* project card */}
            <div className="card d-block">
              <div className="card-body">
                <div className="dropdown card-widgets">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none"
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
                <h4 className="mt-0">
                  <a href="apps-projects-details.html" className="text-title">
                    Drinking bottle graphics{" "}
                  </a>
                </h4>
                <div className="badge badge-success mb-3">Finished</div>
                <p className="text-muted font-13 mb-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content...
                  <a
                    href="javascript:void(0);"
                    className="font-weight-bold text-muted"
                  >
                    view more
                  </a>
                </p>
                {/* project detail*/}
                <p className="mb-1">
                  <span className="pr-2 mb-2 d-inline-block text-nowrap">
                    <i className="mdi mdi-format-list-bulleted-type text-muted" />
                    <b>50</b> Tasks
                  </span>
                  <span className="text-nowrap mb-2 d-inline-block">
                    <i className="mdi mdi-comment-multiple-outline text-muted" />
                    <b>208</b> Comments
                  </span>
                </p>
                <div>
                  <a
                    href="javascript:void(0);"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Mat Helme"
                    className="d-inline-block"
                  >
                    <img
                      src="assets/images/users/avatar-10.jpg"
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
                      src="assets/images/users/avatar-5.jpg"
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
                      src="assets/images/users/avatar-6.jpg"
                      className="rounded-circle avatar-xs"
                      alt="friend"
                    />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="d-inline-block text-muted font-weight-bold ml-2"
                  >
                    +2 more
                  </a>
                </div>
              </div>{" "}
              {/* end card-body*/}
              <ul className="list-group list-group-flush">
                <li className="list-group-item p-3">
                  {/* project progress*/}
                  <p className="mb-2 font-weight-bold">
                    Progress <span className="float-right">100%</span>
                  </p>
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "100%" }}
                    ></div>
                    {/* /.progress-bar */}
                  </div>
                  {/* /.progress */}
                </li>
              </ul>
            </div>{" "}
            {/* end card*/}
          </div>{" "}
          {/* end col */}
        </div>
        {/* end row*/}
        <div className="row">
          <div className="col-md-6 col-xl-3">
            {/* project card */}
            <div className="card d-block">
              {/* project-thumbnail */}
              <img
                className="card-img-top"
                src="assets/images/projects/project-1.jpg"
                alt="project image cap"
              />
              <div className="card-img-overlay">
                <div className="badge badge-secondary p-1">Ongoing</div>
              </div>
              <div className="card-body position-relative">
                {/* project title*/}
                <h4 className="mt-0">
                  <a href="apps-projects-details.html" className="text-title">
                    Company logo design
                  </a>
                </h4>
                {/* project detail*/}
                <p className="mb-3">
                  <span className="pr-2 text-nowrap">
                    <i className="mdi mdi-format-list-bulleted-type" />
                    <b>3</b> Tasks
                  </span>
                  <span className="text-nowrap">
                    <i className="mdi mdi-comment-multiple-outline" />
                    <b>104</b> Comments
                  </span>
                </p>
                <div className="mb-3">
                  <a
                    href="javascript:void(0);"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Mat Helme"
                    className="d-inline-block"
                  >
                    <img
                      src="assets/images/users/avatar-3.jpg"
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
                      src="assets/images/users/avatar-5.jpg"
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
                      src="assets/images/users/avatar-9.jpg"
                      className="rounded-circle avatar-xs"
                      alt="friend"
                    />
                  </a>
                </div>
                {/* project progress*/}
                <p className="mb-2 font-weight-bold">
                  Progress <span className="float-right">45%</span>
                </p>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "45%" }}
                  ></div>
                  {/* /.progress-bar */}
                </div>
                {/* /.progress */}
              </div>{" "}
              {/* end card-body*/}
            </div>{" "}
            {/* end card*/}
          </div>{" "}
          {/* end col */}
          <div className="col-md-6 col-xl-3">
            {/* project card */}
            <div className="card d-block">
              {/* project-thumbnail */}
              <img
                className="card-img-top"
                src="assets/images/projects/project-2.jpg"
                alt="project image cap"
              />
              <div className="card-img-overlay">
                <div className="badge badge-success p-1">Finished</div>
              </div>
              <div className="card-body position-relative">
                {/* project title*/}
                <h4 className="mt-0">
                  <a href="apps-projects-details.html" className="text-title">
                    Landing page design - Home
                  </a>
                </h4>
                {/* project detail*/}
                <p className="mb-3">
                  <span className="pr-2 text-nowrap">
                    <i className="mdi mdi-format-list-bulleted-type" />
                    <b>11</b> Tasks
                  </span>
                  <span className="text-nowrap">
                    <i className="mdi mdi-comment-multiple-outline" />
                    <b>254</b> Comments
                  </span>
                </p>
                <div className="mb-3">
                  <a
                    href="javascript:void(0);"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Mat Helme"
                    className="d-inline-block"
                  >
                    <img
                      src="assets/images/users/avatar-10.jpg"
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
                      src="assets/images/users/avatar-5.jpg"
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
                      src="assets/images/users/avatar-7.jpg"
                      className="rounded-circle avatar-xs"
                      alt="friend"
                    />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="d-inline-block text-muted font-weight-bold ml-2"
                  >
                    +2 more
                  </a>
                </div>
                {/* project progress*/}
                <p className="mb-2 font-weight-bold">
                  Progress <span className="float-right">100%</span>
                </p>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "100%" }}
                  ></div>
                  {/* /.progress-bar */}
                </div>
                {/* /.progress */}
              </div>{" "}
              {/* end card-body*/}
            </div>{" "}
            {/* end card*/}
          </div>{" "}
          {/* end col */}
          <div className="col-md-6 col-xl-3">
            {/* project card */}
            <div className="card d-block">
              {/* project-thumbnail */}
              <img
                className="card-img-top"
                src="assets/images/projects/project-3.jpg"
                alt="project image cap"
              />
              <div className="card-img-overlay">
                <div className="badge badge-secondary p-1">Ongoing</div>
              </div>
              <div className="card-body position-relative">
                {/* project title*/}
                <h4 className="mt-0">
                  <a href="apps-projects-details.html" className="text-title">
                    Product page redesign
                  </a>
                </h4>
                {/* project detail*/}
                <p className="mb-3">
                  <span className="pr-2 text-nowrap">
                    <i className="mdi mdi-format-list-bulleted-type" />
                    <b>21</b> Tasks
                  </span>
                  <span className="text-nowrap">
                    <i className="mdi mdi-comment-multiple-outline" />
                    <b>668</b> Comments
                  </span>
                </p>
                <div className="mb-3">
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
                    className="d-inline-block text-muted font-weight-bold ml-2"
                  >
                    +5 more
                  </a>
                </div>
                {/* project progress*/}
                <p className="mb-2 font-weight-bold">
                  Progress <span className="float-right">71%</span>
                </p>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={71}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "71%" }}
                  ></div>
                  {/* /.progress-bar */}
                </div>
                {/* /.progress */}
              </div>{" "}
              {/* end card-body*/}
            </div>{" "}
            {/* end card*/}
          </div>{" "}
          {/* end col */}
          <div className="col-md-6 col-xl-3">
            {/* project card */}
            <div className="card d-block">
              {/* project-thumbnail */}
              <img
                className="card-img-top"
                src="assets/images/projects/project-4.jpg"
                alt="project image cap"
              />
              <div className="card-img-overlay">
                <div className="badge badge-secondary p-1">Ongoing</div>
              </div>
              <div className="card-body position-relative">
                {/* project title*/}
                <h4 className="mt-0">
                  <a href="apps-projects-details.html" className="text-title">
                    Coffee detail page - Main Page
                  </a>
                </h4>
                {/* project detail*/}
                <p className="mb-3">
                  <span className="pr-2 text-nowrap">
                    <i className="mdi mdi-format-list-bulleted-type" />
                    <b>18</b> Tasks
                  </span>
                  <span className="text-nowrap">
                    <i className="mdi mdi-comment-multiple-outline" />
                    <b>259</b> Comments
                  </span>
                </p>
                <div className="mb-3">
                  <a
                    href="javascript:void(0);"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Mat Helme"
                    className="d-inline-block"
                  >
                    <img
                      src="assets/images/users/avatar-2.jpg"
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
                      src="assets/images/users/avatar-3.jpg"
                      className="rounded-circle avatar-xs"
                      alt="friend"
                    />
                  </a>
                </div>
                {/* project progress*/}
                <p className="mb-2 font-weight-bold">
                  Progress <span className="float-right">52%</span>
                </p>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={52}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "52%" }}
                  ></div>
                  {/* /.progress-bar */}
                </div>
                {/* /.progress */}
              </div>{" "}
              {/* end card-body*/}
            </div>{" "}
            {/* end card*/}
          </div>{" "}
          {/* end col */}
        </div>
      </div>
    );
  }
}
