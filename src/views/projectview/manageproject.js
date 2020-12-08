import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/breadcomb";
import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import HttpClient from "../../utils/HttpClient";
import moment from "moment";
//import Loder from "./../../../../src/images/preloader.gif"
import { reactLocalStorage } from "reactjs-localstorage";

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
    };
  }

  componentDidMount() {
    this.getUserdata();
  }

  getUserdata = async () => {
    let data = reactLocalStorage.getObject("user_data");
    if (data && Object.keys(data).length !== 0) {
      this.setState({ isLogin: true, userData: data, userId: data.id });
      this.projectData(data.id);
    }
  };

 projectData = async (userId)=>
 {
   let data = {
    user_id: userId,
    };

    let result = await HttpClient.requestData("projectdata", "POST", data);

    console.log("result product", result);

    if (result && result.status > 0) {
      let data = [];
      let i = 1;
      this.setState({ result: result.data });
      this.state.result.forEach((element, index) => {
        //console.log("element",element)
        let rows = {
          sl: i,
         // user_type: element.type == "PM" ? "Project Manager" : "Team Member",
          // img:element.image.length>0?<img src={this.state.img_url+element.image[0].img} alt="" className="rounded thumb-lg" />:null,
          name: element.name,

          overviews: element.overviews,
          task: element.taskcount,
          // address:element.address!=null?element.address:"",
          //city :element.city,
          //companyname:element.companyname,
          // sub_category :element.sub_category_data.name,
          //country:element.country,
          date: moment(element.doj).format("DD/MM/YYYY"),
          //   status:
          //     element.status == true ? (
          //       <Button
          //         className="btn-icon"
          //         color="success"
          //         onClick={e => this.status(element, element.status, e, index)}
          //       >
          //         {" "}
          //         <span className="btn-icon-label">
          //           <i className="mdi mdi-emoticon-wink-outline mr-2"></i>
          //         </span>{" "}
          //         Active
          //       </Button>
          //     ) : (
          //       <Button
          //         className="btn-icon"
          //         color="danger"
          //         onClick={e => this.status(element, element.status, e, index)}
          //       >
          //         {" "}
          //         <span className="btn-icon-label">
          //           <i className="mdi mdi-emoticon-cry-outline mr-2"></i>
          //         </span>{" "}
          //         Deactive
          //       </Button>
          //     ),
            view: (
              <Link
              to={{
                pathname:
                  "/project-wizardd" + element.auto_id ,
             
              }}
            >
              <Button className="btn-icon" color="primary">
            
                View
              </Button>
            </Link>
            ),
          //   delete: (
          //     <Button
          //       className="btn-icon"
          //       color="danger"
          //       onClick={() => {
          //         this.deletee(element,index);
          //       }}
          //     >
          //       {" "}
          //       <span className="btn-icon-label">
          //         <i className="mdi mdi-delete mr-2"></i>
          //       </span>{" "}
          //       Delete
          //     </Button>
          //   )
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

  render() {
    const data = {
      columns: [
        {
          label: "Sl.",
          field: "sl",
          sort: "asc",
          width: 150,
        },
       

        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 250,
        },
        {
          label: "Overviews",
          field: "overviews",
          sort: "asc",
          width: 250,
        },
        {
          label: "Task",
          field: "task",
          sort: "asc",
          width: 250,
        },
        //   {
        //     label: "Adress",
        //     field: "address",
        //     sort: "asc",
        //     width: 250
        //   },
        //   {
        //     label: "City",
        //     field: "city",
        //     sort: "asc",
        //     width: 250
        //   },
        //   {
        //     label: "CompanyName",
        //     field: "companyname",
        //     sort: "asc",
        //     width: 250
        //   },
        //   {
        //     label: "Country",
        //     field: "country",
        //     sort: "asc",
        //     width: 250
        //   },

        {
          label: "RegDate",
          field: "date",
          sort: "asc",
          width: 250,
        },

        // {
        //   label: "Status",
        //   field: "status",
        //   sort: "asc",
        //   width: 250
        // },
        {
          label: "View",
          field: "view",
          sort: "asc",
          width: 50
        },
        //{
        //   label: "Delete",
        //   field: "delete",
        //   sort: "asc",
        //   width: 50
        // }
      ],
      rows: this.state.data,
    };

    return (
      <React.Fragment>
        <div className="content">
          {/* {this.state.isloading?
                (<img src={Loder} style={{
                  display: 'table',
                margin: 'auto'}}/>)
                :( */}
          <div className="container-fluid">
            <div className="page-title-box">
              <Breadcrumb pageTitle="Manage Projects" />
            </div>

            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <MDBDataTable striped data={data} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          {/* )} */}
        </div>
      </React.Fragment>
    );
  }
}
