import React, { Component } from "react";
import ReactJsAlert from "reactjs-alert";
import HttpClient from "../../../utils/HttpClient";
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

    };
  
  }
  validate() {
    if (this.state.name== "") {
      this.setState({
        title: "Please Enter Plan name.",
      });
      return false;
    } else {
      if (this.state.price== "") {
        this.setState({
          title: "Please Enter Plan price.",
        });
        return false;
      } else {
        if (this.state.number_of_month== "") {
          this.setState({
            title: "Please Enter no of month.",
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
      name: this.state.name,
      price: this.state.price,
      no_of_month: this.state.number_of_month
    };

     console.log("data", data);
   
      let dataStatus = await HttpClient.requestData("subscription-add", "POST", data);
        console.log("dataStatus", dataStatus);
      if (dataStatus&&dataStatus.status) {
        this.setState({ 
        type:"success",
        title:"plan added successfully",
        status:true,
          
          });
          window.location.href="/manage-subscription";
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
    return (
      <React.Fragment>
         <ReactJsAlert
          type={this.state.type} // success, warning, error, info
          title={this.state.title} // title you want to display
          status={this.state.status} // true or false
          Close={() => this.setState({ status: false })}
        />
        <MDBModalHeader
          toggle={this.props.onModalClose}
          className="deep-grey-text"
        >
          Add New Plans
        </MDBModalHeader>
        <MDBModalBody>
          <MDBCardBody className="mx-3 mt-0 pt-0">
            <MDBInput
             label="Plan name"
              group type="text" 
              onChange={(val) => {
                this.setState({ name: val.target.value });
              }}
              value={this.state.name}
              validate />
            <MDBInput
              label="Plan Price"
              group
              type="number"
              validate
              containerClass="mb-0"
              onChange={(val) => {
                this.setState({ price: val.target.value });
              }}
              value={this.state.price}
              
            />
            <MDBInput
              label="Plan Period"
              group
              type="number"
              validate
              containerClass="mb-0"
              onChange={(val) => {
                this.setState({ number_of_month: val.target.value });
              }}
              value={this.state.number_of_month}
            />
          </MDBCardBody>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="danger" onClick={this.props.onModalClose}>
            Close
          </MDBBtn>
          <MDBBtn color="primary"
            onClick={() => {
              this.handleSubmit();
              // onClick={this.add_bClass}
            }}
          >Add Plan</MDBBtn>
        </MDBModalFooter>
      </React.Fragment>
    );
  }
}
