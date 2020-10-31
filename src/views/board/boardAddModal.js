import React, { Component } from 'react';
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TagsInput from "../components/TagsInput";
import AddSubTask from "./addSubTask";
import ReactJsAlert from "reactjs-alert";
import { reactLocalStorage } from "reactjs-localstorage";
import HttpClient from "../../utils/HttpClient";

const asignOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export default class boardAddModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
     // startDate: new Date(),
      //endDate: new Date(),
      startDate:"",
      endDate:"",
      tags: [],
      userId:"",
      isLogin:false,
      projectoption:[],
      projectlist:[],
      member:[],
      memberoption:[],
      filtered_arr:[],
      selectedproject:[],
      statusoption:[],
      selectedstatus:[],
      statusstring:"",
      selectedmember:[],
      obj1:{},
      obj2:{},
      obj3:{},
      selectedFiles:[],
      firstFile:"",
      tasktitle:"",
      description:"",
      auto_id:"",
      errMsg: "",
      status: false,
      title: "",
      quote: "",
      effort:"",
      proj_id:"",
      task_id:"",
      task_data:[],
      tagsoption:[],
       image_url:
        "http://trutask.easytodb.com/uploads/task/",
        priority:"",
        priorityoption:[],
        selectedpriority:[],
        obj4:{}

      
    };
  }

  componentDidMount() {
    this.getUserdata();
   
    console.log('bal',this.props.true_task_id);
   console.log('bal',this.props.true_project_id);

    console.log("ac", this.state.formId);
  }
  
  componentWillReceiveProps(nextProps)
  {
    if(nextProps.true_task_id!=""&&nextProps.true_project_id!="")
    {
    this.setState({
     // proj_id:nextProps.true_project_id,
      task_id:nextProps.true_task_id
    });
    console.log(nextProps.true_project_id);
    console.log(nextProps.true_task_id);
    setTimeout(() => {
    console.log(this.state.task_id);
  }, 3000);
     this.getTaskList();
    }
    else if(nextProps.true_task_id==""&&nextProps.true_project_id!="")
    {
      this.setState({
        tasktitle:"",
        selectedmember:{},
       selectedstatus:[],
       selectedpriority:[],
        tags:[],
        description:"",
        startDate:"",
        endDate:"",
        effort:"",
       selectedFiles:[],
       task_id:"",
       obj1:{},
      obj2:{},
      obj3:{},
      obj4:{},
      statusstring:"",
      priority:"",
      assignedOn:""
      

      });
    }
  }
  getTaskList = async () =>
 {
  let data = {
   project_id:this.props.true_project_id,
  };
  console.log(data);
  let result = await HttpClient.requestData("get-task", "POST", data);
  console.log(result);
  if (result && result.status) 
    {
   let cur_data=[];
   let res=result.data;
   console.log("task_id",this.state.task_id);
   console.log(result.data);
   result.data.map((item, index) => {
      let tr = item.filter(it=>it.task_id == this.state.task_id);
      if(tr.length>0)
      {
        cur_data.push(tr[0]);
      }
     
    }
    
   )
   console.log(cur_data);
   if(cur_data.length>0)
   {
   let image=cur_data[0].attachment?cur_data[0].attachment:"";
   //let preview=this.state.image_url+image;
   let estimate=cur_data[0].effort_estimate?cur_data[0].effort_estimate:"";
   let est=estimate.replace(' days','');
   let est1=est.trim();
   console.log(est1);
   this.setState({
    task_data:cur_data,
    tasktitle:cur_data[0].task_title,
   assignedOn:cur_data[0].assigned_on,
   description:cur_data[0].task_description,
   startDate:cur_data[0].planned_start_date,
   endDate:cur_data[0].planned_end_date,
    effort:est1,
    selectedFiles:image!=""?[
      {
        preview:this.state.image_url+image,
      },
    ]:[],
  
  });
     let mem=cur_data[0].assigned_to?cur_data[0].assigned_to:"";
      let status=cur_data[0].status?cur_data[0].status:"";
      let priority=cur_data[0].project_priority?cur_data[0].project_priority:"";
      let tags=cur_data[0].tags?cur_data[0].tags:"";
     if(mem!="")
     {
     this.toconvertMember(mem);
     }
     if(status!="")
     {
    this.toconvertstatus(status);
     }
     if(priority!="")
     {
    this.toconvertpriority(priority);
     }
     if(tags!="")
     {
    this.toconverttags(tags);
     }
    }
    
    
  console.log(this.state.tasktitle);
  
   console.log("cur_data",cur_data);
 
    }
    
 }
 
  
 getUserdata = async () => {
    let data = reactLocalStorage.getObject("user_data");
    if (data && Object.keys(data).length !== 0) {
      this.setState({ isLogin: true, 
        userData: data,
         userId: data.id });
     this.projectData(data.id);
    }
  };

 projectData = async (userId) =>
 {
  let data = {
    user_id: userId,
  };
  let result = await HttpClient.requestData("projectdata", "POST", data);
  console.log(result);
  if (result && result.status) 
    {
     this.setState({
       projectlist:result.data,

     })
     //this.loadprojectOption();
     this.loadmemberOption();
     this.loadtagsOption();
     this.loadpriorityOption();
    
    }
    
 }
 loadpriorityOption = async () =>
 {
   let cur_data=[];
   console.log('bal', this.props.true_project_id);
   cur_data=this.state.projectlist.filter(
     
    (item) => item.auto_id == this.props.true_project_id
    );
    console.log(cur_data);
    let temp=[];
    let temp1=[];
    temp1=cur_data[0].setting.length>0?cur_data[0].setting[0].task_priority.split(','):null;
    if(temp1!=null)
    temp1.forEach((element) => {
      let dom ={ label:element,value:element };
      temp.push(dom);
         });
         this.setState({
          
         priorityoption:temp,
         });
         
 }


 loadtagsOption = async () =>
 {
   let cur_data=[];
   console.log('bal', this.props.true_project_id);
   cur_data=this.state.projectlist.filter(
     
    (item) => item.auto_id == this.props.true_project_id
    );
    console.log(cur_data);
    let temp=[];
    let temp1=[];
    temp1=cur_data[0].setting.length>0?cur_data[0].setting[0].task_tags.split(','):null;
    if(temp1!=null)
    temp1.forEach((element) => {
      let dom ={ label:element,value:element };
      temp.push(dom);
         });
         this.setState({
          
          tagsoption:temp,
         });
         
 }

 loadmemberOption = async () =>
 {
   let cur_data=[];
   console.log('bal', this.props.true_project_id);
   cur_data=this.state.projectlist.filter(
     
    (item) => item.auto_id == this.props.true_project_id
    );
    console.log(cur_data);
    let temp=[];
    cur_data[0].staff_get.forEach((element) => {
      let fullname=element.first_name+" "+element.last_name;
       let dom ={ label:fullname,value:element.email_id };
      temp.push(dom);
         });
         this.setState({
          
          memberoption:temp,
         });
         this.getStatus(this.props.true_project_id);
 }


 loadprojectOption =async () =>
 {
  let data_cat = [];
   this.state.projectlist.forEach(element => {
      let dom = { label:element.name,value:element.auto_id };
      data_cat.push(dom);
    });
    this.setState({
    projectoption:data_cat

    });
    console.log("seleted team",this.state.projectoption);
 }

