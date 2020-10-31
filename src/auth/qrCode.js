import React, { Component } from "react";
var QRCode = require("qrcode.react");


export default class qrCode extends Component{
 
  constructor(props) {
    super(props);

    this.state = {
      
     
    };
  }
  componentWillReceiveProps(nextProps)
  {
    if(nextProps.qrvalue!="")
    {
       // this.intervalid=setInterval(this.getmyToken,3000);
    }
   
  }
 

//export default function qrCode() {
  render() {
  return (
    <div className="card h-100 qrCode mb-0">
      <div className="bg-dark card-header pb-4 pt-4 text-center">
        <h3 className="text-white">Sign in with QR Code</h3>
      </div>

      <h4 className="text-dark-50 text-center mt-3 font-weight-bold">
        Scan the QR code below to sign in
      </h4>
      <QRCode
        value={this.props.qrvalue}
        size="200"
        className="mx-auto my-4"
      />
      <div className="form-group text-center">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="checkbox-qr"
            defaultChecked
          />
          <label className="custom-control-label" htmlFor="checkbox-qr">
            Remember me
          </label>
        </div>
      </div>
    </div>
  );
}
}
