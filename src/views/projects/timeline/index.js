import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Breadcomb from "../../components/breadcomb";

export default class index extends Component {
    render() {
        return (
          <div className="container-fluid">
            <Breadcomb pageTitle="Project Timeline" leadTitle="Project" />

            <div className="row">
              <div className="col-12">
                <div className="timeline">
                  <div className="timeline-show mb-3 text-center">
                    <h5 className="m-0 time-show-name">Today</h5>
                  </div>
                  <div className="timeline-lg-item timeline-item-left">
                    <div className="timeline-desk">
                      <div className="timeline-box">
                        <span className="arrow-alt" />
                        <span className="timeline-icon">
                          <i className="mdi mdi-adjust" />
                        </span>
                        <h4 className="mt-0 mb-1 font-16">
                          Completed UX design project for our client
                        </h4>
                        <p className="text-muted">
                          <small>22 July, 2019</small>
                        </p>
                        <p>
                          Dolorum provident rerum aut hic quasi placeat iure
                          tempora laudantium ipsa ad debitis unde?{" "}
                        </p>
                        <a
                          href="javascript: void(0);"
                          className="btn btn-sm btn-light"
                        >
                          👍 17
                        </a>
                        <a
                          href="javascript: void(0);"
                          className="btn btn-sm btn-light"
                        >
                          ❤️ 89
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-lg-item">
                    <div className="timeline-desk">
                      <div className="timeline-box">
                        <span className="arrow" />
                        <span className="timeline-icon">
                          <i className="mdi mdi-adjust" />
                        </span>
                        <h4 className="mt-0 mb-1 font-16">
                          Yay! We are celebrating our first admin release.
                        </h4>
                        <p className="text-muted">
                          <small>22 July, 2019</small>
                        </p>
                        <p>
                          Consectetur adipisicing elit. Iusto, optio, dolorum{" "}
                          <a href="#">John deon</a> provident rerum aut hic
                          quasi placeat iure tempora laudantium{" "}
                        </p>
                        <a
                          href="javascript: void(0);"
                          className="btn btn-sm btn-light"
                        >
                          🎉 148
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-show my-3 text-center">
                    <h5 className="m-0 time-show-name">Yesterday</h5>
                  </div>
                  <div className="timeline-lg-item timeline-item-left">
                    <div className="timeline-desk">
                      <div className="timeline-box">
                        <span className="arrow-alt" />
                        <span className="timeline-icon">
                          <i className="mdi mdi-adjust" />
                        </span>
                        <h4 className="mt-0 mb-1 font-16">
                          We released new version of our theme Ubold.
                        </h4>
                        <p className="text-muted">
                          <small>21 July, 2019</small>
                        </p>
                        <p>3 new photo Uploaded on facebook fan page</p>
                        <div className="timeline-album mb-3">
                          <a href="javascript: void(0);">
                            <img alt="" src="assets/images/small/small-1.jpg" />
                          </a>
                          <a href="javascript: void(0);">
                            <img alt="" src="assets/images/small/small-2.jpg" />
                          </a>
                          <a href="javascript: void(0);">
                            <img alt="" src="assets/images/small/small-3.jpg" />
                          </a>
                        </div>
                        <a
                          href="javascript: void(0);"
                          className="btn btn-sm btn-light"
                        >
                          🏆 94
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-lg-item">
                    <div className="timeline-desk">
                      <div className="timeline-box">
                        <span className="arrow" />
                        <span className="timeline-icon">
                          <i className="mdi mdi-adjust" />
                        </span>
                        <h4 className="mt-0 mb-1 font-16">
                          We have archieved 25k sales in our themes.
                        </h4>
                        <p className="text-muted">
                          <small>21 July, 2019</small>
                        </p>
                        <p>
                          Outdoor visit at California State Route 85 with John
                          Boltana &amp; Harry Piterson regarding to setup a new
                          show room.
                        </p>
                        <a
                          href="javascript: void(0);"
                          className="btn btn-sm btn-light"
                        >
                          👍 1.4k
                        </a>
                        <a
                          href="javascript: void(0);"
                          className="btn btn-sm btn-light"
                        >
                          🎉 2k
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-lg-item timeline-item-left">
                    <div className="timeline-desk">
                      <div className="timeline-box">
                        <span className="arrow-alt" />
                        <span className="timeline-icon">
                          <i className="mdi mdi-adjust" />
                        </span>
                        <h4 className="mt-0 mb-1 font-16">
                          Conference call with UX team
                        </h4>
                        <p className="text-muted">
                          <small>21 July, 2019</small>
                        </p>
                        <p>
                          Jonatha Smith added new milestone{" "}
                          <span>
                            <a href="#">Pathek</a>
                          </span>
                          Lorem ipsum dolor sit amet consiquest dio
                        </p>
                        <a
                          href="javascript: void(0);"
                          className="btn btn-sm btn-light"
                        >
                          ❤️ 89
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-show my-3 text-center">
                    <h5 className="m-0 time-show-name">2018</h5>
                  </div>
                  <div className="timeline-lg-item">
                    <div className="timeline-desk">
                      <div className="timeline-box">
                        <span className="arrow" />
                        <span className="timeline-icon">
                          <i className="mdi mdi-adjust" />
                        </span>
                        <h4 className="mt-0 mb-1 font-16">
                          Join new team member Alex Smith
                        </h4>
                        <p className="text-muted">
                          <small>10 December, 2018</small>
                        </p>
                        <p>
                          Alex Smith is a Senior Software (Full Stack) engineer
                          with a deep passion for building usable, functional
                          &amp; pretty web applications.{" "}
                        </p>
                        <div className="media">
                          <img
                            src="assets/images/users/avatar-3.jpg"
                            alt="Arya S"
                            className="rounded-circle mr-2"
                            height={24}
                          />
                          <div className="media-body">
                            <h5 className="mt-1 font-14 mb-0">
                              Alex Smith{" "}
                              <small>- Senior Software (Full Stack)</small>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-lg-item timeline-item-left">
                    <div className="timeline-desk">
                      <div className="timeline-box">
                        <span className="arrow-alt" />
                        <span className="timeline-icon">
                          <i className="mdi mdi-adjust" />
                        </span>
                        <h4 className="mt-0 mb-1 font-16">
                          First release of Hyper admin dashboard template
                        </h4>
                        <p className="text-muted">
                          <small>16 July, 2018</small>
                        </p>
                        <p>
                          Outdoor visit at California State Route 85 with John
                          Boltana &amp; Harry Piterson regarding to setup a new
                          show room.
                        </p>
                        <a
                          href="javascript: void(0);"
                          className="btn btn-sm btn-light"
                        >
                          🎉 10k
                        </a>
                        <a
                          href="javascript: void(0);"
                          className="btn btn-sm btn-light"
                        >
                          👍 3.2k
                        </a>
                        <a
                          href="javascript: void(0);"
                          className="btn btn-sm btn-light"
                        >
                          ❤️ 7.1k
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end timeline */}
              </div>{" "}
              {/* end col */}
            </div>
          </div>
        );
    }
}
