import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcomb from "../components/breadcomb";
import Message from "./message";
import Product from "./product";
import HttpClient from "../../utils/HttpClient";
import ReactJsAlert from "reactjs-alert";
import { reactLocalStorage } from "reactjs-localstorage";
import EditProfile from "./editProfile";
export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiledata:[],
      img_url:"http://trutask.easytodb.com/uploads/user/",
      project:[],
      fname:"",
      lname:"",
      email:"",
     
    };
  }
  componentDidMount() {
     this.getUserdata(); 
   
  }
  getUserdata = async () => {
    let data = reactLocalStorage.getObject("user_data");
    console.log('user_data',data);
    if (data && Object.keys(data).length !== 0) {
      await this.setState({ 
        isLogin: true,
         userData: data, 
         userId: data.id,
         email:data.email,
         });
      this.profileFetch();
      
    } else {
      this.setState({ isLogin: false });
    }
  };

  
  profileFetch = async () => {
    let data = {
      email:this.state.email,
    };
    console.log(data);
    let result = await HttpClient.requestData("profile-fetch", "POST", data);
    console.log(result);
    if (result && result.data) {
     this.setState({
       profiledata:result.data,
       fname:result.data.firstname.charAt(0),
       lname:result.data.lastname.charAt(0),

     });
     console.log(this.state.fname);
     console.log(this.state.lname);
    }
  };
  
  render() {
    return (
      <div className="container-fluid">
        {/* start page title */}
        <Breadcomb pageTitle="User Profile" />
        <div className="row">
          <div className="col-sm-12">
            {/* Profile */}
            <div className="card bg-primary">
              <div className="card-body profile-user-box">
                <div className="row">
                  <div className="col-sm-8">
                    <div className="media">
                      <span className="float-left m-2 mr-4">
                        {this.state.profiledata.image!=null?
                        (<img
                          src={this.state.img_url+this.state.profiledata.image}
                          style={{ height: "130px",width: "130px" }}
                          alt=""
                          className="rounded-circle img-thumbnail"
                        />):
                        <div
                        className="rounded-circle img-thumbnail"
                        style={{ height: "130px",width: "130px" }}
                       
                        >
                          <h5
                        style={{textAlign:'center', fontSize: 30,alignItems: 'center',justifyContent: 'center',}}
                          >{this.state.fname.toUpperCase()}{this.state.lname.toUpperCase()}</h5>
                        </div>}
                      </span>
                      <div className="media-body">
                        <h4 className="mt-1 mb-1 text-white">
                          {this.state.profiledata.firstname+" "+this.state.profiledata.lastname}
                        </h4>
                        <p className="font-13 text-white-50">
                         {this.state.profiledata.type=="PM"?"Project Manager":"Team Member"}
                        </p>
                        <ul className="mb-0 list-inline text-light">
                          <li className="list-inline-item mr-3">
                            <h5 className="mb-1">$ 25,184</h5>
                            <p className="mb-0 font-13 text-white-50">
                              Total Revenue
                            </p>
                          </li>
                          <li className="list-inline-item">
                            <h5 className="mb-1">5482</h5>
                            <p className="mb-0 font-13 text-white-50">
                              Number of Orders
                            </p>
                          </li>
                        </ul>
                      </div>
                      {/* end media-body*/}
                    </div>
                  </div>
                  {/* end col*/}
                  <div className="col-sm-4">
                    <div className="text-center mt-sm-0 mt-3 text-sm-right">
                      <Link
                        to="edit-profile"
                        type="button"
                        className="btn btn-light"
                        to={{
                          pathname:
                            "/edit-profile",
                          
                        }}
                      >
                        <i className="mdi mdi-account-edit mr-1" /> Edit Profile
                      </Link>
                    </div>
                  </div>
                  {/* end col*/}
                </div>
                {/* end row */}
              </div>
              {/* end card-body/ profile-user-box*/}
            </div>
            {/*end profile/ card */}
          </div>
          {/* end col*/}
        </div>
        {/* end row */}
        <div className="row">
          <div className="col-lg-4">
            {/* Personal-Information */}
            <div className="card">
              <div className="card-body">
                <h4 className="header-title mt-0 mb-3">Personal Information</h4>
                <p className="text-muted font-13">
                  {this.state.profiledata.biography!=""||this.state.profiledata.biography!=null?this.state.profiledata.biography:"No Personal Information Available"}
                </p>
                <hr />
                <div className="text-left">
                  <p className="text-muted">
                    <strong>Full Name :</strong>
                    <span className="ml-2"> 
                    {this.state.profiledata.firstname+" "+this.state.profiledata.lastname}</span>
                  </p>
                  <p className="text-muted">
                    <strong>Mobile :</strong>
    <span className="ml-2">{this.state.profiledata.phone}</span>
                  </p>
                  <p className="text-muted">
                    <strong>Email :</strong>
    <span className="ml-2">{this.state.profiledata.email}</span>
                  </p>
                  <p className="text-muted">
                    <strong>Location :</strong>
    <span className="ml-2">{this.state.profiledata.address},{this.state.profiledata.city},{this.state.profiledata.country}</span>
                  </p>
                  <p className="text-muted">
                    <strong>Languages :</strong>
                    <span className="ml-2"> English, German, Spanish </span>
                  </p>
                  <p className="text-muted mb-0">
                    <strong>Elsewhere :</strong>
                    <a
                      className="d-inline-block ml-2 text-muted"
                      title
                      data-placement="top"
                      data-toggle="tooltip"
                      href
                      data-original-title="Facebook"
                    >
                      <i className="mdi mdi-facebook" />
                    </a>
                    <a
                      className="d-inline-block ml-2 text-muted"
                      title
                      data-placement="top"
                      data-toggle="tooltip"
                      href
                      data-original-title="Twitter"
                    >
                      <i className="mdi mdi-twitter" />
                    </a>
                    <a
                      className="d-inline-block ml-2 text-muted"
                      title
                      data-placement="top"
                      data-toggle="tooltip"
                      href
                      data-original-title="Skype"
                    >
                      <i className="mdi mdi-skype" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Personal-Information */}
            {/* Toll free number box*/}
            <div className="card text-white bg-info overflow-hidden">
              <div className="card-body">
                <div className="toll-free-box text-center">
                  <h4>
                    <i className="mdi mdi-deskphone" /> Toll Free :
                    1-234-567-8901
                  </h4>
                </div>
              </div>
              {/* end card-body*/}
            </div>

            {/* Messages*/}
            <div className="card">
              <div className="card-body">
                <h4 className="header-title mb-3">Messages</h4>
                <Message />
              </div>
            </div>
          </div>
          {/* end col*/}
          <div className="col-lg-8">
            {/* End Chart*/}
            <div className="row">
              <div className="col-sm-4">
                <div className="card tilebox-one">
                  <div className="card-body">
                    <i className="dripicons-basket float-right text-muted" />
                    <h6 className="text-muted text-uppercase mt-0">Orders</h6>
                    <h2 className="m-b-20">1,587</h2>
                    <span className="badge badge-primary"> +11% </span>
                    <span className="text-muted">From previous period</span>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="col-sm-4">
                <div className="card tilebox-one">
                  <div className="card-body">
                    <i className="dripicons-box float-right text-muted" />
                    <h6 className="text-muted text-uppercase mt-0">Revenue</h6>
                    <h2 className="m-b-20">
                      $<span>46,782</span>
                    </h2>
                    <span className="badge badge-danger"> -29% </span>
                    <span className="text-muted">From previous period</span>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="col-sm-4">
                <div className="card tilebox-one">
                  <div className="card-body">
                    <i className="dripicons-jewel float-right text-muted" />
                    <h6 className="text-muted text-uppercase mt-0">
                      Product Sold
                    </h6>
                    <h2 className="m-b-20">1,890</h2>
                    <span className="badge badge-primary"> +89% </span>
                    <span className="text-muted">Last year</span>
                  </div>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
            <div className="card">
              <div className="card-body">
                <h4 className="header-title mb-3">My Products</h4>
                <Product />
              </div>
            </div>
          </div>
          {/* end col */}
        </div>
        {/* end row */}
      </div>
    );
  }
}
