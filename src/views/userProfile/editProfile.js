import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcomb from "../components/breadcomb";
import Message from "./message";
import Product from "./product";
import HttpClient from "../../utils/HttpClient";
import ReactJsAlert from "reactjs-alert";
import { reactLocalStorage } from "reactjs-localstorage";

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
      firstname:"",
      lastname:"",
      phone:"",
      email_address:"",
      address:"",
      city:"",
      country:"",
      postal_code:"",
      about_me:"",
      userId:"",
       type:"",
      status: false,
      title: "",
      firstFile:"",
     
      selectedFiles:[],
      companyname:"",
      password:""
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
         companyname:data.name,
         phone:data.phone
         });
      // this.profileFetch(this.state.email);

      
    } else {
      this.setState({ isLogin: false });
    }
  };
  // profileFetch = async (id) => {
  //   let data = {
  //     email:id,
  //   };
  //   console.log(data);
  //   let result = await HttpClient.requestData("profile-fetch", "POST", data);
  //   console.log(result);
  //   if (result && result.data) {
  //     let image=result.data.image!=null?result.data.image:"";
  //    this.setState({
  //      profiledata:result.data,
  //      fname:result.data.firstname.charAt(0),
  //      lname:result.data.lastname.charAt(0),
  //      firstname:result.data.firstname,
  //      lastname:result.data.lastname,
  //      phone:result.data.phone,
  //      address:result.data.address,
  //      email_address:result.data.email,
  //      city:result.data.city!=null?result.data.city:"",

  //      country:result.data.country!=null?result.data.country:"",
  //      postal_code:result.data.postal_code!=null?result.data.postal_code:"",
  //      about_me:result.data.biography,
  //      selectedFiles:
  //      image != ""
  //        ? [
  //            {
  //              preview: this.state.img_url + image,
  //            },
  //          ]
  //        : [],
  //    });
  //    console.log(this.state.fname);
  //    console.log(this.state.lname);
  //   }
  // };

  validation = (async) => {
    
    if (this.state.firstname== "") {
      this.setState({ title: "Please Enter firstname" });
      return false;
    } else {
      if (this.state.lastname == "") {
        this.setState({ title: "Please enter lastname" });
        return false;
      } else {
        if(this.state.lastname.indexOf(' ') >= 0)
        {
          this.setState({ title: "Please enter valid lastname" });
          return false;
        }
        else{
        if(this.state.email_address=="")
        {
          this.setState({
            
              title: "Please Enter email.",
          })
          return false;
        }
        else
        {
        var pattern = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
      if (!pattern.test(this.state.email_address)) {
    this.setState({
      title: "Please Enter valid email.",
    });
        } else {
          if (this.state.city=="") {
            this.setState({ title: "Please Enter city" });
            return false;
          } else {
            if (this.state.country=="") {
              this.setState({ title: "Please Enter country" });
              return false;
            } else {
              if (this.state.postal_code=="") {
                this.setState({ title: "Please Enter postalcode" });
                return false;
              } else {
      
                return true;
             }
            }
          }
            }
          }    
      }
        }
          }
 
}


  profileUpdate = async ()=>
  {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if(this.state.password=='')
    {
      // alert("true")
      this.setState({
        type: "warning",
        status: true,
        title: "Please Enter Password",
        // quote: "Something went wrong. Please try again!",
      });
    }
    // else{
    //   alert("you have entered else");
    // }
    else if(!pattern.test(this.state.email)){
      this.setState({
        type: "warning",
        status: true,
        title: "Please Enter Valid Email",
        // quote: "Something went wrong. Please try again!",
      });
    }
    else if(this.state.companyname==''){
      this.setState({
        type: "warning",
        status: true,
        title: "Please Enter Company Name",
        // quote: "Something went wrong. Please try again!",
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
      let result = await HttpClient.requestData("edit-profile","POST",data);
      console.log('result',result);
      if(result && result.status)
      {
        let data = result.data;
       
        reactLocalStorage.setObject('user_data', data);
        this.getUserdata();
       
        this.setState({
          type: 'success',
          status: true,
          title: 'Profile Updated Successfully',
          // quote: "You are welcome to Truetask",
        })
  
        // setTimeout(
        //   () => {
        //     window.location.href="/home"
        //   }, 
        //   3000
        // );
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
  imageUpload = async (event) =>
  {
    let data = [];
    let file = {
      preview: URL.createObjectURL(event.target.files[0]),
    };
   this.state.firstFile=event.target.files[0];
    //  setTimeout(() => {
    this.setState({
      firstFile: this.state.firstFile,
      selectedFiles: [
        {
          preview: URL.createObjectURL(event.target.files[0]),
        },
      ],
    });
    //  }, 3000);
    console.log("selected files", this.state.selectedFiles);
      // setTimeout(() => {
    console.log("selected files", this.state.firstFile);
    // }, 3000);
     setTimeout(() => {
  this.uploadImage();
     }, 3000);
  }

  uploadImage = async ()=>
  {
    let data = new FormData();
    data.append("image", this.state.firstFile);
        data.append("email", this.state.email);
        console.log(data);
        
        let result = await HttpClient.fileUplodeDynamic(
          "profile-image",
          "POST",
          data
        );
        console.log(result);
        if (result && result.status) {
          
           this.setState({
            type: "success",
            status: true,
            title:"image uploaded succesfuly",
           firstFile:"",
          });
          reactLocalStorage.setObject('user_data',result.data);
        } 
        else{
          this.setState({
            type:"error",
            title:"something went wrong",
            status:true,
      
           });
        }
  }

  render() {
    return (
      <div className="container-fluid">
        <ReactJsAlert
          type={this.state.type} // success, warning, error, info
          title={this.state.title} // title you want to display
          status={this.state.status} // true or false
          Close={() => this.setState({ status: false })}
        />
        {/* start page title */}
        <Breadcomb pageTitle="Edit Profile" />
        <div className="edit_profile_page">
          <div className="row">
            <div className="col-md-4">
              <div className="card card-user">
              {this.state.selectedFiles.length>0?
                <div
                  className="image"
                  style={{
                    backgroundImage: "url("+this.state.selectedFiles[0].preview+")",
                    
                  }}
                ></div>:
                <div
                className="image"
                style={{
                  //backgroundImage: "url("+this.state.selectedFiles[0].preview+")",
                  backgroundColor:"grey"
                }}
              ></div>
                }
                <div className="card-body">
                   {this.state.selectedFiles.length>0?
                 ( <div className="author">
                    <a >
                      
                      <img
                        className="avatarMain border-gray"
                        src={this.state.selectedFiles[0].preview}
                        alt="..."
                      />
                     
                      <h5 className="title">{this.state.companyname}</h5>
                    </a>
                      {/* <p className="description">{this.state.profiledata.type=="PM"?"Project Manager":"Team Member"}</p> */}
                  </div>):
                  ( <div
                   className="author"
                   //style={{textAlign:'center', fontSize: 30,alignItems: 'center',justifyContent: 'center',}}
                  
                   >
                     <a>
                     
                    <img
                     className="avatarMain border-gray"
                     src=""
                     alt={this.state.fname.toUpperCase()+this.state.lname.toUpperCase()}
                     style={{textAlign:'center', fontSize: 30,alignItems: 'center',justifyContent: 'center',
                     backgroundColor:'white'
                    }}
                    >
                  </img>
                    
                      <h5 className="title">{this.state.companyname}</h5>
                     </a>
                     {/* <p className="description">{this.state.profiledata.type=="PM"?"Project Manager":"Team Member"}</p> */}
                   </div>)}
                </div>
                <div className="card-footer">
                  <div className="button-container">
                    <button className="btn btn-primary"
                     type="button"
                      
                    >
                      <i className="dripicons-camera" />{" "}
                      <span>Change Photo</span>{" "}
                      <input type="file" className="fileUploadBtn"
                       onChange={this.imageUpload}
                       />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Team Members</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled team-members">
                    <li>
                      <div className="row">
                        <div className="col-md-2 col-2">
                          <div className="avatar">
                            <img
                              src="/assets/images/users/avatar-4.jpg"
                              alt="Circle Image"
                              className="img-circle img-no-padding img-responsive"
                            />
                          </div>
                        </div>
                        <div className="col-md-7 col-7">
                          DJ Khaled
                          <br />
                          <span className="text-muted">
                            <small>Offline</small>
                          </span>
                        </div>
                        <div className="col-md-3 col-3 text-right">
                          <btn className="btn btn-sm btn-outline-success btn-round btn-icon">
                            <i className="dripicons-message" />
                          </btn>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-2 col-2">
                          <div className="avatar">
                            <img
                              src="/assets/images/users/avatar-5.jpg"
                              alt="Circle Image"
                              className="img-circle img-no-padding img-responsive"
                            />
                          </div>
                        </div>
                        <div className="col-md-7 col-7">
                          Creative Tim
                          <br />
                          <span className="text-success">
                            <small>Available</small>
                          </span>
                        </div>
                        <div className="col-md-3 col-3 text-right">
                          <btn className="btn btn-sm btn-outline-success btn-round btn-icon">
                            <i className="dripicons-message" />
                          </btn>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-2 col-2">
                          <div className="avatar">
                            <img
                              src="/assets/images/users/avatar-3.jpg"
                              alt="Circle Image"
                              className="img-circle img-no-padding img-responsive"
                            />
                          </div>
                        </div>
                        <div className="col-ms-7 col-7">
                          Flume
                          <br />
                          <span className="text-danger">
                            <small>Busy</small>
                          </span>
                        </div>
                        <div className="col-md-3 col-3 text-right">
                          <btn className="btn btn-sm btn-outline-success btn-round btn-icon">
                            <i className="dripicons-message" />
                          </btn>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card card-user">
                <div className="card-header">
                  <h5 className="card-title">Edit Profile</h5>
                </div>
                <div className="card-body">
                  {/* <form> */}
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>Company Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company"
                            //defaultValue="Chet"
                            value={this.state.companyname}
                            onChange={(val) => {
                              this.setState({
                                companyname: val.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                      <div className="form-group">
                          <label>Company Phone</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Phone number"
                           length={10}
                           // defaultValue="michael23"
                            value={this.state.phone}
                            onChange={(val) => {
                              this.setState({
                                phone: val.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 px-1">
                      <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(val) => {
                              this.setState({
                                email: val.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Password
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={(val) => {
                              this.setState({
                                password: val.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Home Address"
                            //defaultValue="Melbourne, Australia"
                            value={this.state.address}
                            onChange={(val) => {
                              this.setState({
                                address: val.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="row">
                      <div className="col-md-4 pr-1">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            //defaultValue="Melbourne"
                            value={this.state.city}
                            onChange={(val) => {
                              this.setState({
                               city: val.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 px-1">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Country"
                            //defaultValue="Australia"
                            value={this.state.country}
                            onChange={(val) => {
                              this.setState({
                                country: val.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 pl-1">
                        <div className="form-group">
                          <label>Postal Code</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="ZIP Code"
                            value={this.state.postal_code}
                            onChange={(val) => {
                              this.setState({
                               postal_code: val.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>About Me</label>
                          <textarea
                            className="form-control textarea"
                            value={this.state.about_me}
                            placeholder="enter your bio.."
                            maxLength={250}
                            // defaultValue={
                            //   "Oh so, your weak rhyme You doubt I'll bother, reading into it"
                            // }
                            onChange={(val) => {
                              this.setState({
                                about_me: val.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div> */}
                    <div className="row">
                      <div className="update ml-auto mr-auto">
                        <button
                          type="submit"
                          className="btn btn-primary btn-round"
                          onClick={this.profileUpdate}
                        >
                          Update Profile
                        </button>
                      </div>
                    </div>
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
