import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Breadcomb from "../../components/breadcomb";
import HttpClient from "./../../../utils/HttpClient";
import { reactLocalStorage } from "reactjs-localstorage";
import ReactJsAlert from "reactjs-alert";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project:[],
      ongoing_project:[],
      finished_project:[],
      current_page:"all",
      type: "error",
      status: false,
      title: "",
      userData: {},
      userId: "",
      member:[],
      img_url: "http://trutask.easytodb.com/uploads/project_photo/",
      
    }
  }
 async componentDidMount()
  {
    await this.getUserdata();
  }

  getUserdata = async () => {
    let data = reactLocalStorage.getObject("user_data");
    console.log('user_data',data);
    if (data && Object.keys(data).length !== 0) {
      await this.setState({ isLogin: true, userData: data, userId: data.id });
      this.getMyprojectList(data.id);
      // this.getOngoingProjects(data.id);
      // this.getFinishedProject(data.id);
    } else {
      this.setState({ isLogin: false });
    }
  };

  //fetch list
  async getMyprojectList(uid)
  {
    this.setState({current_page:"all"});
    console.log(this.state.current_page);
    let user_id=reactLocalStorage.getObject('user_id');
    let data = {
      user_id: uid
    };
    console.log("request fetch from api", data);
    let request = await HttpClient.requestData("projectdata", "POST", data);
    console.log("request fetch from api", request);
    if (request && request.data && request.status) {
     
      this.setState({
       project: request.data,
       current_page:"all",
       member:request.data.member
      });
      console.log(" data", request.data);
    } else {
      console.log("request error", request);
    }
  }
