import React, { Component } from "react";
import HttpClient from "../../utils/HttpClient";
import { reactLocalStorage } from "reactjs-localstorage";
import Select from "react-select";
import ReactJsAlert from "reactjs-alert";
import moment from "moment";
import BoardAddModal1 from "./boardAddModal1";
import LoadingOverlay from "react-loading-overlay";
import CreateDuplicate from "./createduplicate";

export default class boardTaskDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task_id: "",
      projectlist: [],
      subtasklist: [],
      tasktitle: "",
      startDate: "",
      endDate: "",
      tags: [],
      tagsoption: [],
      description: "",
      image_url: "http://trutask.easytodb.com/uploads/task/comment/",
      img_url: "http://trutask.easytodb.com/uploads/task/",
      user_url: "http://trutask.easytodb.com/uploads/user/",
      assigned_to: "",
      selectedFiles: [],
      member: "",
      statusoption: [],
      priority: "",
      priorityoption: [],
      selectedpriority: [],
      obj4: {},
      assignedOn: "",
      comment: "",
      allcomments: [],
      type: "error",
      status: false,
      title: "",
      email: "",
      firstFile1: "",
      selectedFiles1: [],
      memberoption: [],
      selectedmember: [],
      user_type: "",
      taggedname: "",
      isloading: true,
      ismarkedcompleted: false,
      tagUserShow: false,
      loop: [],
      checkedboxes: [],
      selecteduserimage:"",
      first_name_intial:"",
      last_name_initial:"",
      user_image:"",
      assigned_to_first_name:"",
      assigned_to_last_name:""
    };
    this.inputOpenFileRef = React.createRef();
  }
  showOpenFileDlg = () => {
    this.inputOpenFileRef.current.click();
  };
  duplicateCreated = async (status) => {
    if (status == true) {
      this.setState({
        type: "success",
        status: true,
        title: "duplicate task created successfully",
        modalShow: "",
        display: "none",
      });
      // this.getTaskList(this.state.pro_id);
      if (this.props.page_name == "board") {
        window.location.href = "/board" + this.props.project;
      } else {
        window.location.href = "/my-task" + this.props.project;
      }
    } else {
      this.setState({
        type: "error",
        status: true,
        title: "something went wrong",
      });
    }
  };
  onClickClose() {
    this.setState({
      ismarkedcompleted: true,
    });
    this.props.onModalClose(false);
  }
  DeleteClicked = async () => {
    let data = {
      task_id: this.state.task_id,
    };
    console.log(data);
    let result = await HttpClient.requestData("delete-task", "POST", data);
    if (result && result.status) {
      this.props.isTaskDeletedfromView(true);
    } else {
      this.props.isTaskDeletedfromView(false);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.task != "" && nextProps.project != "") {
      console.log("ghj");
      this.state.task_id = nextProps.task;
      this.setState({
        task_id: this.state.task_id,
      });
      setTimeout(() => {
        console.log(this.state.task_id);
      }, 3000);
      this.getUserdata();
      this.getTaskList();
      // this.subTaskList();
    }
  }
  getUserdata = async () => {
    let data = reactLocalStorage.getObject("user_data");
    console.log(data);
    if (data && Object.keys(data).length !== 0) {
      this.setState({
        isLogin: true,
        userData: data,
        userId: data.id,
        email: data.email,
        user_type: data.type,
      });
      this.projectData(data.id);
    }
  };

  projectData = async (userId) => {
    let data = {
      user_id: userId,
    };
    let result = await HttpClient.requestData("projectdata", "POST", data);
    console.log(result);
    if (result && result.status) {
      this.setState({
        projectlist: result.data,
      });
      this.loadmemberOption();
      this.loadtagsOption();
      this.loadpriorityOption();
    }
  };
  subTaskList = async () => {
    let data = {
      task_id: this.state.task_id,
    };
    console.log("this.state.task_id", this.state.task_id);

    console.log("data send", data);
    let result = await HttpClient.requestData("single-task", "POST", data);
    console.log(result);
    if (result && result.status) {
      this.setState({
        subtasklist: result.subtask,
      });
      this.fetchComment();
    }
  };

  getTaskList = async () => {
    let data = {
      project_id: this.props.project,
    };
    console.log(data);
    let result = await HttpClient.requestData("get-task", "POST", data);
    console.log(result);
    if (result && result.status) {
      let cur_data = [];
      let res = result.data;
      console.log("task_id", this.state.task_id);
      console.log(result.data);
      result.data.map((item, index) => {
        let tr = item.filter((it) => it.task_id == this.state.task_id);
        if (tr.length > 0) {
          cur_data.push(tr[0]);
        }
      });
      console.log(cur_data);
      if (cur_data.length > 0) {
        let image = cur_data[0].attachment ? cur_data[0].attachment : "";
        let status_done = cur_data[0].status ? cur_data[0].status : "";
        //let preview=this.state.image_url+image;

        this.setState({
          //isloading: false,
          user_image:cur_data[0].image!=null?cur_data[0].image:"",
          assigned_to_first_name:cur_data[0].firstname,
          assigned_to_last_name:cur_data[0].lastname,
          task_data: cur_data,
          task_id: cur_data[0].task_id,
          tasktitle: cur_data[0].task_title,

          description:
            cur_data[0] && cur_data[0].task_description != "null"
              ? cur_data[0].task_description
              : "",
          startDate:
            cur_data[0] && cur_data[0].planned_start_date != "null"
              ? cur_data[0].planned_start_date
              : "no date found",
          endDate:
            cur_data[0] && cur_data[0].planned_end_date != "null"
              ? cur_data[0].planned_end_date
              : "no date found",
          member: cur_data[0].member,
          assignedOn: cur_data[0].assigned_to,
          ismarkedcompleted: status_done == "DONE" ? true : false,
          selectedFiles:
            image != ""
              ? [
                  {
                    preview: this.state.img_url + image,
                  },
                ]
              : [],
        });
        console.log(this.state.ismarkedcompleted);

        // let mem=cur_data[0].assigned_to;
        //  let status=cur_data[0].status;
        //   let priority=cur_data[0].project_priority;
        // let tags=cur_data[0].tags;
        // let mem=cur_data[0].assigned_to?cur_data[0].assigned_to:"";
        let status = cur_data[0].status ? cur_data[0].status : "";
        let priority = cur_data[0].project_priority
          ? cur_data[0].project_priority
          : "";
        let tags = cur_data[0].tags ? cur_data[0].tags : "";

        // this.toconvertMember(mem);
        //  if(mem!="")
        //  {
        //  this.toconvertMember(mem);
        //  }
        if (status != "") {
          this.toconvertstatus(status);
        }
        if (priority != "") {
          this.toconvertpriority(priority);
        }
        if (tags != "") {
          this.toconverttags(tags);
        }
      }
      this.subTaskList();

      console.log(this.state.tasktitle);

      console.log("cur_data", cur_data);
    } else {
      this.setState({
        //isloading:false,
      });
    }
  };
  loadtagsOption = async () => {
    let cur_data = [];
    console.log("bal", this.props.project);
    cur_data = this.state.projectlist.filter(
      (item) => item.auto_id == this.props.project
    );
    console.log(cur_data);
    let temp = [];
    let temp1 = [];
    temp1 = cur_data[0].setting[0].task_tags
      ? cur_data[0].setting[0].task_tags.split(",")
      : null;
    if (temp1 != null)
      temp1.forEach((element) => {
        let dom = { label: element, value: element };
        temp.push(dom);
      });
    this.setState({
      tagsoption: temp,
    });
    this.getStatus(this.props.project);
  };
  loadmemberOption = async () => {
    let cur_data = [];
    console.log("bal", this.props.project);
    cur_data = this.state.projectlist.filter(
      (item) => item.auto_id == this.props.project
    );
    console.log(cur_data);
    let temp = [];
    cur_data[0].staff_get.forEach((element) => {
      let fullname = element.first_name + " " + element.last_name;
      let dom = { label: fullname, value: element.email_id };
      temp.push(dom);
    });
    this.setState({
      memberoption: temp,
      loop: cur_data[0].staff_get,
    });
    console.log(this.state.memberoption);
    console.log(this.state.loop);
    this.getStatus(this.props.main_project_id);
  };

  //get status
  getStatus = async (id) => {
    let data_cat = [];
    let data = {
      project_id: id,
    };
    let result = await HttpClient.requestData("get-status", "POST", data);
    console.log(result);
    if (result && result.data) {
      let str = result.data.task_status;
      let arr = str.split(",");
      arr.forEach((element) => {
        let dom = { label: element, value: element };
        data_cat.push(dom);
      });
      this.setState({
        statusoption: data_cat,
      });
    }
  };
  handelselectedMember = async (selectedmember) => {
    //to convert to stringify
    let arr = [];
    let obj = {};
    arr.push(selectedmember);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      obj[i] = arr[i].value;
    }
    console.log(obj);
    this.setState({
      selectedmember: selectedmember,
      taggedname: selectedmember.label,
      //obj2:obj,
    });
  };

  handelselectedStatus = async (selectedstatus) => {
    this.setState({
      selectedstatus: selectedstatus,
      statusstring: selectedstatus.value,
    });
  };
  loadpriorityOption = async () => {
    let cur_data = [];
    console.log("bal", this.props.project);
    cur_data = this.state.projectlist.filter(
      (item) => item.auto_id == this.props.project
    );
    console.log(cur_data);
    let temp = [];
    let temp1 = [];
    temp1 = cur_data[0].setting[0].task_priority
      ? cur_data[0].setting[0].task_priority.split(",")
      : null;
    if (temp1 != null)
      temp1.forEach((element) => {
        let dom = { label: element, value: element };
        temp.push(dom);
      });
    this.setState({
      priorityoption: temp,
    });
  };
  toconvertstatus = async (str) => {
    let arr = [];
    let temp = [];
    arr = str.split(",");
    arr.forEach((element) => {
      let dom = { label: element, value: element };
      temp.push(dom);
    });
    this.setState({
      statusstring: str,
      selectedstatus: temp,
    });
  };
  toconvertpriority = async (str) => {
    let arr = [];
    let temp = [];
    arr = str.split(",");
    arr.forEach((element) => {
      let dom = { label: element, value: element };
      temp.push(dom);
    });
    this.setState({
      priority: str,
      selectedpriority: temp,
    });
  };
  toconverttags = async (str) => {
    let arr = [];
    let temp = [];
    arr = str.split(",");
    arr.forEach((element) => {
      let dom = { label: element, value: element };
      temp.push(dom);
    });
    this.setState({
      tags: temp,
    });
  };
  commentSubmit = async () => {
    let data = new FormData();
    data.append("email", this.state.email);
    data.append("task_id", this.state.task_id);
    data.append("project_id", this.props.project);
    data.append("task_description", this.state.description);
    data.append("comment", this.state.comment);
    data.append("image", this.state.firstFile1);
    data.append("name", this.state.taggedname);
    data.append("type", this.state.user_type);

    console.log(data);
    // this.setState({
    //   isloading:true,
    // });
    let result = await HttpClient.fileUplodeDynamic(
      "add-comment",
      "POST",
      data
    );
    console.log(result);
    if (result && result.data) {
      this.setState({
        type: "success",
        status: true,
        title: "comment submited successfully",
        comment: "",
        firstFile1: "",
        allcomments: result.data,
        selectedFiles1: [],
        selectedmember: [],
        taggedname: "",
        // isloading:false,
      });
      //this.fetchComment();
    } else {
      // this.setState({
      //   isloading:false,
      // })
    }
  };
  fetchComment = async () => {
    let data = {
      task_id: this.state.task_id,
      project_id: this.props.project,
    };
    console.log(data);
    let result = await HttpClient.requestData("get-comment", "POST", data);
    console.log(result);
    if (result && result.data) {
      let image = result.data.image;
      this.setState({
        isloading: false,
        allcomments: result.data,

        // selectedFiles2:image!=""?[
        //   {
        //     preview:this.state.image_url+image,
        //   },
        // ]:[],
      });
      console.log(this.state.allcomments);
    } else {
      this.setState({
        isloading: false,
      });
    }
  };

  istaskedited = async (status) => {
    if (status == true) {
      this.setState({
        status: true,
        title: "task edited Successfully",
        type: "success",
      });
      // this.getUserdata();
      //this.getTaskList();
      if (this.props.page_name == "board") {
        window.location.href = "/board" + this.props.project;
      } else {
        window.location.href = "/my-task" + this.props.project;
      }
    } else {
      this.setState({
        status: true,
        title: "something went wrong",
        type: "error",
      });
    }
  };
  handlefilePick = async (event) => {
    let data = [];
    let file = {
      preview: URL.createObjectURL(event.target.files[0]),
    };
    this.setState({
      firstFile1: event.target.files[0],
      selectedFiles1: [
        {
          preview: URL.createObjectURL(event.target.files[0]),
        },
      ],
    });
    console.log("selected files", this.state.selectedFiles1);
    setTimeout(() => {
      console.log("selected files", this.state.firstFile1);
    }, 3000);
  };
  // handlemarkedcompleted = async () =>
  // {
  //   this.setState({
  //     ismarkedcompleted:!this.state.ismarkedcompleted
  //   });
  //   console.log(this.state.ismarkedcompleted);
  //  // this.markcompleteApi(this.state.ismarkedcompleted);
  // }
  markcompleteApi = async () => {
    let data = {
      task_id: this.state.task_id,
    };
    let result = await HttpClient.requestData("mark-complete", "POST", data);
    console.log(result);
    if (result && result.status) {
      this.props.ismarkedcompleted(true);
      //.location.href="/board"+this.props.project;
    } else {
      this.props.ismarkedcompleted(false);
    }
  };
  clickDuplicate = async () => {
    let data = {
      task_id: this.state.task_id,
    };
    let result = await HttpClient.requestData("duplicate", "POST", data);
    console.log(result);
    if (result && result.status) {
      this.props.ismarkedDuplicate(true);
      //.location.href="/board"+this.props.project;
    } else {
      this.props.ismarkedDuplicate(false);
    }
  };

  render() {
    return (
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <LoadingOverlay
            active={this.state.isloading}
            spinner
            text="Loading..."
          >
            <div className="modal-body p-0">
              <ReactJsAlert
                type={this.state.type} // success, warning, error, info
                title={this.state.title} // title you want to display
                status={this.state.status} // true or false
                Close={() => this.setState({ status: false })}
              />
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={() => this.onClickClose()}
              >
                ×
              </button>
              <div className="card shadow-none">
                <div className="card-body">
                  <div className="dropdown card-widgets mr-2">
                    <a
                      href="#"
                      className="dropdown-toggle arrow-none"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="uil uil-ellipsis-h" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      {/* item*/}
                      {/* <a href="javascript:void(0);" className="dropdown-item">
                      <i className="uil uil-file-upload mr-1" />
                      Attachment
                    </a> */}
                      {/* item*/}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item"
                        data-toggle="modal"
                        data-target="#add1-new-task-modal"
                        onClick={() => {
                          this.setState({
                            task_id: this.state.task_id,
                          });
                        }}
                      >
                        <i className="uil uil-edit mr-1" />
                        Edit
                      </a>
                      {this.props.page_name != "board" ? (
                        <a
                          href="javascript:void(0);"
                          className="dropdown-item"
                          onClick={() => {
                            window.location.href =
                              "/mytask-subtasklist" + this.state.task_id;
                          }}
                        >
                          <i className="uil uil-edit mr-1" />
                          Subtask List
                        </a>
                      ) : null}
                      {/* item*/}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item"
                        data-toggle="modal"
                        data-target="#duplicate-new-task-modal"
                        onClick={() => {
                          this.setState({
                            task_id: this.state.task_id,
                          });
                        }}
                      >
                        <i className="uil uil-file-copy-alt mr-1" />
                        Mark as Duplicate
                      </a>
                      <div className="dropdown-divider" />
                      {/* item*/}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item text-danger"
                        data-dismiss="modal"
                        onClick={this.DeleteClicked}
                      >
                        <i className="uil uil-trash-alt mr-1" />
                        Delete
                      </a>
                    </div>
                    {/* end dropdown menu*/}
                  </div>
                  {/* end dropdown*/}
                  <div className="custom-control custom-checkbox float-left">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="completedCheck"
                      data-dismiss="modal"
                      checked={this.state.ismarkedcompleted}
                      onChange={(e) => {
                        this.setState({
                          ismarkedcompleted: !this.state.ismarkedcompleted,
                        });
                        console.log(this.state.ismarkedcompleted);
                        //  if( this.state.ismarkedcompleted==false)
                        //  {
                        this.markcompleteApi();
                        //}
                      }}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="completedCheck"
                    >
                      Mark as completed
                    </label>
                  </div>
                  {/* end custom-checkbox*/}
                  <hr className="mt-4 mb-2" />
                  <div className="row">
                    <div className="col">
                      <h4>{this.state.tasktitle}</h4>
                      <div className="row">
                        <div className="col-12">
                          {/* assignee */}
                          <p className="mt-2 mb-1 text-muted">Assigned To</p>
                          <div className="media">
                            {this.state.user_image!=""?
                            (<img
                              src={this.state.image_url+this.state.user_image}
                              alt="Arya S"
                              className="rounded-circle mr-2"
                              height={24}
                            />):
                            <div
                                  style={{
                                    textAlign: "center",
                                    fontSize: 15,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: "bold",
                                    backgroundColor: "black",
                                    height: "24px",
                                    width: "24px",
                                    color: "white",
                                    lineHeight: "24px",
                                  }}
                                  className="rounded-circle avatar-xs mr-2"
                                >
                                  {this.state.assigned_to_first_name
                                    .charAt(0)
                                    .toUpperCase() 
                                    }
                                </div>}
                            
                            <div className="media-body">
                              <h5 className="mt-1 font-14">
                                {this.state.member}
                              </h5>
                            </div>
                          </div>
                          {/* end assignee */}
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                      <div className="row">
                        <div className="col-6">
                          {/* assignee */}
                          <p className="mt-2 mb-1 text-muted">Start Date</p>
                          <div className="media">
                            <i className="uil uil-schedule font-18 text-success mr-1" />
                            <div className="media-body">
                              <h5 className="mt-1 font-14">
                                {this.state.startDate}
                              </h5>
                            </div>
                          </div>
                          {/* end assignee */}
                        </div>
                        {/* end col */}
                        <div className="col-6">
                          {/* start due date */}
                          <p className="mt-2 mb-1 text-muted">End Date</p>
                          <div className="media">
                            <i className="uil uil-schedule font-18 text-success mr-1" />
                            <div className="media-body">
                              <h5 className="mt-1 font-14">
                                {this.state.endDate}
                              </h5>
                            </div>
                          </div>
                          {/* end due date */}
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                      {/* <div className="row">
                      <div className="col-12">
                       
                        <p className="mt-2 mb-1 text-muted">Tags</p>
                       
                        <select
                          className="select2 form-control select2-multiple"
                          data-toggle="select2"
                          multiple="multiple"
                          data-placeholder="Choose ..."
                        >
                          <optgroup label="Alaskan/Hawaiian Time Zone">
                            <option value="AK">Alaska</option>
                            <option value="HI">Hawaii</option>
                          </optgroup>
                          <optgroup label="Pacific Time Zone">
                            <option value="CA">California</option>
                            <option value="NV">Nevada</option>
                            <option value="OR">Oregon</option>
                            <option value="WA">Washington</option>
                          </optgroup>
                          <optgroup label="Mountain Time Zone">
                            <option value="AZ">Arizona</option>
                            <option value="CO">Colorado</option>
                            <option value="ID">Idaho</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NM">New Mexico</option>
                            <option value="ND">North Dakota</option>
                            <option value="UT">Utah</option>
                            <option value="WY">Wyoming</option>
                          </optgroup>
                          <optgroup label="Central Time Zone">
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="IL">Illinois</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="OK">Oklahoma</option>
                            <option value="SD">South Dakota</option>
                            <option value="TX">Texas</option>
                            <option value="TN">Tennessee</option>
                            <option value="WI">Wisconsin</option>
                          </optgroup>
                          <optgroup label="Eastern Time Zone">
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="IN">Indiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="OH">Ohio</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WV">West Virginia</option>
                          </optgroup>
                        </select>
                        
                      </div> */}
                      {/*                       
                    </div> */}
                      {/* end row */}
                      {/* task description */}
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="tags">Add Tags</label>
                          {/* <TagsInput
                        value={this.state.tags}
                        onChange={this.handleTagsChange}
                      /> */}
                          <Select
                            name="asign"
                            className="basic-single"
                            onChange={this.handleTagsChange}
                            value={this.state.tags}
                            isSearchable={true}
                            options={this.state.tagsoption}
                            isMulti
                            isDisabled={true}
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
                            isDisabled={true}
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
                            isDisabled={true}
                          />
                        </div>
                      </div>

                      {/* <div className="row mt-3">
                      <div className="col">
                        <div id="taskDesk">
                          <p>This is a task description with markup support</p>
                          <ul>
                            <li>Select a text to reveal the toolbar.</li>
                            <li>Edit rich document on-the-fly, so elastic!</li>
                          </ul>
                          <p>End of air-mode area</p>
                        </div>
                      </div>
                      {/* end col */}
                      {/* </div> */}
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
                          disabled
                        />
                      </div>
                      {/* end task description */}
                      {/* start sub tasks/checklists */}
                      <h5 className="mt-4 mb-2 font-16">Sub-tasks</h5>
                      {this.state.subtasklist.map((item, index) => {
                        return (
                          <div
                            className="custom-control custom-checkbox mt-1"
                            key={index}
                          >
                            {/* <input
                        type="checkbox"
                        className="custom-control-input"
                        
                      /> */}
                            <label className="form-control form-control-light">
                              {item.task_title}
                            </label>
                          </div>
                        );
                      })}
                      {/* <div className="custom-control custom-checkbox mt-1">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="checklist2"
                      />
                      <label
                        className="custom-control-label strikethrough"
                        htmlFor="checklist2"
                      >
                        Organize meeting sales associates to understand need in
                        detail
                      </label>
                    </div> */}
                      {/* <div className="custom-control custom-checkbox mt-1">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="checklist3"
                      />
                      <label
                        className="custom-control-label strikethrough"
                        htmlFor="checklist3"
                      >
                        Make sure to cover every small details
                      </label>
                    </div> */}
                      {/* end sub tasks/checklists */}
                      {/* start attachments */}
                      <h5 className="mt-4 mb-2 font-16">Attachments</h5>
                      <div className="card mb-2 shadow-none border">
                        <div className="p-1">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              {this.state.selectedFiles.length > 0 ? (
                                <div className="avatar-sm">
                                  {this.state.selectedFiles.map(
                                    (item, index) => {
                                      return (
                                        // <span className="avatar-title rounded">.ZIP</span>
                                        <div className="col-auto">
                                          <img
                                            data-dz-thumbnail
                                            src={item.preview}
                                            className="avatar-sm rounded bg-light"
                                            alt="preview"
                                          />
                                          {/* <a
                                            href="javascript:void(0);"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title="Delete"
                                            className="btn btn-link text-danger btn-lg p-0"
                                            data-dz-remove
                                            onClick={() => {
                                              this.setState({
                                                firstFile: "",
                                                selectedFiles: [],
                                              });
                                            }}
                                          >
                                            <i className="uil uil-multiply" />
                                          </a> */}
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              ) : (
                                <div>
                                  <h4>No Attachment Found</h4>
                                </div>
                              )}
                            </div>
                            {/* <div className="col pl-0">
                            <a
                              href="javascript:void(0);"
                              className="text-muted font-weight-bold"
                            >
                              sales-assets.zip
                            </a>
                            <p className="mb-0">2.3 MB</p>
                          </div> */}
                            <div className="col-auto">
                              {/* Button */}
                              {/* <a
                              href="javascript:void(0);"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Download"
                              className="btn btn-link text-muted btn-lg p-0"
                            >
                              <i className="uil uil-cloud-download" />
                            </a> */}
                              {/* <a
                              href="javascript:void(0);"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Delete"
                              className="btn btn-link text-danger btn-lg p-0"
                              data-dz-remove
                              onClick={() => {
                                this.setState({
                                  firstFile: "",
                                  selectedFiles: [],
                                });
                              }}
                            >
                              <i className="uil uil-multiply" />
                            </a> */}
                              {/* <a
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
                              </a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="card mb-2 shadow-none border">
                      <div className="p-1">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <img
                              src="assets/images/projects/project-1.jpg"
                              className="avatar-sm rounded"
                              alt="file-image"
                            />
                          </div>
                          <div className="col pl-0">
                            <a
                              href="javascript:void(0);"
                              className="text-muted font-weight-bold"
                            >
                              new-contarcts.docx
                            </a>
                            <p className="mb-0">1.25 MB</p>
                          </div>
                          <div className="col-auto">
                           
                            <a
                              href="javascript:void(0);"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Download"
                              className="btn btn-link text-muted btn-lg p-0"
                            >
                              <i className="uil uil-cloud-download" />
                            </a>
                            <a
                              href="javascript:void(0);"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Delete"
                              className="btn btn-link text-danger btn-lg p-0"
                            >
                              <i className="uil uil-multiply" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                      {/* end attachments */}
                      {/* comments */}
                      <div className="row mt-3">
                        <div className="col">
                          <h5 className="mb-2 font-16">Comments</h5>
                          {this.state.allcomments.map((item, index) => {
                            return (
                              <div className="media mt-3 p-1" key={index}>
                                {item.user_image ? (
                                  <img
                                    src={this.state.user_url + item.user_image}
                                    className="mr-2 rounded-circle"
                                    height={36}
                                    width={36}
                                    alt="Arya Stark"
                                  />
                                ) : (
                                  <div
                                    style={{
                                      textAlign: "center",
                                      fontSize: 10,
                                      alignItems: "center",
                                      justifyContent: "center",
                                      fontWeight: "bold",
                                      backgroundColor: "black",
                                      height: "20px",
                                      width: "20px",
                                      fontColor: "white",
                                    }}
                                    className="mr-2 rounded-circle"
                                  >
                                    {item.first_name.charAt(0).toUpperCase() +
                                      item.last_name.charAt(0).toUpperCase()}
                                  </div>
                                )}
                                <div className="media-body">
                                  <h5 className="mt-0 mb-0">
                                    <span className="float-right text-muted font-12">
                                      {moment(item.created_on).format(
                                        "DD-MM-YYYY"
                                      )}
                                    </span>

                                    {item.type == "A" ? (
                                      <font color="blue">
                                        {item.user_first_name +
                                          " " +
                                          item.user_last_name}
                                      </font>
                                    ) : item.type == "N" ? (
                                      item.user_first_name +
                                      " " +
                                      item.user_last_name
                                    ) : null}
                                  </h5>
                                  {item.comment != null && item.name != null ? (
                                    <p className="mt-1 mb-0 text-muted">
                                      {item.comment + " " + "@" + item.name}
                                    </p>
                                  ) : item.comment == null &&
                                    item.name != null ? (
                                    <p className="mt-1 mb-0 text-muted">
                                      {"@" + item.name}
                                    </p>
                                  ) : (
                                    <p className="mt-1 mb-0 text-muted">
                                      {item.comment}
                                    </p>
                                  )}

                                  {item.image != "" ? (
                                    <div className="col-auto">
                                      <img
                                        data-dz-thumbnail
                                        src={this.state.img_url + item.image}
                                        className="avatar-sm rounded bg-light"
                                        alt="preview"
                                      />
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            );
                          })}
                          {/* end comment */}
                          <hr />
                          {/* <div className="media mt-2 p-1">
                          <img
                            src="assets/images/users/avatar-5.jpg"
                            className="mr-2 rounded-circle"
                            height={36}
                            alt="Dominc B"
                          />
                          <div className="media-body">
                            <h5 className="mt-0 mb-0">
                              <span className="float-right text-muted font-12">
                                3:30am
                              </span>
                              Gary Somya
                            </h5>
                            <p className="mt-1 mb-0 text-muted">
                              @Arya FYI..I have created some general guidelines
                              last year.
                            </p>
                          </div>
                        </div>  */}
                          {/* end comment*/}
                          {/* <hr /> */}
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                      <div className="row mt-2">
                        <div className="col">
                          <div className="border rounded">
                            <div className="comment-area-box">
                              <textarea
                                rows={3}
                                className="form-control border-0 resize-none"
                                placeholder="Your comment..."
                                defaultValue={""}
                                onChange={(val) => {
                                  this.setState({
                                    comment: val.target.value,
                                  });
                                }}
                                value={this.state.comment}
                              />
                              <div className="row align-items-center">
                                <div className="col-auto">
                                  {this.state.selectedFiles1.length > 0 ? (
                                    <div className="avatar-sm">
                                      {this.state.selectedFiles1.map(
                                        (item, index) => {
                                          return (
                                            // <span className="avatar-title rounded">.ZIP</span>
                                            <div className="col-auto">
                                              <img
                                                data-dz-thumbnail
                                                src={item.preview}
                                                className="avatar-sm rounded bg-light"
                                                alt="preview"
                                              />
                                              {/* <a
                                href
                                className="text-muted close"
                                data-placement="bottom"
                                data-dz-remove
                                onClick={() => {
                                  this.setState({
                                    firstFile: "",
                                    selectedFiles: [],
                                  });
                                }}
                              >
                                <i className="dripicons-cross" />
                              </a>  */}
                                            </div>
                                          );
                                        }
                                      )}
                                    </div>
                                  ) : null}
                                </div>
                                {/* <div className="col pl-0">
                            <a
                              href="javascript:void(0);"
                              className="text-muted font-weight-bold"
                            >
                              sales-assets.zip
                            </a>
                            <p className="mb-0">2.3 MB</p>
                          </div> */}
                                <div className="col-auto">
                                  {/* Button */}
                                  {/* <a
                              href="javascript:void(0);"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Download"
                              className="btn btn-link text-muted btn-lg p-0"
                            >
                              <i className="uil uil-cloud-download" />
                            </a> */}
                                  {/* <a
                              href="javascript:void(0);"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Delete"
                              className="btn btn-link text-danger btn-lg p-0"
                              data-dz-remove
                              onClick={() => {
                                this.setState({
                                  firstFile: "",
                                  selectedFiles: [],
                                });
                              }}
                            >
                              <i className="uil uil-multiply" />
                            </a> */}
                                  {/* <a
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
                              </a> */}
                                </div>
                              </div>
                              <div className="p-2 bg-light">
                                <div className="d-flex">
                                  <div className="ml-0 mr-auto">
                                    <input
                                      type="file"
                                      ref={this.inputOpenFileRef}
                                      onChange={this.handlefilePick}
                                      //id="fileupload"
                                      //href="#"
                                      className="btn btn-sm px-1 btn-light"
                                      style={{ display: "none" }}
                                    />
                                    <i
                                      className="uil uil-cloud-upload font-24"
                                      // htmlFor="fileupload"
                                      onClick={this.showOpenFileDlg}
                                    />
                                  </div>
                                  <div className="mx-auto w-100">
                                    <input
                                      type="text"
                                      disabled
                                      value={this.state.taggedname}
                                      className="form-control w-100"
                                    />
                                    {/* <Select
                                      name="asign"
                                      className="basic-single"
                                      onChange={this.handelselectedMember}
                                      value={this.state.selectedmember}
                                      isSearchable={true}
                                      options={this.state.memberoption}
                                    /> */}
                                  </div>
                                  <button
                                    type="submit"
                                    className="btn btn-sm btn-success mr-0 ml-auto w-25"
                                    onClick={() => {
                                      this.state.comment != "" ||
                                      this.state.firstFile1 != ""
                                        ? this.commentSubmit()
                                        : this.setState({
                                            selectedmember: [],
                                            taggedname: "",

                                            type: "warning",
                                            status: true,
                                            title:
                                              "please enter the comment first",
                                          });
                                    }}
                                  >
                                    <i className="uil uil-message mr-1" />
                                    Submit
                                  </button>
                                </div>
                                <div className="d-flex flex-wrap mt-2">
                                  {this.state.selecteduserimage==""?
                                  null:
                                  this.state.selecteduserimage=="image"?
                                  
                                  (<div
                                  style={{
                                    textAlign: "center",
                                    fontSize: 15,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: "bold",
                                    backgroundColor: "black",
                                    height: "24px",
                                    width: "24px",
                                    color: "white",
                                    lineHeight: "24px",
                                  }}
                                  className="rounded-circle avatar-xs mr-2"
                                >
                                  {this.state.first_name_intial
                                    .charAt(0)
                                    .toUpperCase() +
                                    this.state.last_name_initial
                                      .charAt(0)
                                      .toUpperCase()}
                                </div>):
                             

                                 ( <p className="d-inline-block mb-0">
                                    
                                    <img
                                      src={this.state.user_url+this.state.selecteduserimage}
                                      className="rounded-circle avatar-xs"
                                      alt="friend"
                                    />
                                  </p>)}
                                  {/* <p className="d-inline-block mb-0">
                                    <img
                                      src="/assets/images/users/avatar-6.jpg"
                                      className="rounded-circle avatar-xs"
                                      alt="friend"
                                    />
                                  </p> */}
                                  <button
                                    className="btn btn-light p-0 rounded-circle avatar-xs d-inline-block mb-0"
                                    type="button"
                                    style={{ lineHeight: "1.5em" }}
                                    onClick={() =>
                                      this.setState({
                                        tagUserShow: !this.state.tagUserShow,
                                      })
                                    }
                                  >
                                    <i className="mdi mdi-plus font-20 "></i>
                                  </button>
                                </div>
                                <div
                                  className={
                                    this.state.tagUserShow
                                      ? "tag_user show"
                                      : "tag_user"
                                  }
                                >
                                  {this.state.loop.map((item, index) => {
                                    return (
                                      <div
                                        className="custom-control custom-checkbox mb-2"
                                        key={index}
                                      >
                                        <input
                                          type="radio"
                                          onChange={() => {
                                            this.setState({
                                              taggedname:
                                                item.first_name +
                                                " " +
                                                item.last_name,
                                              tagUserShow: !this.state
                                                .tagUserShow,
                                                selecteduserimage:item.user_image!=null?item.user_image:"image",
                                              first_name_intial:item.first_name,
                                              last_name_initial:item.last_name,
                                            

                                            });
                                            console.log(this.state.selecteduserimage);
                                          }}
                                          className="custom-control-input"
                                          id={"usertag1" + index}
                                          name="selectMe"
                                        />
                                        <label
                                          className="custom-control-label d-flex"
                                          htmlFor={"usertag1" + index}
                                        >
                                          {item.user_image != null ? (
                                            <img
                                              src={
                                                this.state.user_url +
                                                item.user_image
                                              }
                                              className="rounded-circle avatar-xs mr-2"
                                              alt="friend"
                                            />
                                          ) : (
                                            
                                              <div
                                                style={{
                                                  textAlign: "center",
                                                  fontSize: 15,
                                                  alignItems: "center",
                                                  justifyContent: "center",
                                                  fontWeight: "bold",
                                                  backgroundColor: "black",
                                                  height: "24px",
                                                  width: "24px",
                                                  color: "white",
                                                  lineHeight: "24px",
                                                }}
                                                className="rounded-circle avatar-xs mr-2"
                                              >
                                                {item.first_name
                                                  .charAt(0)
                                                  .toUpperCase() +
                                                  item.last_name
                                                    .charAt(0)
                                                    .toUpperCase()}
                                              </div>
                                           
                                          )}{" "}
                                          {item.first_name +
                                            " " +
                                            item.last_name}
                                        </label>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end .border*/}
                        </div>
                        {/* end col*/}
                      </div>
                      {/* end row*/}
                      {/* end comments */}
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row*/}
                </div>
                {/* end card-body */}
              </div>
            </div>
          </LoadingOverlay>
        </div>
        <BoardAddModal1
          true_task_id={this.state.task_id}
          true_project_id={this.props.project}
          istaskedited={this.istaskedited}
          page_name={this.props.page_name}
        />
        <CreateDuplicate
          true_task_id={this.state.task_id}
          true_project_id={this.props.project}
          duplicateCreated={this.duplicateCreated}
        />
      </div>
    );
  }
}
