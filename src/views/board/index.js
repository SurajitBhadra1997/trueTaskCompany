import React, { Component } from "react";
import { Link } from "react-router-dom";
import BoardAddModal from "./boardAddModal";
import TaskList from "./taskList";
import BoardTaskDetails from "./boardTaskDetails";
import ReactJsAlert from "reactjs-alert";
import { reactLocalStorage } from "reactjs-localstorage";
import HttpClient from "../../utils/HttpClient";
import $ from "jquery";
import boardAddModal from "./boardAddModal";
import LoadingOverlay from "react-loading-overlay";
//import NewDrag from "./newDrag";


export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: "",
      display: "none",
      tasklist:[],
      task_id:"",
      img_url:"http://trutask.easytodb.com/uploads/project_photo/",
      pro_id:this.props.match.params.id,
      isloading:false,
      errMsg: "",
      status: false,
      title: "",
      quote: "",
      page_name: "board",
    };
  }
  ismarkedDuplicate = (status) => {
    if (status == true) {
      this.setState({
        type: "success",
        status: true,
        errMsg: "marked as duplicate",
        modalShow: "",
        display: "none",
      });
      this.getTaskList(this.state.pro_id);
    } else {
      this.setState({
        type: "error",
        status: true,
        errMsg: "something went wrong",
      });
    }
  };
  ismarkedcompleted = (status) => {
    if (status == true) {
      this.setState({
        type: "success",
        status: true,
        errMsg: "task marked completed successfully",
        modalShow: "",
        display: "none",
      });
      this.getTaskList(this.state.pro_id);
    } else {
      this.setState({
        type: "error",
        status: true,
        errMsg: "something went wrong",
      });
    }
  };
  isTaskId = (tid) => {
    if (tid != "") {
      this.setState({
        task_id:tid,
        pro_id:this.state.pro_id
      });
      console.log(this.state.task_id);
      console.log(this.state.pro_id);
      
    }
  }
  isSubTask = (status,tid) =>
  {
    if(status==false&&tid!="")
    {
     
      this.setState({
        modalShow: "",
        display: "none",
      
      });
      window.location.href="/subtask-list"+tid;
      
    }
  }
    isTaskDeleted = (status) =>
    {
      if(status==true)
      {
        this.setState({
          type: "success",
          status: true,
          errMsg: "task Deleted successfully",
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
  
  isModalOpen = (status,id) => {
    if (status === true) {
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
        task_id:""
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
  let result = await HttpClient.requestData("get-taskt", "POST", data);
  console.log(result);
  if (result && result.status) 
    {
      setTimeout(() => {
      this.state.tasklist=result.column;
    }, 3000);
      setTimeout(() => {
     this.setState({
       tasklist:this.state.tasklist,
       isloading:false,

     });
        }, 3000);
        setTimeout(() => {
     console.log(this.state.tasklist);
    }, 3000);
    }
    else{
      this.setState({
       
        isloading:false,
 
      });
    }
    
 }
  
  render() {
    return (
     
      // <LoadingOverlay
      //       active={this.state.isloading}
      //       spinner
      //       text="Loading..."
      //       >
      <div className="container-fluid">
        <ReactJsAlert
          type={this.state.type} // success, warning, error, info
          title={this.state.errMsg} // title you want to display
          status={this.state.status} // true or false
          Close={() => this.setState({ status: false })}
        />
         
        {/* start page title */}
        <div className="row">
          
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Trutask</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Projects</a>
                  </li>
                  <li className="breadcrumb-item active">Board</li>
                </ol>
               
              </div>
              <h4 className="page-title">
               All Tasks
                <button
                  onClick={() => {
                    this.setState({ 
                    pro_id:this.state.pro_id,
                    task_id:""
                  });

                  console.log(this.state.pro_id);
                  }}
                  data-toggle="modal"
                  data-target="#add-new-task-modal"
                  className="btn btn-success btn-sm ml-3"
                 
                >
                  
                  
                  Add New
                </button>
              </h4>
            </div>
          </div>
        </div>
        {/* end page title */}
        {/* {this.state.tasklist.length > 0 ? (
          <NewDrag column={this.state.tasklist} />
        ) : null} */}
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 col-xl-8">
            <div className="board" id="board"
            >
            
              { this.state.tasklist.length>0 && this.state.tasklist.map((item, index) => {
                console.log("good",item);
                console.log(this.state.tasklist);
                
              //   {objects.map(function(object, i){
              //     return <ObjectRow obj={object} key={i} />;
              // })}
              if(item.cards.length>0)
              {
                    return (
              <div
              key={index}
                className="tasks"
                data-plugin="dragula"
               // data-containers='["task-list-one", "task-list-two", "task-list-three", "task-list-four"]'
               
               >
    
                
                    <h5 className="mt-0 task-header">{item.cards[0]?item.cards[0].status:null}({item.cards.length})</h5>
                  
                
                 
                    {item.cards.map((it, ind) => {
                      //console.log(key);
                     //if(key== 'cards')
                     //{
                     //  key[2].map((it, ind) => {
                       
                    return (
                  <div id="task-list-one" className="task-list-items" key={ind} >
                  {/* Task Item */}
                  <TaskList onModalOpen={this.isModalOpen}
                  task_title={it.task_title}
                  asigned_on={it.last_update_date}
                  asigned_to={it.member}
                  description={it.task_description}
                  priority={it.project_priority?it.project_priority:"No priority"}
                  task={it.task_id}
                  isTaskId={this.isTaskId}
                  isTaskDeleted={this.isTaskDeleted}
                  isSubTask={this.isSubTask}

                  //image={it.member.length>0?this.state.img_url+it.member[0].image:""}
                  image={it.image!=null?it.image:""}

                   />
                  {/* <TaskList onModalOpen={this.isModalOpen} />
                  <TaskList onModalOpen={this.isModalOpen} /> */}
                  </div>
                  );
                
               // })
               // }
              })}  
                {/* end company-list-1*/}
              </div>
                  );
            }
            
                  })}
              {/* <div className="tasks">
                <h5 className="mt-0 task-header text-uppercase">
                  In Progress (2)
                </h5>
                <div id="task-list-two" className="task-list-items">
                  <TaskList onModalOpen={this.isModalOpen} />
                  <TaskList onModalOpen={this.isModalOpen} />
                  <TaskList onModalOpen={this.isModalOpen} />
                </div> */}
                {/* end company-list-2*/}
                 {/* </div>
                <div className="tasks">
                <h5 className="mt-0 task-header text-uppercase">Review (4)</h5>
                <div id="task-list-three" className="task-list-items">
                  <TaskList onModalOpen={this.isModalOpen} />
                  <TaskList onModalOpen={this.isModalOpen} />
                </div> */}
                {/* end company-list-3*/}
                 {/* </div>
                 <div className="tasks">
                <h5 className="mt-0 task-header text-uppercase">Done (1)</h5>
                <div id="task-list-four" className="task-list-items">
                  <TaskList onModalOpen={this.isModalOpen} />
                  <TaskList onModalOpen={this.isModalOpen} />
                </div> */}
                {/* end company-list-4*/}
              {/* </div> */}
            </div>
          </div>
          {/* task details */}
          <div
            // className="modal fade task-modal-content"
            className={"TaskDetailsModal modal fade " + this.state.modalShow}
            style={{ display: this.state.display }}
            id="TaskDetailsModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="TaskDetailsModalLabel"
            aria-hidden="true"
          >
            {" "}
            <BoardTaskDetails
              onModalClose={this.isModalOpen}
              task={this.state.task_id}
              project={this.props.match.params.id}
              isTaskDeletedfromView={this.isTaskDeletedfromView}
              ismarkedcompleted={this.ismarkedcompleted}
              ismarkedDuplicate={this.ismarkedDuplicate}
              page_name={this.state.page_name}
            />
          </div>
         
        </div>
        <BoardAddModal
          true_task_id={this.state.task_id}
          true_project_id={this.props.match.params.id}
        />
        
      </div>
      // </LoadingOverlay>
     
    );
  }
}