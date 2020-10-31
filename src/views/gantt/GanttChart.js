import React, {Component} from 'react';
import {DayPilot, DayPilotGantt} from "daypilot-pro-react";

class GanttChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cellWidth: 40,
      linkBottomMargin: 17,
      taskHtmlRightMargin: 25,
      timeHeaders: [{groupBy: "Month"}, {groupBy: "Day", format: "d"}],
      scale: "Day",
      days: 30,
      startDate: "2019-10-01",
      rowHeaderHideIconEnabled: false,
      rowMoveHandling: "Update",
      onRowMoved: args => {
        this.gantt.message("Row moved");
      },
      onTaskMoved: args => {
        this.gantt.message("Task moved");
      },
      linkCreateHandling: "Update",
      onLinkCreated: args => {
        this.gantt.message("Link created");
      },
      rowCreateHandling: "Enabled",
      onRowCreate: args => {
        this.gantt.tasks.add(new DayPilot.Task({
          id: DayPilot.guid(),
          text: args.text,
          start: new DayPilot.Date().getDatePart(),
          end: new DayPilot.Date().getDatePart().addDays(1)
        }));
      },
    };
  }

  componentDidMount() {

    // load resource and event data
    this.setState({
      tasks: [
        {
          "id": 1,
          "text": "Group 1",
          "complete": 35,
          "start": "2019-10-04T00:00:00",
          "end": "2019-10-16T00:00:00",
          "children": [
            {
              "id": 2,
              "start": "2019-10-04T00:00:00",
              "end": "2019-10-11T00:00:00",
              "text": "Task 1",
              "complete": 60
            },
            {
              "id": 3,
              "start": "2019-10-11T00:00:00",
              "end": "2019-10-16T00:00:00",
              "text": "Task 2",
              "complete": 0
            },
            {
              "id": 4,
              "start": "2019-10-16T00:00:00",
              "type": "Milestone",
              "text": "Milestone 1",
              "end": "2019-10-16T00:00:00"
            }
          ],
        }
      ],
      links: [
        {from: 2, to: 3, type: "FinishToStart"}
      ]
    });

  }

  render() {
    var {...config} = this.state;
    return (
      <div>
        <DayPilotGantt
          {...config}
          ref={component => {
            this.gantt = component && component.control;
          }}
        />
      </div>
    );
  }
}

export default GanttChart;