//to get ongoing projects
  async getOngoingProjects(uid)
  {
    
    let user_id=reactLocalStorage.getObject('user_id');
    let data = {
      user_id: uid
    };
    let request = await HttpClient.requestData("projectdata", "POST", data);
    console.log("request fetch from api", request);
    if (request && request.data && request.status) {
      let ongoing=[];
      ongoing=request.data.filter((item)=>item.completed_status=="N");
      console.log("ongoing",ongoing);
      this.setState({
       project:ongoing,
       current_page:"ongoing",
      });
      setTimeout(
        () => {
          console.log("onon",this.state.project);
        }, 
        3000
      );
      
    } 
    //else {
    //   console.log("request error", request);
    // }
  }
  //finished project
  async getFinishedProject(uid)
  {

    let user_id=reactLocalStorage.getObject('user_id');
    let data = {
      user_id: uid
    };
    console.log(data);
    let request = await HttpClient.requestData("projectdata", "POST", data);
    console.log("request fetch from api", request);
    if (request && request.data && request.status) {
    let finished=[];
    finished=request.data.filter((item)=>item.completed_status=="Y");
    console.log("finiished",finished);
    this.setState({
     project:finished,
     current_page:"finished",
    });
    setTimeout(
      () => {
        console.log("finished",this.state.project);
      }, 
      3000
    );
    } 
  }
    //delete
    async deletee(pro_id) {
      //console.log(item);
      // console.log("data", data);
      let user_id=reactLocalStorage.getObject('user_id');
      let d ={
        user_id:this.state.userId,
         project_id:pro_id
      };
      console.log("d",d);
      let result = await HttpClient.requestData(
        "delete-program",
        "POST",d
      );
      // console.log("result", result);
      if (result && result.status) {
        this.setState({
          type: "success",
          status: true,
          title: "Deleted successfully.",
         
        });
       // this.getMyprojectList();
      //   let data = result.data;
      if(this.state.current_page=="all")
      {
        this.getMyprojectList(this.state.userId);
      }
      else if(this.state.current_page=="ongoing")
      {
        console.log("ongo");
        this.getOngoingProjects(this.state.userId);
      }
      else{
        console.log("finish");
         this.getFinishedProject(this.state.userId);
      }
      }
    }
  

    render() {
        return (
          <div className="container-fluid">
             <ReactJsAlert
          type={this.state.type} // success, warning, error, info
          title={this.state.title} // title you want to display
          status={this.state.status} // true or false
          Close={() => this.setState({ status: false })}
        />
            <Breadcomb pageTitle="All Projects" leadTitle="Project" />

            <div className="row mb-2"
            >
              <div className="col-sm-4"
           
              >
                {/* <Link
                to="/project-wizard"
                  className="btn btn-danger btn-rounded mb-3"
                >
                  <i className="mdi mdi-plus" /> Create Project
                  </Link> */}
              </div>

              <div className="col-sm-8">
                <div className="text-sm-right">
                  {this.state.current_page=="all"?(
                  <div className="btn-group mb-3">
                    <button type="button" className="btn btn-primary" onClick={()=>this.getMyprojectList(this.state.userId)}>
                      All
                    </button>
                  </div>):( <div className="btn-group mb-3">
                    <button type="button" className="btn btn-light" onClick={()=>this.getMyprojectList(this.state.userId)}>
                      All
                    </button>
                  </div>)}
                  <div className="btn-group mb-3 ml-1">
                    {this.state.current_page=="ongoing"?
                    (<button type="button" className="btn btn-primary" onClick={()=>this.getOngoingProjects(this.state.userId)}>
                      Ongoing
                    </button>):
                    (<button type="button" className="btn btn-light" onClick={()=>this.getOngoingProjects(this.state.userId)}>
                    Ongoing
                  </button>)}
                  {this.state.current_page=="finished"?
                  (
                    <button type="button" className="btn btn-primary" onClick={()=>this.getFinishedProject(this.state.userId)}>
                      Finished
                    </button>):
                    (<button type="button" className="btn btn-light" onClick={()=>this.getFinishedProject(this.state.userId)}>
                    Finished
                  </button>)}
                  </div>
                  <div className="btn-group mb-3 ml-2 d-none d-sm-inline-block">
                    <button type="button" className="btn btn-secondary">
                      <i className="dripicons-view-apps" />
                    </button>
                  </div>
                  <div className="btn-group mb-3 d-none d-sm-inline-block">
                    <button type="button" className="btn btn-link text-muted">
                      <i className="dripicons-checklist" />
                    </button>
                  </div>
                </div>
              </div>
              {/* end col*/}
            </div>
            {/* end row*/}

                 {/* map */}

       {this.state.project.length>0?(
            <div className="row">
              
             {this.state.project.map((item, index) =>{
             
              return(
                
              <div className="col-md-6 col-xl-3">
                {/* project card */}
                <div className="card d-block">
                  <div className="card-body">
                    {/* <div className="dropdown card-widgets">
                      <a
                        href="#"
                        className="dropdown-toggle arrow-none"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="dripicons-dots-3" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right"  key={index}> */}
                        {/* item*/}
                        {/* <Link className="dropdown-item"
                           to={{
                          pathname: "/project-wizardd"+item.auto_id,
           
                          }}
                          
                        >
                          <i className="mdi mdi-pencil mr-1" />
                          Edit
                        </Link>
                        
                        <Link className="dropdown-item"
                        to={{
                      pathname: "/board"+item.auto_id,
           
                          }}
                          
                        >
                          <i className="mdi mdi-pencil mr-1" />
                         Task List
                        </Link> */}

                        {/* item*/}
                        {/* <a href="javascript:void(0);" className="dropdown-item"
                         onClick={() => {
                          this.deletee(item.auto_id);
                             }}
                        >
                          <i className="mdi mdi-delete mr-1" />
                          Delete
                        </a> */}
                        {/* item*/}
                        {/* <a href="javascript:void(0);" className="dropdown-item"  
                       >
                          <i className="mdi mdi-email-outline mr-1" />
                          Invite
                        </a> */}
                        {/* item*/}
                        {/* <a href="javascript:void(0);" className="dropdown-item">
                          <i className="mdi mdi-exit-to-app mr-1" />
                          Leave
                        </a>
                      </div>
                    </div> */}
                    {/* project title*/}
                    <h4 className="mt-0">
                    <Link  className="text-title"
                        to={{
                      pathname: "/my-task"+item.auto_id,
           
                          }}
                      >
                       {item.name}
                      </Link>
                    </h4>
                    {item.completed_status=="N"? 
                    (<div className="badge badge-danger mb-3">Ongoing</div>):
                    (<div className="badge badge-success mb-3">Finished</div>)
                    }
                    <p className="text-muted font-13 mb-3">
                     {item.overviews}
                      {/* <a
                        href="javascript:void(0);"
                        className="font-weight-bold text-muted"
                      >
                        view more
                      </a> */}
                    </p>
                    {/* project detail*/}
                    <p className="mb-1">
                      <span className="pr-2 text-nowrap mb-2 d-inline-block">
                        <i className="mdi mdi-format-list-bulleted-type text-muted" />
                        <b>{item.taskcount}</b> Task
                      </span>
                      <span className="text-nowrap mb-2 d-inline-block">
                        <i className="mdi mdi-comment-multiple-outline text-muted" />
                        <b>{item.comment_Count}</b> Comment
                      </span>
                      {/* {item.member.length==0||item.member.length==1?
                      (
                      <span className="text-nowrap mb-2 d-inline-block">
                        <i className="mdi mdi-comment-multiple-outline text-muted" />
                    <b>{item.member.length}</b>Team member
                      </span>):(
                        <span className="text-nowrap mb-2 d-inline-block">
                        <i className="mdi mdi-comment-multiple-outline text-muted" />
                    <b>{item.member.length}</b>Team members
                      </span>
                      )} */}
                    </p>
                    {item.member?( 
                    <div>
                      
                      {item.member.map((it,index)=>
                      {
                        return(
                      <a
                        href="javascript:void(0);"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Mat Helme"
                        className="d-inline-block"
                      >
                        <img
                          src={this.state.img_url+it.image}
                          className="rounded-circle avatar-xs"
                          alt="friend"
                        />
                      </a>
                      
                            );
                         } )}
                         
                      {item.count_members>3?
                      (<a
                        href="javascript:void(0);"
                        className="d-inline-block text-muted font-weight-bold ml-2"
                      >
                        +{item.team_members-3}<Link>more</Link>
                      </a>):null}
                  </div>
                  ):null}
                  </div>{" "}
                  {/* end card-body*/}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item p-3">
                      {/* project progress*/}
                      <p className="mb-2 font-weight-bold">
                        Progress <span className="float-right">100%</span>
                      </p>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "100%" }}
                        ></div>
                        {/* /.progress-bar */}
                      </div>
                      {/* /.progress */}
                    </li>
                  </ul>
                </div>{" "}
                {/* end card*/}
              </div>
              );
              })}
            

                          </div>
       ):(<div><h3>NO PROJECT FOUND!</h3></div>)}
            {/* end row*/}
                      </div>
        );
    }
}