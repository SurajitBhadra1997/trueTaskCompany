import React, { Component } from "react";
import HttpClient from "../../../utils/HttpClient";
import ReactJsAlert from "reactjs-alert";
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
  componentDidMount() {
  
   this.fetch();
  }
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
      id:this.props.id,
      name: this.state.name,
      price: this.state.price,
      no_of_month: this.state.number_of_month
    };

     console.log("data", data);
   
      let dataStatus = await HttpClient.requestData("edit-subscription", "POST", data);
        console.log("dataStatus", dataStatus);
      if (dataStatus&&dataStatus.status) {
        this.setState({ 
        type:"success",
        title:"plan Updated successfully",
        status:true,
          
          });
          // this.props.isplanEdited(true,this.props.id);
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
          Update your Plans
        </MDBModalHeader>
        <MDBModalBody>
          <MDBCardBody className="mx-3 mt-0 pt-0">
            <MDBInput label="Plan name" group type="text" validate
             onChange={(val) => {
              this.setState({ name: val.target.value });
            }}
            value={this.state.name}
        />
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
          <MDBBtn color="danger" onClick={() => this.props.callBackClose(id)}>
            Cancel
          </MDBBtn>
          <MDBBtn color="primary"
          onClick={() => {
            this.handleSubmit();
            // onClick={this.add_bClass}
          }}
          >Update Plan</MDBBtn>
        </MDBModalFooter>
      </React.Fragment>
    );
  }
}