//to select the project
 handelselectedProject =  async (selectedproject)=>
 {
   console.log(selectedproject);
   let cur_data=[];
   let temp=[];
  cur_data = this.state.projectlist.filter(
         (item) => item.auto_id == selectedproject.value
       );
       console.log(cur_data);
      
       this.setState({
        member: cur_data[0].staff_get,
         selectedproject:selectedproject,
         auto_id:selectedproject.value
       });
     
        console.log( cur_data[0].staff_get);
     
       
       //to load the project member dropdown
       cur_data[0].staff_get.forEach((element) => {
      let fullname=element.first_name+" "+element.last_name;
       let dom ={ label:fullname,value:element.email_id };
      temp.push(dom);
         });
         
         //to convert to stringify
         let arr=[];
         let obj={};
         arr.push(selectedproject);
         for(let i=0;i<arr.length;i++)
         {
           obj[i]=arr[i].value;
         }
         console.log(obj);
         this.setState({
          
           memberoption:temp,
           obj1:obj,
           });
           console.log(this.state.memberoption);
           
       
 }

 toconvertMember =async (str) =>
 {
   let arr=[];
   let temp=[];
   let arr2=[];
   let temp2=[];
   arr=this.state.projectlist.filter(
    (item) => item.auto_id == this.props.true_project_id
  );
 arr2=arr[0].staff_get.filter(
    (item) => item.email_id == str
  );
  arr2.forEach(element => {
    let fullname=element.first_name+" "+element.last_name;
    let dom = { label:fullname,value:element.email_id };
    temp.push(dom);
  });
temp2=str.split(',');
let data={};
for(let i=0;i<temp2.length;i++)
{
  data[i]=temp2[i];
}   
this.state.obj2=data;
       this.setState({
         selectedmember:temp,
         obj2:this.state.obj2
       });
       console.log(this.state.obj2);

 }
 toconvertstatus = async (str) =>
 {
   let arr=[];
   let temp=[];
   arr=str.split(',');
   arr.forEach(element => {
    let dom = { label:element,value:element };
    temp.push(dom);
  });
  this.setState({
    statusstring:str,
    selectedstatus:temp
  });

 }
 toconvertpriority = async (str) =>
 {
   let arr=[];
   let temp=[];
   arr=str.split(',');
   arr.forEach(element => {
    let dom = { label:element,value:element };
    temp.push(dom);
  });
  this.setState({
   priority:str,
    selectedpriority:temp
  });

 }
 toconverttags = async (str)=>
 {
  let arr=[];
  let temp=[];
  arr=str.split(',');
  arr.forEach(element => {
    let dom = { label:element,value:element };
    temp.push(dom);
  });
  this.setState({
    tags:temp
  });

 }
 //to select the member

 handelselectedMember= async (selectedmember)=>
 {
   
         //to convert to stringify
         let arr=[];
         let obj={};
         arr.push(selectedmember);
         console.log(arr);
         for(let i=0;i<arr.length;i++)
         {
           obj[i]=arr[i].value;
         }
         console.log(obj);
         this.setState({
          selectedmember:selectedmember,
           obj2:obj,
           });
       
 }

 handelselectedPriority= async (selectedpriority)=>
 {
   
         //to convert to stringify
         let arr=[];
         let obj={};
         arr.push(selectedpriority);
         console.log(arr);
         for(let i=0;i<arr.length;i++)
         {
           obj[i]=arr[i].value;
         }
         console.log(obj);
         this.state.obj4=obj;
         this.setState({
         selectedpriority:selectedpriority,
         priority:selectedpriority.value,
           obj4:this.state.obj,
           });
          console.log(this.state.obj4);
          console.log(this.state.priority);
       
 }

  
  
  //get status      
 getStatus= async (id) => {
  
   let data_cat=[];
   let data={
     project_id:id
   }
   let result = await HttpClient.requestData("get-status", "POST",data);
   console.log(result);
   if (result && result.data ) {
    let str=result.data.task_status;
    let arr=str.split(',');
    arr.forEach(element => {
      let dom = { label:element,value:element };
      data_cat.push(dom);
    });
    this.setState({
      statusoption:data_cat
    });
     
   }
 };

 handelselectedStatus = async (selectedstatus) =>
 {
      this.setState({
        selectedstatus:selectedstatus,
        statusstring:selectedstatus.value,

      })
 }

  handleTagsChange = async (selectedtag) => {
    
    //   console.log(tag);
  
    // this.setState({ tags: tag });
    this.setState({
      tags:selectedtag
    });
   }

   //to convert the tags array into object
   converttoObject= async (arr) =>
   {
      let data={};
      for(let i=0;i<arr.length;i++)
      {
        data[i]=arr[i].value;
      }
      console.log(data);
  
      this.state.obj3=data;
      this.setState({
        obj3:this.state.obj3
      });
      console.log(this.state.obj3);
   }
   governanceImage = async (event) =>
  {
    let data = [];
    let file = {
      preview: URL.createObjectURL(event.target.files[0]),
    };
    this.setState({
      firstFile: event.target.files[0],
      selectedFiles: [
        {
          preview: URL.createObjectURL(event.target.files[0]),
        },
      ],
    });
    console.log("selected files", this.state.selectedFiles);
      setTimeout(() => {
    console.log("selected files", this.state.firstFile);
    }, 3000);
  }
  validation = (async) => {
    
        if (this.state.tasktitle== "") {
          this.setState({ errMsg: "Please Enter task title" });
          return false;
        } else {
          if (this.state.selectedmember.length==0) {
            this.setState({ errMsg: "Please select member" });
            return false;
          } else {
            
            if (this.state.statusstring == "") {
              this.setState({ errMsg: "Please select status" });
              return false;
            } else {
          //     if (this.state.tags.length==0) {
          //       this.setState({ errMsg: "Please Enter tags" });
          //       return false;
          //     } else {
          //       if (this.state.description== "") {
          //         this.setState({ errMsg: "Please enter description" });
          //         return false;
          //       } else {
          //     if (this.state.startDate=="") {
          //       this.setState({ errMsg: "Please Enter startdate" });
          //       return false;
          //     } else {
          //       if (this.state.endDate=="") {
          //         this.setState({ errMsg: "Please Enter enddate" });
          //         return false;
          //       } else {
          //     if (this.state.effort=="") {
          //       this.setState({ errMsg: "Please Enter effort estimate" });
          //       return false;
          //     } else {
          //       if (this.state.firstFile == "") {
          //           this.setState({ errMsg: "Please Select image" });
          //           return false;
          //         } else {
                    return true;
                 }
                
          }
           }
      //         }
      //       }
      //     }
      //     }
      //   }
      // }
    }


  createTask = async () =>
  {
    let validation = this.validation();
    console.log(validation);
    if (validation) {
      
      let stringified_obj=JSON.stringify(this.state.obj2);
      //let stringified_tags=JSON.stringify(this.state.tags);
      this.converttoObject(this.state.tags);
      let stringified_obj1=JSON.stringify(this.state.obj3);
      let stringified_obj2=JSON.stringify(this.state.obj4);
      console.log(stringified_obj2);
      let eff=this.state.effort+" "+"days";
      let data = new FormData();
       data.append("linked_project",this.props.true_project_id);
       data.append("addtype","first");
       data.append("project_priority",this.state.priority);
       data.append("task_title", this.state.tasktitle);
      data.append("task_description", this.state.description);
      data.append("assigned_to", stringified_obj);
      data.append("assigned_on", this.state.assignedOn);
      data.append("planned_start_date", this.state.startDate);
      data.append("planned_end_date", this.state.endDate);
      data.append("status", this.state.statusstring);
      data.append("image", this.state.firstFile);
      data.append("effort_estimate",eff);
      data.append("tags",stringified_obj1);
      console.log(data);
      this.setState({
        isloading:true
      })
      let result = await HttpClient.fileUplodeDynamic(
        "add-task",
        "POST",
        data
      );
      if (result && result.status) {
       
       this.setState({
          type: "success",
          status: true,
          errMsg: "task Created successfully",
          proj_id:result.data.linked_project,
         });
        window.location.href="/board"+this.state.proj_id;
      } else {
        this.setState({
         
          type: "error",
          status: true,
          errMsg: "something went wrong"
          
        });
      }
     
    } else {
      this.setState({
        type: "warning",
        status: true,
        quote: "Something went wrong. Please try again!",
      });
    }
  }

  updateTask = async () =>
  {
    let validation = this.validation();
    console.log(validation);
    if (validation) {
      
      let stringified_obj=JSON.stringify(this.state.obj2);
      //let stringified_tags=JSON.stringify(this.state.tags);
      this.converttoObject(this.state.tags);
      let stringified_obj1=JSON.stringify(this.state.obj3);
      let eff=this.state.effort+" "+"days";
      let data = new FormData();
      data.append("linked_project",this.props.true_project_id);
      data.append("project_priority",this.state.priority);
       data.append("task_id",this.state.task_id);
       data.append("task_title", this.state.tasktitle);
      data.append("assigned_to", stringified_obj);
      data.append("assigned_on", this.state.assignedOn);
     data.append("status", this.state.statusstring);
      data.append("image", this.state.firstFile);
      data.append("effort_estimate",eff);
      data.append("tags",stringified_obj1);
      data.append("planned_start_date", this.state.startDate);
      data.append("planned_end_date", this.state.endDate);
      data.append("task_description", this.state.description);
      console.log(data);
     
      let result = await HttpClient.fileUplodeDynamic(
        "edit-task",
        "POST",
        data
      );
      if (result && result.status) {
       
      this.setState({
          type: "success",
          status: true,
          errMsg: "task Edited successfully",
          proj_id:result.data.linked_project,
         });
        window.location.href="/board"+this.state.proj_id;
      } else {
        this.setState({
         
          type: "error",
          status: true,
          errMsg: "something went wrong"
          
        });
      }
     
    } else {
      this.setState({
        type: "warning",
        status: true,
        quote: "Something went wrong. Please try again!",
      });
    }
  }
  render() {
    const { selectedOption } = this.state;
    return (
      <div>
         <ReactJsAlert
          type={this.state.type} // success, warning, error, info
          title={this.state.errMsg} // title you want to display
          status={this.state.status} // true or false
          Close={() => this.setState({ status: false })}
        />
        <div
          className="modal fade add-new-task"
          id="add-new-task-modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="add-new-task-modalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="add-new-task-modalLabel">
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
                <div className="p-2">
                {/* <div className="form-group">
                      <label>Project</label>
                      <Select
                          name="asign"
                          className="basic-single"
                          onChange={this.handelselectedProject}
                          value={this.state.selectedproject}
                          isSearchable={true}
                          options={this.state.projectoption}
                        />
                    </div>
          */}
                  <div className="form-group">
                    <label htmlFor="task-title">Task title</label>
                    <input
                      type="text"
                      className="form-control form-control-light"
                      id="task-title"
                      placeholder="Enter task title"
                      onChange={(val) => {
                        this.setState({
                         tasktitle: val.target.value,
                        });
                      }}
                      value={this.state.tasktitle}
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="asign">Assigned To</label>
                        <Select
                          name="asign"
                          className="basic-single"
                          onChange={this.handelselectedMember}
                          value={this.state.selectedmember}
                          isSearchable={true}
                          options={this.state.memberoption}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="asign">Assigned On</label>
                        <input
                              type="date"
                              className="form-control"
                              // data-provide="datepicker"
                              // data-date-format="d-M-yyyy"
                              // data-date-autoclose="true"
                              onChange={(val) => {
                                this.setState({ assignedOn: val.target.value });
                              }}
                              value={this.state. assignedOn}
                            />
                      </div>
                    </div>
                    
                       
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="asign">Select Status</label>
                        <Select
                          name="asign"
                          className="basic-single"
                          onChange={this.handelselectedStatus}
                          value={this.state.selectedstatus}
                          isSearchable={true}
                          options={this.state.statusoption}
                        />
                      </div>
                    </div>

                    
                    
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="tags">Select Tags</label>
                        <Select
                          name="asign"
                          className="basic-single"
                          onChange={this.handleTagsChange}
                          value={this.state.tags}
                          isSearchable={true}
                          options={this.state.tagsoption}
                          isMulti
                        />
                      </div>
                    </div>

                       
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="tags">Select Priority</label>
                        <Select
                          name="asign"
                          className="basic-single"
                          onChange={this.handelselectedPriority}
                          value={this.state.selectedpriority}
                          isSearchable={true}
                          options={this.state.priorityoption}
                          
                        />
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
                      placeholder="Enter description"
                      onChange={(val) => {
                        this.setState({
                         description: val.target.value,
                        });
                      }}
                      value={this.state.description}
                      
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="startDate">Start Date</label>
                        {/* <DatePicker
                          selected={this.state.startDate}
                          onChange={(date) =>
                            this.setState({ startDate: date })
                          }
                          className="form-control form-control-light"
                        /> */}
                        <input
                              type="date"
                              className="form-control"
                              // data-provide="datepicker"
                              // data-date-format="d-M-yyyy"
                              // data-date-autoclose="true"
                              onChange={(val) => {
                                this.setState({ startDate: val.target.value });
                              }}
                              value={this.state.startDate}
                            />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="endDate">End Date</label>
                        {/* <DatePicker
                          selected={this.state.endDate}
                          onChange={(date) => this.setState({ endDate: date })}
                          className="form-control form-control-light"
                        /> */}
                        <input
                              type="date"
                              className="form-control"
                              // data-provide="datepicker"
                              // data-date-format="d-M-yyyy"
                              // data-date-autoclose="true"
                              onChange={(val) => {
                                this.setState({endDate: val.target.value });
                              }}
                              value={this.state.endDate}
                            />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="task-description">Effort Estimated</label>
                    
                    <input
                              type="number"
                              className="form-control"
                              // data-provide="datepicker"
                              // data-date-format="d-M-yyyy"
                              // data-date-autoclose="true"
                              onChange={(val) => {
                                this.setState({effort: val.target.value});
                              }}
                              value={this.state.effort}
                            />
                  
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="attach">Attachments</label>
                    <form
                      method="post"
                      className="dropzone"
                      id="myAwesomeDropzone"
                      data-plugin="dropzone"
                      data-previews-container="#file-previews"
                      data-upload-preview-template="#uploadPreviewTemplate"
                    >
                      <div className="fallback">
                        <input
                          name="file"
                          type="file"
                          multiple
                          onChange={this.governanceImage}
                        />
                      </div>
                      <div className="dz-message needsclick">
                        <i className="h1 text-muted dripicons-cloud-upload" />
                        <h3>Drop files here or click to upload.</h3>
                        <span className="text-muted font-13">
                          (This is just a demo dropzone. Selected files are
                          <strong>not</strong> actually uploaded.)
                        </span>
                         </div>
                        </form>
                          <div
                            className="dropzone-previews mt-3"
                            id="file-previews"
                             />
                             {/* file preview template */}
                            {this.state.selectedFiles.length > 0 ? (
                             <div className="d-block" id="uploadPreviewTemplate">
                              <div className="card mt-1 mb-0 shadow-none border">
                                <div className="p-2">
                                  <div className="row align-items-center">
                                    {this.state.selectedFiles.map(
                                      (item, index) => {
                                        return (
                                          <div className="col-auto">
                                            <img
                                              data-dz-thumbnail
                                              
                                              src={item.preview}
                                              className="avatar-sm rounded bg-light"
                                              alt="preview"
                                            />
                                            <a
                                              href
                                              className="text-muted close"
                                              data-dz-remove
                                              onClick={() => {
                                                this.setState({
                                                  firstFile: "",
                                                  selectedFiles: [],
                                                });
                                              }}
                                            >
                                              <i className="dripicons-cross" />
                                            </a>
                                          </div>
                                        );
                                      }
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : 
                          <div>
                              <h4>
                                No Attachment Found
                              </h4>
                            </div>
                          }
                  </div>
                  
                  <div className="form-group">
                    <h5 className="mt-4 mb-2 font-16">Create Sub-tasks</h5>
                    {this.state.task_id==""?
                    (<button
                      type="button"
                      className="btn btn-success"
                      
                      onClick={() => 
                        this.setState({
                          type:"warning",
                          status:true,
                           errMsg:"first create a task then add a subtask"
                        })
                       }
                    >
                      Create
                    </button>)
                    :
                    (<button
                      type="button"
                      className="btn btn-success"
                      data-toggle="modal"
                      data-target="#add-sub-task-modal"
                      onClick={() => 
                        {
                          this.setState({
                            task_id:this.state.task_id,
                          });
                       }}
                    >
                      Create
                    </button>)}
                  </div>
                 
                  <div className="text-right">
                    <button
                      type="button"
                      className="btn btn-warning mr-3"
                      data-dismiss="modal"
                      
                      
                    >
                      Cancel
                    </button>
                    {this.state.task_id==""?
                    (
                    <button type="button" className="btn btn-primary"
                      // className="close"
                      
                     onClick={() => 
                        {this.createTask()
                       }}
                      // data-dismiss="modal"
                       
                    >
                      Create
                    </button>)
                    :
                    ( <button type="button" className="btn btn-primary"
                    // className="close"
                    
                   onClick={() => 
                      {this.updateTask()
                     }}
                    // data-dismiss="modal"
                     
                  >
                   Edit
                  </button>)}
                  </div>
                </div>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        <AddSubTask
        main_task_id={this.state.task_id}
        main_project_id={this.props.true_project_id}
         />
      </div>
    );
  }
}
