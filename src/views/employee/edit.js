import React, { Component } from "react";
import HttpClient from "../../utils/HttpClient";
import ReactJsAlert from "reactjs-alert";
import Select from "react-select";

import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBCardBody,
  MDBInput,
} from "mdbreact";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      number_of_month:"",
      alert: false,
      error: false,
      type:"",
      status:false,
      title:"",
      f_name:"",
      l_name:"",
      email:"",
      bio:"",
      companyname:"",
      usertypeoption: [
         // { label: "Select", value: "Select" },
         { label: "Project Manager", value: "PM" },
         { label: "Team Member", value: "TM" },
         { label: "Portfolio Manger", value: "PFM" },
         { label: "Program Manger", value: "PGM" },
       ],
       password:"",
       selectedUserType:""
    };
  }
  componentDidMount() {
  
   this.fetch();
  }
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
 async fetch()
 {
  const data ={
     id:this.props.id,
  };
 console.log(data);
 let result = await HttpClient.requestData("single-subscription","POST",data);
 
 console.log("result product", result);

 if (result && result.status) {
   this.setState({
     name:result.data.name,
     price:result.data.price,
     number_of_month:result.data.no_of_month,
   });
 } 
 else{

 }
}
  validate() {
    if (this.state.f_name== "") {
      this.setState({
        title: "Please Enter First name.",
      });
      return false;
    } else {
      if (this.state.l_name== "") {
        this.setState({
          title: "Please Enter Last Name",
        });
        return false;
      } else {
        if (this.state.bio== "") {
          this.setState({
            title: "Please Enter bio",
          });
          return false;
        } else {
         
     
          return true;
      }
    }
    }
  }

  async handleSubmit() {
    let validation=this.validate();
    if(validation)
    {
    const data = {
      company_id:this.props.id,
      firstname:this.state.f_name,
      lastname:this.state.l_name,
      biography:this.state.bio,
      email:this.state.email,
      password:this.state.password,
      companyname:this.state.companyname,
      type:this.state.selectedUserType
    };

     console.log("data", data);
   
      let dataStatus = await HttpClient.requestData("edit-member", "POST", data);
        console.log("dataStatus", dataStatus);
      if (dataStatus&&dataStatus.status) {
        this.setState({ 
        type:"success",
        title:"Member Updated successfully",
        status:true,
          
          });
          // this.props.isplanEdited(true,this.props.id);
          window.location.href="/view-member";
      }
      else{
        this.setState({ 
          type:"error",
          title:"something went wrong",
          status:true,
            
            });
      }
    }
    else{
      this.setState({ 
        type:"warning",
       
        status:true,
          
          });
    }
    
  }


    render() {
        const id = this.props.id;
    return (
      <React.Fragment>
        <ReactJsAlert
          type={this.state.type} // success, warning, error, info
          title={this.state.title} // title you want to display
          status={this.state.status} // true or false
          Close={() => this.setState({ status: false })}
        />
        <MDBModalHeader
          toggle={() => this.props.callBackClose(id)}
          className="deep-grey-text"
        >
          Update your Members
        </MDBModalHeader>
        <MDBModalBody>
          <MDBCardBody className="mx-3 mt-0 pt-0">
            <MDBInput label="First Name" group type="text" validate
             onChange={(val) => {
              this.setState({ f_name: val.target.value });
            }}
            value={this.state.f_name}
        />
            <MDBInput
              label="Last Name"
              group
              type="text"
              validate
              containerClass="mb-0"
              onChange={(val) => {
                this.setState({ l_name: val.target.value });
              }}
              value={this.state.l_name}
            />
            <MDBInput
              label="Email"
              group
              type="text"
              validate
              containerClass="mb-0"
              onChange={(val) => {
                this.setState({ email: val.target.value });
              }}
              value={this.state.email}
            />
            <MDBInput
              label="Bio"
              group
              type="text"
              validate
              containerClass="mb-0"
              onChange={(val) => {
                this.setState({ bio: val.target.value });
              }}
              value={this.state.bio}
            />
             <MDBInput
              label="Password"
              group
              type="text"
              validate
              containerClass="mb-0"
              onChange={(val) => {
                this.setState({ password: val.target.value });
              }}
              value={this.state.password}
            />
            <MDBInput
              label="Company Name"
              group
              type="text"
              validate
              containerClass="mb-0"
              onChange={(val) => {
                this.setState({ companyname: val.target.value });
              }}
              value={this.state.companyname}
            />
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
          </MDBCardBody>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="danger" onClick={() => this.props.callBackClose(id)}>
            Cancel
          </MDBBtn>
          <MDBBtn color="primary"
          onClick={() => {
            this.handleSubmit();
            // onClick={this.add_bClass}
          }}
          >Update Member</MDBBtn>
        </MDBModalFooter>
      </React.Fragment>
    );
  }
}
