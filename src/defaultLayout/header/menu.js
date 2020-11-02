import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import HttpClient from "../../utils/HttpClient";
import { reactLocalStorage } from "reactjs-localstorage";

export default class menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openProject: false,
      openReport: false,
      projects: [],
      type: "",
    };
  }
  componentDidMount() {
    this.getUserdata();
  }
  getUserdata = async () => {
    let data = reactLocalStorage.getObject("user_data");
    if (data && Object.keys(data).length !== 0) {
      this.setState({
        isLogin: true,
        userData: data,
        userId: data.id,
        type: data.type,
      });
      this.getMyProjects(data.id);
    } else {
      this.setState({ isLogin: false });
    }
  };

  getMyProjects = async (userId) => {
    let data = {
      user_id: userId,
    };
    let result = await HttpClient.requestData("projectdata", "POST", data);
    console.log("result_data", result);
    if (result && result.status) {
      let team = [];
      this.setState({ projects: result.data });
    }
  };

  render() {
    return (
      <div>
        {/*- Sidemenu */}
        <ul className="metismenu side-nav">
          <li
            className="side-nav-title side-nav-item"
            style={{ padding: "0px 10px" }}
          >
            <hr />
          </li>
          <li className="side-nav-item">
            <NavLink
              activeClassName="active"
              to="/dashboard"
              className="side-nav-link"
              id="home-btn"
            >
              <i className="uil-layer-group" />
              <span>Home</span>
            </NavLink>
          </li>
          {/* <li className="side-nav-item">
            <NavLink
              activeClassName="active"
              to="/profile-report"
              className="side-nav-link"
              id="home-btn"
            >
              <i className="uil-layer-group" />
              <span>Profile Report</span>
            </NavLink>
          </li> */}
          {/* <li className="side-nav-item">
            <NavLink
              activeClassName="active"
              to="/subscription-report"
              className="side-nav-link"
            >
              <i className="uil-layer-group" />
              <span> Subscription Report</span>
            </NavLink>
          </li> */}
          <li className="side-nav-item">
            <a
              href="javascript: void(0);"
              className="side-nav-link"
              onClick={() =>
                this.setState({
                  openReport: !this.state.openReport,
                  openProject: false,
                })
              }
            >
              <i className="uil-layer-group" />
              <span> Member </span>
              <span className="menu-arrow" />
            </a>
            <ul
              className={
                this.state.openReport
                  ? "side-nav-second-level mm-collapse mm-show"
                  : "side-nav-second-level mm-collapse"
              }
              // className="side-nav-second-level mm-collapse mm-show"
              aria-expanded="false"
            >
              <li>
                <NavLink activeClassName="active" to="/add-member">
                Add Member
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/view-member">
                View Member
                </NavLink>
              </li>
            </ul>
          </li>
          {/* <li className="side-nav-item">
            <NavLink
              activeClassName="active"
              to="/project-list2"
              className="side-nav-link"
            >
              <i className="uil-clipboard-alt" />
              <span> My Task </span>
            </NavLink>
          </li>
          <li className="side-nav-item">
            <NavLink
              activeClassName="active"
              to="/portfolio"
              className="side-nav-link"
            >
              <i className="uil-chart" />
              <span> Portfolio </span>
            </NavLink>
          </li> */}
          {/* <li className="side-nav-item"> */}
          {/* <a
              href="javascript: void(0);"
              className="side-nav-link"
              onClick={() =>
                this.setState({
                  openProject: !this.state.openProject,
                  openReport: false,
                })
              }
            >
              <i className="uil-briefcase" />
              <span> Projects </span>
              <span className="menu-arrow" />
            </a> */}

          {/* <li className="side-nav-item">
            . <NavLink
              activeClassName="active"
              to="/project-list"
              className="side-nav-link"
               >
              <i className="uil-briefcase"/>
              <span> Project</span>
               </NavLink>
           </li> */}
          {/* <ul
              // className="side-nav-second-level mm-collapse mm-show"
              className={
                this.state.openProject
                  ? "side-nav-second-level mm-collapse mm-show"
                  : "side-nav-second-level mm-collapse"
              }
              aria-expanded="false"
               >
              <li>
                <NavLink activeClassName="active" to="/project-wizard">
                  Project Wizard
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/project-timeline">
                  Project Timeline
                </NavLink>
              </li> */}
          {/* {this.state.projects.map((item,index)=>{
                return(
                <li key={index}>
                  <NavLink activeClassName="active" to={"/project-wizardd"+item.auto_id}>
                  {item.name}
                  </NavLink>
                </li>
                )
              })} */}
          {/* </ul> */}
          {/* </li> */}
        
          <li className="side-nav-item">
            <NavLink
              activeClassName="active"
              to="/subscription"
              className="side-nav-link"
             >
              <i className="uil-box" />
              <span> Subscription </span>
            </NavLink>
          </li>

          {/* <li className="side-nav-item">
            <NavLink
              activeClassName="active"
              to="/faq"
              className="side-nav-link"
            >
              <i className="uil-layer-group" />
              <span> FaQ </span>
            </NavLink>
          </li> */}

          {/* <li
            className="side-nav-title side-nav-item"
            style={{ padding: "0px 10px" }}
          >
            <hr />
          </li> */}
          {/* <li className="side-nav-item">
            <a
              href="javascript: void(0);"
              className="side-nav-link"
              onClick={() =>
                this.setState({
                  openReport: !this.state.openReport,
                  openProject: false,
                })
              }
            >
              <i className="uil-envelope" />
              <span> Reports </span>
              <span className="menu-arrow" />
            </a>
            <ul
              className={
                this.state.openReport
                  ? "side-nav-second-level mm-collapse mm-show"
                  : "side-nav-second-level mm-collapse"
              }
              // className="side-nav-second-level mm-collapse mm-show"
              aria-expanded="false"
            >
              <li>
                <NavLink activeClassName="active" to="/project-overview">
                  Project Overview
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/project-milestone">
                  Project Milestone Analysis
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/team-report">
                  My Team Report
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/resource-assignment">
                  Resource Asignments
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/task-overview">
                  Task Overview
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/report-timeline">
                  Project Timeline
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/my-work">
                  My Work
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/project-review">
                  Project Review Report
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/project-list">
                  Project List (project)
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/portfolio-list">
                  Project List (portfolio)
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/program-list">
                  Project List (program)
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/project-details  ">
                  Project Details
                </NavLink>
              </li>
            </ul>
          </li> */}
          {/* <li
            className="side-nav-title side-nav-item"
            style={{ padding: "0px 10px" }}
          >
            <hr />
          </li> */}
          {/* <li className="side-nav-item">
            <a href="javascript: void(0);" className="side-nav-link">
              <i className="uil-folder-plus" />
              <span> Teams </span>
              <span className="menu-add" />
            </a>
          </li> */}
          {/* <li className="side-nav-item pl-3">
            <div className="mt-2">
              <NavLink
                activeClassName="active"
                to="/profile"
                data-toggle="tooltip"
                data-placement="top"
                data-original-title="Mat Helme"
                className="d-inline-block"
              >
                <img
                  src="/assets/images/users/avatar-6.jpg"
                  className="rounded-circle avatar-xs"
                  alt="friend"
                />
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/profile"
                data-toggle="tooltip"
                data-placement="top"
                data-original-title="Michael Zenaty"
                className="d-inline-block"
              >
                <img
                  src="/assets/images/users/avatar-7.jpg"
                  className="rounded-circle avatar-xs"
                  alt="friend"
                />
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/profile"
                data-toggle="tooltip"
                data-placement="top"
                data-original-title="James Anderson"
                className="d-inline-block"
              >
                <img
                  src="/assets/images/users/avatar-8.jpg"
                  className="rounded-circle avatar-xs"
                  alt="friend"
                />
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/profile"
                data-toggle="tooltip"
                data-placement="top"
                data-original-title="Lorene Block"
                className="d-inline-block"
              >
                <img
                  src="/assets/images/users/avatar-4.jpg"
                  className="rounded-circle avatar-xs"
                  alt="friend"
                />
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/profile"
                data-toggle="tooltip"
                data-placement="top"
                data-original-title="Mike Baker"
                className="d-inline-block"
              >
                <img
                  src="/assets/images/users/avatar-5.jpg"
                  className="rounded-circle avatar-xs"
                  alt="friend"
                />
              </NavLink>
            </div>
          </li> */}
          {/* <li className="side-nav-title side-nav-item">
            <p>
              <i className="mdi mdi-square text-primary" /> Tech-App
            </p>
            <p>
              <i className="mdi mdi-square text-danger" /> Retailer-App-Release
            </p>
            <p>
              <i className="mdi mdi-square text-success" /> Product Roadmap
            </p>
          </li>
          <li
            className="side-nav-title side-nav-item"
            style={{ padding: "0px 10px" }}
          >
            <hr />
          </li> */}
        </ul>
      </div>
    );
  }
}
