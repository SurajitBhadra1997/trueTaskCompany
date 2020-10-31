import React, { Component } from "react";
import { Row, Col, Card, CardBody, Button, Alert } from "reactstrap";
// import { Row, Col, Card, CardBody, Alert } from 'reactstrap';
//import { activateAuthLayout } from "../../../store/actions";
import { connect } from "react-redux";
import { AvForm, AvField } from "availity-reactstrap-validation";
//import Settingmenu from "../Subpages/Settingmenu";

//import Toggle from "react-toggle";
import "react-toggle/style.css";

import { Link } from "react-router-dom";
import HttpClient from "../../../utils/HttpClient";

class FormElements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      number_of_month:"",
      alert: false,
      error: false,
      msg: "Sorry Try Again"
    };
    this.add_bClass = this.add_bClass.bind(this);
    this.add_vClass = this.add_vClass.bind(this);
  }

  componentDidMount() {
    //this.props.activateAuthLayout();
  }

  add_bClass = () => {
    document
      .getElementById("bootstrap_validation")
      .classList.add("was-validated");
  };
  add_vClass = () => {
    document.getElementById("b_validation").classList.add("was-validated");
  };

  async handleSubmit() {
    const data = {
      name: this.state.name,
      price: this.state.price,
      no_of_month: this.state.number_of_month
    };

    // console.log("data", data);
    if (this.state.name !== "" && this.state.price !== "" && this.state.number_of_month !== "") {
      let dataStatus = await HttpClient.requestData("subscription-add", "POST", data);
      //   console.log("dataStatus", dataStatus);
      if (dataStatus.status) {
        this.setState({ alert: true, name: "",price:"" , number_of_month:""});
        setTimeout(async () => {
          this.setState({ alert: false });
        }, 5000);
      } else {
        this.setState({ msg: dataStatus.error, error: true });
        setTimeout(async () => {
          this.setState({ error: false });
        }, 5000);
      }
    } else {
      this.setState({ msg: "Please Fill Up Details", error: true });
      setTimeout(async () => {
        this.setState({ error: false });
      }, 5000);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <Row className="align-items-center">
                <Col sm="6">
                  <h4 className="page-title">Add Subscription Plans</h4>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/dashboard">
                        <i className="mdi mdi-home-outline"></i>
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="#">Search Plans</Link>
                    </li>
                    <li className="breadcrumb-item active">Add Subscription Plans</li>
                  </ol>
                </Col>
                <Col sm="6">
                  <div className="float-right d-none d-md-block">
                    {/* <Settingmenu /> */}
                  </div>
                </Col>
              </Row>
            </div>

            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <h4 className="mt-0 header-title">Add Subscription Plans</h4>
                    {this.state.alert ? (
                      <Alert
                        color="success"
                        isOpen={this.state.alert}
                        toggle={() => this.setState({ alert: false })}
                      >
                        <i className="mdi mdi-check-all mr-2"></i> Success !!!
                        Search Plans Added Successfully
                      </Alert>
                    ) : null}
                    {this.state.error ? (
                      <Alert
                        color="danger"
                        isOpen={this.state.error}
                        toggle={() => this.setState({ error: false })}
                      >
                        <i className="mdi mdi-block-helper mr-2"></i>{" "}
                        {this.state.msg}
                      </Alert>
                    ) : null}
                    {/* <AvForm> */}
                     
                          <div className="form-group">
                            <label>Plan Name</label>
                            <input
                              type="text"
                              className="form-control"
                              
                              onChange={(val) => {
                                this.setState({ name: val.target.value });
                              }}
                              value={this.state.name}
                              
                              placeholder="Plan Name"
                              
                             
                            />
                          </div>
                          <div className="form-group">
                            <label>Plan Price</label>
                            <input
                              type="number"
                              className="form-control"
                              
                              onChange={(val) => {
                                this.setState({ price: val.target.value });
                              }}
                              value={this.state.price}
                              
                              placeholder="Plan Name"
                              
                             
                            />
                          </div>

                          <div className="form-group">
                            <label>No of Month</label>
                            <input
                              type="number"
                              className="form-control"
                              
                              onChange={(val) => {
                                this.setState({ number_of_month: val.target.value });
                              }}
                              value={this.state.number_of_month}
                              
                              placeholder="Plan Name"
                              
                             
                            />
                          </div>


                      <div className="form-group  m-b-0">
                        <Button
                          color="primary"
                          onClick={() => {
                            this.handleSubmit();
                            // onClick={this.add_bClass}
                          }}
                        >
                          Submit
                        </Button>{" "}
                        &nbsp;
                        <Button type="reset">cancel</Button>
                      </div>
                    {/* </AvForm> */}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FormElements;