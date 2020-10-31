import React, { Component } from "react";
import moment from "moment";
//import BoardAddModal from "./boardAddModal";
//import boardAddModal from "./boardAddModal";
import HttpClient from "../../utils/HttpClient";



// import $ from "jquery";
// window.jQuery = window.$ = $;
const $ = window.$;

export default class taskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      t_id:"",
      
    };
  }
  onClickOpen() {
    this.props.onModalOpen(true,this.props.task);
  }
  onClickEdit(){
    console.log(this.props.subtask_id);
    this.props.isSubTaskEdit(this.props.subtask_id);
  }
  onClickSubtaskListing()
  {
    this.props.isSubTask(this.props.task);

  }
  onClickDeleteSubtask = async (id) =>
  {
    let data={
      id:id
    }
    console.log(data);
    let result=await HttpClient.requestData("delete-subtask","POST",data);
    if(result&&result.status)
    {
      this.props.isTaskDeleted(true);
    }
    else{
      this.props.isTaskDeleted(false);
    }
  }
  
  render() {
    return (
      <div className="card mb-0">
        
        <div className="card-body p-3">
          <small className="float-right text-muted">{moment(this.props.asigned_on).format('DD MMM YYYY')}</small>
    <span className="badge badge-danger">{this.props.priority}</span>
          <h5 className="mt-2 mb-2">
            <p className="text-body" onClick={() => this.onClickOpen()}>
             {this.props.task_title?this.props.task_title:"No title"}
            </p>
          </h5>
          {/* <p className="mb-0">
            <span className="pr-2 text-nowrap mb-2 d-inline-block">
              <i className="mdi mdi-briefcase-outline text-muted" />
            {this.props.description}
            </span>
            <span className="text-nowrap mb-2 d-inline-block">
              <i className="mdi mdi-comment-multiple-outline text-muted" />
              <b>74</b> Comments
            </span>
          </p> */}
          <div className="dropdown float-right">
            <a
              href="#"
              className="dropdown-toggle text-muted arrow-none"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="mdi mdi-dots-vertical font-18" />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
            
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item"
               data-toggle="modal"
               data-target="#edit-sub-task-modal"
               onClick={() => {
              //  this.setState({
              //    t_id:this.props.task_id
              //  });
               this.onClickEdit()
               
              
                   }}
              >
                <i className="mdi mdi-pencil mr-1" />
                Edit
              </a>
             
              
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item"
               onClick={() => {
                //  this.setState({
                //    t_id:this.props.task_id
                //  });
                 this.onClickDeleteSubtask(this.props.id)
                 
                
                     }}
              >
                <i className="mdi mdi-delete mr-1" />
                Delete
              </a>
              {/* item*/}
              {/* <a href="javascript:void(0);" className="dropdown-item">
                <i className="mdi mdi-plus-circle-outline mr-1" />
                Add People
              </a> */}
              {/* item*/}
              {/* <a href="javascript:void(0);" className="dropdown-item">
                <i className="mdi mdi-exit-to-app mr-1" />
                Leave
              </a> */}
            </div>
          </div>
          <p className="mb-0">
          {this.props.image!=""?(
            <img
              src={this.state.user_url+this.state.image}
              alt="user-img"
              className="avatar-xs rounded-circle mr-1"
            />):
            <div
            style={{
              textAlign: "center",
              fontSize: 15,
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              backgroundColor: "grey",
              height: "24px",
              width: "24px",
              color: "white",
              lineHeight: "24px",
            }}
            className="rounded-circle avatar-xs mr-2"
          >
            {this.props.asigned_to
              .charAt(0)
              .toUpperCase() 
              }
          </div>
            }
            <span className="align-middle">{this.props.asigned_to?this.props.asigned_to:"No Name"}</span>
          </p>
        </div>{" "}
        {/* end card-body */}
       
      </div>
    );
  }
}
