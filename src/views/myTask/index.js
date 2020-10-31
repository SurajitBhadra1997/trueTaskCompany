import React, { Component } from "react";
import { Link } from "react-router-dom";
import Collapsible from "./collapsible";
import TaskDetails from "./taskDetails";
import BoardAddModal from "../board/boardAddModal";
import HttpClient from "../../utils/HttpClient";
import { reactLocalStorage } from "reactjs-localstorage";
import ReactJsAlert from "reactjs-alert";
import BoardTaskDetails from "../board/boardTaskDetails";


export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = { modalShow: "", display: "none",
    pro_id:this.props.match.params.id,
    isloading:false,
    tasklist:[],
    task_id:"",
    page_name:"my task",
    type: "",
    status: false,
    errMsg:"",
   };
  }
  ismarkedDuplicate=(status)=>
  {
    if(status==true)
    {
      this.setState({
        type: "success",
        status: true,
        errMsg: "marked as duplicate",
        modalShow: "",
        display: "none",
      });
     this.getTaskList(this.state.pro_id);
      
      
    }
    else{
      this.setState({
        type: "error",
        status: true,
        errMsg: "something went wrong",
      });
      
    }
    
  }

  ismarkedcompleted = (status)=>
  {
    if(status==true)
    {
      this.setState({
        type: "success",
        status: true,
        errMsg: "task marked completed successfully",
        modalShow: "",
        display: "none",
      });
      this.getTaskList();
      
      
    }
    else{
      this.setState({
        type: "error",
        status: true,
        errMsg: "something went wrong",
      });
      
    }
    
  }
  isTaskDeletedfromView = (status) =>
  {
    if(status==true)
    {
      this.setState({
        type: "success",
        status: true,
        errMsg: "task Deleted successfully",
         modalShow: "",
      display: "none",
      });
      this.getTaskList();
      
      
    }
    else{
      this.setState({
        type: "error",
        status: true,
        errMsg: "something went wrong",
      });
      
    }
  }

  isModalOpen = (status,id) => {
    if (status === true&&id!="") {
      this.setState({
        modalShow: "show",
        display: "block",
         task_id:id,
      });
      console.log("modal opened!");
    } else {
      this.setState({
        modalShow: "",
        display: "none",
      });
      console.log("modal closed!");
    }
  };
  componentDidMount() {
    if(typeof(this.props.match.params.id)!="undefined")
    {
      this.setState({
        isloading:true
      });
    }
    this.getUserdata();
    console.log("ac", this.state.formId);
  }
  
 getUserdata = async () => {
    let data = reactLocalStorage.getObject("user_data");
    if (data && Object.keys(data).length !== 0) {
      this.setState({ isLogin: true, 
        userData: data,
         userId: data.id });
     this.getTaskList();
    }
  };

 getTaskList = async () =>
 {
  let data = {
   project_id:this.state.pro_id,
  };
  console.log(data);
  let result = await HttpClient.requestData("get-task", "POST", data);
  console.log(result);
  if (result && result.status) 
    {
     this.setState({
       tasklist:result.data,

     })
    }
    
 }

  render() {
    return (
      <div class="container-fluid">
        <ReactJsAlert
       type={this.state.type} // success, warning, error, info
       title={this.state.errMsg} // title you want to display
       status={this.state.status} // true or false
       Close={() => this.setState({ status: false })}
     />
        <div className="row" style={{ position: "relative" }}>
          <div className="col-12 col-md-12 col-lg-12 col-xl-8">
            {/* start page title */}
            <div className="page-title-box">
              <div className="page-title-right">
                <div className="app-search">
                  <form>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                      />
                      <span className="mdi mdi-magnify search-icon" />
                      <div className="input-group-append">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="uil uil-sort-amount-down" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">
                            Due Date
                          </a>
                          <a className="dropdown-item" href="#">
                            Added Date
                          </a>
                          <a className="dropdown-item" href="#">
                            Assignee
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <h4 className="page-title">
                Tasks
                {/* <a
                  href="#"
                  data-toggle="modal"
                  data-target="#add-new-task-modal"
                  className="btn btn-success btn-sm ml-3"
                >
                  Add New
                </a> */}
              </h4>
            </div>

            {/* todays tasks panel */}
            { this.state.tasklist.length>0 && this.state.tasklist.map((item, index) => {
                console.log("good",item);
              
                    return (
            <div className="mt-2">
              <a
                className="text-dark"
                data-toggle="collapse"
                href="#todayTasks"
                aria-expanded="false"
                aria-controls="todayTasks"
              >
                <h5 className="m-0 pb-2">
                  <i className="uil uil-angle-down font-18" />
                  {item[0]?item[0].status:null} <span className="text-muted">({item[0]?(item.length):null})</span>
                </h5>
              </a>
                
              <div className="collapse show" id="todayTasks"  >

              {item.map((it, ind) => {
                    return (         
                    <div className="card mb-0" key={ind}>
                  <Collapsible onModalOpen={this.isModalOpen}
                   task_title={it.task_title}
                 asigned_on={it.last_update_date}
                 asigned_to={it.member}
             description={it.task_description}
             priority={it.project_priority?it.project_priority:"No priority"}
             task={it.task_id}
             isTaskId={this.isTaskId}
             isTaskDeleted={this.isTaskDeleted}
             image={it.image!=null?it.image:""}
            

                   />
                </div>
                );
              })}    
              </div>
              
            </div>
               );
                })}
            {/* upcoming tasks
            <div className="mt-4">
              <a
                className="text-dark"
                data-toggle="collapse"
                href="#upcomingTasks"
                aria-expanded="false"
                aria-controls="upcomingTasks"
              >
                <h5 className="m-0 pb-2">
                  <i className="uil uil-angle-down font-18" />
                  Upcoming <span className="text-muted">(5)</span>
                </h5>
              </a>
              <div className="collapse show" id="upcomingTasks">
                <div className="card mb-0">
                  <Collapsible onModalOpen={this.isModalOpen} />
                </div>
              </div>
            </div>
 */}
            {/* start other tasks */}
            {/* <div className="mt-4 mb-4">
              <a
                className="text-dark"
                data-toggle="collapse"
                href="#otherTasks"
                aria-expanded="false"
                aria-controls="otherTasks"
              >
                <h5 className="m-0 pb-2">
                  <i className="uil uil-angle-down font-18" />
                  Other <span className="text-muted">(3)</span>
                </h5>
              </a>
              <div className="collapse show" id="otherTasks">
                <div className="card mb-0">
                  <Collapsible onModalOpen={this.isModalOpen} />
                </div>
              </div>
            </div> */}
          </div>

             {/* task details */}
             <div
            // className="modal fade task-modal-content"
            className={"TaskDetailsModal modal fade " + this.state.modalShow}
            style={{ display: this.state.display }}
            id="TaskDetailsPop"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="TaskDetailsPopLabel"
            aria-hidden="true"
             >
            {" "}
            <BoardTaskDetails onModalClose={this.isModalOpen} 
           task={this.state.task_id}
           project={this.props.match.params.id}
           isTaskDeletedfromView={this.isTaskDeletedfromView}
           ismarkedcompleted={this.ismarkedcompleted}
           ismarkedDuplicate={this.ismarkedDuplicate}
           page_name={this.state.page_name}
            
            />
         </div>
        </div>
        {/* <BoardAddModal /> */}
      </div>
    );
  }
}