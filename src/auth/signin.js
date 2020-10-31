import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactJsAlert from "reactjs-alert";
import { reactLocalStorage } from "reactjs-localstorage";
import HttpClient from "./../utils/HttpClient";
import Select from "react-select";
//import QrCode from "./qrCode";
//import FireBase from './../views/firebase/firebase';
import moment from 'moment';
import { v1 as uuidv1 } from 'uuid';
import { data } from "jquery";
export default class index extends Component {
  intervalid=0;
  constructor(props) {
    super(props);

    this.state = {
      isloading1:true,
      isloading: false,
      username: "",
      password: "",
      password_show: false,
      type: "error",
      status: false,
      title: "Hey! this is an error.",
      quote: "Something went wrong. Please try again!",
      usertype: "",
      selectedUserType: [],
      usertypeoption: [
        { label: "Select", value: "Select" },
        { label: "PM", value: "PM" },
        { label: "TM", value: "TM" },
      ],
      qrvalue:uuidv1(),
    };
  }
  // componentDidMount()
  // {
  //  this.getRandomInt();
  
  //   console.log(this.state.qrvalue);
   
    
  //   this.intervalid=setInterval(this.getData,6000);
    
  //   //this.getmyQrValue();
  // }
  
  
  validate() {
    if (this.state.username == "") {
      this.setState({
        title: "Please Enter email.",
      });
      return false;
    } else {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(this.state.username)) {
        this.setState({
          title: "Please Enter valid email.",
        });
        return false;
      } else {
        if (this.state.password == "") {
          this.setState({
            title: "Please Enter password.",
          });
          return false;
        } else {
          return true;
        }
      }
    }
  }

  logIn = async () => {
    if (true) {
      let projecttypeselect = Array.prototype.map
        .call(this.state.selectedUserType, (s) => s.label)
        .toString();
      console.log(projecttypeselect);
      let validation = this.validate();
      if (validation) {
        // if(this.state.username == '')
        // {
        //   this.setState({
        //     type: "warning",
        //     status: true,
        //     title: "Please Enter email.",
        //     quote: "Something went wrong. Please try again!",
        //   });
        // }
        // else if(this.state.password == '')
        // {
        //   this.setState({
        //     type: "warning",
        //     status: true,
        //     title: "Please Enter password.",
        //     quote: "Something went wrong. Please try again!",
        //   });
        // }
        // else if(this.state.username == '' && this.state.password == '')
        // {
        //   this.setState({
        //     type: "warning",
        //     status: true,
        //     title: "Please Enter email and password.",
        //     quote: "Something went wrong. Please try again!",
        //   });
        // }
        // else
        // {
        let data = {
          email:"admin@gmail.com",
          password:"123456",
          //type: "PM",
        };
        console.log(data);
        let result = await HttpClient.requestData("admin-login", "POST", data);
        console.log("result", result);
        if (result && result.status) {
          let data = result.data;
          reactLocalStorage.setObject("user_data", data);
          reactLocalStorage.setObject("user_id", result.user_id);
          console.log(result.user_id);
          this.setState({
            type: "success",
            status: true,
            title: "Login Successfully",
            quote: "You are welcome to Truetask",
            isloading1:false,
          });
          setTimeout(() => {
            window.location.href = "/home";
          }, 3000);
        } else {
          let title =
            result && result.error != "undefined"
              ? result.error
              : "Sorry Try Again";
          this.setState({
            type: "error",
            status: true,
            title: result&&result.message?result.message:"something went wrong",
            quote: "Something went wrong. Please try again!",
           isloading1:false,
          });
        }
      } else {
        this.setState({
          type: "warning",
          status: true,
          // title: title,
          quote: "Something went wrong. Please try again!",
        });
      }
      //}
    } else {
      this.setState({
        type: "warning",
        status: true,
        // title: title,
        title: "Please select user type",
      });
    }
  };
  // handelUserType = (selectedUserType) => {
  //   setTimeout(() => {
  //     console.log("event.target.value", selectedUserType);
  //   }, 3000);
  //   let c = [];
  //   c.push(selectedUserType);
  //   this.setState({
  //     selectedUserType: c,
  //     isloading1:false
  //   });
  //   setTimeout(() => {
  //     console.log("event.target.value", this.state.selectedUserType);
  //   }, 3000);
  // };

  render() {
    return (
      <div className="account-pages pt-3">
        <ReactJsAlert
          type={this.state.type} // success, warning, error, info
          title={this.state.title} // title you want to display
          status={this.state.status} // true or false
          Close={() => this.setState({ status: false })}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card mb-0">
                {/* Logo */}
                <div className="card-header pt-4 pb-4 text-center bg-primary">
                  <Link to="/home">
                    {/*<span><img src="assets/images/logo.png" alt="" height="18"></span>*/}
                    <h3 className="text-white">TRUTASK</h3>
                  </Link>
                </div>
                <div className="card-body px-4 pt-3 pb-0">
                  <div className="text-center w-75 m-auto">
                    <h4 className="text-dark-50 text-center mt-0 font-weight-bold">
                      Sign In
                    </h4>
                    <p className="text-muted mb-4">
                      Enter your email address and password to access company
                      panel.
                    </p>
                  </div>
                  <form action="#">
                    {/* <div className="form-group mb-3">
                      <label>Type of user</label>
                      <Select
                        // defaultValue={
                        //   this.state.selectedProjectType
                        //     ? this.state.selectedProjectType
                        //     : ""
                        // }
                        name="colors"
                        options={this.state.usertypeoption}
                        // value={this.state.selectedProjectType}
                        onChange={this.handelUserType}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        // onInputChange={this.handelChange}
                      />
                    </div> */}
                    <div className="form-group mb-3">
                      <label htmlFor="emailaddress">Email address</label>
                      <input
                        className="form-control"
                        type="email"
                        id="emailaddress"
                        required
                        placeholder="Enter your email"
                        onChange={(val) => {
                          this.setState({ username: val.target.value,isloading1:false });
                        }}
                        value={this.state.username}
                      />
                    </div>
                    <div className="form-group">
                      <a
                        href="pages-recoverpw.html"
                        className="text-muted float-right"
                      >
                        <small>Forgot your password?</small>
                      </a>
                      <label htmlFor="password">Password</label>
                      <div className="input-group input-group-merge">
                        <input
                          type={this.state.password_show ? "text" : "password"}
                          id="password"
                          className="form-control"
                          placeholder="Enter your password"
                          onChange={(val) => {
                            this.setState({ password: val.target.value,isloading1:false });
                          }}
                          value={this.state.password}
                        />
                        <div
                          className="input-group-append"
                          data-password="false"
                        >
                          <div className="input-group-text">
                            <span
                              className="password-eye"
                              onClick={() => {
                                this.setState({
                                  password_show: !this.state.password_show,
                                  isloading1:false
                                });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group d-flex mb-3">
                      <div className="custom-control custom-checkbox ml-0 my-auto">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="checkbox-signin"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="checkbox-signin"
                        >
                          Remember me
                        </label>
                      </div>
                      <button
                        className="btn btn-primary ml-auto my-auto mr-0"
                        type="button"
                        onClick={() => {
                          this.logIn();
                        }}
                      >
                        Log In
                      </button>
                    </div>

                    <div className="form-group mb-0 text-center">
                      <p className="text-muted">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-muted ml-1">
                          <b>Sign Up</b>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>{" "}
                {/* end card-body */}
              </div>
            </div>
       
            {/* <div className="col-lg-7"> */}
           
              {/* <QrCode
              qrvalue={this.state.qrvalue}
               /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}
