import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, Button } from "reactstrap";
// import { MDBDataTable } from "mdbreact";
import HttpClient from "../../../utils/HttpClient";
import moment from "moment";
import { reactLocalStorage } from "reactjs-localstorage";
import Breadcrumb from "../../components/breadcomb";
import MyDataTable from "../../components/myDataTable";
import EditPlanModal from "../editPlanModal";
import AddPlanModal from "../addPlanModal";
import { MDBModal } from "mdbreact";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      result: [],
      img_url: "http://api.vintagebazaar.in/uploads/product_img/",
      name: "",
      u_id: "",
      isloading: true,
      modal: false,
      isEditing: false,
    };
    // this.openEditModal = this.openEditModal.bind(this);
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  isplanEdited =(status,id) =>
  {
    if(status==true)
    {
      console.log("hjhj");
      this.setState((prevState) => ({
        isEditing: {
          ...prevState.isEditing,
          [id]: !prevState.isEditing[id],
        },
      }));
      this.getUserdata();
    }
  }
  openEditModal = (id) => {
    console.log("Cheery hey !" + id);
    this.setState((prevState) => ({
      isEditing: {
        ...prevState.isEditing,
        [id]: !prevState.isEditing[id],
      },
    }));
  };
  componentDidMount() {
    this.getUserdata();
  }

  getUserdata = async () => {
    let data = reactLocalStorage.getObject("user_data");
    if (data && Object.keys(data).length !== 0) {
      this.setState({ isLogin: true, userData: data, userId: data.id });
      this.fetch();
    }
  };

  async fetch() {
    const data = {};

    let result = await HttpClient.requestData(
      "subscription-show",
      "POST",
      data
    );

    console.log("result product", result);

    if (result && result.status > 0) {
      let data = [];
      let i = 1;
      this.setState({ result: result.data });
      this.state.result.forEach((element, index) => {
        //console.log("element",element)
        let rows = {
          sl: i,
          user_type: element.type == "PM" ? "Project Manager" : "Team Member",
          // img:element.image.length>0?<img src={this.state.img_url+element.image[0].img} alt="" className="rounded thumb-lg" />:null,
          name: element.firstname + " " + element.lastname,

          subscription_name: element.name,
          price: "Rs." + element.price,
          no_of_month: element.no_of_month,
          // address:element.address!=null?element.address:"",
          //city :element.city,
          //companyname:element.companyname,
          // sub_category :element.sub_category_data.name,
          //country:element.country,
          date: moment(element.end_date).format("DD/MM/YYYY"),
          status:
          element.status == "Y" ? "Active":"Deactive",
            
             
          
            action:
              element.status == "Y" ? (
                <Button
                  className="btn-icon"
                  color="danger"
                  onClick={e => this.status(element.id)}
                >
                  {" "}
                  <span className="btn-icon-label">
                  <i className="mdi mdi-emoticon-cry-outline mr-2"></i>
                  </span>{" "}
                  Deactive
                </Button>
              ) : (
                <Button
                  className="btn-icon"
                  color="success"
                  onClick={e => this.status(element.id)}
                >
                  {" "}
                  <span className="btn-icon-label">
                   
                    <i className="mdi mdi-emoticon-wink-outline mr-2"></i>
                  </span>{" "}
                  Active
                </Button>
              ),
          edit: (
            <button
              className="font-22 p-0 bg-transparent border-0 text-dark shadow-0"
              onClick={() => this.openEditModal(element.id)}
            >
              <i className="mdi mdi-format-color-highlight"></i>
            </button>
          ),
          delete: (
            <button
              className="font-22 p-0 bg-transparent border-0 text-dark shadow-0"
              onClick={() => {
                this.deletee(element, index);
              }}
            >
              <i className="mdi mdi-delete"></i>
            </button>
          ),
        };
        data.push(rows);
        i++;
      });
      console.log("this.state.data", data);
      this.setState({
        data: data,
        isloading: false,
      });
    } else {
      this.setState({
        data: [],
        isloading: false,
      });
    }
  }
   status =async (id)=>
  {
   let data = {
    id:id,
   };
   console.log(data);
    let result = await HttpClient.requestData(
      "status-subscription",
      "POST",
      data
    );

    console.log("result product", result);

    if (result && result.status) {
      
       this.getUserdata();
    }
  }

  render() {
    const data = {
      columns: [
        // {
        //   label: "Sl.",
        //   field: "sl",
        //   sort: "asc",
        //   width: 150,
        // },
        {
          label: "Plans",
          field: "subscription_name",
          sort: "asc",
          width: 200,
        },
        {
          label: "Price",
          field: "price",
          sort: "asc",
          width: 50,
        },
        {
          label: "Period",
          field: "no_of_month",
          sort: "asc",
          width: 50,
        },
        {
          label: "Status",
          field: "status",
          sort: "asc",
          width: 25,
        },
        {
          label: "Action",
          field: "action",
          sort: "asc",
          width: 25,
        },

        {
          label: "Edit",
          field: "edit",
          sort: "asc",
          width: 25,
        },
        // {
        //   label: "Delete",
        //   field: "delete",
        //   sort: "asc",
        //   width: 25,
        // },
      ],
      rows: this.state.data,
    };
    return (
      <React.Fragment>
        <div className="content">
          <div className="container-fluid">
            <div className="page-title-box">
              <Breadcrumb pageTitle="Manage Subscription" />
            </div>

            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <button
                      className="btn btn-danger mx-0 mt-0 mb-2"
                      onClick={this.toggle}
                    >
                      <span className="mdi mdi-plus-circle-outline"></span> Add
                      Plans
                    </button>
                    <MyDataTable data={data} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            {/* add plan modal */}
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
              <AddPlanModal onModalClose={this.toggle} />
            </MDBModal>

            {/* edit plan modal */}
            {this.state.result.map((item, index) => {
              return (
                <MDBModal
                  isOpen={this.state.isEditing[item.id]}
                  toggle={() => this.openEditModal(item.id)}
                 
                  key={index}
                >
                  <EditPlanModal
                    id={item.id}
                    callBackClose={() => this.openEditModal(item.id)}
                    isplanEdited={()=>this.isplanEdited}
                  />
                </MDBModal>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
