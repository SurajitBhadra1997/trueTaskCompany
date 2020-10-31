import React, { Component } from 'react';
import HttpClient from "../../utils/HttpClient";
import ReactJsAlert from "reactjs-alert";
import { reactLocalStorage } from "reactjs-localstorage";
export default class boardModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errMsg: "",
      status: false,
      title: "",
      quote: "",
      selectedproject:"",
      tasktitle:"",
      taskpriority:"",
      taskdescription:"",
      taskassign:"",
      taskduedate:"",
      userData:"",
      userId:"",
      isLogin:false,
      projectoption:[
        { id:"0",value:"Select" }
      ],
      projectlist:[],
      member:[],
      memberoption:[
        { id:"100",value:"Select" }
      ],
    };
  }
  componentDidMount() {
    this.getUserdata();
    console.log("ac", this.state.formId);
  }
  
 getUserdata = async () => {
    let data = reactLocalStorage.getObject("user_data");
    if (data && Object.keys(data).length !== 0) {
      this.setState({ isLogin: true, userData: data, userId: data.id });
     this.projectData(data.id);
    }
  };

  projectData = async (userId) => {
    let data = {
      user_id: userId,
    };
    let result = await HttpClient.requestData("projectdata", "POST", data);
    //console.log("result_data", result);
    if (result && result.status && result.data.length>0) {
      this.setState({
        projectlist:result.data
      })
      this.loadprojectOption();
    }
  }

  loadprojectOption = async () =>  {
    let i=1
    this.state.projectlist.forEach((element) => {
      let dom ={ id:i,value: element.name };
       this.state.projectoption.push(dom);
       i++;
         });
         this.setState({
        projectoption:this.state.projectoption,
        });
         console.log(this.state.projectoption);
        }


   handelselectedProject=(val)=>
        {
          let cur_data=[];
          let i=101;
         cur_data = this.state.projectlist.filter(
                (item) => item.name == val.target.value
              );
              console.log(cur_data);
              this.setState({
               member: cur_data[0]?cur_data[0].staff_get:null,
                selectedproject:val.target.value
              });
              //to load the project member dropdown
            this.state.member.forEach((element) => {
              let fullname=element.first_name+" "+element.last_name;
              let dom ={ id:i,value:fullname };
              this.state.memberoption.push(dom);
                });
                this.setState({
                  memberoption:this.state.memberoption,
                  });
              
        }
     
  createTask = async () =>  {
  
    let result = await HttpClient.requestData(
      "delete-file",
      "POST"
    );
    // console.log("result", result);
    if (result && result.status) {
      this.setState({
        type: "success",
        status: true,
        errMsg: "Inserted successfully.",
        
      }); 
    }
    else
    {
      this.setState({
        type: "error",
        status: true,
        errMsg: "something went wrong",
       
      });
  }
  }
    render() {
        return (
          
          <div
            className="modal fade task-modal-content"
            id="add-new-task-modal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="NewTaskModalLabel"
            aria-hidden="true"
          >
             <ReactJsAlert
          type={this.state.type} // success, warning, error, info
          title={this.state.errMsg} // title you want to display
          status={this.state.status} // true or false
          Close={() => this.setState({ status: false })}
        />
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="NewTaskModalLabel">
                    Create New Task
                  </h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <form className="p-2">
                    <div className="form-group">
                      <label>Project</label>
                      <select className="form-control form-control-light"
                       onChange={
                        this.handelselectedProject
                        
                      }
                      value={this.state.selectedproject}>
                       
                          
                        {this.state.projectoption.map(function(data, key){  return (
                               <option key={key} value={data.value}>{data.value} </option> )
                                         })}
        
                      </select>
                    </div>
                    <div className="row">
                      <div className="col-md-8">
                        <div className="form-group">
                          <label htmlFor="task-title">Title</label>
                          <input
                            type="text"
                            className="form-control form-control-light"
                            id="task-title"
                            placeholder="Enter title"
                            onChange={(val) => {
                              this.setState({
                               tasktitle: val.target.value,
                              });
                            }}
                            value={this.state.tasktitle}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="task-priority2">Priority</label>
                          <select
                            className="form-control form-control-light"
                            id="task-priority2"
                            onChange={(val) => {
                              this.setState({
                              taskpriority: val.target.value,
                              });
                            }}
                            value={this.state.taskpriority}
                          >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="task-description">Description</label>
                      <textarea
                        className="form-control form-control-light"
                        id="task-description"
                        rows={3}
                        defaultValue={""}
                        onChange={(val) => {
                          this.setState({
                           taskdescription: val.target.value,
                          });
                        }}
                        value={this.state.taskdescription}
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="task-title">Assign To</label>
                          <select
                            className="form-control form-control-light"
                            id="task-priority"
                            onChange={(val) => {
                              this.setState({
                               taskassign: val.target.value,
                              });
                            }}
                            value={this.state.taskassign}
                          >
                             {this.state.memberoption.map(function(data, key){  return (
                               <option key={key} value={data.value}>{data.value} </option> )
                                         })}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="task-priority">Due Date</label>
                          <input
                            type="text"
                            className="form-control form-control-light"
                            id="birthdatepicker"
                            data-toggle="date-picker"
                            data-single-date-picker="true"
                            onChange={(val) => {
                              this.setState({
                               taskduedate: val.target.value,
                              });
                            }}
                            value={this.state.taskduedate}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        type="button"
                        className="btn btn-light"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="button" className="btn btn-primary"
                      onClick={() => 
                        {this.createTask()
                       }}
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
          </div>
        );
    }
}
