import React, { Component } from "react";
import { Link } from "react-router-dom";
// import TopNav from "./topnav";
import Notification from "./notification";
import NavSearch from "./navSearch";
import $ from "jquery";
import { reactLocalStorage } from "reactjs-localstorage";
window.jQuery = window.$ = $;
export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_data:{},
      img_url:"http://trutask.easytodb.com/uploads/user/",
      fname:"",
      lname:"",
    };
  }
  async componentDidMount() 
  {
    // let data = reactLocalStorage.getObject('user_data');
    // console.log(data);
    // if(data && Object.keys(data).length !== 0)
    // {
    //   this.setState({isLogin:true,
    //     user_data:data,
    //     fname:data.firstname.charAt(0),
    //     lname:data.lastname.charAt(0),
    //   });
    // }
  }

  activateCondensedSidebar() {
    ("use strict");
    console.log("hey");
    $("body").attr("data-leftbar-compact-mode", "condensed");
  }
  deactivateCondensedSidebar() {
    ("use strict");
    console.log("hello");
    $("body").removeAttr("data-leftbar-compact-mode");
  }

  logOut = () => {
    reactLocalStorage.setObject('user_data', {});
    reactLocalStorage.clear();
    // reactLocalStorage.set("login", false);
    window.location.href = "/home";
  }


  render() {
    return (
      <div>
        {/* Topbar Start */}
        <div className="navbar-custom">
          <ul className="list-unstyled topbar-right-menu float-right mb-0">
            {/* mobile view toggler */}
            {/* <li className="dropdown notification-list d-lg-none">
              <a
                className="nav-link dropdown-toggle arrow-none"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="dripicons-search noti-icon" />
              </a>
              <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                <form className="p-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search ..."
                    aria-label="Recipient's username"
                  />
                </form>
              </div>
            </li> */}
            {/* Notification */}
            {/* <li className="dropdown notification-list">
              <a
                className="nav-link dropdown-toggle arrow-none"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="dripicons-bell noti-icon" />
                <span className="noti-icon-badge" />
              </a>
              <Notification />
            </li> */}
            <li className="notification-list">
              <a
                className="nav-link right-bar-toggle"
                href="javascript: void(0);"
              >
                <i className="dripicons-gear noti-icon" />
              </a>
            </li>

            {/* profile dropdown */}
            <li className="dropdown notification-list">
              <a
                className="nav-link dropdown-toggle nav-user arrow-none mr-0"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                {/* {this.state.user_data.image!=null?(
                <span className="account-user-avatar">
                  <img
                    src={this.state.img_url+this.state.user_data.image}
                   // alt="user-image"
                    className="rounded-circle"
                  />
                </span>):
                ( */}
                  <span className="account-user-avatar">
                 <div
                  style={{ textAlign: "center",
                  fontSize: 13,
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  backgroundColor: "black",
                  height: "30px",
                  width: "30px",
                  color: "white",
                  lineHeight: "24px",
                }}
                   
                  className="rounded-circle"
                 >
                   A
                 </div>
                    
                   
              
                </span>
                {/* )} */}
                <span>
                  <span className="account-user-name">
                   Admin
                  </span>
                  <span className="account-position"> Admin</span>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                {/* <Link to="/profile" className="dropdown-item notify-item">
                  <i className="mdi mdi-account-circle mr-1" />
                  <span>My Account</span>
                </Link> */}
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <i className="mdi mdi-account-edit mr-1" />
                  <span>Settings</span>
                </a>
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                  onClick={() => this.logOut()}
                >
                  <i className="mdi mdi-logout mr-1" />
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
          <button className="button-menu-mobile open-left disable-btn">
            <i className="mdi mdi-menu" />
          </button>
          {/* left bar toggler */}
          <div className="leftBarToggler" id="leftBarToggler">
            <input
              type="radio"
              className="custom-control-input"
              name="compact"
              defaultValue="condensed"
              id="condensed-btn"
              onClick={() => this.activateCondensedSidebar()}
            />
            <i className="mdi mdi-menu" htmlFor="condensed-btn" />
          </div>
          <div className="leftBarToggler" id="leftBarRevToggler">
            <input
              type="radio"
              className="custom-control-input"
              name="compact"
              defaultValue="fixed"
              id="fixed-btn"
              onClick={() => this.deactivateCondensedSidebar()}
            />
            <i className="mdi mdi-close" htmlFor="fixed-btn" />
          </div>
          <NavSearch />
        </div>
        {/* Topnav */}
        {/* <TopNav /> */}
      </div>
    );
  }
}
