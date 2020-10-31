import React, { Component } from "react";

export default class activity extends Component {
  render() {
    return (
      <div className="timeline-alt pb-0">
        <div className="timeline-item">
          <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon" />
          <div className="timeline-item-info">
            <a href="#" className="text-info font-weight-bold mb-1 d-block">
              You sold an item
            </a>
            <small>
              Paul Burgess just purchased “Hyper - Admin Dashboard”!
            </small>
            <p className="mb-0 pb-2">
              <small className="text-muted">5 minutes ago</small>
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon" />
          <div className="timeline-item-info">
            <a href="#" className="text-primary font-weight-bold mb-1 d-block">
              Product on the Bootstrap Market
            </a>
            <small>
              Dave Gamache added
              <span className="font-weight-bold">Admin Dashboard</span>
            </small>
            <p className="mb-0 pb-2">
              <small className="text-muted">30 minutes ago</small>
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon" />
          <div className="timeline-item-info">
            <a href="#" className="text-info font-weight-bold mb-1 d-block">
              Robert Delaney
            </a>
            <small>
              Send you message
              <span className="font-weight-bold">"Are you there?"</span>
            </small>
            <p className="mb-0 pb-2">
              <small className="text-muted">2 hours ago</small>
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <i className="mdi mdi-upload bg-primary-lighten text-primary timeline-icon" />
          <div className="timeline-item-info">
            <a href="#" className="text-primary font-weight-bold mb-1 d-block">
              Audrey Tobey
            </a>
            <small>
              Uploaded a photo
              <span className="font-weight-bold">"Error.jpg"</span>
            </small>
            <p className="mb-0 pb-2">
              <small className="text-muted">14 hours ago</small>
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <i className="mdi mdi-upload bg-info-lighten text-info timeline-icon" />
          <div className="timeline-item-info">
            <a href="#" className="text-info font-weight-bold mb-1 d-block">
              You sold an item
            </a>
            <small>
              Paul Burgess just purchased “Hyper - Admin Dashboard”!
            </small>
            <p className="mb-0 pb-2">
              <small className="text-muted">16 hours ago</small>
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <i className="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon" />
          <div className="timeline-item-info">
            <a href="#" className="text-primary font-weight-bold mb-1 d-block">
              Product on the Bootstrap Market
            </a>
            <small>
              Dave Gamache added
              <span className="font-weight-bold">Admin Dashboard</span>
            </small>
            <p className="mb-0 pb-2">
              <small className="text-muted">22 hours ago</small>
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <i className="mdi mdi-microphone bg-info-lighten text-info timeline-icon" />
          <div className="timeline-item-info">
            <a href="#" className="text-info font-weight-bold mb-1 d-block">
              Robert Delaney
            </a>
            <small>
              Send you message
              <span className="font-weight-bold">"Are you there?"</span>
            </small>
            <p className="mb-0 pb-2">
              <small className="text-muted">2 days ago</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
