import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactJsAlert from "reactjs-alert";
import { reactLocalStorage } from "reactjs-localstorage";
import HttpClient from "./../utils/HttpClient";
import Select from "react-select";
export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloading: false,
      // firstname:"",
      // lastname:'',
      // userbio:'',
      email:'',
      password:'',
      companyname:'',
      phone:"",
      // website:'',
      // facebook:'',
      // twitter:'',
      // instagram:'',
      // linkedin:'',
      // skype:'',
      // github:'',
      // selectedUserType:"",
      // usertypeoption:[
      //   {label:"Select",value:"Select"},
      //   {label:"Project Manager",value:"PM"},
      //   {label:"Team Member",value:"TM"}

      // ],


      type: "error",
      status: false,
      title: "Hey! this is an error.",
      quote: "Something went wrong. Please try again!",
    };
  }
  handelUserType=(selectedUserType)=>
  {
    setTimeout(() => {
console.log("event.target.value",selectedUserType);
   }, 3000);
  let c=[];
  c.push(selectedUserType);
 this.setState({
  selectedUserType:c,

 })
 setTimeout(() => {
  console.log("event.target.value",this.state.selectedUserType);
    }, 3000);
 

  }

  signUp = async () => {
    // let projecttypeselect = Array.prototype.map
    //   .call(this.state.selectedUserType, (s) => s.value)
    //   .toString();
    // console.log(projecttypeselect);
    // let data = this.validate();
    // console.log('data',data);
    if(this.state.companyname =='' && this.state.phone =='' && this.state.email =='' && this.state.password =='')
    {
      this.setState({
        type: "warning",
        status: true,
        title: "Please Fillup Basic Details.",
        quote: "Something went wrong. Please try again!",
      });
    }
    else
    {
      let data = {

        "name":this.state.companyname,
        "email":this.state.email,
        "phone":this.state.phone,
        "password":this.state.password,
      }
     console.log("dataaaaa",data);
      let result = await HttpClient.requestData("company-register","POST",data);
      console.log('result',result);
      if(result && result.status)
      {
        let data = result.data;
        reactLocalStorage.setObject('user_data', data);
        this.setState({
          type: 'success',
          status: true,
          title: 'Registerd Successfully',
          quote: "You are welcome to Truetask",
        })
        setTimeout(
          () => {
            window.location.href="/home"
          }, 
          3000
        );
      }
      else
      {
        this.setState({
          type: 'error',
          status: true,
          title: result.error,
          quote: "Something went wrong. Please try again!",
        })
      }
    }
  }

  validate = () => {
    if(this.state.firstname != "")
    {
      return true;
    }
    else
    {
      this.setState({
        type: "warning",
        status: true,
        title: "Please Enter Firstname.",
        quote: "Something went wrong. Please try again!",
      });
      return false;
    }

  }
  render() {
    return (
      <div className="account-pages mt-5 mb-5">
        <ReactJsAlert
          type={this.state.type} // success, warning, error, info
          title={this.state.title} // title you want to display
          status={this.state.status} // true or false
          Close={() => this.setState({ status: false })}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="card">
                {/* Logo */}
                <div className="card-header pt-4 pb-4 text-center bg-primary">
                  <Link to="/home">
                    {/*<span><img src="assets/images/logo.png" alt="" height="18"></span>*/}
                    TRUTASK
                  </Link>
                </div>
                <div className="card-body p-4">
                  <div className="text-center w-75 m-auto">
                    <h4 className="text-dark-50 text-center mt-0 font-weight-bold">
                      Signup Now
                    </h4>
                    <p className="text-muted mb-4">
                      Sign up with your email address to access company panel.
                    </p>
                  </div>
                  <div className="tab-pane" id="settings">
                    <form>
                      <h5 className="mb-3 text-uppercase bg-light p-2">
                        <i className="mdi mdi-office-building mr-1" /> Company
                        Info
                      </h5>
                      <div className="row">
                      <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="companyname">Company Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="companyname"
                              placeholder="Enter company name"
                              onChange={(val)=>{
                                this.setState({companyname:val.target.value})
                              }}
                              value={this.state.companyname}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="lastname">Company Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastname"
                              placeholder="Enter phone"
                              onChange={(val)=>{
                                this.setState({phone:val.target.value})
                              }}
                              value={this.state.phone}
                            />
                          </div>
                        </div>{" "}
                        {/* end col */}
                      </div>{" "}
                      {/* end row */}
                      {/* <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="userbio">Bio</label>
                            <textarea
                              className="form-control"
                              id="userbio"
                              rows={4}
                              placeholder="Write something..."
                              defaultValue={this.state.userbio}
                              onChange={(val)=>{
                                this.setState({userbio:val.target.value})
                              }}
                              
                            >
                             
                              </textarea>
                          </div>
                        </div>{" "}
                      
                      </div>{" "} */}
                      {/* end row */}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="useremail">Company Email Address</label>
                            <input
                              type="email"
                              className="form-control"
                              id="useremail"
                              placeholder="Enter email"
                              onChange={(val)=>{
                                this.setState({email:val.target.value})
                              }}
                              value={this.state.email}
                            />
                            <span className="form-text text-muted">
                              <small>
                                If you want to change email please{" "}
                                <a href="javascript: void(0);">click</a> here.
                              </small>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="userpassword">Password</label>
                            <input
                              type="password"
                              className="form-control"
                              id="userpassword"
                              placeholder="Enter password"
                              onChange={(val)=>{
                                this.setState({password:val.target.value})
                              }}
                              value={this.state.password}
                            />
                            <span className="form-text text-muted">
                              <small>
                                If you want to change password please{" "}
                                <a href="javascript: void(0);">click</a> here.
                              </small>
                            </span>
                          </div>
                        </div>{" "}
                        
                        {/* end col */}
                      </div>{" "}
                      {/* end row */}
                      {/* <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="companyname">Company Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              id="companyname"
                              placeholder="Enter company phone"
                              onChange={(val)=>{
                                this.setState({companyname:val.target.value})
                              }}
                              value={this.state.companyname}
                            />
                          </div>
                            </div>
                          </div> */}
                      {/* <h5 className="mb-3 text-uppercase bg-light p-2">
                        <i className="mdi mdi-office-building mr-1" /> Company
                        Info
                      </h5> */}
                      {/* <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="companyname">Company Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="companyname"
                              placeholder="Enter company name"
                              onChange={(val)=>{
                                this.setState({companyname:val.target.value})
                              }}
                              value={this.state.companyname}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="cwebsite">Website</label>
                            <input
                              type="text"
                              className="form-control"
                              id="cwebsite"
                              placeholder="Enter website url"
                              onChange={(val)=>{
                                this.setState({website:val.target.value})
                              }}
                              value={this.state.website}
                            />
                          </div>
                        </div>{" "}
                      
                      </div>{" "} */}
                      {/* end row */}
                      {/* <h5 className="mb-3 text-uppercase bg-light p-2">
                        <i className="mdi mdi-earth mr-1" /> Social
                      </h5> */}
                      {/* <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="social-fb">Facebook</label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="mdi mdi-facebook" />
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="social-fb"
                                placeholder="Url"
                                onChange={(val)=>{
                                  this.setState({facebook:val.target.value})
                                }}
                                value={this.state.facebook}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="social-tw">Twitter</label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="mdi mdi-twitter" />
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="social-tw"
                                placeholder="Username"
                                onChange={(val)=>{
                                  this.setState({twitter:val.target.value})
                                }}
                                value={this.state.twitter}
                              />
                            </div>
                          </div>
                        </div>{" "}
                      
                      </div>{" "}
                     
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="social-insta">Instagram</label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="mdi mdi-instagram" />
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="social-insta"
                                placeholder="Url"
                                onChange={(val)=>{
                                  this.setState({instagram:val.target.value})
                                }}
                                value={this.state.instagram}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="social-lin">Linkedin</label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="mdi mdi-linkedin" />
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="social-lin"
                                placeholder="Url"
                                onChange={(val)=>{
                                  this.setState({linkedin:val.target.value})
                                }}
                                value={this.state.linkedin}
                              />
                            </div>
                          </div>
                        </div>{" "}
                       
                      </div>{" "}
                    
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="social-sky">Skype</label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="mdi mdi-skype" />
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="social-sky"
                                placeholder="@username"
                                onChange={(val)=>{
                                  this.setState({skype:val.target.value})
                                }}
                                value={this.state.skype}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="social-gh">Github</label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="mdi mdi-github-circle" />
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="social-gh"
                                placeholder="Username"
                                onChange={(val)=>{
                                  this.setState({github:val.target.value})
                                }}
                                value={this.state.github}
                              />
                            </div>
                          </div>
                        </div>{" "}
                      
                      </div>{" "} */}
                     
                      <div className="text-right">
                        <button type="button" className="btn btn-success mt-2" onClick={()=>{this.signUp()}}>
                          <i className="mdi mdi-content-save" /> Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>{" "}
                {/* end card-body */}
              </div>
              {/* end card */}
              <div className="row mt-3">
                <div className="col-12 text-center">
                  <p className="text-muted">
                    Already Registered?{" "}
                    <Link to="/signin" className="text-muted ml-1">
                      <b>Sign in</b>
                    </Link>
                  </p>
                </div>{" "}
                {/* end col */}
              </div>
              {/* end row */}
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
    );
  }
}
