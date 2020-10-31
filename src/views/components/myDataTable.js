import React, { Component } from 'react';
import { MDBDataTable } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default class mdiDataTable extends Component {
  render() {
    return (
      <div>
        <MDBDataTable striped hover data={this.props.data} />
      </div>
    );
  }
}
