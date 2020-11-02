import React from "react";

// import MyTask from "./views/myTask";

import Subscription from "./views/subscription";
import Profile from "./views/userProfile";
import EditProfile from "./views/userProfile/editProfile";

// import Board from "./views/board";
// import Subtask from "./views/subtask";
// import MytaskSubtask from "./views/mytasksubtask";
// import Calender from "./views/calender";
// import ProjectWizard from "./views/projects/wizard";
// import ProjectTimeline from "./views/projects/timeline";
// import ProjectList from "./views/projects/projectList";
// import ProjectList1 from "./views/projects/projectlist1";
// import ProjectList2 from "./views/projects/projectlist2";
// import ProjectDetails from "./views/projects/projectDetails";
// import ProjectOverview from "./views/reports/overview";
// import ProjectMilestone from "./views/reports/milestone";
// import TeamReport from "./views/reports/teamReport";
// import ResourceAssignment from "./views/reports/assignment";
// import TaskOverview from "./views/reports/taskOverview";
// import ReportTimeline from "./views/reports/reportTimeline";
// import MyWork from "./views/reports/myWork";
// import ProjectReview from "./views/reports/projectReview";
// import PortfolioList from "./views/projectList/portfolio";
// import ProgramList from "./views/projectList/program";
// import CreateProject from "./views/projectAdd";

//ADMIN
import Dashboard from "./views/dashboard";
import Faq from "./views/faq";
import SubscriptionReport from "./views/subscriptionreport";
import ManageSubscription from "./views/subscriptionreport/managesubscription";
import ProfileReport from "./views/profilereport";
import AddEmployee from "./views/employee/create";
import ManageEmployee from "./views/employee/view";


//Admin Routes
const routes = [
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/profile-report", name: "ProfileReport", component: ProfileReport },
  {
    path: "/subscription-report",
    name: "SubscriptionReport",
    component: SubscriptionReport,
  },
  {
    path: "/manage-subscription",
    name: "ManageSubscription",
    component: ManageSubscription,
  },
  {
    path: "/add-member",
    name: "AddEmployee",
    component: AddEmployee,
  },
  {
    path: "/view-member",
    name: "ManageEmployee",
    component: ManageEmployee,
  },

  { path: "/faq", name: "Faq", component: Faq },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/edit-profile", name: "EditProfile", component: EditProfile },
  { path: "/subscription", name: "Subscription", component: Subscription },
];

// const routes = [
//   { path: "/dashboard", name: "Dashboard", component: Dashboard },
//   { path: "/my-task:id", name: "MyTask", component: MyTask },
//   { path: "/faq", name: "Faq", component: Faq },
//   { path: "/profile", name: "Profile", component: Profile },
//   { path: "/edit-profile", name: "EditProfile", component: EditProfile },
//   { path: "/project-wizard", name: "ProjectWizard", component: ProjectWizard },

//   {
//     path: "/project-wizardd:id",
//     name: "ProjectWizard",
//     component: ProjectWizard,
//   },
//   { path: "/project-list", name: "ProjectList", component: ProjectList },
//   { path: "/project-list1", name: "ProjectList1", component: ProjectList1 },
//   { path: "/project-list2", name: "ProjectList2", component: ProjectList2 },
//   { path: "/subtask-list:id", name: "Subtask", component: Subtask },
//   { path: "/mytask-subtasklist:id", name: "MytaskSubtask", component: MytaskSubtask},

//   {
//     path: "/project-details",
//     name: "ProjectDetails",
//     component: ProjectDetails,
//   },
//   {
//     path: "/project-timeline",
//     name: "ProjectTimeline",
//     component: ProjectTimeline,
//   },
 
//   {
//     path: "/project-overview",
//     name: "ProjectOverview",
//     component: ProjectOverview,
//   },
//   {
//     path: "/project-milestone",
//     name: "ProjectMilestone",
//     component: ProjectMilestone,
//   },
//   { path: "/team-report", name: "TeamReport", component: TeamReport },
//   {
//     path: "/resource-assignment",
//     name: "ResourceAssignment",
//     component: ResourceAssignment,
//   },
//   { path: "/task-overview", name: "TaskOverview", component: TaskOverview },
//   {
//     path: "/report-timeline",
//     name: "ReportTimeline",
//     component: ReportTimeline,
//   },
//   { path: "/my-work", name: "MyWork", component: MyWork },
//   { path: "/project-review", name: "ProjectReview", component: ProjectReview },
//   { path: "/portfolio-list", name: "PortfolioList", component: PortfolioList },
//   { path: "/program-list", name: "ProgramList", component: ProgramList },
//   { path: "/create-project", name: "CreateProject", component: CreateProject },
//   { path: "/board:id", name: "Board", component: Board },
//   { path: "/calender", name: "Calender", component: Calender },
// ];

export default routes;
