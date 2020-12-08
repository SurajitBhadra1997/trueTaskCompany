import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcomb from "../../components/breadcomb";
import TimeLine from "react-gantt-timeline";
import { reactLocalStorage } from "reactjs-localstorage";
import HttpClient from "./../../../utils/HttpClient";
import ReactJsAlert from "reactjs-alert";
import Select from "react-select";
import Lightbox from "./lightbox";
// import PdfViewer from "./pdfViewer";
import PDFViewer from "mgr-pdf-viewer-react";
// import PDFViewer from 'pdf-viewer-reactjs';
import { Document, Page } from "react-pdf";
import Switch from "react-switch";
import ReactTags from "react-tag-autocomplete";
import "./react-tag.css";
import LoadingOverlay from "react-loading-overlay";
const keycode = { TAB: 9, SPACE: 32, COMMA: 188 };
const delimiter = [keycode.TAB, keycode.SPACE, keycode.COMMA];


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
      img_url: "http://trutask.easytodb.com/uploads/program_photo/",
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
      seletedCategory: [],
      team_member: [],
      team_id: "",
      type: "",
      pro_id: "",
      risk_id: "",
      govr_id: "",
      project_type: [],
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
      //new field added in settings tab
      country: "",
      currency: "",
      timezone: "",
      waterfall: "",
      mileStone: "",
      holiday_new_img: [],
      holidayFile: "",
      optionscountry: [{ key: "400", value: "Select" }],
      country_data: [],

      projectstatus: "",
      projectpriority: "",
      projecttag: "",
      projectriskcategory: "",
      taskstatus: "",
      taskpriority: "",
      tasktag: "",
      taskriskcategory: "",
      notify: "",
      mondaySelected: false,
      tuesdaySelected: false,
      wednesdaySelected: false,
      thrusdaySelected: false,
      fridaySelected: false,
      saturdaySelected: false,
      sundaySelected: false,
      selectedworkingday: [],
      obj1: {},
      optionspriority: [
        { key: "1", value: "Select" },
        { key: "2", value: "High" },
        { key: "3", value: "Medium" },
        { key: "4", value: "Low" },
      ],
      optionstag: [
        { key: "10", value: "Select" },
        { key: "11", value: "Sales" },
        { key: "12", value: "Marketing" },
        { key: "13", value: "Payment Gateway" },
        { key: "14", value: "Integartions" },
      ],
      optionsriskcategory: [
        { key: "20", value: "Select" },
        { key: "21", value: " Technical Risk" },
        { key: "22", value: "Supply Chain" },
        { key: "23", value: "Manufacturability risks" },
        { key: "25", value: "Unit cost" },
        { key: "26", value: "Product fit/Market" },
        { key: "28", value: "Resource Risks" },
        { key: "29", value: "Interpersonal" },
        { key: "30", value: "Regulatory" },
        { key: "31", value: "Unknown risks" },
      ],
      optionstask: [
        { key: "300", value: "Select" },
        { key: "301", value: "Status" },
        { key: "302", value: "Priority" },
        { key: "303", value: "Tags" },
        { key: "304", value: "Risk category" },
      ],

      //SPRINT
      optionssprint: [
        { key: "300", value: "Select" },
        { key: "301", value: "1 Week" },
        { key: "302", value: "2 Week" },
        { key: "303", value: "3 Week" },
        { key: "304", value: "1 Month" },
      ],
      sprint: "",

      //TASK

      optionstaskstatus: [
        { key: "300", value: "Select" },
        { key: "301", value: "Draft" },
        { key: "302", value: "InProcess" },
        { key: "303", value: "Released" },
        { key: "304", value: "Rejected" },
        { key: "305", value: "Ongoing" },
        { key: "306", value: "Delayed" },
        { key: "307", value: "Completed" },
        { key: "308", value: "Closed" },
        { key: "309", value: "Terminated" },
      ],
      optionstaskpriority: [
        { key: "1", value: "Select" },
        { key: "2", value: "High" },
        { key: "3", value: "Medium" },
        { key: "4", value: "Low" },
      ],
      optionstasktag: [
        { key: "10", value: "Select" },
        { key: "11", value: "Sales" },
        { key: "12", value: "Marketing" },
        { key: "13", value: "Payment Gateway" },
        { key: "14", value: "Integartions" },
      ],
      optionstaskriskcategory: [
        { key: "20", value: "Select" },
        { key: "21", value: " Technical Risk" },
        { key: "22", value: "Supply Chain" },
        { key: "23", value: "Manufacturability risks" },
        { key: "25", value: "Unit cost" },
        { key: "26", value: "Product fit/Market" },
        { key: "28", value: "Resource Risks" },
        { key: "29", value: "Interpersonal" },
        { key: "30", value: "Regulatory" },
        { key: "31", value: "Unknown risks" },
      ],

      notificationtype: [
        { key: "600", value: "Select" },
        { key: "601", value: "E-mail" },
      ],
      //program tab project select dropdown
      selectedProjectType: [],

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
          department: "",
          responsible: false,
          consultant: false,
          inquire: false,
          accountable: false,
          report_name: "",
          frequency: "",
          first_name: "",
          last_name: "",
          email_id: "",
          role: "",
          responsibility: "",
          start_date: "",
          end_date: "",
          status: "",
          id: "",
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
        id: "",
      },
      communications: [
        {
          first_name: "",
          last_name: "",
          email_id: "",
          role: "",
          department: "",
          responsible: false,
          consultant: false,
          inquire: false,
          accountable: false,
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
        responsible: false,
        consultant: false,
        inquire: false,
        accountable: false,
        report_name: "",
        frequency: "",
      },
      optionsdata: [],
      optionType: [
        { label: "Select", value: "Select" },
        { label: "Simple Issue List", value: " Simple Issue List" },
        {
          label: "Waterfall Project Management",
          value: "Waterfall Project Management",
        },
        {
          label: "Scrum Project Management",
          value: "Scrum Project Management",
        },
        {
          label: "Kanban Project Management",
          value: "Kanban Project Management",
        },
        { label: "Lean Project Management", value: "Lean Project Management" },
        {
          label: "Six Sigma Project Management",
          value: "Six Sigma Project Management",
        },
      ],

      selectedCost: "",
      cost: [
        {
          cost_type: "",
          resource: "",
          cost: "",
          expense: "",
          remarks: "",
          start_date: "",
          end_date: "",
          currency: "",
        },
      ],
      costItem: {
        cost_type: "",
        resource: "",
        cost: "",
        expense: "",
        remarks: "",
        start_date: "",
        end_date: "",
        currency: "",
      },
      // costex: [
      //   {
      //     resource_ex: "",
      //     cost_ex: "",
      //     expense_ex: "",
      //   },
      // ],
      // costexItem: {
      //   resource_ex: "",
      //   cost_ex: "",
      //   expense_ex: "",
      // },
      // resource_internal:[],
      // cost_internal:[],
      // expense_internal:[],

      // resource_external:[],
      // cost_external:[],
      // expense_external:[],
      id: "",
      procurement: [],
      new_img: [],
      new_risk_img: [],
      new_govr_img: [],
      procurementFile: "",
      procurementFileArray: [],
      image_array: [],
      risk_image_array: [],
      govr_image_array: [],
      image_carasoul: false,
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

      // new settings tab
      statusproject: [],
      priorityptroject: [],
      tagsproject: [],
      riskproject: [],

      statustask: [],
      prioritytask: [],
      tagstask: [],
      risktask: [],

      tags: [],
      suggestions: [
        { id: 3, name: "Bananas" },
        { id: 4, name: "Mangos" },
        { id: 5, name: "Lemons" },
        { id: 6, name: "Apricots" },
      ],

      tags1: [],
      suggestions1: [
        { id: 3, name: "Bananas" },
        { id: 4, name: "Mangos" },
        { id: 5, name: "Lemons" },
        { id: 6, name: "Apricots" },
      ],

      tags2: [],
      suggestions2: [
        { id: 3, name: "Bananas" },
        { id: 4, name: "Mangos" },
        { id: 5, name: "Lemons" },
        { id: 6, name: "Apricots" },
      ],

      tags3: [],
      suggestions3: [
        { id: 3, name: "Bananas" },
        { id: 4, name: "Mangos" },
        { id: 5, name: "Lemons" },
        { id: 6, name: "Apricots" },
      ],

      //task
      tags4: [],
      suggestions4: [
        { id: 3, name: "Bananas" },
        { id: 4, name: "Mangos" },
        { id: 5, name: "Lemons" },
        { id: 6, name: "Apricots" },
      ],
      tags5: [],
      suggestions5: [
        { id: 3, name: "Bananas" },
        { id: 4, name: "Mangos" },
        { id: 5, name: "Lemons" },
        { id: 6, name: "Apricots" },
      ],
      tags6: [],
      suggestions6: [
        { id: 3, name: "Bananas" },
        { id: 4, name: "Mangos" },
        { id: 5, name: "Lemons" },
        { id: 6, name: "Apricots" },
      ],
      tags7: [],
      suggestions7: [
        { id: 3, name: "Bananas" },
        { id: 4, name: "Mangos" },
        { id: 5, name: "Lemons" },
        { id: 6, name: "Apricots" },
      ],
      tags8: [],
      suggestions8: [
        { id: 3, name: "Bananas" },
        { id: 4, name: "Mangos" },
        { id: 5, name: "Lemons" },
        { id: 6, name: "Apricots" },
      ],
      cat: [],
      category: [],

      report: "",
      stringified_obj1: {},
      stringified_obj2: {},
      stringified_obj3: {},
      stringified_obj4: {},
      stringified_obj5: {},
      stringified_obj6: {},
      stringified_obj7: {},
      stringified_obj8: {},
      stringified_obj9: {},
      category_obj: {},
      isloading: false,
      data: [],

      //for teams and communication
      employeelist:[],
      employeeemails:[],
    };
    //this.handleChange = this.handleChange.bind(this);
    this.reactTags = React.createRef();
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

  getemployeelist =async(id) =>
  {
    let data={
      company_id:id,
    };
  console.log(data);
  let result = await HttpClient.requestData("company-staff", "POST", data);
    console.log("tabs", result);
    if (result && result.status) {
     let i=401;
     let temp=[];
     result.data.forEach((element) => {
       let dom={id:i,value:element.email};
      temp.push(dom);
      i++;
    });
    this.setState({
      employeelist:result.data,
      employeeemails:temp,
    });
    }
  }

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
          id: item.id,
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

  //get country

  getCountry = async () => {
    let i = 401;
    let result = await HttpClient.requestData("counrty", "GET");
    console.log(result);
    if (result && result.data.length > 0) {
      result.data.forEach((element) => {
        let dom = { key: i, value: element.name };
        this.state.optionscountry.push(dom);
        i++;
      });
      this.setState({
        optionscountry: this.state.optionscountry,
        country_data: result.data,
      });
      setTimeout(() => {
        console.log("event.target.value", this.state.optionscountry);
      }, 3000);
    }
  };

  projectData = async (userId) => {
    let data = {
      user_id: userId,
    };
    let result = await HttpClient.requestData("programdata", "POST", data);
    console.log("result_data", result);
    if (result && result.status) {
      let currentData = [];
      if (this.state.fromId != "") {
        currentData = result.data.filter(
          (item) => item.auto_id == this.state.fromId
        );
        console.log("result_data", currentData);
        let img_file = currentData[0] ? currentData[0].image : "";
        let holiday_file =
          currentData[0] && currentData[0].setting[0]
            ? currentData[0].setting[0].holiday
            : "";
        let temp_arr =
          currentData[0] && currentData[0].member
            ? currentData[0].member
            : null;
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
            // holiday_new_img:[
            //   {
            //     preview: this.state.img_url+holiday_file,
            //   },
            // ],
            procurement: currentData[0].procurement_get,
            id: currentData[0].procurement_get.id,

            riskImage: currentData[0].risk_get,
            governance: currentData[0].govern_get,
            //setting tab
            country: currentData[0].setting[0]
              ? currentData[0].setting[0].country
              : "",
            currency: currentData[0].setting[0]
              ? currentData[0].setting[0].currency
              : "",
            timezone: currentData[0].setting[0]
              ? currentData[0].setting[0].timezone
              : "",
            frequency: currentData[0].setting[0]
              ? currentData[0].setting[0].frequency
              : "",
            mileStone: currentData[0].setting[0]
              ? currentData[0].setting[0].milestone
              : "",
            sprint: currentData[0].setting[0]
              ? currentData[0].setting[0].sprint
              : "",
            notify: currentData[0].setting[0]
              ? currentData[0].setting[0].notification
              : "",
            projectstatus: currentData[0].setting[0]
              ? currentData[0].setting[0].project_status
              : "",
            projecttag: currentData[0].setting[0]
              ? currentData[0].setting[0].project_tags
              : "",
            projectpriority: currentData[0].setting[0]
              ? currentData[0].setting[0].project_priority
              : "",
            projectriskcategory: currentData[0].setting[0]
              ? currentData[0].setting[0].project_risk
              : "",
            taskstatus: currentData[0].setting[0]
              ? currentData[0].setting[0].task_status
              : "",
            tasktag: currentData[0].setting[0]
              ? currentData[0].setting[0].task_tags
              : "",
            taskpriority: currentData[0].setting[0]
              ? currentData[0].setting[0].task_priority
              : "",
            taskriskcategory: currentData[0].setting[0]
              ? currentData[0].setting[0].task_risk
              : "",

            waterfall: currentData[0].project_type,
            project_type: currentData[0].project_type
              ? currentData[0].project_type.split(",")
              : null,

            // team_member: currentData[0].team_members
            //   ? currentData[0].team_members.split(",")
            //   : null,
          });
          console.log(this.state.project_type);
          if (temp_arr != null) {
            temp_arr.forEach((element) => {
              let full_name = element.firstname + " " + element.lastname;
              let dom = {
                id: element.user_id,
                label: full_name,
                value: full_name,
              };
              this.state.seletedTeam.push(dom);
            });
          }
          this.setState({
            seletedTeam: this.state.seletedTeam,
          });
          console.log(this.state.seletedTeam);
          if (holiday_file && holiday_file != "") {
            this.imagefromApi(holiday_file);
          }

          let workweek = "";
          workweek = currentData[0].setting[0]
            ? currentData[0].setting[0].work_week
            : "";
          if (workweek && workweek != "") {
            if (workweek.includes("Sunday")) {
              //include checks whthr the substring is available in the maintream or not
              this.setState({
                sundaySelected: !this.state.sundaySelected,
              });
            }
            if (workweek.includes("Monday")) {
              //include checks whthr the substring is available in the maintream or not
              this.setState({
                mondaySelected: !this.state.mondaySelected,
              });
            }
            if (workweek.includes("Tuesday")) {
              //include checks whthr the substring is available in the maintream or not
              this.setState({
                tuesdaySelected: !this.state.tuesdaySelected,
              });
            }
            if (workweek.includes("Wednesday")) {
              //include checks whthr the substring is available in the maintream or not
              this.setState({
                wednesdaySelected: !this.state.wednesdaySelected,
              });
            }
            if (workweek.includes("Thrusday")) {
              //include checks whthr the substring is available in the maintream or not
              this.setState({
                thrusdaySelected: !this.state.thrusdaySelected,
              });
            }
            if (workweek.includes("Friday")) {
              //include checks whthr the substring is available in the maintream or not
              this.setState({
                fridaySelected: !this.state.fridaySelected,
              });
            }
            if (workweek.includes("Saturday")) {
              //include checks whthr the substring is available in the maintream or not
              this.setState({
                saturdaySelected: !this.state.saturdaySelected,
              });
            }
          }
          //project from Api &&  TASK from Api

          let proj_status =
            currentData[0].setting[0] &&
            currentData[0].setting[0].project_status
              ? currentData[0].setting[0].project_status
              : "";
          let project_priority =
            currentData[0].setting[0] &&
            currentData[0].setting[0].project_priority
              ? currentData[0].setting[0].project_priority
              : "";
          let proj_tags =
            currentData[0].setting[0] && currentData[0].setting[0].project_tags
              ? currentData[0].setting[0].project_tags
              : "";
          let proj_risk =
            currentData[0].setting[0] && currentData[0].setting[0].project_risk
              ? currentData[0].setting[0].project_risk
              : "";
          let task_status =
            currentData[0].setting[0] && currentData[0].setting[0].task_status
              ? currentData[0].setting[0].task_status
              : "";
          let task_priority =
            currentData[0].setting[0] && currentData[0].setting[0].task_priority
              ? currentData[0].setting[0].task_priority
              : "";
          let task_tags =
            currentData[0].setting[0] && currentData[0].setting[0].task_tags
              ? currentData[0].setting[0].task_tags
              : "";
          let task_risk =
            currentData[0].setting[0] && currentData[0].setting[0].task_risk
              ? currentData[0].setting[0].task_risk
              : "";
              let milestone =
              currentData[0].setting[0] && currentData[0].setting[0].milestone
                ? currentData[0].setting[0].milestone
                : "";

          //calling the function to convert the data strings
          if (proj_status != "") {
            this.convertfromApi(proj_status);
          }
          if (project_priority != "") {
            this.convertfromApi1(project_priority);
          }
          if (proj_tags != "") {
            this.convertfromApi2(proj_tags);
          }
          if (proj_risk != "") {
            this.convertfromApi3(proj_risk);
          }
          if (task_status != "") {
            this.convertfromApi4(task_status);
          }
          if (task_priority != "") {
            this.convertfromApi5(task_priority);
          }
          if (task_tags != "") {
            this.convertfromApi6(task_priority);
          }
          if (task_risk != "") {
            this.convertfromApi7(task_priority);
          }
          if (milestone != "") {
            this.convertfromApi8(milestone);
          }

          //category from api in settingstab

          let cat_name = currentData[0].setting[0]
            ? currentData[0].setting[0].category
            : "";
          if (cat_name && cat_name != "") {
            this.categoryfromApi(cat_name);
          }
          //report from api in settings tab
          let report = currentData[0].setting[0]
            ? currentData[0].setting[0].report
            : "";
          this.setState({
            report: report,
          });

          //project type
          if (this.state.project_type != null) {
            // var res = this.state.project_type.reduce(function (s, a) {
            //   s.push({ label: a });
            //   return s;
            // }, []);
            // console.log(res);
            let projecttype = [];
            this.state.project_type.forEach((element) => {
              let dom = { label: element, value: element };
              projecttype.push(dom);
            });
            this.setState({
              selectedProjectType: projecttype,
            });
            console.log(this.state.selectedProjectType);
          }
          //procurement filter
          if (this.state.procurement != null) {
            let procurement_img_filter = [];
            let procurement_pdf_filter = [];
            procurement_img_filter = this.state.procurement.filter(
              (item) =>
                item.image.includes("jpg") == true ||
                item.image.includes("jpeg") == true ||
                item.image.includes("webp") == true
            );
            console.log("procurement_img_filter", procurement_img_filter);
            this.setState({
              image_array: procurement_img_filter,
            });
          }
          //riskimage filter
          if (this.state.riskImage != null) {
            let risk_img_filter = [];
            let risk_pdf_filter = [];
            risk_img_filter = this.state.riskImage.filter(
              (item) =>
                item.image.includes("jpg") == true ||
                item.image.includes("jpeg") == true ||
                item.image.includes("webp") == true
            );
            console.log("risk_img_filter", risk_img_filter);
            this.setState({
              risk_image_array: risk_img_filter,
            });
          }
          //governance filter
          if (this.state.governance != null) {
            let governance_img_filter = [];
            let procurement_pdf_filter = [];
            governance_img_filter = this.state.governance.filter(
              (item) =>
                item.image.includes("jpg") == true ||
                item.image.includes("jpeg") == true ||
                item.image.includes("webp") == true
            );
            console.log("govr_img_filter", governance_img_filter);
            this.setState({
              govr_image_array: governance_img_filter,
            });
          }
          console.log("image_array", this.state.image_array);
          console.log("risk_array", this.state.risk_image_array);
          console.log("govr_array", this.state.govr_image_array);
          // if (this.state.team_member != null) {
          //   var res = this.state.team_member.reduce(function (s, a) {
          //     s.push({ label: a });
          //     return s;
          //   }, []);
          //   console.log(res);
          //   let data_team = [];
          //   res.forEach((element) => {
          //     let dom = { label: element.label, value: element.label };
          //     data_team.push(dom);
          //   });
          //   this.setState({
          //     seletedTeam: data_team,
          //   });
          // }

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
          if (this.state.report != "" && staff_get.length > 0) {
            //to send the report name from settings tab to communication tab
            this.state.staffing.forEach((element) => {
              element.report_name = this.state.report;
            });
            this.setState({
              staffing: this.state.staffing,
            });
          }
          // let communication_get = currentData[0].communication_get;
          // if (communication_get.length > 0) {
          //   this.setState({ communications: communication_get });
          // }
          let cost_get = currentData[0].internal_get;
          if (cost_get.length > 0) {
            this.setState({ cost: cost_get });
          }
          let costex_get = currentData[0].external_get
            ? currentData[0].external_get
            : [];
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
      //this.getTeam(this.state.userId);
      this.getProjectMember();
      this.getCountry();
      this.getemployeelist(userId);
    }
  };
  //checkbox
  selectSunday = (e) => {
    this.setState({
      sundaySelected: !this.state.sundaySelected,
    });
    console.log(this.state.sundaySelected);
  };

  selectMonday = (e) => {
    this.setState({
      mondaySelected: !this.state.mondaySelected,
    });
  };
  selectTuesday = (e) => {
    this.setState({
      tuesdaySelected: !this.state.tuesdaySelected,
    });
  };
  selectWednesday = (e) => {
    this.setState({
      wednesdaySelected: !this.state.wednesdaySelected,
    });
  };
  selectThrusday = (e) => {
    this.setState({
      thrusdaySelected: !this.state.thrusdaySelected,
    });
  };
  selectFriday = (e) => {
    this.setState({
      fridaySelected: !this.state.fridaySelected,
    });
  };
  selectSaturday = (e) => {
    this.setState({
      saturdaySelected: !this.state.saturdaySelected,
    });
  };
  generateArrayList = (async) => {
    let data = {};
    if (this.state.sundaySelected) {
      this.state.selectedworkingday.push("Sunday");
    }
    if (this.state.mondaySelected) {
      this.state.selectedworkingday.push("Monday");
    }
    if (this.state.tuesdaySelected) {
      this.state.selectedworkingday.push("Tuesday");
    }
    if (this.state.wednesdaySelected) {
      this.state.selectedworkingday.push("Wednesday");
    }
    if (this.state.thrusdaySelected) {
      this.state.selectedworkingday.push("Thrusday");
    }
    if (this.state.fridaySelected) {
      this.state.selectedworkingday.push("Friday");
    }
    if (this.state.fridaySelected) {
      this.state.selectedworkingday.push("Saturday");
    }
    this.setState({
      selectedworkingday: this.state.selectedworkingday,
    });
    console.log(this.state.selectedworkingday);
    this.state.obj1 = this.state.selectedworkingday.reduce(
      (acc, current, i) => {
        acc[i] = current;
        return acc;
      },
      {}
    );

    console.log(this.state.obj1); // {0: "cabin", 1: "cake", 2: "cable"}
  };

  //delete the row of staffing
  deletefromStaffing = async (id, index) => {
    console.log(id);
    // if(id!=undefined)
    // {
    let data = {
      project_id: this.state.formId,
      id: id.toString(),
    };
    console.log(data);
    let result = await HttpClient.requestData("delete-pgstaff", "POST", data);
    console.log(result);
    if (result && result.data) {
      this.setState({
        staffing: result.data,
      });
      console.log(this.state.staffing);

      //}
    }
    // else{
    //   this.state.staffing.pop();
    // }
  };

  //fetch from staffings
  transferTeamtoCommunication = async () => {
    this.state.data.forEach((element) => {
      let dom = {
        first_name: element.first_name,
        last_name: element.last_name,
        email_id: element.email_id,
        role: element.role,
        department: "",
        responsible: false,
        consultant: false,
        inquire: false,
        accountable: false,
        report_name: this.state.report,
        frequency: "",
      };
      this.state.staffing.push(dom);
    });
    //console.log(temp);
    this.setState({
      staffing: this.state.staffing,
    });
    console.log(this.state.staffing);
  };
  // communications data from API
  getProjectMember = async () => {
    let data = {
      project_id: this.state.formId,
    };
    let result = await HttpClient.requestData("project-member", "POST", data);
    console.log(result);
    if (result && result.data.length > 0) {
      let temp = [];
      let i = 0;
      result.data.forEach((element) => {
        let fullname = element.first_name + " " + element.last_name;
        let dom = { id: i, value: fullname };
        temp.push(dom);
        i++;
      });
      console.log(temp);
      this.setState({
        seletedTeam: temp,
      });
    }
  };

  //to convert array of object to stringified object
  covert = async (arr) => {
    let data = {};
    for (let i = 0; i < arr.length; i++) {
      data[i] = arr[i].name;
    }
    console.log(data);
    this.state.stringified_obj1 = data;
  };
  covert1 = async (arr) => {
    let data = {};
    for (let i = 0; i < arr.length; i++) {
      data[i] = arr[i].name;
    }
    console.log(data);
    this.state.stringified_obj2 = data;
  };
  covert2 = async (arr) => {
    let data = {};
    for (let i = 0; i < arr.length; i++) {
      data[i] = arr[i].name;
    }
    console.log(data);
    this.state.stringified_obj3 = data;
  };
  covert3 = async (arr) => {
    let data = {};
    for (let i = 0; i < arr.length; i++) {
      data[i] = arr[i].name;
    }
    console.log(data);
    this.state.stringified_obj4 = data;
  };
  covert4 = async (arr) => {
    let data = {};
    for (let i = 0; i < arr.length; i++) {
      data[i] = arr[i].name;
    }
    console.log(data);
    this.state.stringified_obj5 = data;
  };
  covert5 = async (arr) => {
    let data = {};
    for (let i = 0; i < arr.length; i++) {
      data[i] = arr[i].name;
    }
    console.log(data);
    this.state.stringified_obj6 = data;
  };
  covert6 = async (arr) => {
    let data = {};
    for (let i = 0; i < arr.length; i++) {
      data[i] = arr[i].name;
    }
    console.log(data);
    this.state.stringified_obj7 = data;
  };
  covert7 = async (arr) => {
    let data = {};
    for (let i = 0; i < arr.length; i++) {
      data[i] = arr[i].name;
    }
    console.log(data);
    this.state.stringified_obj8 = data;
  };
  covert8 = async (arr) => {
    let data = {};
    for (let i = 0; i < arr.length; i++) {
      data[i] = arr[i].name;
    }
    console.log(data);
    this.state.stringified_obj9 = data;
  };
  covertCat = async (arr) => {
    let data = {};
    for (let i = 0; i < arr.length; i++) {
      data[i] = arr[i].name;
    }
    console.log(data);
    this.state.category_obj = data;
  };
  //project and task data convertion from api
  convertfromApi = async (str) => {
    let arr = [];
    let i = 0;
    arr = str.split(",");
    console.log(arr);
    let temp = [];
    arr.forEach((element) => {
      let dom = { id: i, name: element };
      temp.push(dom);
      i++;
    });
    console.log(temp);
    this.setState({
      tags: temp,
    });
  };
  convertfromApi1 = async (str) => {
    let arr = [];
    let i = 0;
    arr = str.split(",");
    console.log(arr);
    let temp = [];
    arr.forEach((element) => {
      let dom = { id: i, name: element };
      temp.push(dom);
      i++;
    });
    console.log(temp);
    this.setState({
      tags1: temp,
    });
  };
  convertfromApi2 = async (str) => {
    let arr = [];
    let i = 0;
    arr = str.split(",");
    console.log(arr);
    let temp = [];
    arr.forEach((element) => {
      let dom = { id: i, name: element };
      temp.push(dom);
      i++;
    });
    console.log(temp);
    this.setState({
      tags2: temp,
    });
  };
  convertfromApi3 = async (str) => {
    let arr = [];
    let i = 0;
    arr = str.split(",");
    console.log(arr);
    let temp = [];
    arr.forEach((element) => {
      let dom = { id: i, name: element };
      temp.push(dom);
      i++;
    });
    console.log(temp);
    this.setState({
      tags3: temp,
    });
  };

  convertfromApi4 = async (str) => {
    let arr = [];
    let i = 0;
    arr = str.split(",");
    console.log(arr);
    let temp = [];
    arr.forEach((element) => {
      let dom = { id: i, name: element };
      temp.push(dom);
      i++;
    });
    console.log(temp);
    this.setState({
      tags4: temp,
    });
  };
  convertfromApi5 = async (str) => {
    let arr = [];
    let i = 0;
    arr = str.split(",");
    console.log(arr);
    let temp = [];
    arr.forEach((element) => {
      let dom = { id: i, name: element };
      temp.push(dom);
      i++;
    });
    console.log(temp);
    this.setState({
      tags5: temp,
    });
  };
  convertfromApi6 = async (str) => {
    let arr = [];
    let i = 0;
    arr = str.split(",");
    console.log(arr);
    let temp = [];
    arr.forEach((element) => {
      let dom = { id: i, name: element };
      temp.push(dom);
      i++;
    });
    console.log(temp);
    this.setState({
      tags6: temp,
    });
  };
  convertfromApi7 = async (str) => {
    let arr = [];
    let i = 0;
    arr = str.split(",");
    console.log(arr);
    let temp = [];
    arr.forEach((element) => {
      let dom = { id: i, name: element };
      temp.push(dom);
      i++;
    });
    console.log(temp);
    this.setState({
      tags7: temp,
    });
  };
  convertfromApi8 = async (str) => {
    let arr = [];
    let i = 0;
    arr = str.split(",");
    console.log(arr);
    let temp = [];
    arr.forEach((element) => {
      let dom = { id: i, name: element };
      temp.push(dom);
      i++;
    });
    console.log(temp);
    this.setState({
      tags8: temp,
    });
  };
  //category from Api in settings tab
  categoryfromApi = async (str) => {
    let arr = [];
    let i = 0;
    let j = 0;
    arr = str.split(",");
    console.log(arr);
    let temp = [];
    let temp1 = [];
    arr.forEach((element) => {
      let dom = { id: i, name: element };
      temp.push(dom);
      i++;
    });
    console.log(temp);
    arr.forEach((element) => {
      let dom = { id: j, value: element };
      temp1.push(dom);
      j++;
    });
    console.log(temp1);
    this.setState({
      cat: temp,
      optionsdata: temp1,
    });
  };

  //settings image from api
  imagefromApi = async (imgfile) => {
    if (imgfile && imgfile != "") {
      if (
        imgfile.includes("jpg") ||
        imgfile.includes("jpeg") ||
        imgfile.includes("webp")
      ) {
        this.setState({
          holiday_new_img: [
            {
              preview: this.state.img_url + imgfile,
              type: "jpg",
            },
          ],
        });
      } else if (imgfile.includes("pdf")) {
        this.setState({
          holiday_new_img: [
            {
              preview:
                "https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png",
              type: "pdf",
            },
          ],
        });
      } else if (imgfile.includes("doc") || imgfile.includes("docx")) {
        this.setState({
          holiday_new_img: [
            {
              preview:
                "https://www.kindpng.com/picc/m/249-2499221_download-icon-document-download-icon-png-transparent-png.png",
              type: "doc",
            },
          ],
        });
      }
    }
  };

  handelChange = (seletedCategory) => {
    console.log("selectedGroup", seletedCategory);
    // let name = [];
    // seletedTeam.forEach(element => {
    //   let dom={label:element.label,id:element};
    //   name.push(dom);
    // });
    // for(var i=0;i<seletedTeam.length;i++){
    //   name.push(seletedTeam[i].label);
    //}
    this.setState({
      seletedCategory: seletedCategory,
      optionsdata: seletedCategory,
      //team_id: seletedTeam
    });
    setTimeout(() => {
      console.log("event.target.value", this.state.seletedCategory);
    }, 3000);
  };

  //select country
  handleSelectCountry = (val) => {
    let cur_data = [];
    cur_data = this.state.country_data.filter(
      (item) => item.name == val.target.value
    );
    console.log(cur_data);
    this.setState({
      currency: cur_data[0] ? cur_data[0].currency : "",
      timezone: cur_data[0] ? cur_data[0].timezone : "",
      country: val.target.value,
    });
  };

  //multiple selection of text field
  onDelete(i) {
    // const tags = this.state.tags.slice(0)
    // tags.splice(i, 1)
    // this.setState({ tags })
    // console.log(this.state.tags);
    this.state.tags.splice(i, 1);
    this.setState({ tags: this.state.tags });
    console.log(this.state.tags);
  }

  onAddition(tag) {
    console.log(tag);
    this.state.tags.push(tag);
    this.setState({ tags: this.state.tags });
    console.log(this.state.tags);
  }
  //1
  onDelete1(i) {
    this.state.tags1.splice(i, 1);
    this.setState({ tags1: this.state.tags1 });
  }

  onAddition1(tag) {
    console.log(tag);
    this.state.tags1.push(tag);
    this.setState({ tags1: this.state.tags1 });
    console.log(this.state.tags1);
  }
  //2
  onDelete2(i) {
    this.state.tags2.splice(i, 1);
    this.setState({ tags2: this.state.tags2 });
  }

  onAddition2(tag) {
    console.log(tag);
    this.state.tags2.push(tag);
    this.setState({ tags2: this.state.tags2 });
    console.log(this.state.tags2);
  }
  //3

  onDelete3(i) {
    this.state.tags3.splice(i, 1);
    this.setState({ tags3: this.state.tags3 });
  }

  onAddition3(tag) {
    console.log(tag);
    this.state.tags3.push(tag);
    this.setState({ tags3: this.state.tags3 });
    console.log(this.state.tags3);
  }
  //4

  onDelete4(i) {
    this.state.tags4.splice(i, 1);
    this.setState({ tags4: this.state.tags4 });
  }

  onAddition4(tag) {
    console.log(tag);
    this.state.tags4.push(tag);
    this.setState({ tags4: this.state.tags4 });
    console.log(this.state.tags4);
  }

  //5

  onDelete5(i) {
    this.state.tags5.splice(i, 1);
    this.setState({ tags5: this.state.tags5 });
  }

  onAddition5(tag) {
    console.log(tag);
    this.state.tags5.push(tag);
    this.setState({ tags5: this.state.tags5 });
    console.log(this.state.tags5);
  }
  //6

  onDelete6(i) {
    this.state.tags6.splice(i, 1);
    this.setState({ tags6: this.state.tags6 });
  }

  onAddition6(tag) {
    console.log(tag);
    this.state.tags6.push(tag);
    this.setState({ tags6: this.state.tags6 });
    console.log(this.state.tags6);
  }

  //7

  onDelete7(i) {
    this.state.tags7.splice(i, 1);
    this.setState({ tags7: this.state.tags7 });
  }

  onAddition7(tag) {
    console.log(tag);
    this.state.tags7.push(tag);
    this.setState({ tags7: this.state.tags7 });
    console.log(this.state.tags7);
  }
  onDelete8(i) {
    this.state.tags8.splice(i, 1);
    this.setState({ tags8: this.state.tags8 });
  }

  onAddition8(tag) {
    console.log(tag);
    this.state.tags8.push(tag);
    this.setState({ tags8: this.state.tags8 });
    console.log(this.state.tags8);
  }
  oncatDelete(i) {
    this.state.cat.splice(i, 1);
    this.setState({ cat: this.state.cat });
  }

  oncatAddition(tag) {
    console.log(tag);
    this.state.cat.push(tag);
    this.setState({ cat: this.state.cat });
    console.log(this.state.cat);
  }

  //cost select
  // handleCost=(e)=>
  // {
  //   console.log(e.target.value);
  //   var value = this.state.optionsdata.find( item => item.value == e.target.value)
  //   console.log(value);
  //    this.setState({
  //     selectedCost:e.target.value
  //         });
  //         setTimeout(() => {
  //           console.log("event.target.value", this.state.selectedCost);
  //         }, 3000);

  // }

  //project type select in program tab

  handelProjectType = (selectedProjectType) => {
    setTimeout(() => {
      console.log("event.target.value", selectedProjectType);
    }, 3000);
    let c = [];
    c.push(selectedProjectType);
    this.setState({
      selectedProjectType: c,
      waterfall: selectedProjectType.value,
    });
    setTimeout(() => {
      console.log("event.target.value", this.state.selectedProjectType);
    }, 3000);
  };

  deletee = async (id, index) => {
    //console.log(item);
    // console.log("data", data);
    //let user_id=reactLocalStorage.getObject('user_id');
    let d = {
      type: "procurement",
      id: id,
      user_id: this.state.userId,
      project_id: this.state.fromId,
    };
    console.log("d", d);
    let result = await HttpClient.requestData("delete-pgfile", "POST", d);
    // console.log("result", result);
    if (result && result.status) {
      this.state.procurement.pop(index);
      console.log(this.state.procurement.length);
      this.setState({
        type: "success",
        status: true,
        errMsg: "Deleted successfully.",
        procurement: result.data,
      });
    } else {
      this.setState({
        type: "error",
        status: true,
        errMsg: "something went wrong",
      });
    }
  };
  riskdeletee = async (id, index) => {
    //console.log(item);
    // console.log("data", data);
    //let user_id=reactLocalStorage.getObject('user_id');
    let d = {
      type: "risk",
      id: id,
      user_id: this.state.userId,
      project_id: this.state.fromId,
    };
    console.log("d", d);
    let result = await HttpClient.requestData("delete-pgfile", "POST", d);

    // console.log("result", result);
    if (result && result.status) {
      this.state.riskImage.pop(index);
      this.setState({
        type: "success",
        status: true,
        errMsg: "Deleted successfully.",
        riskImage: result.data,
      });
    } else {
      this.setState({
        type: "error",
        status: true,
        errMsg: "something went wrong",
      });
    }
  };

  governdeletee = async (id, index) => {
    //console.log(item);
    // console.log("data", data);
    //let user_id=reactLocalStorage.getObject('user_id');
    let d = {
      type: "governance",
      id: id,
      user_id: this.state.userId,
      project_id: this.state.fromId,
    };
    console.log("d", d);
    let result = await HttpClient.requestData("delete-pgfile", "POST", d);
    // console.log("result", result);
    if (result && result.status) {
      this.state.governance.pop(index);
      this.setState({
        type: "success",
        status: true,
        errMsg: "Deleted successfully.",
        governance: result.data,
      });
    } else {
      this.setState({
        type: "error",
        status: true,
        errMsg: "something went wrong",
      });
    }
  };

  validation1 = (activeTab) => {
    if (activeTab == "basictab7") {
      this.state.staffing.forEach((element) => {
        if (element.first_name == "") {
          this.setState({
            errMsg: "Please Enter firstname",
          });
          return false;
        } else {
          if (element.last_name == "") {
            this.setState({
              errMsg: "Please Enter last_name",
            });
            return false;
          } else {
            if (element.email_id == "") {
              this.setState({
                errMsg: "Please Enter Email",
              });
              return false;
            } else {
              return true;
            }
          }
        }
      });
    }
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
                if (this.state.selectedProjectType == "") {
                  this.setState({ errMsg: "Please Select project type" });
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
      if (this.state.country == "") {
        this.setState({ errMsg: "Please Select country name" });
        return false;
      } else {
        if (this.state.tags == "") {
          this.setState({ errMsg: "Please Select project status" });
          return false;
        } else {
          if (this.state.tags1 == "") {
            this.setState({ errMsg: "Please Select project priority" });
            return false;
          } else {
            if (this.state.tags2 == "") {
              this.setState({ errMsg: "Please Select project tag" });
              return false;
            } else {
              if (this.state.tags3 == "") {
                this.setState({ errMsg: "Please Select project riskcategory" });
                return false;
              } else {
                if (this.state.sprint == "") {
                  this.setState({ errMsg: "Please Enter sprint" });
                  return false;
                } else {
                  if (this.state.milestone == "") {
                    this.setState({
                      errMsg: "Please Select milestone",
                    });
                    return false;
                  } else {
                    if (this.state.tags4 == "") {
                      this.setState({
                        errMsg: "Please Select project task status",
                      });
                      return false;
                    } else {
                      if (this.state.tags5 == "") {
                        this.setState({
                          errMsg: "Please Select project task priority",
                        });
                        return false;
                      } else {
                        if (this.state.tags6 == "") {
                          this.setState({
                            errMsg: "Please Select project task tag",
                          });
                          return false;
                        } else {
                          if (this.state.tags7 == "") {
                            this.setState({
                              errMsg: "Please Enter project task riskcategory",
                            });
                            return false;
                          } else {
                            if (this.state.holiday_new_img.length == 0) {
                              this.setState({
                                errMsg: "Please select one file",
                              });
                              return false;
                            } else {
                              if (this.state.cat == "") {
                                this.setState({
                                  errMsg: "Please select category",
                                });
                                return false;
                              } else {
                                if (this.state.report == "") {
                                  this.setState({
                                    errMsg: "Please enter report",
                                  });
                                  return false;
                                } else {
                                  if (this.state.notify == "") {
                                    this.setState({
                                      errMsg: "Please Select notification",
                                    });
                                    return false;
                                  } else {
                                    if (this.state.frequency == "") {
                                      this.setState({
                                        errMsg: "Please Enter frequency",
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
                  }
                }
              }
            }
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
      if (this.state.new_img.length == 0) {
        this.setState({ errMsg: "Please Select Atleast One Image" });
        return false;
      } else {
        return true;
      }
    } else if (activeTab == "basictab11") {
      if (this.state.new_risk_img.length == 0) {
        this.setState({ errMsg: "Please Select Atleast One Image" });
        return false;
      } else {
        return true;
      }
    } else if (activeTab == "basictab12") {
      if (this.state.new_govr_img.length == 0) {
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
  fileUpload = async (event) => {
    this.ref.fileuploading.current.click();
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
    setTimeout(() => {
      console.log("selected files", this.state.firstFile);
    }, 3000);
  };
  //HolidayFileselection
  selectHolidayFile = async (event) => {
    let data = [];
    console.log("event.target.files[0]", event.target.files[0]);
    let file_f = event.target.files[0];
    let file = {};
    if (file_f.type == "application/pdf") {
      file_f.file_type = "pdf";
      file = {
        preview:
          "https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png",
        type: "pdf",
      };
      this.setState({
        holidayFile: event.target.files[0],
        holiday_new_img: [
          {
            preview:
              "https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png",
            type: "pdf",
          },
        ],
      });
      setTimeout(() => {
        console.log("event.target.value", this.state.holidayFile);
      }, 3000);
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
      this.setState({
        holidayFile: event.target.files[0],
        holiday_new_img: [
          {
            preview:
              "https://www.kindpng.com/picc/m/249-2499221_download-icon-document-download-icon-png-transparent-png.png",
            type: "doc",
          },
        ],
      });
    } else {
      file = {
        preview: URL.createObjectURL(event.target.files[0]),
        type: "image",
      };
      this.setState({
        holidayFile: event.target.files[0],
        holiday_new_img: [
          {
            preview: URL.createObjectURL(event.target.files[0]),
            type: "image",
          },
        ],
      });
    }

    //this.state.new_img.push(file);
    //this.state.procurementFileArray.push(event.target.files[0]);
    // this.setState({
    //   procurementFile: event.target.files[0],
    //   new_img: this.state.new_img, //to maintain the prev image and the new image all together
    // });
  };

  procurementFile = async (event) => {
    let data = [];
    console.log("event.target.files[0]", event.target.files[0]);
    let file_f = event.target.files[0];
    console.log(file_f);
    let file = {};
    if (file_f.type == "application/pdf") {
      file_f.file_type = "pdf";
      file = {
        preview:
          "https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png",
        type: "pdf",
      };
      this.setState({
        procurementFile: event.target.files[0],
        new_img: [
          {
            preview:
              "https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png",
            type: "pdf",
          },
        ],
      });
      console.log("hjhjh", this.state.procurementFile);
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
      this.setState({
        procurementFile: event.target.files[0],
        new_img: [
          {
            preview:
              "https://www.kindpng.com/picc/m/249-2499221_download-icon-document-download-icon-png-transparent-png.png",
            type: "doc",
          },
        ],
      });
    } else {
      file = {
        preview: URL.createObjectURL(event.target.files[0]),
        type: "image",
      };
      this.setState({
        procurementFile: event.target.files[0],
        new_img: [
          {
            preview: URL.createObjectURL(event.target.files[0]),
            type: "image",
          },
        ],
      });
    }

    //this.state.new_img.push(file);
    //this.state.procurementFileArray.push(event.target.files[0]);
    // this.setState({
    //   procurementFile: event.target.files[0],
    //   new_img: this.state.new_img, //to maintain the prev image and the new image all together
    // });
    setTimeout(() => {
      if (this.state.procurementFile != "") {
        console.log("hgh");
        this.nextStep();
      }
    }, 3000);
  };

  //img clicked function from image tray
  imgClicked = async (ind) => {
    if (
      ind.includes(".jpg") == true ||
      ind.includes(".jpeg") == true ||
      ind.includes(".webp") == true
    ) {
      this.setState({
        image_carasoul: true,
      });
    }
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
      this.setState({
        riskfile: event.target.files[0],
        new_risk_img: [
          {
            preview:
              "https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png",
            type: "pdf",
          },
        ],
      });
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
      this.setState({
        riskfile: event.target.files[0],
        new_risk_img: [
          {
            preview:
              "https://www.kindpng.com/picc/m/249-2499221_download-icon-document-download-icon-png-transparent-png.png",
            type: "doc",
          },
        ],
      });
    } else {
      file = {
        preview: URL.createObjectURL(event.target.files[0]),
        type: "image",
      };
      this.setState({
        riskfile: event.target.files[0],
        new_risk_img: [
          {
            preview: URL.createObjectURL(event.target.files[0]),
            type: "image",
          },
        ],
      });
    }
    setTimeout(() => {
      if (this.state.riskfile != "") {
        console.log("hgh");
        this.nextStep();
      }
    }, 3000);
  };

  governanceImage = async (event) => {
    let data = [];
    // let file = {
    //   preview: URL.createObjectURL(event.target.files[0]),
    // };
    let file_f = event.target.files[0];
    let file = {};
    console.log(file_f.type);
    if (file_f.type == "application/pdf") {
      file_f.file_type = "pdf";
      file = {
        preview:
          "https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png",
        type: "pdf",
      };
      this.setState({
        governancefile: event.target.files[0],
        new_govr_img: [
          {
            preview:
              "https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png",
            type: "pdf",
          },
        ],
      });
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
      this.setState({
        governancefile: event.target.files[0],
        new_govr_img: [
          {
            preview:
              "https://www.kindpng.com/picc/m/249-2499221_download-icon-document-download-icon-png-transparent-png.png",
            type: "doc",
          },
        ],
      });
    } else {
      file = {
        preview: URL.createObjectURL(event.target.files[0]),
        type: "image",
      };
      this.setState({
        governancefile: event.target.files[0],
        new_govr_img: [
          {
            preview: URL.createObjectURL(event.target.files[0]),
            type: "image",
          },
        ],
      });
    }
    // this.state.new_govr_img.push(file);
    // this.setState({
    //   governancefile: event.target.files[0],
    //   new_govr_img: this.state.new_govr_img, //to maintain the prev image and the new image all together
    // });
    setTimeout(() => {
      if (this.state.governancefile != "") {
        console.log("hgh");
        this.nextStep();
      }
    }, 3000);
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
        .call(this.state.seletedTeam, (s) => s.id)
        .toString();
      console.log(sending_team);
      let projecttypeselect = Array.prototype.map
        .call(this.state.selectedProjectType, (s) => s.label)
        .toString();
      console.log(projecttypeselect);
      if (validation) {
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
        data.append("project_type", projecttypeselect);
        console.log(data);
        this.setState({
          isloading: true,
        });
        let result = await HttpClient.fileUplodeDynamic(
          "progwizard",
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
            isloading: false,
          });
          this.projectData(this.state.userId);
        } else {
          this.setState({
            isloading: false,
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
          "progwizard",
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
        this.covert(this.state.tags);
        this.covert1(this.state.tags1);
        this.covert2(this.state.tags2);
        this.covert3(this.state.tags3);
        this.covert4(this.state.tags4);
        this.covert5(this.state.tags5);
        this.covert6(this.state.tags6);
        this.covert7(this.state.tags7);
        this.covert8(this.state.tags8);

        let stringified1 = JSON.stringify(this.state.stringified_obj1);
        let stringified2 = JSON.stringify(this.state.stringified_obj2);
        let stringified3 = JSON.stringify(this.state.stringified_obj3);
        let stringified4 = JSON.stringify(this.state.stringified_obj4);
        let stringified5 = JSON.stringify(this.state.stringified_obj5);
        let stringified6 = JSON.stringify(this.state.stringified_obj6);
        let stringified7 = JSON.stringify(this.state.stringified_obj7);
        let stringified8 = JSON.stringify(this.state.stringified_obj8);
        let stringified9 = JSON.stringify(this.state.stringified_obj9);

        this.covertCat(this.state.cat);
        let stringified_cat = JSON.stringify(this.state.category_obj);
        this.generateArrayList();
        let stringified = JSON.stringify(this.state.obj1);
        console.log(stringified);
        let data = new FormData();
        data.append("type", "setting");
        data.append("project_id", this.state.fromId);
        data.append("country", this.state.country);
        data.append("timezone", this.state.timezone);
        data.append("currency", this.state.currency);
        data.append("project_status", stringified1);
        data.append("project_priority", stringified2);
        data.append("project_tags", stringified3);
        data.append("project_risk", stringified4);
        data.append("sprint", this.state.sprint);
        data.append("milestone", stringified9);
        data.append("task_status", stringified5);
        data.append("task_priority", stringified6);
        data.append("task_tags", stringified7);
        data.append("task_risk", stringified8);
        data.append("work_week", stringified);
        data.append("category", stringified_cat);
        data.append("report", this.state.report);
        data.append("notification", this.state.notify);
        data.append("frequency", this.state.frequency);
        data.append("image", this.state.holidayFile);
        data.append("user_id", this.state.userId);
        console.log(data);

        let result = await HttpClient.fileUplodeDynamic(
          "progwizard",
          "POST",
          data
        );
        console.log("seetings", result);
        if (result && result.status) {
          this.setState({
            selectedworkingday: [],
            type: "success",
            status: true,
            errMsg: "Successfully Submited.",
            quote: "Something went wrong. Please try again!",
            activeTab: "basictab4",
          });
          this.projectData(this.state.userId);
        } else {
          this.setState({
            selectedworkingday: [],
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

        let result = await HttpClient.FromAdd("progwizard", "POST", data);
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

        let result = await HttpClient.FromAdd("progwizard", "POST", data);
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

        let result = await HttpClient.FromAdd("progwizard", "POST", data);
        console.log(result);
        if (result && result.status) {
          this.setState({
            staffing: result.data,
            type: "success",
            status: true,
            errMsg: "Successfully Submited.",
            quote: "Something went wrong. Please try again!",
            activeTab: "basictab8",
          });
          this.getProjectMember();
          this.state.staffing.forEach((element) => {
            element.report_name = this.state.report;
          });
          this.setState({
            staffing: this.state.staffing,
          });

          //this.projectData(this.state.userId);
          //this.CommunicationdataFromApi();
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
          //title: "Please Enter email.",
          quote: "Something went wrong. Please try again!",
        });
      }
    } else if (this.state.activeTab == "basictab8") {
      let validation = this.validation("basictab8");
      if (validation) {
        let data = {
          type: "communication",
          communications: this.state.staffing,
          project_id: this.state.fromId,
          user_id: this.state.userId,
        };

        let result = await HttpClient.FromAdd("progwizard", "POST", data);
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
      if (validation) {
        let data = {
          type: "costs",
          // save_type_in: "internal",
          //save_type_ex: "external",
          // resource:this.state.resource_internal,
          // resource_ex:this.state.resource_external,
          internal: this.state.cost,
          remarks: this.state.remarks,
          currency: this.state.currency,
          start_date: this.state.start_date,
          end_date: this.state.end_date,

          //external: this.state.costex,
          // expense: this.state.expense_internal,
          // expense_ex: this.state.expense_external,
          project_id: this.state.fromId,
          user_id: this.state.userId,
        };

        let result = await HttpClient.FromAdd("progwizard", "POST", data);
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
          "progwizard",
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
      if (validation) {
        let data = new FormData();
        data.append("type", "risk");
        data.append("image", this.state.riskfile);
        data.append("user_id", this.state.userId);
        data.append("project_id", this.state.fromId);
        data.append("id", this.state.risk_id);
        let result = await HttpClient.fileUplodeDynamic(
          "progwizard",
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
      if (validation) {
        let data = new FormData();
        data.append("type", "governance");
        data.append("image", this.state.governancefile);
        data.append("user_id", this.state.userId);
        data.append("project_id", this.state.fromId);
        data.append("id", this.state.govr_id);
        let result = await HttpClient.fileUplodeDynamic(
          "progwizard",
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
            <LoadingOverlay
              active={this.state.isloading}
              spinner
              text="Loading..."
            >
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
                          <span className="d-none d-sm-inline">Project</span>
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
                          <span className="d-none d-sm-inline">
                            Stakeholder
                          </span>
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
                          <span className="d-none d-sm-inline">
                            Gantt Chart
                          </span>
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
                          <span className="d-none d-sm-inline">Teams</span>
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
                          <span className="d-none d-sm-inline">
                            Procurement
                          </span>
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
                                  this.setState({
                                    startDate: val.target.value,
                                  });
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
                            {/* <div className="form-group mb-0">
                            <label htmlFor="project-overview">
                              Team Members
                            </label> */}
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
                            {/* <Select
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
                            /> */}
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
                            {/* </div> */}
                            <div className="form-group mb-0">
                              <label htmlFor="project-overview">
                                Project Type
                              </label>
                              <Select
                                // defaultValue={
                                //   this.state.selectedProjectType
                                //     ? this.state.selectedProjectType
                                //     : ""
                                // }
                                name="colors"
                                options={this.state.optionType}
                                value={this.state.selectedProjectType}
                                onChange={this.handelProjectType}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                // onInputChange={this.handelChange}
                              />
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
                              <div
                                className="d-block"
                                id="uploadPreviewTemplate"
                              >
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
                                    console.log(val.target.value);
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
                                    this.setState({
                                      inScope: val.target.value,
                                    });
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
                            {/* <div className="form-group row mb-3">
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
                          </div> */}
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Country
                              </label>
                              <div className="col-md-9">
                                <select
                                  className="form-control"
                                  onChange={this.handleSelectCountry}
                                  value={this.state.country}
                                >
                                  {this.state.optionscountry.map(function (
                                    data,
                                    key
                                  ) {
                                    return (
                                      <option key={key} value={data.value}>
                                        {data.value}{" "}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Currency
                              </label>
                              <div className="col-md-9">
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  className="form-control"
                                  value={this.state.currency}
                                  // onChange={(val) => {
                                  //   this.setState({
                                  //     firstName: val.target.value,
                                  //   });
                                  // }}
                                  placeholder="--please select country to get the currency--"
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Timezone
                              </label>
                              <div className="col-md-9">
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  className="form-control"
                                  value={this.state.timezone}
                                  // onChange={(val) => {
                                  //   this.setState({
                                  //     firstName: val.target.value,
                                  //   });
                                  // }}
                                  placeholder="--please select country to get the timezone--"
                                  disabled
                                />
                              </div>
                            </div>
                            <h4>PROJECT</h4>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Status
                              </label>
                              <div className="col-md-9">
                                {/* <select 
                                 className="form-control"
                                 onChange={val => {
                                  this.state.projectstatus=
                                    val.target.value;
                                    //alert( val.target.value);
                                  this.setState({});
                                  
                                  
                                }}
                               value={this.state.projectstatus}
                                   >
                                   
                                    
                                  {this.state.optionsstatus.map(function(data, key){  return (
                               <option key={key} value={data.value}>{data.value} </option> )
                                         })}
        
                               </select> */}
                                <ReactTags
                                  ref={this.reactTags}
                                  placeholderText="Add new query..."
                                  onInput={(query) => {
                                    // this.state.projectstatus=
                                    // val.target.value;
                                    //alert( val.target.value);

                                    let dom = {
                                      id: this.state.suggestions.length + 1,
                                      name: query,
                                    };
                                    console.log(dom);
                                    this.state.suggestions.push(dom);

                                    this.setState({});
                                  }}
                                  tags={this.state.tags}
                                  suggestions={this.state.suggestions}
                                  onDelete={this.onDelete.bind(this)}
                                  onAddition={this.onAddition.bind(this)}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Priority
                              </label>
                              <div className="col-md-9">
                                <ReactTags
                                  ref={this.reactTags}
                                  placeholderText="Add new query..."
                                  onInput={(query) => {
                                    // this.state.projectstatus=
                                    //   val.target.value;
                                    //alert( val.target.value);

                                    let dom = {
                                      id: this.state.suggestions1.length + 1,
                                      name: query,
                                    };
                                    console.log(dom);
                                    this.state.suggestions1.push(dom);

                                    this.setState({});
                                  }}
                                  tags={this.state.tags1}
                                  suggestions={this.state.suggestions1}
                                  onDelete={this.onDelete1.bind(this)}
                                  onAddition={this.onAddition1.bind(this)}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Tags
                              </label>
                              <div className="col-md-9">
                                <ReactTags
                                  ref={this.reactTags}
                                  placeholderText="Add new query..."
                                  onInput={(query) => {
                                    // this.state.projectstatus=
                                    //   val.target.value;
                                    //alert( val.target.value);

                                    let dom = {
                                      id: this.state.suggestions2.length + 1,
                                      name: query,
                                    };
                                    console.log(dom);
                                    this.state.suggestions2.push(dom);

                                    this.setState({});
                                  }}
                                  tags={this.state.tags2}
                                  suggestions={this.state.suggestions2}
                                  onDelete={this.onDelete2.bind(this)}
                                  onAddition={this.onAddition2.bind(this)}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Risk Category
                              </label>
                              <div className="col-md-9">
                                <ReactTags
                                  ref={this.reactTags}
                                  placeholderText="Add new query..."
                                  onInput={(query) => {
                                    // this.state.projectstatus=
                                    //   val.target.value;
                                    //alert( val.target.value);

                                    let dom = {
                                      id: this.state.suggestions3.length + 1,
                                      name: query,
                                    };
                                    console.log(dom);
                                    this.state.suggestions3.push(dom);

                                    this.setState({});
                                  }}
                                  tags={this.state.tags3}
                                  suggestions={this.state.suggestions3}
                                  onDelete={this.onDelete3.bind(this)}
                                  onAddition={this.onAddition3.bind(this)}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Sprint
                              </label>
                              <div className="col-md-9">
                              <select
                                  className="form-control"
                                  onChange={(val) => {
                                    this.state.sprint = val.target.value;
                                    this.setState({});
                                  }}
                                  value={this.state.sprint}
                                >
                                  {this.state.optionssprint.map(function (
                                    data,
                                    key
                                  ) {
                                    return (
                                      <option key={key} value={data.value}>
                                        {data.value}{" "}
                                      </option>
                                    );
                                  })}
                                </select>
                                
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                {this.state.waterfall}(milestone)
                              </label>
                              <div className="col-md-9">
                              <ReactTags
                                  ref={this.reactTags}
                                  placeholderText="Add new query..."
                                  onInput={(query) => {
                                    // this.state.projectstatus=
                                    //   val.target.value;
                                    //alert( val.target.value);

                                    let dom = {
                                      id: this.state.suggestions8.length + 1,
                                      name: query,
                                    };
                                    console.log(dom);
                                    this.state.suggestions8.push(dom);

                                    this.setState({});
                                  }}
                                  tags={this.state.tags8}
                                  suggestions={this.state.suggestions8}
                                  onDelete={this.onDelete8.bind(this)}
                                  onAddition={this.onAddition8.bind(this)}
                                />
                              </div>
                            </div>
                            <h4>TASK</h4>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Status
                              </label>
                              <div className="col-md-9">
                                <ReactTags
                                  ref={this.reactTags}
                                  placeholderText="Add new query..."
                                  onInput={(query) => {
                                    // this.state.projectstatus=
                                    //   val.target.value;
                                    //alert( val.target.value);

                                    let dom = {
                                      id: this.state.suggestions4.length + 1,
                                      name: query,
                                    };
                                    console.log(dom);
                                    this.state.suggestions4.push(dom);

                                    this.setState({});
                                  }}
                                  tags={this.state.tags4}
                                  suggestions={this.state.suggestions4}
                                  onDelete={this.onDelete4.bind(this)}
                                  onAddition={this.onAddition4.bind(this)}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Priority
                              </label>
                              <div className="col-md-9">
                                <ReactTags
                                  ref={this.reactTags}
                                  placeholderText="Add new query..."
                                  onInput={(query) => {
                                    // this.state.projectstatus=
                                    //   val.target.value;
                                    //alert( val.target.value);

                                    let dom = {
                                      id: this.state.suggestions5.length + 1,
                                      name: query,
                                    };
                                    console.log(dom);
                                    this.state.suggestions5.push(dom);

                                    this.setState({});
                                  }}
                                  tags={this.state.tags5}
                                  suggestions={this.state.suggestions5}
                                  onDelete={this.onDelete5.bind(this)}
                                  onAddition={this.onAddition5.bind(this)}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Tags
                              </label>
                              <div className="col-md-9">
                                <ReactTags
                                  ref={this.reactTags}
                                  placeholderText="Add new query..."
                                  onInput={(query) => {
                                    // this.state.projectstatus=
                                    //   val.target.value;
                                    //alert( val.target.value);

                                    let dom = {
                                      id: this.state.suggestions6.length + 1,
                                      name: query,
                                    };
                                    console.log(dom);
                                    this.state.suggestions6.push(dom);

                                    this.setState({});
                                  }}
                                  tags={this.state.tags6}
                                  suggestions={this.state.suggestions6}
                                  onDelete={this.onDelete6.bind(this)}
                                  onAddition={this.onAddition6.bind(this)}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Risk Category
                              </label>
                              <div className="col-md-9">
                                <ReactTags
                                  ref={this.reactTags}
                                  placeholderText="Add new query..."
                                  onInput={(query) => {
                                    // this.state.projectstatus=
                                    //   val.target.value;
                                    //alert( val.target.value);

                                    let dom = {
                                      id: this.state.suggestions7.length + 1,
                                      name: query,
                                    };
                                    console.log(dom);
                                    this.state.suggestions7.push(dom);

                                    this.setState({});
                                  }}
                                  tags={this.state.tags7}
                                  suggestions={this.state.suggestions7}
                                  onDelete={this.onDelete7.bind(this)}
                                  onAddition={this.onAddition7.bind(this)}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Calender Holiday
                              </label>
                              {/* <form
                            method="post"
                            className="dropzone"
                            id="myAwesomeDropzone"
                            data-plugin="dropzone"
                            data-previews-container="#file-previews"
                            data-upload-preview-template="#uploadPreviewTemplate"
                          > */}
                              <div className="col-md-9">
                                <input
                                  className="form-control"
                                  name="file"
                                  type="file"
                                  onChange={this.selectHolidayFile}
                                />

                                {/* <div className="dz-message needsclick">
                              <i className="h1 text-muted dripicons-cloud-upload" />
                              <button onClick={this.fileUpload}>File Upload</button>
                             
                            </div> */}
                                {/* </form> */}
                                {/* Preview */}
                                {/* file preview template */}
                                {this.state.holiday_new_img.length > 0 ? (
                                  <div
                                    className="d-block"
                                    id="uploadPreviewTemplate"
                                  >
                                    <div className="card mt-1 mb-0 shadow-none border">
                                      <div className="p-2">
                                        <div className="row align-items-center">
                                          {this.state.holiday_new_img.map(
                                            (item, index) => {
                                              return (
                                                <div className="col-auto">
                                                  <img
                                                    className="form-control"
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
                                                        holidayFile: "",
                                                        holiday_new_img: [],
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

                                {/* <div
                                className="dropzone-previews mt-3"
                                id="file-previews"
                               /> */}
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Work Week
                              </label>
                              <div className="col-md-9">
                                <label>Sunday</label>
                                <input
                                  type="checkbox"
                                  id="chk1"
                                  className="chk11"
                                  checked={this.state.sundaySelected}
                                  onChange={this.selectSunday}
                                />
                                &nbsp;&nbsp;
                                <label>Monday</label>
                                <input
                                  type="checkbox"
                                  id="chk2"
                                  className="chk22"
                                  checked={this.state.mondaySelected}
                                  onChange={this.selectMonday}
                                />
                                &nbsp;&nbsp;
                                <label>Tuesday</label>
                                <input
                                  type="checkbox"
                                  id="chk2"
                                  className="chk22"
                                  checked={this.state.tuesdaySelected}
                                  onChange={this.selectTuesday}
                                />
                                &nbsp;&nbsp; <label>Wednesday</label>
                                <input
                                  type="checkbox"
                                  id="chk1"
                                  className="chk11"
                                  checked={this.state.wednesdaySelected}
                                  onChange={this.selectWednesday}
                                />
                                &nbsp;&nbsp; <label>Thrusday</label>
                                <input
                                  type="checkbox"
                                  id="chk1"
                                  className="chk11"
                                  checked={this.state.thrusdaySelected}
                                  onChange={this.selectThrusday}
                                />
                                &nbsp;&nbsp; <label>Friday</label>
                                <input
                                  type="checkbox"
                                  id="chk1"
                                  className="chk11"
                                  checked={this.state.fridaySelected}
                                  onChange={this.selectFriday}
                                />
                                &nbsp;&nbsp; <label>Saturday</label>
                                <input
                                  type="checkbox"
                                  id="chk1"
                                  className="chk11"
                                  checked={this.state.saturdaySelected}
                                  onChange={this.selectSaturday}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Category
                              </label>
                              <div className="col-md-9">
                                {/* <Select
                              // defaultValue={
                              //   this.state.seletedTeam
                              //     ? this.state.seletedTeam
                              //     : ""
                              // } //previously selected value
                              isMulti
                              name="colors"
                              options={this.state.category}
                             value={this.state.seletedCategory}
                              onChange={this.handelChange}
                              className="basic-multi-select"
                              classNamePrefix="select"
                              // onInputChange={this.handelChange}
                            /> */}
                                <ReactTags
                                  ref={this.reactTags}
                                  placeholderText="Add new query..."
                                  onInput={(query) => {
                                    let dom = {
                                      id: this.state.category.length + 1,
                                      name: query,
                                    };
                                    console.log(dom);
                                    this.state.category.push(dom);

                                    this.setState({});
                                  }}
                                  tags={this.state.cat}
                                  suggestions={this.state.category}
                                  onDelete={this.oncatDelete.bind(this)}
                                  onAddition={this.oncatAddition.bind(this)}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Report
                              </label>
                              <div className="col-md-9">
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  className="form-control"
                                  value={this.state.report}
                                  onChange={(val) => {
                                    this.setState({
                                      report: val.target.value,
                                    });
                                    if (this.state.staffing.length > 0) {
                                      this.state.staffing.forEach((element) => {
                                        element.report_name = this.state.report;
                                      });
                                      this.setState({
                                        staffing: this.state.staffing,
                                      });
                                    }
                                  }}
                                />
                              </div>
                            </div>

                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Notification Type
                              </label>
                              <div className="col-md-9">
                                <select
                                  className="form-control"
                                  onChange={(val) => {
                                    this.state.notify = val.target.value;
                                    this.setState({});
                                  }}
                                  value={this.state.notify}
                                >
                                  {this.state.notificationtype.map(function (
                                    data,
                                    key
                                  ) {
                                    return (
                                      <option key={key} value={data.value}>
                                        {data.value}{" "}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label
                                className="col-md-3 col-form-label"
                                htmlFor="name"
                              >
                                Frequency
                              </label>
                              <div className="col-md-9">
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  className="form-control"
                                  value={this.state.frequency}
                                  onChange={(val) => {
                                    this.setState({
                                      frequency: val.target.value,
                                    });
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
                                        value={
                                          this.state.stackHolder[index].role
                                        }
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
                                          this.state.stackHolder[index]
                                            .influence
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
                                              this.state.schedule[index]
                                                .priority
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
                                <th>Email-id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
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
                                      this.state.staffing.push({
                                        id: "",
                                        first_name: "",
                                        last_name: "",
                                        email_id: "",
                                        role: "",
                                        responsibility: "",
                                        start_date: "",
                                        end_date: "",
                                        status: "",
                                      });
                                      this.setState({});
                                      console.log(this.state.staffing.length);
                                    }}
                                  >
                                    <i className="mdi mdi-plus" />
                                  </button>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.staffing.map((item, index) => {
                                console.log(item);
                                console.log(index);
                                return (
                                  <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                    <select
                                        //onChange={(e) =>this.handleCost(e,index)}
                                        onChange={(val) => {
                                          let arr=this.state.employeelist.filter(
                                            (item) => item.email == val.target.value
                                          );
                                          this.state.staffing[index].email_id =
                                           arr[0].email;
                                           this.state.staffing[index].first_name =
                                           arr[0].firstname;
                                           this.state.staffing[index].last_name =
                                           arr[0].lastname;
                                          this.setState({});
                                          //alert(val.target.value);
                                        }}
                                        value={item.email_id}
                                      >
                                        {this.state.employeeemails.map(function (
                                          data,
                                          key
                                        ) {
                                          return (
                                            <option
                                              key={key}
                                              value={data.value}
                                            >
                                              {data.value}{" "}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </td>
                                    <td>
                                      <input
                                      disabled={true}
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        // placeholder="Francis"
                                        value={
                                          this.state.staffing[index].first_name
                                        }
                                        onChange={(val) => {
                                          this.state.staffing[
                                            index
                                          ].first_name = val.target.value;
                                          this.setState({});
                                        }}
                                      />
                                    </td>
                                    <td>
                                      <input
                                      disabled={true}
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
                                    {/* <td>
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
                                    </td> */}
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
                                          this.state.staffing[
                                            index
                                          ].start_date = val.target.value;
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
                                        value={
                                          this.state.staffing[index].status
                                        }
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
                                          // onClick={() => {
                                          //   this.state.staffing.pop(index);

                                          //   this.state.communications.pop(index);

                                          //   this.setState({});
                                          //   console.log(this.state.communications);
                                          // }}
                                          onClick={() => {
                                            if (index > 0) {
                                              console.log(item.id);
                                              if (item.id == "") {
                                                this.state.staffing.pop(index);
                                                this.setState({});
                                              } else {
                                                this.deletefromStaffing(
                                                  item.id,
                                                  index
                                                );
                                              }
                                            }
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
                                {/* <th>
                                <button
                                  type="button"
                                  className="btn btn-success"
                                  onClick={() => {
                                    this.state.staffing.push({
                                      first_name: "",
                                      last_name: "",
                                      email_id: "",
                                      role: "",
                                      department: "",
                                      responsible: false,
                                      consultant: false,
                                      inquire: false,
                                      accountable: false,
                                      report_name: "",
                                      frequency: "",
                                    });
                                    this.setState({});
                                  }}
                                >
                                  <i className="mdi mdi-plus" />
                                </button>
                              </th> */}
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
                                        // onChange={(val) => {
                                        //   this.state.staffing[
                                        //     index
                                        //   ].first_name = val.target.value;
                                        //   this.setState({});
                                        // }}
                                        disabled
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
                                        // onChange={(val) => {
                                        //   this.state.staffing[
                                        //     index
                                        //   ].last_name = val.target.value;
                                        //   this.setState({});
                                        // }}
                                        disabled
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
                                        // onChange={(val) => {
                                        //   this.state.staffing[
                                        //     index
                                        //   ].email_id = val.target.value;
                                        //   this.setState({});
                                        // }}
                                        disabled
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
                                        // onChange={(val) => {
                                        //   this.state.staffing[index].role =
                                        //     val.target.value;
                                        //   this.setState({});
                                        // }}
                                        disabled
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
                                          this.state.staffing[index].department
                                        }
                                        onChange={(val) => {
                                          this.state.staffing[
                                            index
                                          ].department = val.target.value;
                                          this.setState({});
                                        }}
                                      />
                                    </td>
                                    <td>
                                      {/* <input
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
                                    /> */}
                                      <Switch
                                        // onChange={this.handleChange}
                                        onChange={(checked) => {
                                          this.state.staffing[
                                            index
                                          ].responsible = checked;
                                          this.setState({});
                                          console.log(
                                            this.state.staffing[index]
                                              .responsible
                                          );
                                        }}
                                        checked={
                                          item.responsible == "1" ? true : false
                                        } //checked is maintaing the current position of the switch(checked is in green position or in disabled position)
                                        id="normal-switch"
                                      />
                                    </td>
                                    <td>
                                      <Switch
                                        //onChange={this.handleChange}
                                        onChange={(checked) => {
                                          this.state.staffing[
                                            index
                                          ].consultant = checked;
                                          this.setState({});
                                          console.log(
                                            this.state.staffing[index]
                                              .consultant
                                          );
                                        }}
                                        checked={
                                          item.consultant == "1" ? true : false
                                        }
                                        id="normal-switch"
                                      />
                                    </td>
                                    <td>
                                      <Switch
                                        onChange={(checked) => {
                                          this.state.staffing[
                                            index
                                          ].inquire = checked;
                                          this.setState({});
                                          console.log(
                                            this.state.staffing[index].inquire
                                          );
                                        }}
                                        checked={
                                          item.inquire == "1" ? true : false
                                        }
                                        id="normal-switch"
                                      />
                                    </td>
                                    <td>
                                      <Switch
                                        onChange={(checked) => {
                                          this.state.staffing[
                                            index
                                          ].accountable = checked;
                                          this.setState({});
                                          console.log(
                                            this.state.staffing[index]
                                              .accountable
                                          );
                                        }}
                                        checked={
                                          item.accountable == "1" ? true : false
                                        }
                                        id="normal-switch"
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
                                          this.state.staffing[index].report_name
                                        }
                                        onChange={(val) => {
                                          this.state.staffing[
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
                                          this.state.staffing[index].frequency
                                        }
                                        onChange={(val) => {
                                          this.state.staffing[index].frequency =
                                            val.target.value;
                                          this.setState({});
                                        }}
                                      />
                                    </td>
                                    {/* <td>
                                    {index == 0 ? null : (
                                      <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => {
                                         // this.state.staffing.pop(index);
                                          this.setState({});
                                        }}
                                      >
                                        <i className="mdi mdi-window-close" />
                                      </button>
                                    )}
                                  </td> */}
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
                          <table className="table table-centered mb-0">
                            <thead className="thead-dark">
                              <tr align="center">
                                <th>Id</th>
                                <th>Catagory</th>

                                <th>Description</th>
                                <th>Amount</th>
                                <th>Teams</th>

                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Currency</th>
                                <th>Remarks</th>
                                <th>
                                  <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() => {
                                      this.state.cost.push({
                                        cost_type: "",
                                        resource: "",
                                        cost: "",
                                        expense: "",
                                        remarks: "",
                                        start_date: "",
                                        end_date: "",
                                        currency: "",
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
                              {this.state.cost.map((item, index) => {
                                return (
                                  <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                      <select
                                        //onChange={(e) =>this.handleCost(e,index)}
                                        onChange={(val) => {
                                          this.state.cost[index].cost_type =
                                            val.target.value;
                                          this.setState({});
                                          //alert(val.target.value);
                                        }}
                                        value={item.cost_type}
                                      >
                                        {this.state.optionsdata.map(function (
                                          data,
                                          key
                                        ) {
                                          return (
                                            <option
                                              key={key}
                                              value={data.value}
                                            >
                                              {data.value}{" "}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        id="surname"
                                        name="surname"
                                        className="form-control"
                                        // placeholder="Brinkman"
                                        value={this.state.cost[index].resource}
                                        onChange={(val) => {
                                          this.state.cost[index].resource =
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
                                        value={this.state.cost[index].cost}
                                        onChange={(val) => {
                                          this.state.cost[index].cost =
                                            val.target.value;
                                          this.setState({});
                                        }}
                                      />
                                    </td>
                                    <td>
                                      <select
                                        //onChange={(e) =>this.handleCost(e,index)}
                                        onChange={(val) => {
                                          this.state.cost[index].expense =
                                            val.target.value;
                                          this.setState({});

                                          //alert(val.target.value);
                                        }}
                                        value={item.expense}
                                      >
                                        {/* { this.state.seletedTeam.map(o => <option value={o} selected={o == item.expense}>{o}</option>)} */}
                                        {this.state.seletedTeam.map(function (
                                          data,
                                          key
                                        ) {
                                          return (
                                            <option
                                              key={key}
                                              value={data.value}
                                            >
                                              {data.value}{" "}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </td>
                                    <td>
                                      <input
                                        type="date"
                                        className="form-control date"
                                        id="birthdatepicker"
                                        className="form-control"
                                        // placeholder="francis@gmail.com"
                                        value={
                                          this.state.cost[index].start_date
                                        }
                                        onChange={(val) => {
                                          this.state.cost[index].start_date =
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
                                        className="form-control"
                                        // placeholder="francis@gmail.com"
                                        value={this.state.cost[index].end_date}
                                        onChange={(val) => {
                                          this.state.cost[index].end_date =
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
                                        value={this.state.cost[index].currency}
                                        onChange={(val) => {
                                          this.state.cost[index].currency =
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
                                        value={this.state.cost[index].remark}
                                        onChange={(val) => {
                                          this.state.cost[index].remark =
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
                                            this.state.cost.pop(index);
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
                              <div
                                className="d-block"
                                id="uploadPreviewTemplate"
                              >
                                <div className="card mt-1 mb-0 shadow-none border">
                                  <div className="p-2">
                                    <h6>UPLOADED IMAGES:</h6>
                                    <div className="row align-items-center">
                                      {/* cheery's lightbox & pdf design */}
                                      {this.state.image_array.length > 0 ? (
                                        <Lightbox
                                          allImage={this.state.image_array}
                                        />
                                      ) : null}
                                      {/* pdf box */}
                                      {this.state.procurement.length > 0 ? (
                                        <>
                                          {this.state.procurement.map(
                                            (item, index) => {
                                              let ext = item.image
                                                .split(".")
                                                .pop();
                                              if (ext == "pdf") {
                                                // https://arxiv.org/pdf/quant-ph/0410100.pdf
                                                // let pdfUrl = 'http://web.easytodb.com/apitruetask/public/uploads/project_photo/541181598718286.pdf'
                                                let pdfUrl =
                                                  this.state.img_url +
                                                  item.image;
                                                // console.log(pdfUrl);
                                                return (
                                                  <>
                                                    <a
                                                      href="#!"
                                                      data-toggle="modal"
                                                      data-target={
                                                        "#pdfBox" + index
                                                      }
                                                    >
                                                      <img
                                                        src="https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png"
                                                        width="50"
                                                      />
                                                    </a>
                                                    <a
                                                      href
                                                      className="text-muted close"
                                                      data-dz-remove
                                                      onClick={() => {
                                                        // alert(index);
                                                        // this.state.procurement.pop(index);
                                                        //       this.setState({});
                                                        this.deletee(
                                                          item.id,
                                                          index
                                                        );
                                                      }}
                                                    >
                                                      <i className="dripicons-cross" />
                                                    </a>
                                                    <div
                                                      className="modal fade"
                                                      id={"pdfBox" + index}
                                                      key={index}
                                                      tabIndex={-1}
                                                      role="dialog"
                                                      aria-labelledby={
                                                        "pdfBox" +
                                                        index +
                                                        "Label"
                                                      }
                                                      aria-hidden="true"
                                                    >
                                                      <div
                                                        className="modal-dialog"
                                                        role="document"
                                                      >
                                                        <div className="modal-content">
                                                          <div className="modal-body pdfViewer">
                                                            <button
                                                              type="button"
                                                              className="close pull-right"
                                                              data-dismiss="modal"
                                                              aria-label="Close"
                                                            >
                                                              <span aria-hidden="true">
                                                                ×
                                                              </span>
                                                            </button>
                                                            {pdfUrl != "" ? (
                                                              <PDFViewer
                                                                document={{
                                                                  url: pdfUrl,
                                                                  // url: 'http://15.207.88.224/trueTask_back/sample.pdf',
                                                                }}
                                                                options={{
                                                                  workerSrc:
                                                                    "/pdf.worker.js",
                                                                }}
                                                              />
                                                            ) : (
                                                              // <Document
                                                              //   file={pdfUrl}
                                                              //   // onLoadSuccess={onDocumentLoadSuccess}
                                                              // >
                                                              //   <Page pageNumber={"1"} />
                                                              // </Document>
                                                              <p>
                                                                Sorry! no pdf
                                                                found.
                                                              </p>
                                                            )}
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </>
                                                );
                                              }
                                            }
                                          )}
                                        </>
                                      ) : null}
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
                                                  // var win = window.open(
                                                  //   this.state.img_url +
                                                  //     item.image,
                                                  //   "_blank"
                                                  // );
                                                  // win.focus();
                                                  this.imgClicked(item.image);
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
                                      {/* {this.state.image_carasoul==true?
                                      (<Carousel arrows>
                                      {this.state.image_array.map((item, index) => {
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
                                    </Carousel>):
                                     null
                                    } */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : null}

                            {this.state.new_img.length > 0 ? (
                              <div
                                className="d-block"
                                id="uploadPreviewTemplate"
                              >
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
                              <div
                                className="d-block"
                                id="uploadPreviewTemplate"
                              >
                                <div className="card mt-1 mb-0 shadow-none border">
                                  <div className="p-2">
                                    <h6>UPLOADED IMAGES:</h6>
                                    <div className="row align-items-center">
                                      {/* cheery's lightbox & pdf design */}
                                      {this.state.risk_image_array.length >
                                      0 ? (
                                        <Lightbox
                                          allImage={this.state.risk_image_array}
                                        />
                                      ) : null}
                                      {/* pdf box */}
                                      {this.state.riskImage.length > 0 ? (
                                        <>
                                          {this.state.riskImage.map(
                                            (item, index) => {
                                              let ext = item.image
                                                .split(".")
                                                .pop();
                                              //for pdf file
                                              if (ext == "pdf") {
                                                let pdfUrl =
                                                  this.state.img_url +
                                                  item.image;
                                                //console.log(pdfUrl);
                                                return (
                                                  <>
                                                    <a
                                                      href="#!"
                                                      data-toggle="modal"
                                                      data-target={
                                                        "#pdfBox" + index
                                                      }
                                                    >
                                                      <img
                                                        src="https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png"
                                                        width="50"
                                                      />
                                                    </a>
                                                    <a
                                                      href
                                                      className="text-muted close"
                                                      data-dz-remove
                                                      onClick={() => {
                                                        // alert(index);
                                                        // this.state.riskImage.pop(index);
                                                        //       this.setState({});
                                                        this.riskdeletee(
                                                          item.id,
                                                          index
                                                        );
                                                      }}
                                                    >
                                                      <i className="dripicons-cross" />
                                                    </a>
                                                    <div
                                                      className="modal fade"
                                                      id={"pdfBox" + index}
                                                      key={index}
                                                      tabIndex={-1}
                                                      role="dialog"
                                                      aria-labelledby={
                                                        "pdfBox" +
                                                        index +
                                                        "Label"
                                                      }
                                                      aria-hidden="true"
                                                    >
                                                      <div
                                                        className="modal-dialog"
                                                        role="document"
                                                      >
                                                        <div className="modal-content">
                                                          <div className="modal-body pdfViewer">
                                                            <button
                                                              type="button"
                                                              className="close pull-right"
                                                              data-dismiss="modal"
                                                              aria-label="Close"
                                                            >
                                                              <span aria-hidden="true">
                                                                ×
                                                              </span>
                                                            </button>
                                                            {pdfUrl.length >
                                                            0 ? (
                                                              <PDFViewer
                                                                document={{
                                                                  url: pdfUrl,
                                                                }}
                                                                options={{
                                                                  workerSrc:
                                                                    "/pdf.worker.js",
                                                                }}
                                                              />
                                                            ) : (
                                                              <p>
                                                                Sorry! no pdf
                                                                found.
                                                              </p>
                                                            )}
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </>
                                                );
                                              }
                                              //for docx file
                                              if (
                                                ext == "docx" ||
                                                ext == "doc"
                                              ) {
                                                let pdfUrl =
                                                  this.state.img_url +
                                                  item.image;
                                                // console.log(pdfUrl);
                                                return (
                                                  <>
                                                    <a
                                                      href="#!"
                                                      data-toggle="modal"
                                                      data-target={
                                                        "#pdfBox" + index
                                                      }
                                                    >
                                                      <img
                                                        src="https://www.kindpng.com/picc/m/249-2499221_download-icon-document-download-icon-png-transparent-png.png"
                                                        width="50"
                                                      />
                                                    </a>
                                                    <a
                                                      href
                                                      className="text-muted close"
                                                      data-dz-remove
                                                      onClick={() => {
                                                        // alert(index);
                                                        this.state.riskImage.pop(
                                                          index
                                                        );
                                                        this.setState({});
                                                      }}
                                                    >
                                                      <i className="dripicons-cross" />
                                                    </a>
                                                    <div
                                                      className="modal fade"
                                                      id={"pdfBox" + index}
                                                      key={index}
                                                      tabIndex={-1}
                                                      role="dialog"
                                                      aria-labelledby={
                                                        "pdfBox" +
                                                        index +
                                                        "Label"
                                                      }
                                                      aria-hidden="true"
                                                    >
                                                      <div
                                                        className="modal-dialog"
                                                        role="document"
                                                      >
                                                        <div className="modal-content">
                                                          <div className="modal-body pdfViewer">
                                                            <button
                                                              type="button"
                                                              className="close pull-right"
                                                              data-dismiss="modal"
                                                              aria-label="Close"
                                                            >
                                                              <span aria-hidden="true">
                                                                ×
                                                              </span>
                                                            </button>
                                                            {pdfUrl.length >
                                                            0 ? (
                                                              <PDFViewer
                                                                document={{
                                                                  url:
                                                                    "https://arxiv.org/pdf/quant-ph/0410100.pdf",
                                                                }}
                                                                // options={{ workerSrc: "/pdf.worker.js" }}
                                                              />
                                                            ) : (
                                                              <p>
                                                                Sorry! no pdf
                                                                found.
                                                              </p>
                                                            )}
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </>
                                                );
                                              }
                                            }
                                          )}
                                        </>
                                      ) : null}
                                      {/* {this.state.riskImage.map((item, index) => {
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
                                    })} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : null}
                            {this.state.new_risk_img.length > 0 ? (
                              <div
                                className="d-block"
                                id="uploadPreviewTemplate"
                              >
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
                            {this.state.governance.length > 0 ? (
                              <div
                                className="d-block"
                                id="uploadPreviewTemplate"
                              >
                                <div className="card mt-1 mb-0 shadow-none border">
                                  <div className="p-2">
                                    <h6>UPLOADED IMAGES:</h6>
                                    <div className="row align-items-center">
                                      {/* cheery's lightbox & pdf design */}
                                      {this.state.govr_image_array.length >
                                      0 ? (
                                        <Lightbox
                                          allImage={this.state.govr_image_array}
                                        />
                                      ) : null}
                                      {/* pdf box */}
                                      {this.state.governance.length > 0 ? (
                                        <>
                                          {this.state.governance.map(
                                            (item, index) => {
                                              let ext = item.image
                                                .split(".")
                                                .pop();
                                              if (ext == "pdf") {
                                                let pdfUrl =
                                                  this.state.img_url +
                                                  item.image;
                                                //console.log(pdfUrl);
                                                return (
                                                  <>
                                                    <a
                                                      href="#!"
                                                      data-toggle="modal"
                                                      data-target={
                                                        "#pdfBox" + index
                                                      }
                                                    >
                                                      <img
                                                        src="https://cdn3.iconfinder.com/data/icons/line-icons-set/128/1-02-512.png"
                                                        width="50"
                                                      />
                                                    </a>
                                                    <a
                                                      href
                                                      className="text-muted close"
                                                      data-dz-remove
                                                      onClick={() => {
                                                        // alert(index);
                                                        // this.state.riskImage.pop(index);
                                                        //       this.setState({});
                                                        this.governdeletee(
                                                          item.id,
                                                          index
                                                        );
                                                      }}
                                                    >
                                                      <i className="dripicons-cross" />
                                                    </a>
                                                    <div
                                                      className="modal fade"
                                                      id={"pdfBox" + index}
                                                      key={index}
                                                      tabIndex={-1}
                                                      role="dialog"
                                                      aria-labelledby={
                                                        "pdfBox" +
                                                        index +
                                                        "Label"
                                                      }
                                                      aria-hidden="true"
                                                    >
                                                      <div
                                                        className="modal-dialog"
                                                        role="document"
                                                      >
                                                        <div className="modal-content">
                                                          <div className="modal-body pdfViewer">
                                                            <button
                                                              type="button"
                                                              className="close pull-right"
                                                              data-dismiss="modal"
                                                              aria-label="Close"
                                                            >
                                                              <span aria-hidden="true">
                                                                ×
                                                              </span>
                                                            </button>
                                                            {pdfUrl.length >
                                                            0 ? (
                                                              <PDFViewer
                                                                document={{
                                                                  url: pdfUrl,
                                                                }}
                                                                options={{
                                                                  workerSrc:
                                                                    "/pdf.worker.js",
                                                                }}
                                                              />
                                                            ) : (
                                                              <p>
                                                                Sorry! no pdf
                                                                found.
                                                              </p>
                                                            )}
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </>
                                                );
                                              }
                                            }
                                          )}
                                        </>
                                      ) : null}
                                      {/* file preview template */}
                                      {/* {this.state.governance.length > 0 ? (
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
                                    )} */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : null}
                            {this.state.new_govr_img.length > 0 ? (
                              <div
                                className="d-block"
                                id="uploadPreviewTemplate"
                              >
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
                                Suspendisse convallis dignissim eros at
                                volutpat. In egestas mattis dui. Aliquam mattis
                                dictum aliquet.
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
            </LoadingOverlay>
          </div>
          {/* end col */}
        </div>
      </div>
    );
  }
}