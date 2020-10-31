import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcomb from "../../components/breadcomb";
import TimeLine from "react-gantt-timeline";
import { reactLocalStorage } from "reactjs-localstorage";
import HttpClient from "./../../../utils/HttpClient";
import ReactJsAlert from "reactjs-alert";
import Select from "react-select";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";


export default class index extends Component {
  constructor(props) {
    super(props);
    let d1 = new Date();
    let d2 = new Date();
    d2.setDate(d2.getDate() + 5);
    let d3 = new Date();
    d3.setDate(d3.getDate() + 8);
    let d4 = new Date();
    d4.setDate(d4.getDate() + 20);
    this.data = [
      {
        id: 1,
        start: d1,
        end: d2,
        name: "Demo Task 1",
      },
      {
        id: 2,
        start: d3,
        end: d4,
        name: "Demo Task 2",
        color: "orange",
      },
      {
        id: 3,
        start: d1,
        end: d3,
        name: "Demo Task 3",
        color: "green",
      },
    ];
    this.links = [
      { id: 1, start: 1, end: 2 },
      { id: 2, start: 1, end: 3 },
    ];
    this.state = {
      img_url:
        "http://web.easytodb.com/apitruetask/public/uploads/project_photo/",
      userData: {},
      userId: "",
      // first step
      projectName: "",
      projectOverview: "",
      startDate: "",
      dueDate: "",
      budget: "",
      firstFile: "",
      activeTab: "basictab1",
      teamMember: [],
      seletedTeam: [],
      team_member: [],
      team_id: "",
      type: "",
      pro_id: "",
      risk_id: "",
      govr_id: "",
      // second step

      // third step
      businessNeed: "",
      objectives: "",
      inScope: "",
      outOfScope: "",
      deliverable: "",
      dueDateOverview: "",
      keyConsiderations: "",
      successCriteria: "",

      // Seetings step
      firstName: "",
      lastName: "",
      email: "",

      // Stack Holder

      stackHolder: [
        {
          stakeholder: "",
          role: "",
          impact: "",
          influence: "",
          risk_tolerence: "",
          needs: "",
          responsibility: "",
        },
      ],
      stackHolderItem: {
        stakeholder: "",
        role: "",
        impact: "",
        influence: "",
        risk_tolerence: "",
        needs: "",
        responsibility: "",
      },
      // Schedule
      schedule: [
        {
          task: "",
          start: "",
          priority: "",
        },
      ],
      scheduleItem: {
        task: "",
        start: "",
        priority: "",
      },
      // Staffing
      staffing: [
        {
          first_name: "",
          last_name: "",
          email_id: "",
          role: "",
          responsibility: "",
          start_date: "",
          end_date: "",
          status: "",
        },
      ],
      staffingItem: {
        first_name: "",
        last_name: "",
        email_id: "",
        role: "",
        responsibility: "",
        start_date: "",
        end_date: "",
        status: "",
      },
      communications: [
        {
          first_name: "",
          last_name: "",
          email_id: "",
          role: "",
          department: "",
          responsible: "",
          consultant: "",
          inquire: "",
          accountable: "",
          report_name: "",
          frequency: "",
        },
      ],
      communicationsItems: {
        first_name: "",
        last_name: "",
        email_id: "",
        role: "",
        department: "",
        responsible: "",
        consultant: "",
        inquire: "",
        accountable: "",
        report_name: "",
        frequency: "",
      },
      cost: [
        {
          resource: "",
          cost: "",
          expense: "",
        },
      ],
      costItem: {
        resource: "",
        cost: "",
        expense: "",
      },
      costex: [
        {
          resource_ex: "",
          cost_ex: "",
          expense_ex: "",
        },
      ],
      costexItem: {
        resource_ex: "",
        cost_ex: "",
        expense_ex: "",
      },
      // resource_internal:[],
      // cost_internal:[],
      // expense_internal:[],

      // resource_external:[],
      // cost_external:[],
      // expense_external:[],

      procurement: [],
      new_img: [],
      new_risk_img: [],
      new_govr_img: [],
      procurementFile: "",
      procurementFileArray: [],
      riskImage: [],
      riskfile: "",
      governance: [],
      governancefile: "",
      tabView: [
        {
          id: 1,
          tabName: "basictab1",
        },
        {
          id: 2,
          tabName: "basictab5",
        },
        {
          id: 3,
          tabName: "basictab5",
        },
        {
          id: 4,
          tabName: "basictab3",
        },
        {
          id: 5,
          tabName: "basictab4",
        },
        {
          id: 6,
          tabName: "basictab6",
        },
      ],
      fromId: this.props.match.params.id ? this.props.match.params.id : "",

      errMsg: "",
      status: false,
      title: "Hey! this is an error.",
      quote: "Something went wrong. Please try again!",
      selectedFiles: [],
      isChecked: false,
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getUserdata();
    console.log("ac", this.state.formId);
  }

  componentWillReceiveProps(nextProps) {
    // this.loadPosts(nextProps)
    // console.log('nextProps',nextProps.match.params.id);
    // alert(nextProps);
    this.setState({ fromId: nextProps.match.params.id });
    this.setactiveTab(this.state.userId, nextProps.match.params.id);
    this.projectData(this.state.userId);
  }

  getUserdata = async () => {
    let data = reactLocalStorage.getObject("user_data");
    if (data && Object.keys(data).length !== 0) {
      this.setState({ isLogin: true, userData: data, userId: data.id });
      //this.getTeam(data.id);
      this.projectData(data.id);
      if (this.state.fromId != "") {
        this.setactiveTab(data.id, this.state.fromId);
      } else {
      }
    } else {
      this.setState({ isLogin: false });
    }
  };

  setactiveTab = async (userId, formId) => {
    // alert();
    let data = {
      user_id: userId,
      project_id: formId,
    };
    console.log("data", data);
    let result = await HttpClient.Request("tabs", "POST", data);
    console.log("tabs", result);
    if (result && result.status) {
      let team = [];
      this.setState({ projects: result.data });
    }
  };

  getTeam = async (userId) => {
    console.log(userId);
    let url = "getmember/" + userId;
    let result = await HttpClient.requestData(url, "GET");
    console.log(result);
    if (result && result.length > 0) {
      let team = [];
      //       if(this.state.seletedTeam.length>0)
      //       {
      //       let curr=[]
      //       // curr=result.filter(
      //       //   (item) => item.label != this.state.seletedTeam.forEach(element => {
      //       //    return element.label;
      //       //       })
      //       //);
      //     curr = result.filter((elem) => !this.state.seletedTeam.find(({ label }) => elem.label !== label));

      // console.log(curr);

      //       curr.map((item, index) => {
      //         let person = {
      //           id: item.user_id,
      //           value: item.firstname + " " + item.lastname,
      //           label: item.firstname + " " + item.lastname,
      //         };
      //         team.push(person);
      //       });
      //       this.setState({ teamMember: team });
      //       console.log(this.state.teamMember);

      //       }
      //         else{

      result.map((item, index) => {
        let person = {
          id: item.user_id,
          value: item.firstname + " " + item.lastname,
          label: item.firstname + " " + item.lastname,
        };
        team.push(person);
      });
      this.setState({ teamMember: team });
      console.log(this.state.teamMember);
      //   let data_cat = [];
      //  this.state.teamMember.forEach(element => {
      //     let dom = { label: element.value };
      //     data_cat.push(dom);
      //   });
      //   this.setState({
      //     seletedTeam:data_cat

      //   });
      //   console.log("seleted team",this.state.seletedTeam);
      //}
      // }
    }
  };

  projectData = async (userId) => {
    let data = {
      user_id: userId,
    };
    let result = await HttpClient.requestData("projectdata", "POST", data);
    //console.log("result_data", result);
    if (result && result.status) {
      let currentData = [];
      if (this.state.fromId != "") {
        currentData = result.data.filter(
          (item) => item.auto_id == this.state.fromId
        );
        console.log("result_data", currentData);
        let img_file = currentData[0] ? currentData[0].image : "";

        if (currentData.length > 0) {
          this.setState({
            projectName: currentData[0].name,
            projectOverview: currentData[0].overviews,
            startDate: currentData[0].start_date,
            dueDate: currentData[0].due_date,
            budget: currentData[0].budget,
            type: currentData[0].type,
            formId: currentData[0].auto_id,

            selectedFiles: [
              {
                preview: this.state.img_url + img_file,
              },
            ],
            procurement: currentData[0].procurement_get,

            riskImage: currentData[0].risk_get,
            governance: currentData[0].govern_get,
            team_member: currentData[0].team_members
              ? currentData[0].team_members.split(",")
              : null,
          });
          console.log("jhjkhjk", this.state.team_member);
          if (this.state.team_member != null) {
            var res = this.state.team_member.reduce(function (s, a) {
              s.push({ label: a });
              return s;
            }, []);
            console.log(res);
            let data_team = [];
            res.forEach((element) => {
              let dom = { label: element.label, value: element.label };
              data_team.push(dom);
            });
            this.setState({
              seletedTeam: data_team,
            });
          }

          let stackholder = currentData[0].stackholder;
          if (stackholder.length > 0) {
            this.setState({ stackHolder: stackholder });
          }
          let setting = currentData[0].setting;
          if (setting.length > 0) {
            this.setState({
              firstName: setting[0].first_name,
              lastName: setting[0].last_name,
              email: setting[0].email,
            });
          }
          let staff_get = currentData[0].staff_get;
          if (staff_get.length > 0) {
            this.setState({ staffing: staff_get });
          }
          let communication_get = currentData[0].communication_get;
          if (communication_get.length > 0) {
            this.setState({ communications: communication_get });
          }
          let cost_get = currentData[0].internal_get;
          if (cost_get.length > 0) {
            this.setState({ cost: cost_get });
          }
          let costex_get = currentData[0].external_get;
          if (costex_get.length > 0) {
            this.setState({ costex: costex_get });
          }
          let overview = currentData[0].overview;
          if (overview) {
            // console.log("overview", overview);

            this.setState({
              businessNeed: overview.benefits,
              objectives: overview.objectives,
              inScope: overview.in_scope,
              outOfScope: overview.out_scope,
              deliverable: overview.deliverable,
              dueDateOverview: overview.due_date,
              keyConsiderations: overview.key_consideration,
              successCriteria: overview.success_criteria,
            });
          }
        }
      }
      this.setState({ projects: result.data });
      this.getTeam(this.state.userId);
    }
  };

  handelChange = (seletedTeam) => {
    console.log("selectedGroup", seletedTeam);
    // let name = [];
    // seletedTeam.forEach(element => {
    //   let dom={label:element.label,id:element};
    //   name.push(dom);
    // });
    // for(var i=0;i<seletedTeam.length;i++){
    //   name.push(seletedTeam[i].label);
    //}
    this.setState({
      seletedTeam: seletedTeam,
      //team_id: seletedTeam
    });
    setTimeout(() => {
      console.log("event.target.value", this.state.seletedTeam);
    }, 3000);
  };

  validation = (activeTab) => {
    // Project Tab
    if (activeTab == "basictab1") {
      if (this.state.projectName == "") {
        this.setState({ errMsg: "Please Enter Project Name" });
        return false;
      } else {
        if (this.state.projectOverview == "") {
          this.setState({ errMsg: "Please Enter Project Overview" });
          return false;
        } else {
          if (this.state.startDate == "") {
            this.setState({ errMsg: "Please Enter Start Date" });
            return false;
          } else {
            if (this.state.dueDate == "") {
              this.setState({ errMsg: "Please Enter Start Due Date" });
              return false;
            } else {
              if (this.state.budget == "") {
                this.setState({ errMsg: "Please Enter Start Due Date" });
                return false;
              } else {
                if (this.state.seletedTeam == "") {
                  this.setState({ errMsg: "Please Select Team Member" });
                  return false;
                } else {
                  if (this.state.selectedFiles.length == 0) {
                    this.setState({ errMsg: "Please Select image" });
                    return false;
                  } else {
                    return true;
                  }
                }
              }
            }
          }
        }
      }
    }

    // Overview Step
    else if (activeTab == "basictab2") {
      if (this.state.businessNeed == "") {
        this.setState({ errMsg: "Please Enter Business Need" });
        return false;
      } else {
        if (this.state.objectives == "") {
          this.setState({ errMsg: "Please Enter Objectives" });
          return false;
        } else {
          if (this.state.inScope == "") {
            this.setState({ errMsg: "Please Enter In Scope" });
            return false;
          } else {
            if (this.state.outOfScope == "") {
              this.setState({ errMsg: "Please Enter Out Of Scope" });
              return false;
            } else {
              if (this.state.deliverable == "") {
                this.setState({ errMsg: "Please Enter Deliverable" });
                return false;
              } else {
                if (this.state.dueDateOverview == "") {
                  this.setState({ errMsg: "Please Enter Due Date Overview" });
                  return false;
                } else {
                  if (this.state.keyConsiderations == "") {
                    this.setState({
                      errMsg: "Please Enter Key Considerations",
                    });
                    return false;
                  } else {
                    if (this.state.successCriteria == "") {
                      this.setState({
                        errMsg: "Please Enter Success Criteria",
                      });
                      return false;
                    } else {
                      return true;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    // Seetings Tab
    else if (activeTab == "basictab3") {
      if (this.state.firstName == "") {
        this.setState({ errMsg: "Please Enter First Name" });
        return false;
      } else {
        if (this.state.lastName == "") {
          this.setState({ errMsg: "Please Enter Last Name" });
          return false;
        } else {
          if (this.state.email == "") {
            this.setState({ errMsg: "Please Enter Email" });
            return false;
          } else {
            return true;
          }
        }
      }
    }

    //
    else if (activeTab == "basictab4") {
      console.log("kkklkll", this.state.stackHolder.length);
      if (this.state.stackHolder.length == 0) {
        this.setState({ errMsg: "Something Went Wrong Try Again" });
        return false;
      } else {
        return true;
      }
    } else if (activeTab == "basictab6") {
      if (this.state.schedule.length == 0) {
        this.setState({ errMsg: "Something Went Wrong Try Again" });
        return false;
      } else {
        return true;
      }
    } else if (activeTab == "basictab7") {
      if (this.state.staffing.length == 0) {
        this.setState({ errMsg: "Something Went Wrong Try Again" });
        return false;
      } else {
        return true;
      }
    } else if (activeTab == "basictab8") {
      if (this.state.communications.length == 0) {
        this.setState({ errMsg: "Something Went Wrong Try Again" });
        return false;
      } else {
        return true;
      }
    } else if (activeTab == "basictab9") {
      if (this.state.cost.length == 0) {
        this.setState({ errMsg: "Something Went Wrong Try Again" });
        return false;
      } else {
        return true;
      }
    } else if (activeTab == "basictab10") {
      if (this.state.procurement.length == 0) {
        this.setState({ errMsg: "Please Select Atleast One Image" });
        return false;
      } else {
        return true;
      }
    } else if (activeTab == "basictab11") {
      if (this.state.riskImage.length == 0) {
        this.setState({ errMsg: "Please Select Atleast One Image" });
        return false;
      } else {
        return true;
      }
    } else if (activeTab == "basictab12") {
      if (this.state.governance.length == 0) {
        this.setState({ errMsg: "Please Select Atleast One Image" });
        return false;
      } else {
        return true;
      }
    } else if (activeTab == "basictab13") {
      // alert(this.state.isChecked);
      if (this.state.isChecked === false) {
        this.setState({ errMsg: "Please Click On Checkbox" });
        return false;
      } else {
        return true;
      }
    }
  };

  onChangeFirst = async (event) => {
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
    console.log("selected files", this.state.firstFile);
  };

  procurementFile = async (event) => {
    let data = [];
    // console.log("event.target.files[0]", event.target.files[0]);
    let file_f = event.target.files[0];
    let file = {};
    if (file_f.type == "application/pdf") {
      file_f.file_type = "pdf";
      file = {
        preview:
          "https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png",
        type: "pdf",
      };
    } else if (
      file_f.type ==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      file_f.file_type = "doc";
      file = {
        preview:
          "https://www.kindpng.com/picc/m/249-2499221_download-icon-document-download-icon-png-transparent-png.png",
        type: "doc",
      };
    } else {
      file = {
        preview: URL.createObjectURL(event.target.files[0]),
        type: "image",
      };
    }

    this.state.new_img.push(file);
    this.state.procurementFileArray.push(event.target.files[0]);
    this.setState({
      procurementFile: event.target.files[0],
      new_img: this.state.new_img, //to maintain the prev image and the new image all together
    });
  };

  riskImage = async (event) => {
    let data = [];
    let file_f = event.target.files[0];
    let file = {};
    if (file_f.type == "application/pdf") {
      file_f.file_type = "pdf";
      file = {
        preview:
          "https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png",
        type: "pdf",
      };
    } else if (
      file_f.type ==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      file_f.file_type = "doc";
      file = {
        preview:
          "https://www.kindpng.com/picc/m/249-2499221_download-icon-document-download-icon-png-transparent-png.png",
        type: "doc",
      };
    } else {
      file = {
        preview: URL.createObjectURL(event.target.files[0]),
        type: "image",
      };
    }
    // let file = {
    //   preview: URL.createObjectURL(event.target.files[0]),
    // };
    this.state.new_risk_img.push(file);
    this.setState({
      riskfile: event.target.files[0],
      new_risk_img: this.state.new_risk_img, //to maintain the prev image and the new image all together
    });
  };

  governanceImage = async (event) => {
    let data = [];
    // let file = {
    //   preview: URL.createObjectURL(event.target.files[0]),
    // };
    let file_f = event.target.files[0];
    let file = {};
    if (file_f.type == "application/pdf") {
      file_f.file_type = "pdf";
      file = {
        preview:
          "https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png",
        type: "pdf",
      };
    } else if (
      file_f.type ==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      file_f.file_type = "doc";
      file = {
        preview:
          "https://www.kindpng.com/picc/m/249-2499221_download-icon-document-download-icon-png-transparent-png.png",
        type: "doc",
      };
    } else {
      file = {
        preview: URL.createObjectURL(event.target.files[0]),
        type: "image",
      };
    }
    this.state.new_govr_img.push(file);
    this.setState({
      governancefile: event.target.files[0],
      new_govr_img: this.state.new_govr_img, //to maintain the prev image and the new image all together
    });
  };

  backStep = async () => {
    if (this.state.activeTab == "basictab5") {
      this.setState({ activeTab: "basictab1" });
    }
    // else if (this.state.activeTab == "basictab5")
    // {
    //   this.setState({activeTab:'basictab5'})
    // }
    else if (this.state.activeTab == "basictab3") {
      this.setState({ activeTab: "basictab5" });
    } else if (this.state.activeTab == "basictab4") {
      this.setState({ activeTab: "basictab3" });
    } else if (this.state.activeTab == "basictab6") {
      this.setState({ activeTab: "basictab4" });
    } else if (this.state.activeTab == "basictab7") {
      this.setState({ activeTab: "basictab6" });
    } else if (this.state.activeTab == "basictab") {
      this.setState({ activeTab: "basictab7" });
    }
  };

  nextStep = async () => {
    if (this.state.activeTab == "basictab1") {
      console.log(this.state.fromId);
      let validation = this.validation("basictab1");
      let sending_team = Array.prototype.map
        .call(this.state.seletedTeam, (s) => s.label)
        .toString();
      console.log(sending_team);
      if (true) {
        let data = new FormData();
        data.append("type", "program");
        data.append("project_id", this.state.fromId);
        data.append("name", this.state.projectName);
        data.append("overview", this.state.projectOverview);
        data.append("start_date", this.state.startDate);
        data.append("budget", this.state.budget);
        data.append("team_members", sending_team);
        data.append("due_date", this.state.startDate);
        data.append("image", this.state.firstFile);
        data.append("user_id", this.state.userId);
        console.log(data);
        let result = await HttpClient.fileUplodeDynamic(
          "projectwizard",
          "POST",
          data
        );
        if (result && result.status) {
          let resultData = result.data;
          console.log("re", resultData.auto_id);
          this.setState({
            type: "success",
            status: true,
            errMsg: "Successfully Submited.",
            quote: "Something went wrong. Please try again!",
            activeTab: "basictab2",
            fromId: resultData.auto_id,
          });
          this.projectData(this.state.userId);
        } else {
          this.setState({
            type: "error",
            status: true,
            errMsg: result.error,
            quote: "Something went wrong. Please try again!",
          });
        }
        // console.log("from1", result);
      } else {
        this.setState({
          type: "warning",
          status: true,
          title: "Please Enter email.",
          quote: "Something went wrong. Please try again!",
        });
      }
    } else if (this.state.activeTab == "basictab2") {
      // alert(this.state.fromId);
      let validation = this.validation("basictab2");
      if (validation) {
        let data = new FormData();
        data.append("type", "overview");

        data.append("benefits", this.state.businessNeed);
        data.append("objectives", this.state.objectives);

        data.append("in_scope", this.state.inScope);
        data.append("out_scope", this.state.outOfScope);
        data.append("deliverable", this.state.deliverable);
        data.append("due_date", this.state.dueDate);
        data.append("key_consideration", this.state.keyConsiderations);
        data.append("success_criteria", this.state.successCriteria);
        data.append("user_id", this.state.userId);
        data.append("project_id", this.state.fromId);
        let result = await HttpClient.fileUplodeDynamic(
          "projectwizard",
          "POST",
          data
        );
        if (result && result.status) {
          this.setState({
            type: "success",
            status: true,
            errMsg: "Successfully Submited.",
            quote: "Something went wrong. Please try again!",
            activeTab: "basictab3",
          });
          this.projectData(this.state.userId);
        } else {
          this.setState({
            type: "error",
            status: true,
            errMsg: result.error,
            quote: "Something went wrong. Please try again!",
          });
        }
        // console.log("from1", result);
      } else {
        this.setState({
          type: "warning",
          status: true,
          title: "Please Enter email.",
          quote: "Something went wrong. Please try again!",
        });
      }

      // this.setState({
      //   activeTab: "basictab3",
      // });
    } else if (this.state.activeTab == "basictab5") {
      this.setState({
        activeTab: "basictab6",
      });
      // let validation = this.validation("basictab5");
      // if (validation) {
      //   let data = new FormData();
      //   data.append("type", "program");
      //   data.append("name", this.state.projectName);
      //   data.append("overview", this.state.projectOverview);
      //   data.append("start_date", this.state.startDate);
      //   data.append("budget", this.state.budget);
      //   data.append("team_members", this.state.seletedTeam);
      //   data.append("due_date", this.state.startDate);
      //   data.append("image", this.state.firstFile);
      //   data.append('user_id',this.state.userId);
      //   let result = await HttpClient.fileUplodeDynamic(
      //     "projectwizard",
      //     "POST",
      //     data
      //   );
      //   if(result && result.status)
      //   {
      //     this.setState({
      //       type: "success",
      //       status: true,
      //       errMsg: "Successfully Submited.",
      //       quote: "Something went wrong. Please try again!",
      //       activeTab:'basictab5'
      //     });
      //   }
      //   else
      //   {
      //     this.setState({
      //       type: "error",
      //       status: true,
      //       errMsg: "Please Enter email.",
      //       quote: "Something went wrong. Please try again!",
      //     });
      //   }
      //   console.log("from1", result);
      // } else {
      //   this.setState({
      //     type: "warning",
      //     status: true,
      //     title: "Please Enter email.",
      //     quote: "Something went wrong. Please try again!",
      //   });
      // }
    } else if (this.state.activeTab == "basictab3") {
      let validation = this.validation("basictab3");
      if (validation) {
        let data = new FormData();
        data.append("type", "setting");
        data.append("first_name", this.state.firstName);
        data.append("last_name", this.state.lastName);
        data.append("email", this.state.email);
        data.append("project_id", this.state.fromId);
        data.append("user_id", this.state.userId);

        let result = await HttpClient.fileUplodeDynamic(
          "projectwizard",
          "POST",
          data
        );
        if (result && result.status) {
          this.setState({
            type: "success",
            status: true,
            errMsg: "Successfully Submited.",
            quote: "Something went wrong. Please try again!",
            activeTab: "basictab4",
          });
          this.projectData(this.state.userId);
        } else {
          this.setState({
            type: "error",
            status: true,
            errMsg: result.error,
            quote: "Something went wrong. Please try again!",
          });
        }
        console.log("from3", result);
      } else {
        this.setState({
          type: "warning",
          status: true,
          title: "Please Enter email.",
          quote: "Something went wrong. Please try again!",
        });
      }
    } else if (this.state.activeTab == "basictab4") {
      let validation = this.validation("basictab4");
      if (validation) {
        let stackHolder = [];

        // let data = new FormData();
        // data.append("type", "stakeholder");
        // data.append("stakeholder", this.state.stackHolder);
        // data.append("project_id", this.state.fromId);
        // data.append("user_id", this.state.userId);

        let data = {
          type: "stakeholder",
          stakeholder: this.state.stackHolder,
          project_id: this.state.fromId,
          user_id: this.state.userId,
        };
        console.log(data);

        let result = await HttpClient.FromAdd("projectwizard", "POST", data);
        if (result && result.status) {
          this.setState({
            type: "success",
            status: true,
            errMsg: "Successfully Submited.",
            quote: "Something went wrong. Please try again!",
            activeTab: "basictab7",
          });
          this.projectData(this.state.userId);
        } else {
          this.setState({
            type: "error",
            status: true,
            errMsg: result.error,
            quote: "Something went wrong. Please try again!",
          });
        }
        console.log("from3", result);
      } else {
        this.setState({
          type: "warning",
          status: true,
          title: "Please Enter email.",
          quote: "Something went wrong. Please try again!",
        });
      }
    } else if (this.state.activeTab == "basictab6") {
      let validation = this.validation("basictab6");
      if (validation) {
        let data = {
          type: "schedule",
          schedule: this.state.schedule,
          project_id: this.state.fromId,
          user_id: this.state.userId,
        };

        let result = await HttpClient.FromAdd("projectwizard", "POST", data);
        if (result && result.status) {
          this.setState({
            type: "success",
            status: true,
            errMsg: "Successfully Submited.",
            quote: "Something went wrong. Please try again!",
            activeTab: "basictab7",
          });
          this.projectData(this.state.userId);
        } else {
          this.setState({
            type: "error",
            status: true,
            errMsg: result.error,
            quote: "Something went wrong. Please try again!",
          });
        }
        console.log("from3", result);
      } else {
        this.setState({
          type: "warning",
          status: true,
          title: "Please Enter email.",
          quote: "Something went wrong. Please try again!",
        });
      }
    } else if (this.state.activeTab == "basictab7") {
      let validation = this.validation("basictab7");
      if (validation) {
        let data = {
          type: "staff",
          staffing: this.state.staffing,
          project_id: this.state.fromId,
          user_id: this.state.userId,
        };
        console.log(data);

        let result = await HttpClient.FromAdd("projectwizard", "POST", data);
        if (result && result.status) {
          this.setState({
            type: "success",
            status: true,
            errMsg: "Successfully Submited.",
            quote: "Something went wrong. Please try again!",
            activeTab: "basictab8",
          });
          this.projectData(this.state.userId);
        } else {
          this.setState({
            type: "error",
            status: true,
            errMsg: result.error,
            quote: "Something went wrong. Please try again!",
          });
        }
        console.log("from3", result);
      } else {
        this.setState({
          type: "warning",
          status: true,
          title: "Please Enter email.",
          quote: "Something went wrong. Please try again!",
        });
      }
    } else if (this.state.activeTab == "basictab8") {
      let validation = this.validation("basictab8");
      if (validation) {
        let data = {
          type: "communication",
          communications: this.state.communications,
          project_id: this.state.fromId,
          user_id: this.state.userId,
        };

        let result = await HttpClient.FromAdd("projectwizard", "POST", data);
        console.log(result);

        if (result && result.status) {
          this.setState({
            type: "success",
            status: true,
            errMsg: "Successfully Submited.",
            quote: "Something went wrong. Please try again!",
            activeTab: "basictab9",
          });
          this.projectData(this.state.userId);
        } else {
          this.setState({
            type: "error",
            status: true,
            errMsg: result.error,
            quote: "Something went wrong. Please try again!",
          });
        }
        console.log("from3", result);
      } else {
        this.setState({
          type: "warning",
          status: true,
          title: "Please Enter email.",
          quote: "Something went wrong. Please try again!",
        });
      }
    } else if (this.state.activeTab == "basictab9") {
      //costs
      let validation = this.validation("basictab9");
      if (true) {
        let data = {
          type: "costs",
          save_type_in: "internal",
          save_type_ex: "external",
          // resource:this.state.resource_internal,
          // resource_ex:this.state.resource_external,
          internal: this.state.cost,
          external: this.state.costex,
          // expense: this.state.expense_internal,
          // expense_ex: this.state.expense_external,
          project_id: this.state.fromId,
          user_id: this.state.userId,
        };

        let result = await HttpClient.FromAdd("projectwizard", "POST", data);
        console.log(result);
        if (result && result.status) {
          this.setState({
            type: "success",
            status: true,
            errMsg: "Successfully Submited.",
            quote: "Something went wrong. Please try again!",
            activeTab: "basictab10",
          });
          this.projectData(this.state.userId);
        } else {
          this.setState({
            type: "error",
            status: true,
            errMsg: result.error,
            quote: "Something went wrong. Please try again!",
          });
        }
      } else {
        this.setState({
          type: "warning",
          status: true,
          title: "Please Enter email.",
          quote: "Something went wrong. Please try again!",
        });
      }
    } else if (this.state.activeTab == "basictab10") {
      let validation = this.validation("basictab10");
      if (validation) {
        let data = new FormData();
        data.append("type", "procurement");
        data.append("image", this.state.procurementFile);
        data.append("user_id", this.state.userId);
        data.append("project_id", this.state.fromId);
        data.append("id", this.state.pro_id);
        console.log(data);
        let result = await HttpClient.fileUplodeDynamic(
          "projectwizard",
          "POST",
          data
        );
        console.log("from10", result);
        if (result && result.status) {
          this.setState({
            type: "success",
            status: true,
            errMsg: "Successfully Submited.",
            quote: "Something went wrong. Please try again!",
            activeTab: "basictab11",
            new_img: [],
          });
          this.projectData(this.state.userId);
        } else {
          this.setState({
            type: "error",
            status: true,
            errMsg: result.error,
            quote: "Something went wrong. Please try again!",
          });
        }
      } else {
        this.setState({
          type: "warning",
          status: true,
          title: "Please Enter email.",
          quote: "Something went wrong. Please try again!",
        });
      }

      // this.setState({
      //   activeTab: "basictab3",
      // });
    } else if (this.state.activeTab == "basictab11") {
      let validation = this.validation("basictab11");
      if (true) {
        let data = new FormData();
        data.append("type", "risk");
        data.append("image", this.state.riskfile);
        data.append("user_id", this.state.userId);
        data.append("project_id", this.state.fromId);
        data.append("id", this.state.risk_id);
        let result = await HttpClient.fileUplodeDynamic(
          "projectwizard",
          "POST",
          data
        );
        if (result && result.status) {
          this.setState({
            type: "success",
            status: true,
            errMsg: "Successfully Submited.",
            quote: "Something went wrong. Please try again!",
            activeTab: "basictab12",
            new_risk_img: [],
          });
          this.projectData(this.state.userId);
        } else {
          this.setState({
            type: "error",
            status: true,
            errMsg: result.error,
            quote: "Something went wrong. Please try again!",
          });
        }
      } else {
        this.setState({
          type: "warning",
          status: true,
          title: "Please Enter email.",
          quote: "Something went wrong. Please try again!",
        });
      }
    } else if (this.state.activeTab == "basictab12") {
      let validation = this.validation("basictab12");
      if (true) {
        let data = new FormData();
        data.append("type", "governance");
        data.append("image", this.state.governancefile);
        data.append("user_id", this.state.userId);
        data.append("project_id", this.state.fromId);
        data.append("id", this.state.govr_id);
        let result = await HttpClient.fileUplodeDynamic(
          "projectwizard",
          "POST",
          data
        );
        if (result && result.status) {
          this.setState({
            type: "success",
            status: true,
            errMsg: "Successfully Submited.",
            quote: "Something went wrong. Please try again!",
            activeTab: "basictab13",
            new_govr_img: [],
          });
          this.projectData(this.state.userId);
        } else {
          this.setState({
            type: "error",
            status: true,
            errMsg: result.error,
            quote: "Something went wrong. Please try again!",
          });
        }
      } else {
        this.setState({
          type: "warning",
          status: true,
          title: "Please Enter email.",
          quote: "Something went wrong. Please try again!",
        });
      }
    } else if (this.state.activeTab == "basictab13") {
      let validation = this.validation("basictab13");
      if (validation) {
        window.location.reload();
      }
    }
    
  };

  render() {
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ];
    return (
      <div className="container-fluid">
        <ReactJsAlert
          type={this.state.type} // success, warning, error, info
          title={this.state.errMsg} // title you want to display
          status={this.state.status} // true or false
          Close={() => this.setState({ status: false })}
        />
        <Breadcomb pageTitle="Project Wizard" leadTitle="Project" />
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
                <div id="basicwizard">
                  <ul className="nav nav-pills nav-justified form-wizard-header mb-4">
                    <li className="nav-item ">
                      <a
                        href="#basictab1"
                        data-toggle="tab"
                        className={
                          this.state.activeTab == "basictab1"
                            ? "nav-link rounded-0 pt-2 pb-2 active"
                            : "nav-link rounded-0 pt-2 pb-2"
                        }
                        onClick={() => {
                          this.setState({ activeTab: "basictab1" });
                        }}
                      >
                        <i className="mdi mdi-account-circle mr-1" />
                        <span className="d-none d-sm-inline">Program</span>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        href="#basictab2"
                        data-toggle="tab"
                        className={
                          this.state.activeTab == "basictab2"
                            ? "nav-link rounded-0 pt-2 pb-2 active"
                            : "nav-link rounded-0 pt-2 pb-2"
                        }
                        onClick={() => {
                          this.setState({ activeTab: "basictab2" });
                        }}
                      >
                        <i className="mdi mdi-checkbox-marked-circle-outline mr-1" />
                        <span className="d-none d-sm-inline">Overview</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#basictab3"
                        data-toggle="tab"
                        className={
                          this.state.activeTab == "basictab3"
                            ? "nav-link rounded-0 pt-2 pb-2 active"
                            : "nav-link rounded-0 pt-2 pb-2"
                        }
                        onClick={() => {
                          this.setState({ activeTab: "basictab3" });
                        }}
                      >
                        <i className="mdi mdi-checkbox-marked-circle-outline mr-1" />
                        <span className="d-none d-sm-inline">Settings</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#basictab4"
                        data-toggle="tab"
                        className={
                          this.state.activeTab == "basictab4"
                            ? "nav-link rounded-0 pt-2 pb-2 active"
                            : "nav-link rounded-0 pt-2 pb-2"
                        }
                        onClick={() => {
                          this.setState({ activeTab: "basictab4" });
                        }}
                      >
                        <i className="mdi mdi-checkbox-marked-circle-outline mr-1" />
                        <span className="d-none d-sm-inline">Stakeholder</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#basictab5"
                        data-toggle="tab"
                        className={
                          this.state.activeTab == "basictab5"
                            ? "nav-link rounded-0 pt-2 pb-2 active"
                            : "nav-link rounded-0 pt-2 pb-2"
                        }
                        onClick={() => {
                          this.setState({ activeTab: "basictab5" });
                        }}
                      >
                        <i className="mdi mdi-face-profile mr-1" />
                        <span className="d-none d-sm-inline">Giant Chart</span>
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        href="#basictab6"
                        data-toggle="tab"
                        className={
                          this.state.activeTab == "basictab6"
                            ? "nav-link rounded-0 pt-2 pb-2 active"
                            : "nav-link rounded-0 pt-2 pb-2"
                        }
                        onClick={() => {
                          this.setState({ activeTab: "basictab6" });
                        }}
                      >
                        <i className="mdi mdi-checkbox-marked-circle-outline mr-1" />
                        <span className="d-none d-sm-inline">Schedule</span>
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        href="#basictab7"
                        data-toggle="tab"
                        className={
                          this.state.activeTab == "basictab7"
                            ? "nav-link rounded-0 pt-2 pb-2 active"
                            : "nav-link rounded-0 pt-2 pb-2"
                        }
                        onClick={() => {
                          this.setState({ activeTab: "basictab7" });
                        }}
                      >
                        <i className="mdi mdi-checkbox-marked-circle-outline mr-1" />
                        <span className="d-none d-sm-inline">Staffing</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#basictab8"
                        data-toggle="tab"
                        className={
                          this.state.activeTab == "basictab8"
                            ? "nav-link rounded-0 pt-2 pb-2 active"
                            : "nav-link rounded-0 pt-2 pb-2"
                        }
                        onClick={() => {
                          this.setState({ activeTab: "basictab8" });
                        }}
                      >
                        <i className="mdi mdi-checkbox-marked-circle-outline mr-1" />
                        <span className="d-none d-sm-inline">
                          Communications
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#basictab9"
                        data-toggle="tab"
                        className={
                          this.state.activeTab == "basictab9"
                            ? "nav-link rounded-0 pt-2 pb-2 active"
                            : "nav-link rounded-0 pt-2 pb-2"
                        }
                        onClick={() => {
                          this.setState({ activeTab: "basictab9" });
                        }}
                      >
                        <i className="mdi mdi-checkbox-marked-circle-outline mr-1" />
                        <span className="d-none d-sm-inline">Cost</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#basictab10"
                        data-toggle="tab"
                        className={
                          this.state.activeTab == "basictab10"
                            ? "nav-link rounded-0 pt-2 pb-2 active"
                            : "nav-link rounded-0 pt-2 pb-2"
                        }
                        onClick={() => {
                          this.setState({ activeTab: "basictab10" });
                        }}
                      >
                        <i className="mdi mdi-checkbox-marked-circle-outline mr-1" />
                        <span className="d-none d-sm-inline">Procurement</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#basictab11"
                        data-toggle="tab"
                        className={
                          this.state.activeTab == "basictab11"
                            ? "nav-link rounded-0 pt-2 pb-2 active"
                            : "nav-link rounded-0 pt-2 pb-2"
                        }
                        onClick={() => {
                          this.setState({ activeTab: "basictab11" });
                        }}
                      >
                        <i className="mdi mdi-checkbox-marked-circle-outline mr-1" />
                        <span className="d-none d-sm-inline">Risk</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#basictab12"
                        data-toggle="tab"
                        className={
                          this.state.activeTab == "basictab12"
                            ? "nav-link rounded-0 pt-2 pb-2 active"
                            : "nav-link rounded-0 pt-2 pb-2"
                        }
                        onClick={() => {
                          this.setState({ activeTab: "basictab12" });
                        }}
                      >
                        <i className="mdi mdi-checkbox-marked-circle-outline mr-1" />
                        <span className="d-none d-sm-inline">Governance</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#basictab13"
                        data-toggle="tab"
                        className={
                          this.state.activeTab == "basictab13"
                            ? "nav-link rounded-0 pt-2 pb-2 active"
                            : "nav-link rounded-0 pt-2 pb-2"
                        }
                        onClick={() => {
                          this.setState({ activeTab: "basictab13" });
                        }}
                      >
                        <i className="mdi mdi-checkbox-marked-circle-outline mr-1" />
                        <span>+</span>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className={
                        this.state.activeTab == "basictab1"
                          ? "tab-pane active"
                          : "tab-pane"
                      }
                      id="basictab1"
                    >
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label htmlFor="projectname">Name</label>
                            <input
                              type="text"
                              id="projectname"
                              className="form-control"
                              placeholder="Enter project name"
                              onChange={(val) => {
                                this.setState({
                                  projectName: val.target.value,
                                });
                              }}
                              value={this.state.projectName}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="project-overview">Overview</label>
                            <textarea
                              className="form-control"
                              id="project-overview"
                              rows={5}
                              placeholder="Enter some brief about project.."
                              onChange={(val) => {
                                this.setState({
                                  projectOverview: val.target.value,
                                });
                              }}
                              value={this.state.projectOverview}
                            />
                          </div>
                          {/* Date View */}
                          <div className="form-group">
                            <label>Start Date</label>
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
                          <div className="form-group">
                            <label>Due Date</label>
                            <input
                              type="date"
                              className="form-control"
                              // data-provide="datepicker"
                              // data-date-format="d-M-yyyy"
                              // data-date-autoclose="true"
                              onChange={(val) => {
                                this.setState({ dueDate: val.target.value });
                              }}
                              value={this.state.dueDate}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="project-budget">Budget</label>
                            <input
                              type="number"
                              id="project-budget"
                              className="form-control"
                              placeholder="Enter project budget"
                              min="1"
                              onChange={(val) => {
                                this.setState({ budget: val.target.value });
                              }}
                              value={this.state.budget}
                            />
                          </div>
                          <div className="form-group mb-0">
                            <label htmlFor="project-overview">
                              Team Members
                            </label>
                            {/* <select
                              className="form-control select2"
                              data-toggle="select2"
                              onChange={this.handelChange}
                            >
                              <option value="0">Select</option>
                              {this.state.teamMember.map((item, index) => {
                                return (
                                  <option value={item.value} key={index}>
                                    {item.v}
                                  </option>
                                );
                              })}
                            </select> */}
                            <Select
                              defaultValue={
                                this.state.seletedTeam
                                  ? this.state.seletedTeam
                                  : ""
                              } //previously selected value
                              isMulti
                              name="colors"
                              options={this.state.teamMember}
                              value={this.state.seletedTeam}
                              onChange={this.handelChange}
                              className="basic-multi-select"
                              classNamePrefix="select"
                              // onInputChange={this.handelChange}
                            />
                            {/* <div className="mt-2">
                              <a
                                href="javascript:void(0);"
                                data-toggle="tooltip"
                                data-placement="top"
                                title
                                data-original-title="Mat Helme"
                                className="d-inline-block"
                              >
                                <img
                                  src="assets/images/users/avatar-6.jpg"
                                  className="rounded-circle avatar-xs"
                                  alt="friend"
                                />
                              </a>
                              <a
                                href="javascript:void(0);"
                                data-toggle="tooltip"
                                data-placement="top"
                                title
                                data-original-title="Michael Zenaty"
                                className="d-inline-block"
                              >
                                <img
                                  src="assets/images/users/avatar-7.jpg"
                                  className="rounded-circle avatar-xs"
                                  alt="friend"
                                />
                              </a>
                              <a
                                href="javascript:void(0);"
                                data-toggle="tooltip"
                                data-placement="top"
                                title
                                data-original-title="James Anderson"
                                className="d-inline-block"
                              >
                                <img
                                  src="assets/images/users/avatar-8.jpg"
                                  className="rounded-circle avatar-xs"
                                  alt="friend"
                                />
                              </a>
                              <a
                                href="javascript:void(0);"
                                data-toggle="tooltip"
                                data-placement="top"
                                title
                                data-original-title="Lorene Block"
                                className="d-inline-block"
                              >
                                <img
                                  src="assets/images/users/avatar-4.jpg"
                                  className="rounded-circle avatar-xs"
                                  alt="friend"
                                />
                              </a>
                              <a
                                href="javascript:void(0);"
                                data-toggle="tooltip"
                                data-placement="top"
                                title
                                data-original-title="Mike Baker"
                                className="d-inline-block"
                              >
                                <img
                                  src="assets/images/users/avatar-5.jpg"
                                  className="rounded-circle avatar-xs"
                                  alt="friend"
                                />
                              </a>
                            </div> */}
                          </div>
                        </div>
                        {/* end col*/}
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                          <div className="form-group mt-3 mt-xl-0">
                            <label htmlFor="projectname" className="mb-0">
                              Avatar
                            </label>
                            <p className="text-muted font-14">
                              Recommended thumbnail size 800x400 (px).
                            </p>
                          </div>
                          {/* File Upload */}
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
                                onChange={this.onChangeFirst}
                              />
                            </div>
                            <div className="dz-message needsclick">
                              <i className="h1 text-muted dripicons-cloud-upload" />
                              <h3>Drop files here or click to upload.</h3>
                              <span className="text-muted font-13">
                                (This is just a demo dropzone. Selected files
                                are
                                <strong>not</strong> actually uploaded.)
                              </span>
                            </div>
                          </form>
                          {/* Preview */}
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
                                              alt={item.name}
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
                          ) : null}
                          {/* Date View */}
                        </div>
                        {/* end col*/}
                      </div>
                      {/* end row */}
                    </div>

                    <div
                      className={
                        this.state.activeTab == "basictab2"
                          ? "tab-pane active"
                          : "tab-pane"
                      }
                      id="basictab2"
                    >
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group row mb-3">
                            <label
                              className="col-md-3 col-form-label"
                              htmlFor="name"
                            >
                              Business Need &amp; Benefits
                            </label>
                            <div className="col-md-9">
                              <textarea
                                name="name"
                                className="form-control"
                                placeholder="Francis"
                                defaultValue={""}
                                onChange={(val) => {
                                  this.setState({
                                    businessNeed: val.target.value,
                                  });
                                }}
                                value={this.state.businessNeed}
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-3">
                            <label
                              className="col-md-3 col-form-label"
                              htmlFor="name"
                            >
                              Objectives
                            </label>
                            <div className="col-md-9">
                              <textarea
                                name="name"
                                className="form-control"
                                placeholder="Francis"
                                defaultValue={""}
                                onChange={(val) => {
                                  this.setState({
                                    objectives: val.target.value,
                                  });
                                }}
                                value={this.state.objectives}
                              />
                            </div>
                          </div>
                          <p />
                          <h5>Scope</h5>
                          <p />
                          <div className="form-group row mb-3">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="name"
                            >
                              In Scope
                            </label>
                            <div className="col-md-4">
                              <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                // placeholder="Francis"
                                onChange={(val) => {
                                  this.setState({ inScope: val.target.value });
                                }}
                                value={this.state.inScope}
                              />
                            </div>
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="surname"
                            >
                              Out of Scope
                            </label>
                            <div className="col-md-4">
                              <input
                                type="text"
                                id="surname"
                                name="surname"
                                className="form-control"
                                // placeholder="Brinkman"
                                onChange={(val) => {
                                  this.setState({
                                    outOfScope: val.target.value,
                                  });
                                }}
                                value={this.state.outOfScope}
                              />
                            </div>
                          </div>
                          <p />
                          <h5>Deliverables</h5>
                          <p />
                          <div className="form-group row mb-3">
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="name"
                            >
                              Deliverable
                            </label>
                            <div className="col-md-4">
                              <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                // placeholder="Francis"
                                onChange={(val) => {
                                  this.setState({
                                    deliverable: val.target.value,
                                  });
                                }}
                                value={this.state.deliverable}
                              />
                            </div>
                            <label
                              className="col-md-2 col-form-label"
                              htmlFor="surname"
                            >
                              Due Date
                            </label>
                            <div className="col-md-4">
                              <input
                                type="date"
                                className="form-control date"
                                // id="birthdatepicker"
                                // data-toggle="date-picker"
                                // data-single-date-picker="true"
                                onChange={(val) => {
                                  this.setState({
                                    dueDateOverview: val.target.value,
                                  });
                                }}
                                value={this.state.dueDateOverview}
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-3">
                            <label
                              className="col-md-3 col-form-label"
                              htmlFor="name"
                            >
                              Key Considerations
                            </label>
                            <div className="col-md-9">
                              <textarea
                                name="name"
                                className="form-control"
                                // placeholder="Francis"
                                // defaultValue={""}
                                onChange={(val) => {
                                  this.setState({
                                    keyConsiderations: val.target.value,
                                  });
                                }}
                                value={this.state.keyConsiderations}
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-3">
                            <label
                              className="col-md-3 col-form-label"
                              htmlFor="name"
                            >
                              Success Criteria
                            </label>
                            <div className="col-md-9">
                              <textarea
                                name="name"
                                className="form-control"
                                placeholder="Francis"
                                defaultValue={""}
                                onChange={(val) => {
                                  this.setState({
                                    successCriteria: val.target.value,
                                  });
                                }}
                                value={this.state.successCriteria}
                              />
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    <div
                      className={
                        this.state.activeTab == "basictab3"
                          ? "tab-pane active"
                          : "tab-pane"
                      }
                      id="basictab3"
                    >
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group row mb-3">
                            <label
                              className="col-md-3 col-form-label"
                              htmlFor="name"
                            >
                              First name
                            </label>
                            <div className="col-md-9">
                              <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                value={this.state.firstName}
                                onChange={(val) => {
                                  this.setState({
                                    firstName: val.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-3">
                            <label
                              className="col-md-3 col-form-label"
                              htmlFor="surname"
                            >
                              Last name
                            </label>
                            <div className="col-md-9">
                              <input
                                type="text"
                                id="surname"
                                name="surname"
                                className="form-control"
                                value={this.state.lastName}
                                onChange={(val) => {
                                  this.setState({ lastName: val.target.value });
                                }}
                              />
                            </div>
                          </div>
                          <div className="form-group row mb-3">
                            <label
                              className="col-md-3 col-form-label"
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <div className="col-md-9">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={(val) => {
                                  this.setState({ email: val.target.value });
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    <div
                      className={
                        this.state.activeTab == "basictab4"
                          ? "tab-pane active"
                          : "tab-pane"
                      }
                      id="basictab4"
                    >
                      <div className="row">
                        <table className="table table-centered mb-0">
                          <thead className="thead-dark">
                            <tr align="center">
                              <th>Id</th>
                              <th>Stakeholder</th>
                              <th>Role</th>
                              <th>Impact</th>
                              <th>Influence</th>
                              <th>Risk Tolerance</th>
                              <th>Needs</th>
                              <th>Responsibility</th>
                              <th>
                                <button
                                  type="button"
                                  className="btn btn-success"
                                  onClick={() => {
                                    this.state.stackHolder.push({
                                      name: "",
                                      role: "",
                                      impact: "",
                                      influence: "",
                                      risk_tolerence: "",
                                      needs: "",
                                      responsibility: "",
                                    });
                                    this.setState({});
                                  }}
                                >
                                  <i className="mdi mdi-plus" />
                                </button>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.stackHolder.map((item, index) => {
                              return (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>
                                    <input
                                      type="text"
                                      id="name"
                                      name="name"
                                      className="form-control"
                                      // placeholder="Enter Name"
                                      value={
                                        this.state.stackHolder[index]
                                          .stakeholder
                                      }
                                      onChange={(val) => {
                                        this.state.stackHolder[
                                          index
                                        ].stakeholder = val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="surname"
                                      name="surname"
                                      className="form-control"
                                      // placeholder="Role"
                                      value={this.state.stackHolder[index].role}
                                      onChange={(val) => {
                                        this.state.stackHolder[index].role =
                                          val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="name"
                                      name="name"
                                      className="form-control"
                                      // placeholder="Francis"
                                      value={
                                        this.state.stackHolder[index].impact
                                      }
                                      onChange={(val) => {
                                        this.state.stackHolder[index].impact =
                                          val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="surname"
                                      name="surname"
                                      className="form-control"
                                      // placeholder="Brinkman"
                                      value={
                                        this.state.stackHolder[index].influence
                                      }
                                      onChange={(val) => {
                                        this.state.stackHolder[
                                          index
                                        ].influence = val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="name"
                                      name="name"
                                      className="form-control"
                                      // placeholder="Francis"
                                      value={
                                        this.state.stackHolder[index]
                                          .risk_tolerence
                                      }
                                      onChange={(val) => {
                                        this.state.stackHolder[
                                          index
                                        ].risk_tolerence = val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="surname"
                                      name="surname"
                                      className="form-control"
                                      // placeholder="Brinkman"
                                      value={
                                        this.state.stackHolder[index].needs
                                      }
                                      onChange={(val) => {
                                        this.state.stackHolder[index].needs =
                                          val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="email"
                                      name="email"
                                      className="form-control"
                                      // placeholder="cory1979 hotmail com"
                                      value={
                                        this.state.stackHolder[index]
                                          .responsibility
                                      }
                                      onChange={(val) => {
                                        this.state.stackHolder[
                                          index
                                        ].responsibility = val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    {index == 0 ? null : (
                                      <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => {
                                          this.state.stackHolder.pop(index);
                                          this.setState({});
                                        }}
                                      >
                                        <i className="mdi mdi-window-close" />
                                      </button>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      {/* end row */}
                    </div>
                    <div
                      className={
                        this.state.activeTab == "basictab5"
                          ? "tab-pane active"
                          : "tab-pane"
                      }
                      id="basictab5"
                    >
                      <div className>
                        <div className="time-line-container">
                          <TimeLine data={this.data} links={this.links} />
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        this.state.activeTab == "basictab6"
                          ? "tab-pane active"
                          : "tab-pane"
                      }
                      id="basictab6"
                    >
                      <div className="row">
                        {/* start projects*/}
                        <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                          <div className="pr-xl-3">
                            <table className="table table-centered mb-0">
                              <thead className="thead-dark">
                                <tr align="center">
                                  <th>Id</th>
                                  <th>Tasks</th>
                                  <th>Start</th>
                                  <th>Priority</th>
                                  <th>
                                    <button
                                      type="button"
                                      className="btn btn-success"
                                      onClick={() => {
                                        this.state.schedule.push(
                                          this.state.scheduleItem
                                        );
                                        this.setState({});
                                      }}
                                    >
                                      <i className="mdi mdi-plus" />
                                    </button>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.state.schedule.map((item, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>
                                        <input
                                          type="text"
                                          id="name"
                                          name="name"
                                          className="form-control"
                                          // placeholder="Francis"
                                          value={
                                            this.state.schedule[index].task
                                          }
                                          onChange={(val) => {
                                            this.state.schedule[index].task =
                                              val.target.value;
                                            this.setState({});
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          id="surname"
                                          name="surname"
                                          className="form-control"
                                          // placeholder="Brinkman"
                                          value={
                                            this.state.schedule[index].start
                                          }
                                          onChange={(val) => {
                                            this.state.schedule[index].start =
                                              val.target.value;
                                            this.setState({});
                                          }}
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="date"
                                          className="form-control date"
                                          id="birthdatepicker"
                                          // data-toggle="date-picker"
                                          // data-single-date-picker="true"
                                          value={
                                            this.state.schedule[index].priority
                                          }
                                          onChange={(val) => {
                                            this.state.schedule[
                                              index
                                            ].priority = val.target.value;
                                            this.setState({});
                                          }}
                                        />
                                      </td>
                                      <td>
                                        {index == 0 ? null : (
                                          <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => {
                                              this.state.schedule.pop(index);
                                              this.setState({});
                                            }}
                                          >
                                            <i className="mdi mdi-window-close" />
                                          </button>
                                        )}
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        {/* end projects */}
                        {/* gantt view */}
                        <div className="col-12 col-md-6 col-lg-6 col-xl-9 mt-xl-0">
                          <div className="pl-xl-3">
                            <div className="row">
                              <div className="col-auto">
                                <a
                                  href="javascript: void(0);"
                                  className="btn btn-success btn-sm mb-2"
                                >
                                  Add New Task
                                </a>
                              </div>
                              <div className="col text-sm-right">
                                <div
                                  className="btn-group btn-group-sm btn-group-toggle mb-2"
                                  data-toggle="buttons"
                                  id="modes-filter"
                                >
                                  <label className="btn btn-light d-none d-sm-inline-block">
                                    <input
                                      type="radio"
                                      name="modes"
                                      id="qday"
                                      defaultValue="Quarter Day"
                                    />
                                    Quarter Day
                                  </label>
                                  <label className="btn btn-light">
                                    <input
                                      type="radio"
                                      name="modes"
                                      id="hday"
                                      defaultValue="Half Day"
                                    />
                                    Half Day
                                  </label>
                                  <label className="btn btn-light">
                                    <input
                                      type="radio"
                                      name="modes"
                                      id="day"
                                      defaultValue="Day"
                                    />
                                    Day
                                  </label>
                                  <label className="btn btn-light active">
                                    <input
                                      type="radio"
                                      name="modes"
                                      id="week"
                                      defaultValue="Week"
                                      defaultChecked
                                    />
                                    Week
                                  </label>
                                  <label className="btn btn-light">
                                    <input
                                      type="radio"
                                      name="modes"
                                      id="month"
                                      defaultValue="Month"
                                    />
                                    Month
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mt-3">
                                <svg id="tasks-gantts" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end gantt view */}
                      </div>
                      {/* end row */}
                    </div>
                    <div
                      className={
                        this.state.activeTab == "basictab7"
                          ? "tab-pane active"
                          : "tab-pane"
                      }
                      id="basictab7"
                    >
                      <div className="row">
                        <table className="table table-centered mb-0">
                          <thead className="thead-dark">
                            <tr align="center">
                              <th>Id</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Email-id</th>
                              <th>Role</th>
                              <th>Responsibility</th>
                              <th>Start Date</th>
                              <th>End Date</th>
                              <th>Status</th>
                              <th>
                                <button
                                  type="button"
                                  className="btn btn-success"
                                  onClick={() => {
                                    this.state.staffing.push(
                                      this.state.staffingItem
                                    );
                                    this.setState({});
                                  }}
                                >
                                  <i className="mdi mdi-plus" />
                                </button>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.staffing.map((item, index) => {
                              return (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>
                                    <input
                                      type="text"
                                      id="name"
                                      name="name"
                                      className="form-control"
                                      // placeholder="Francis"
                                      value={
                                        this.state.staffing[index].first_name
                                      }
                                      onChange={(val) => {
                                        this.state.staffing[index].first_name =
                                          val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="surname"
                                      name="surname"
                                      className="form-control"
                                      // placeholder="Brinkman"
                                      value={
                                        this.state.staffing[index].last_name
                                      }
                                      onChange={(val) => {
                                        this.state.staffing[index].last_name =
                                          val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="email"
                                      id="name"
                                      name="name"
                                      className="form-control"
                                      // placeholder="francis@gmail.com"
                                      value={
                                        this.state.staffing[index].email_id
                                      }
                                      onChange={(val) => {
                                        this.state.staffing[index].email_id =
                                          val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="surname"
                                      name="surname"
                                      className="form-control"
                                      // placeholder="Brinkman"
                                      value={this.state.staffing[index].role}
                                      onChange={(val) => {
                                        this.state.staffing[index].role =
                                          val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="email"
                                      name="email"
                                      className="form-control"
                                      // placeholder="cory1979 hotmail com"
                                      value={
                                        this.state.staffing[index]
                                          .responsibility
                                      }
                                      onChange={(val) => {
                                        this.state.staffing[
                                          index
                                        ].responsibility = val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="date"
                                      className="form-control date"
                                      id="birthdatepicker"
                                      // data-toggle="date-picker"
                                      // data-single-date-picker="true"
                                      value={
                                        this.state.staffing[index].start_date
                                      }
                                      onChange={(val) => {
                                        this.state.staffing[index].start_date =
                                          val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="date"
                                      className="form-control date"
                                      id="birthdatepicker"
                                      // data-toggle="date-picker"
                                      // data-single-date-picker="true"
                                      value={
                                        this.state.staffing[index].end_date
                                      }
                                      onChange={(val) => {
                                        this.state.staffing[index].end_date =
                                          val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="email"
                                      name="email"
                                      className="form-control"
                                      // placeholder="cory1979 hotmail com"
                                      value={this.state.staffing[index].status}
                                      onChange={(val) => {
                                        this.state.staffing[index].status =
                                          val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    {index == 0 ? null : (
                                      <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => {
                                          this.state.staffing.pop(index);
                                          this.setState({});
                                        }}
                                      >
                                        <i className="mdi mdi-window-close" />
                                      </button>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      {/* end row */}
                    </div>
                    <div
                      className={
                        this.state.activeTab == "basictab8"
                          ? "tab-pane active"
                          : "tab-pane"
                      }
                      id="basictab8"
                    >
                      <div className="row">
                        <table className="table table-centered mb-0">
                          <thead className="thead-dark">
                            <tr align="center">
                              <th>Id</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Email-id</th>
                              <th>Role</th>
                              <th>Department</th>
                              <th>Responsible</th>
                              <th>Consultant</th>
                              <th>Inquire</th>
                              <th>Accountable</th>
                              <th>Report Name</th>
                              <th>Frequency</th>
                              <th>
                                <button
                                  type="button"
                                  className="btn btn-success"
                                  onClick={() => {
                                    this.state.communications.push({
                                      first_name: "",
                                      last_name: "",
                                      email_id: "",
                                      role: "",
                                      department: "",
                                      responsible: "",
                                      consultant: "",
                                      inquire: "",
                                      accountable: "",
                                      report_name: "",
                                      frequency: "",
                                    });
                                    this.setState({});
                                  }}
                                >
                                  <i className="mdi mdi-plus" />
                                </button>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.communications.map((item, index) => {
                              return (
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <input
                                      type="text"
                                      id="name"
                                      name="name"
                                      className="form-control"
                                      // placeholder="Francis"
                                      value={
                                        this.state.communications[index]
                                          .first_name
                                      }
                                      onChange={(val) => {
                                        this.state.communications[
                                          index
                                        ].first_name = val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="surname"
                                      name="surname"
                                      className="form-control"
                                      // placeholder="Brinkman"
                                      value={
                                        this.state.communications[index]
                                          .last_name
                                      }
                                      onChange={(val) => {
                                        this.state.communications[
                                          index
                                        ].last_name = val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="email"
                                      id="name"
                                      name="name"
                                      className="form-control"
                                      // placeholder="francis@gmail.com"
                                      value={
                                        this.state.communications[index]
                                          .email_id
                                      }
                                      onChange={(val) => {
                                        this.state.communications[
                                          index
                                        ].email_id = val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="surname"
                                      name="surname"
                                      className="form-control"
                                      // placeholder="Brinkman"
                                      value={
                                        this.state.communications[index].role
                                      }
                                      onChange={(val) => {
                                        this.state.communications[index].role =
                                          val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="email"
                                      name="email"
                                      className="form-control"
                                      // placeholder="cory1979 hotmail com"
                                      value={
                                        this.state.communications[index]
                                          .department
                                      }
                                      onChange={(val) => {
                                        this.state.communications[
                                          index
                                        ].department = val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="name"
                                      name="name"
                                      className="form-control"
                                      // placeholder="Francis"
                                      value={
                                        this.state.communications[index]
                                          .responsible
                                      }
                                      onChange={(val) => {
                                        this.state.communications[
                                          index
                                        ].responsible = val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="surname"
                                      name="surname"
                                      className="form-control"
                                      // placeholder="Brinkman"
                                      value={
                                        this.state.communications[index]
                                          .consultant
                                      }
                                      onChange={(val) => {
                                        this.state.communications[
                                          index
                                        ].consultant = val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="email"
                                      id="name"
                                      name="name"
                                      className="form-control"
                                      // placeholder="francis@gmail.com"
                                      value={
                                        this.state.communications[index].inquire
                                      }
                                      onChange={(val) => {
                                        this.state.communications[
                                          index
                                        ].inquire = val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="surname"
                                      name="surname"
                                      className="form-control"
                                      // placeholder="Brinkman"
                                      value={
                                        this.state.communications[index]
                                          .accountable
                                      }
                                      onChange={(val) => {
                                        this.state.communications[
                                          index
                                        ].accountable = val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="email"
                                      name="email"
                                      className="form-control"
                                      // placeholder="cory1979 hotmail com"
                                      value={
                                        this.state.communications[index]
                                          .report_name
                                      }
                                      onChange={(val) => {
                                        this.state.communications[
                                          index
                                        ].report_name = val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      id="email"
                                      name="email"
                                      className="form-control"
                                      // placeholder="cory1979 hotmail com"
                                      value={
                                        this.state.communications[index]
                                          .frequency
                                      }
                                      onChange={(val) => {
                                        this.state.communications[
                                          index
                                        ].frequency = val.target.value;
                                        this.setState({});
                                      }}
                                    />
                                  </td>
                                  <td>
                                    {index == 0 ? null : (
                                      <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => {
                                          this.state.communications.pop(index);
                                          this.setState({});
                                        }}
                                      >
                                        <i className="mdi mdi-window-close" />
                                      </button>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      {/* end row */}
                    </div>
                    <div
                      className={
                        this.state.activeTab == "basictab9"
                          ? "tab-pane active"
                          : "tab-pane"
                      }
                      id="basictab9"
                    >
                      <div className="row">
                        <div className="col-12">
                          <h4>INTERNAL EXPENCES</h4>
                          <p>
                            <h5>Salaries</h5>{" "}
                          </p>
                          {this.state.cost.map((item, index) => {
                            return (
                              <div className="form-group row mb-3">
                                <label
                                  className="col-md-2 col-form-label"
                                  htmlFor="name"
                                >
                                  Type of Resource
                                </label>
                                <div className="col-md-2">
                                  <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Francis"
                                    value={this.state.cost[index].resource}
                                    onChange={(val) => {
                                      this.state.cost[index].resource =
                                        val.target.value;
                                      this.setState({});
                                    }}
                                  />
                                </div>
                                <label
                                  className="col-md-2 col-form-label"
                                  htmlFor="surname"
                                >
                                  Total Cost
                                </label>
                                <div className="col-md-2">
                                  <input
                                    data-toggle="touchspin"
                                    type="text"
                                    data-bts-prefix="$"
                                    className="form-control"
                                    value={this.state.cost[index].cost}
                                    onChange={(val) => {
                                      this.state.cost[index].cost =
                                        val.target.value;
                                      this.setState({});
                                    }}
                                  />
                                </div>
                                <label
                                  className="col-md-2 col-form-label"
                                  htmlFor="name"
                                >
                                  Type of Expence
                                </label>
                                <div className="col-md-2">
                                  <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Francis"
                                    value={this.state.cost[index].expense}
                                    onChange={(val) => {
                                      this.state.cost[index].expense =
                                        val.target.value;
                                      this.setState({});
                                    }}
                                  />
                                </div>
                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => {
                                      this.state.cost.push(this.state.costItem);
                                      this.setState({});
                                    }}
                                  >
                                    <i className="mdi mdi-plus" />
                                  </button>
                                </div>
                                <div>
                                  {index == 0 ? null : (
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      onClick={() => {
                                        this.state.cost.pop(index);
                                        this.setState({});
                                      }}
                                    >
                                      <i className="mdi mdi-window-close" />
                                    </button>
                                  )}
                                </div>
                              </div>
                            );
                          })}

                          <h4>EXTERNAL EXPENCES</h4>
                          <p>
                            <h5>Consulting Cost</h5>
                          </p>
                          {this.state.costex.map((item, index) => {
                            return (
                              <div className="form-group row mb-3">
                                <label
                                  className="col-md-2 col-form-label"
                                  htmlFor="name"
                                >
                                  Type of Consulting
                                </label>
                                <div className="col-md-2">
                                  <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Francis"
                                    value={this.state.costex[index].resource_ex}
                                    onChange={(val) => {
                                      this.state.costex[index].resource_ex =
                                        val.target.value;
                                      this.setState({});
                                    }}
                                  />
                                </div>
                                <label
                                  className="col-md-2 col-form-label"
                                  htmlFor="surname"
                                >
                                  Total Cost
                                </label>
                                <div className="col-md-2">
                                  <input
                                    data-toggle="touchspin"
                                    type="text"
                                    data-bts-prefix="$"
                                    className="form-control"
                                    value={this.state.costex[index].cost_ex}
                                    onChange={(val) => {
                                      this.state.costex[index].cost_ex =
                                        val.target.value;
                                      this.setState({});
                                    }}
                                  />
                                </div>
                                <label
                                  className="col-md-2 col-form-label"
                                  htmlFor="name"
                                >
                                  Type of Expence
                                </label>
                                <div className="col-md-2">
                                  <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Francis"
                                    value={this.state.costex[index].expense_ex}
                                    onChange={(val) => {
                                      this.state.costex[index].expense_ex =
                                        val.target.value;
                                      this.setState({});
                                    }}
                                  />
                                </div>
                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => {
                                      this.state.costex.push(
                                        this.state.costexItem
                                      );
                                      this.setState({});
                                    }}
                                  >
                                    <i className="mdi mdi-plus" />
                                  </button>
                                </div>
                                <div>
                                  {index == 0 ? null : (
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      onClick={() => {
                                        this.state.costex.pop(index);
                                        this.setState({});
                                      }}
                                    >
                                      <i className="mdi mdi-window-close" />
                                    </button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    <div
                      className={
                        this.state.activeTab == "basictab10"
                          ? "tab-pane active"
                          : "tab-pane"
                      }
                      id="basictab10"
                    >
                      <div className="row">
                        <div className="col-12">
                          {/* File Upload */}
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
                                onChange={this.procurementFile}
                              />
                            </div>
                            <div className="dz-message needsclick">
                              <i className="h1 text-muted dripicons-cloud-upload" />
                              <h3>Drop files here or click to upload.</h3>
                              <span className="text-muted font-13">
                                (This is just a demo dropzone. Selected files
                                are
                                <strong>not</strong> actually uploaded.)
                              </span>
                            </div>
                          </form>
                          {/* Preview */}
                          <div
                            className="dropzone-previews mt-3"
                            id="file-previews"
                          />
                          {/* file preview template */}
                          {this.state.procurement.length > 0 ? (
                            <div className="d-block" id="uploadPreviewTemplate">
                              <div className="card mt-1 mb-0 shadow-none border">
                                <div className="p-2">
                                  <h6>UPLOADED IMAGES:</h6>
                                  <div className="row align-items-center">
                                    {/* {this.state.procurement.map(
                                      (item, index) => {
                                        let ext = item.image.split(".").pop();
                                        if (ext == "docx" || ext == "doc") {
                                          return (
                                            <div
                                              className="col-auto"
                                              key={index}
                                            >
                                              <img
                                                data-dz-thumbnail
                                                src={
                                                  "https://www.kindpng.com/picc/m/249-2499221_download-icon-document-download-icon-png-transparent-png.png"
                                                }
                                                className="avatar-sm rounded bg-light"
                                                alt="preview"
                                                onClick={() => {
                                                  var win = window.open(
                                                    this.state.img_url +
                                                      item.image,
                                                    "_blank"
                                                  );
                                                  win.focus();
                                                }}
                                              />
                                              <a
                                                href
                                                className="text-muted close"
                                                data-dz-remove
                                                onClick={() => {
                                                  // alert(index);
                                                  this.state.procurement.pop(
                                                    index
                                                  );
                                                  this.setState({});
                                                }}
                                              >
                                                <i className="dripicons-cross" />
                                              </a>
                                            </div>
                                          );
                                        }
                                        if (ext == "pdf") {
                                          return (
                                            <div
                                              className="col-auto"
                                              key={index}
                                            >
                                              <img
                                                data-dz-thumbnail
                                                src={
                                                  "https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png"
                                                }
                                                className="avatar-sm rounded bg-light"
                                                alt="preview"
                                                onClick={() => {
                                                  var win = window.open(
                                                    this.state.img_url +
                                                      item.image,
                                                    "_blank"
                                                  );
                                                  win.focus();
                                                }}
                                              />
                                              <a
                                                href
                                                className="text-muted close"
                                                data-dz-remove
                                                onClick={() => {
                                                  // alert(index);
                                                  this.state.procurement.pop(
                                                    index
                                                  );
                                                  this.setState({});
                                                }}
                                              >
                                                <i className="dripicons-cross" />
                                              </a>
                                            </div>
                                          );
                                        }
                                        return (
                                          <div className="col-auto" key={index}>
                                            <img
                                              data-dz-thumbnail
                                              src={
                                                this.state.img_url + item.image
                                              }
                                              className="avatar-sm rounded bg-light"
                                              alt="preview"
                                              onClick={() => {
                                                var win = window.open(
                                                  this.state.img_url +
                                                    item.image,
                                                  "_blank"
                                                );
                                                win.focus();
                                              }}
                                            />
                                            <a
                                              href
                                              className="text-muted close"
                                              data-dz-remove
                                              onClick={() => {
                                                // alert(index);
                                                this.state.procurement.pop(
                                                  index
                                                );
                                                this.setState({});
                                              }}
                                            >
                                              <i className="dripicons-cross" />
                                            </a>
                                          </div>
                                        );
                                      }
                                    )} */}
                                     <Carousel arrows>
                          {this.state.procurement.map((item, index) => {
                            let url =
                              this.state.img_url+item.image;
                            return (
                              <img
                                key={index}
                                src={url}
                                className="img-example"
                              />
                            );
                          })}
                        </Carousel>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : null}

                          {this.state.new_img.length > 0 ? (
                            <div className="d-block" id="uploadPreviewTemplate">
                              <div className="card mt-1 mb-0 shadow-none border">
                                <div className="p-2">
                                  <h6>NEW IMAGES TO BE UPLOADED:</h6>
                                  <div className="row align-items-center">
                                    {this.state.new_img.map((item, index) => {
                                      return (
                                        <div className="col-auto" key={index}>
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
                                              // alert(index);
                                              this.state.new_img.pop(index);
                                              this.setState({});
                                            }}
                                          >
                                            <i className="dripicons-cross" />
                                          </a>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    <div
                      className={
                        this.state.activeTab == "basictab11"
                          ? "tab-pane active"
                          : "tab-pane"
                      }
                      id="basictab11"
                    >
                      <div className="row">
                        <div className="col-12">
                          {/* File Upload */}
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
                                onChange={this.riskImage}
                              />
                            </div>
                            <div className="dz-message needsclick">
                              <i className="h1 text-muted dripicons-cloud-upload" />
                              <h3>Drop files here or click to upload.</h3>
                              <span className="text-muted font-13">
                                (This is just a demo dropzone. Selected files
                                are
                                <strong>not</strong> actually uploaded.)
                              </span>
                            </div>
                          </form>
                          {/* Preview */}
                          <div
                            className="dropzone-previews mt-3"
                            id="file-previews"
                          />

                          {/* file preview template */}
                          {this.state.riskImage.length > 0 ? (
                            <div className="d-block" id="uploadPreviewTemplate">
                              <div className="card mt-1 mb-0 shadow-none border">
                                <div className="p-2">
                                  <h6>UPLOADED IMAGES:</h6>
                                  <div className="row align-items-center">
                                    {this.state.riskImage.map((item, index) => {
                                      let ext = item.image.split(".").pop();
                                      if (ext == "docx" || ext == "doc") {
                                        return (
                                          <div className="col-auto" key={index}>
                                            <img
                                              data-dz-thumbnail
                                              src={
                                                "https://www.kindpng.com/picc/m/249-2499221_download-icon-document-download-icon-png-transparent-png.png"
                                              }
                                              className="avatar-sm rounded bg-light"
                                              alt="preview"
                                              onClick={() => {
                                                var win = window.open(
                                                  this.state.img_url +
                                                    item.image,
                                                  "_blank"
                                                );
                                                win.focus();
                                              }}
                                            />
                                            <a
                                              href
                                              className="text-muted close"
                                              data-dz-remove
                                              onClick={() => {
                                                // alert(index);
                                                this.state.procurement.pop(
                                                  index
                                                );
                                                this.setState({});
                                              }}
                                            >
                                              <i className="dripicons-cross" />
                                            </a>
                                          </div>
                                        );
                                      }
                                      if (ext == "pdf") {
                                        return (
                                          <div className="col-auto" key={index}>
                                            <img
                                              data-dz-thumbnail
                                              src={
                                                "https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png"
                                              }
                                              className="avatar-sm rounded bg-light"
                                              alt="preview"
                                              onClick={() => {
                                                var win = window.open(
                                                  this.state.img_url +
                                                    item.image,
                                                  "_blank"
                                                );
                                                win.focus();
                                              }}
                                            />
                                            <a
                                              href
                                              className="text-muted close"
                                              data-dz-remove
                                              onClick={() => {
                                                // alert(index);
                                                this.state.procurement.pop(
                                                  index
                                                );
                                                this.setState({});
                                              }}
                                            >
                                              <i className="dripicons-cross" />
                                            </a>
                                          </div>
                                        );
                                      }
                                      return (
                                        <div className="col-auto" key={index}>
                                          <img
                                            data-dz-thumbnail
                                            src={
                                              this.state.img_url + item.image
                                            }
                                            className="avatar-sm rounded bg-light"
                                            alt="preview"
                                            onClick={() => {
                                              var win = window.open(
                                                this.state.img_url + item.image,
                                                "_blank"
                                              );
                                              win.focus();
                                            }}
                                          />
                                          <a
                                            href
                                            className="text-muted close"
                                            data-dz-remove
                                            onClick={() => {
                                              // alert(index);
                                              this.state.procurement.pop(index);
                                              this.setState({});
                                            }}
                                          >
                                            <i className="dripicons-cross" />
                                          </a>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : null}
                          {this.state.new_risk_img.length > 0 ? (
                            <div className="d-block" id="uploadPreviewTemplate">
                              <div className="card mt-1 mb-0 shadow-none border">
                                <div className="p-2">
                                  <h6>NEW IMAGES TO BE UPLOADED:</h6>
                                  <div className="row align-items-center">
                                    {this.state.new_risk_img.map(
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
                                                // alert(index);
                                                this.state.new_risk_img.pop(
                                                  index
                                                );
                                                this.setState({});
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
                          ) : null}
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    <div
                      className={
                        this.state.activeTab == "basictab12"
                          ? "tab-pane active"
                          : "tab-pane"
                      }
                      id="basictab12"
                    >
                      <div className="row">
                        <div className="col-12">
                          {/* File Upload */}
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
                                (This is just a demo dropzone. Selected files
                                are
                                <strong>not</strong> actually uploaded.)
                              </span>
                            </div>
                          </form>
                          {/* Preview */}
                          <div
                            className="dropzone-previews mt-3"
                            id="file-previews"
                          />
                          {/* file preview template */}
                          {this.state.governance.length > 0 ? (
                            <div className="d-block" id="uploadPreviewTemplate">
                              <div className="card mt-1 mb-0 shadow-none border">
                                <div className="p-2">
                                  <h6>UPLOADED IMAGES:</h6>
                                  <div className="row align-items-center">
                                    {this.state.governance.map(
                                      (item, index) => {
                                        let ext = item.image.split(".").pop();
                                        if (ext == "docx" || ext == "doc") {
                                          return (
                                            <div
                                              className="col-auto"
                                              key={index}
                                            >
                                              <img
                                                data-dz-thumbnail
                                                src={
                                                  "https://www.kindpng.com/picc/m/249-2499221_download-icon-document-download-icon-png-transparent-png.png"
                                                }
                                                className="avatar-sm rounded bg-light"
                                                alt="preview"
                                                onClick={() => {
                                                  var win = window.open(
                                                    this.state.img_url +
                                                      item.image,
                                                    "_blank"
                                                  );
                                                  win.focus();
                                                }}
                                              />
                                              <a
                                                href
                                                className="text-muted close"
                                                data-dz-remove
                                                onClick={() => {
                                                  // alert(index);
                                                  this.state.procurement.pop(
                                                    index
                                                  );
                                                  this.setState({});
                                                }}
                                              >
                                                <i className="dripicons-cross" />
                                              </a>
                                            </div>
                                          );
                                        }
                                        if (ext == "pdf") {
                                          return (
                                            <div
                                              className="col-auto"
                                              key={index}
                                            >
                                              <img
                                                data-dz-thumbnail
                                                src={
                                                  "https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png"
                                                }
                                                className="avatar-sm rounded bg-light"
                                                alt="preview"
                                                onClick={() => {
                                                  var win = window.open(
                                                    this.state.img_url +
                                                      item.image,
                                                    "_blank"
                                                  );
                                                  win.focus();
                                                }}
                                              />
                                              <a
                                                href
                                                className="text-muted close"
                                                data-dz-remove
                                                onClick={() => {
                                                  // alert(index);
                                                  this.state.procurement.pop(
                                                    index
                                                  );
                                                  this.setState({});
                                                }}
                                              >
                                                <i className="dripicons-cross" />
                                              </a>
                                            </div>
                                          );
                                        }
                                        return (
                                          <div className="col-auto" key={index}>
                                            <img
                                              data-dz-thumbnail
                                              src={
                                                this.state.img_url + item.image
                                              }
                                              className="avatar-sm rounded bg-light"
                                              alt="preview"
                                              onClick={() => {
                                                var win = window.open(
                                                  this.state.img_url +
                                                    item.image,
                                                  "_blank"
                                                );
                                                win.focus();
                                              }}
                                            />
                                            <a
                                              href
                                              className="text-muted close"
                                              data-dz-remove
                                              onClick={() => {
                                                // alert(index);
                                                this.state.procurement.pop(
                                                  index
                                                );
                                                this.setState({});
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
                          ) : null}
                          {this.state.new_govr_img.length > 0 ? (
                            <div className="d-block" id="uploadPreviewTemplate">
                              <div className="card mt-1 mb-0 shadow-none border">
                                <div className="p-2">
                                  <h6>NEW IMAGES TO BE UPLOADED:</h6>
                                  <div className="row align-items-center">
                                    {this.state.new_govr_img.map(
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
                                                // alert(index);
                                                this.state.new_govr_img.pop(
                                                  index
                                                );
                                                this.setState({});
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
                          ) : null}
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    <div
                      className={
                        this.state.activeTab == "basictab13"
                          ? "tab-pane active"
                          : "tab-pane"
                      }
                      id="basictab13"
                    >
                      <div className="row">
                        <div className="col-12">
                          <div className="text-center">
                            <h2 className="mt-0">
                              <i className="mdi mdi-check-all" />
                            </h2>
                            <h3 className="mt-0">Thank you !</h3>
                            <p className="w-75 mb-2 mx-auto">
                              Quisque nec turpis at urna dictum luctus.
                              Suspendisse convallis dignissim eros at volutpat.
                              In egestas mattis dui. Aliquam mattis dictum
                              aliquet.
                            </p>
                            <div className="mb-3">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck1"
                                  checked={this.state.isChecked}
                                  onChange={() => {
                                    this.setState({
                                      isChecked: !this.state.isChecked,
                                    });
                                  }}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="customCheck1"
                                >
                                  I agree with the Terms and Conditions
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    <br />
                    <ul className="list-inline wizard mb-0">
                      {this.state.activeTab !== "basictab1" ? (
                        <li className="previous list-inline-item">
                          <button
                            type="button"
                            className="btn btn-info"
                            onClick={() => {
                              this.backStep();
                            }}
                          >
                            Previous
                          </button>
                        </li>
                      ) : null}
                      <li className="next list-inline-item float-right">
                        <button
                          type="button"
                          className="btn btn-info"
                          onClick={() => {
                            this.nextStep();
                          }}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </div>
                  {/* tab-content */}
                </div>
                {/* end #basicwizard*/}
              </div>
              {/* end card-body */}
            </div>
            {/* end card*/}
          </div>
          {/* end col */}
        </div>
      </div>
    );
  }
}
