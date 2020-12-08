import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Breadcomb from "../components/breadcomb";
import Select from "react-select";
import { reactLocalStorage } from "reactjs-localstorage";
import ReactJsAlert from "reactjs-alert";
import HttpClient from "./../../utils/HttpClient";

export default class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             phone:"",
             f_name:"",
             l_name:"",
             email:"",
             selectedFiles:[],
             firstFile: "",
             date:"",
             bio:"",
             companyname:"",
             password:"",
             usertypeoption: [
                // { label: "Select", value: "Select" },
                { label: "Project Manager", value: "PM" },
                { label: "Team Member", value: "TM" },
                { label: "Portfolio Manger", value: "PFM" },
                { label: "Program Manger", value: "PGM" },
              ],
              user_data:{},
              company_id:"",
              type: "error",
              status: false,
              title: "Hey! this is an error.",
              quote: "Something went wrong. Please try again!",
              selectedUserType:"",
              msg:"",
              
        }
    }
    async componentDidMount() 
  {
     await this.getUserdata();
  
  }
  validate() {
    if (this.state.email == "") {
      this.setState({
        title: "Please Enter email.",
      });
      return false;
    } else {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(this.state.email)) {
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
   getMySubscriptionStatus = async (id,email,type)=>
  {
    let data = {
     company_id:id,
      
    };
    console.log(data);
    let result = await HttpClient.requestData("check-companysubscription", "POST", data);
    console.log("result", result);
    if (result && result.status&&result.data) {
      let subscription_status = result.data.status;
      reactLocalStorage.set("subscription_status", subscription_status);
       console.log(subscription_status);
       this.setState({
         msg:"",
       });
     //this.getMyprojectList(id);
    }
   
    else{
      reactLocalStorage.set("subscription_status","N");
      this.setState({
        type: "warning",
        status: true,
        title: "You dont't have any active subscription plan please buy a new one",
        msg:"You dont't have any active subscription plan please buy a new one",
      });
  
    }
    

  }
   getUserdata = async () => {
   
   
     let data = reactLocalStorage.getObject('user_data');
    console.log(data);
    if(data && Object.keys(data).length !== 0)
    {
      this.setState({isLogin:true,
        user_data:data,
        company_id:data.id,
        companyname:data.name
        // lname:data.lastname.charAt(0),
      });
        this.getMySubscriptionStatus( data.id,data.email,data.type);
    }
  }
    // onChangeFirst = async (event) => {
    //     let data = [];
    //     let file = {
    //       preview: URL.createObjectURL(event.target.files[0]),
    //     };
    //     this.setState({
    //       firstFile: event.target.files[0],
    //       selectedFiles: [
    //         {
    //           preview: URL.createObjectURL(event.target.files[0]),
    //         },
    //       ],
    //     });
    //     console.log("selected files", this.state.selectedFiles);
    //     setTimeout(() => {
    //       console.log("selected files", this.state.firstFile);
    //     }, 3000);
    //   };
      handelUserType = (selectedUserType) => {
    setTimeout(() => {
      console.log("event.target.value", selectedUserType.value);
    }, 3000);
    let c = [];
    c.push(selectedUserType.value);
    this.setState({
      selectedUserType: selectedUserType.value,
      isloading1:false
    });
    setTimeout(() => {
      console.log("event.target.value", this.state.selectedUserType);
    }, 3000);
  };
  signUp = async () => {
   
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if(this.state.f_name =='' && this.state.l_name =='' && this.state.email =='' && this.state.password=='' && this.state.bio=='' && this.state.selectedUserType=='')
    {
      this.setState({
        type: "warning",
        status: true,
        title: "Please Fillup Basic Details.",
        // quote: "Something went wrong. Please try again!",
      });
    }
    else if(!pattern.test(this.state.email)){
      this.setState({
        type: "warning",
        status: true,
        title: "Please Enter Valid Email",
        // quote: "Something went wrong. Please try again!",
      });
    }
    else
    {
      // this.setState({
      //   type: "success",
      //   status: true,
      //   title: "You hve entered else",
      //   // quote: "Something went wrong. Please try again!",
      // });
      let data = {
        "company_id":this.state.company_id,
        "firstname":this.state.f_name,
        "lastname":this.state.l_name,
        "biography":this.state.bio,
        "email":this.state.email,
        "password":this.state.password,
        "companyname":this.state.companyname,
        "type":this.state.selectedUserType
      }
      console.log("member data",data);
      let result = await HttpClient.requestData("add-member","POST",data);
      console.log('result',result);
      if(result && result.status)
      {
        let data = result.data;
        // reactLocalStorage.setObject('user_data', data);
        this.setState({
          type: 'success',
          status: true,
          title: 'Member Registerd Successfully',
          phone:"",
          f_name:"",
          l_name:"",
          email:"",
          date:"",
          bio:"",
          password:"",
          companyname:"",
          selectedUserType:"",
          usertypeoption: [
            // { label: "Select", value: "Select" },
            { label: "Project Manager", value: "PM" },
            { label: "Team Member", value: "TM" },
            { label: "Portfolio Manger", value: "PFM" },
            { label: "Program Manger", value: "PGM" },
          ],
        //   quote: "You are welcome to Truetask",
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
    render() {
        return (
          <div className="container-fluid">
            <Breadcomb pageTitle="Add Member" leadTitle="Member" />
            <div className="row">
            <ReactJsAlert
          type={this.state.type} // success, warning, error, info
          title={this.state.title} // title you want to display
          status={this.state.status} // true or false
          Close={() => this.setState({ status: false })}
        />
        {reactLocalStorage.get("subscription_status")=="Y"?
        (
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="form-group">
                          <label htmlFor="projectname">First Name</label>
                          <input
                            type="text"
                            id="projectname"
                            className="form-control"
                            placeholder="Enter member first name"
                            onChange={(val)=>{
                                this.setState({f_name:val.target.value})
                              }}
                              value={this.state.f_name}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="projectname">Last Name</label>
                          <input
                            type="text"
                            id="projectname"
                            className="form-control"
                            placeholder="Enter member last name"
                            onChange={(val)=>{
                                this.setState({l_name:val.target.value})
                              }}
                              value={this.state.l_name}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="project-overview">Bio</label>
                          {/* <input
                            type="text"
                            id="projectname"
                            className="form-control"
                            placeholder="Enter employee phone"
                            onChange={(val)=>{
                                this.setState({phone:val.target.value})
                              }}
                              value={this.state.phone}
                          /> */}
                          <textarea
                            className="form-control"
                            id="project-overview"
                            rows={5}
                            placeholder="Enter bio"
                            defaultValue={""}
                            onChange={(val)=>{
                                this.setState({bio:val.target.value})
                              }}
                              value={this.state.bio}
                          />
                        </div>
                        {/* Date View */}
                        {/* <div className="form-group">
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
                        </div> */}
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
                        <div className="form-group">
                          <label htmlFor="project-budget">Password</label>
                          <input
                            type="text"
                            id="project-budget"
                            className="form-control"
                            placeholder="Enter Password"
                            onChange={(val)=>{
                                this.setState({password:val.target.value})
                              }}
                              value={this.state.password}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="project-budget">Company Name</label>
                          <input
                            type="text"
                            id="project-budget"
                            className="form-control"
                            placeholder="Enter Company Name"
                            onChange={(val)=>{
                                this.setState({companyname:val.target.value})
                              }}
                              value={this.state.companyname}
                              readOnly
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
                      <div className="form-group">
                          <label htmlFor="project-budget">Member Type</label>
                          <Select
                        name="colors"
                        options={this.state.usertypeoption}
                        // value={this.state.selectedProjectType}
                        onChange={this.handelUserType}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        // onInputChange={this.handelChange}
                      />
                        </div>
                        <button type="button" className="btn btn-success mt-2" onClick={()=>{this.signUp()}}>
                          <i className="mdi mdi-content-save" /> Submit
                        </button>
                      </div>
                          
                     
                    
                    </div>
                    {/* end row */}
                  </div>{" "}
                  {/* end card-body */}
                </div>{" "}
                
                {/* end card*/}
              </div>
        
        ):(
        <div style={{alignItems:"center"}}><h3>{this.state.msg}</h3></div>
       )}
              {/* end col*/}
            </div>
          </div>
        
        );
    }
}
