import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import Footer from "./footer";

export default class index extends Component {
    render() {
        return (
            <div>
                <Navbar />
            {/* START HERO */}
            <section className="hero-section">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <div className="mt-md-4">
                      <div>
                        <span className="badge badge-danger badge-pill">
                          New
                        </span>
                        <span className="text-white-50 ml-1">
                          Welcome to new landing page
                        </span>
                      </div>
                      <h2 className="text-white font-weight-normal mb-4 mt-3 hero-title">
                        Responsive Web UI Kit &amp; Dashboard Template
                      </h2>
                      <p className="mb-4 font-16 text-white-50">
                        Hyper is a fully featured dashboard and admin template
                        comes with tones of well designed UI elements,
                        components, widgets and pages.
                      </p>
                      <a href target="_blank" className="btn btn-success">
                        Preview <i className="mdi mdi-arrow-right ml-1" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5 offset-md-2">
                    <div className="text-md-right mt-3 mt-md-0">
                      <img
                        src="assets/images/startup.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* END HERO */}
            {/* START SERVICES */}
            <section className="py-5">
              <div className="container">
                <div className="row py-4">
                  <div className="col-lg-12">
                    <div className="text-center">
                      <h1 className="mt-0">
                        <i className="mdi mdi-infinity" />
                      </h1>
                      <h3>
                        The admin is fully{" "}
                        <span className="text-primary">responsive</span> and
                        easy to <span className="text-primary">customize</span>
                      </h3>
                      <p className="text-muted mt-2">
                        The clean and well commented code allows easy
                        customization of the theme.It's designed for
                        <br />
                        describing your app, agency or business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="text-center p-3">
                      <div className="avatar-sm m-auto">
                        <span className="avatar-title bg-primary-lighten rounded-circle">
                          <i className="uil uil-desktop text-primary font-24" />
                        </span>
                      </div>
                      <h4 className="mt-3">Responsive Layouts</h4>
                      <p className="text-muted mt-2 mb-0">
                        Et harum quidem rerum as expedita distinctio nam libero
                        tempore cum soluta nobis est cumque quo.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="text-center p-3">
                      <div className="avatar-sm m-auto">
                        <span className="avatar-title bg-primary-lighten rounded-circle">
                          <i className="uil uil-vector-square text-primary font-24" />
                        </span>
                      </div>
                      <h4 className="mt-3">Based on Bootstrap UI</h4>
                      <p className="text-muted mt-2 mb-0">
                        Temporibus autem quibusdam et aut officiis
                        necessitatibus saepe eveniet ut sit et recusandae.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="text-center p-3">
                      <div className="avatar-sm m-auto">
                        <span className="avatar-title bg-primary-lighten rounded-circle">
                          <i className="uil uil-presentation text-primary font-24" />
                        </span>
                      </div>
                      <h4 className="mt-3">Creative Design</h4>
                      <p className="text-muted mt-2 mb-0">
                        Nam libero tempore, cum soluta a est eligendi minus id
                        quod maxime placeate facere assumenda est.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="text-center p-3">
                      <div className="avatar-sm m-auto">
                        <span className="avatar-title bg-primary-lighten rounded-circle">
                          <i className="uil uil-apps text-primary font-24" />
                        </span>
                      </div>
                      <h4 className="mt-3">Multiple Applications</h4>
                      <p className="text-muted mt-2 mb-0">
                        Et harum quidem rerum as expedita distinctio nam libero
                        tempore cum soluta nobis est cumque quo.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="text-center p-3">
                      <div className="avatar-sm m-auto">
                        <span className="avatar-title bg-primary-lighten rounded-circle">
                          <i className="uil uil-shopping-cart-alt text-primary font-24" />
                        </span>
                      </div>
                      <h4 className="mt-3">Ecommerce Pages</h4>
                      <p className="text-muted mt-2 mb-0">
                        Temporibus autem quibusdam et aut officiis
                        necessitatibus saepe eveniet ut sit et recusandae.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="text-center p-3">
                      <div className="avatar-sm m-auto">
                        <span className="avatar-title bg-primary-lighten rounded-circle">
                          <i className="uil uil-grids text-primary font-24" />
                        </span>
                      </div>
                      <h4 className="mt-3">Multiple Layouts</h4>
                      <p className="text-muted mt-2 mb-0">
                        Nam libero tempore, cum soluta a est eligendi minus id
                        quod maxime placeate facere assumenda est.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* END SERVICES */}
            {/* START FEATURES 1 */}
            <section className="py-5 bg-light-lighten border-top border-bottom border-light">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="text-center">
                      <h3>
                        Flexible <span className="text-primary">Layouts</span>
                      </h3>
                      <p className="text-muted mt-2">
                        There are three different layout options available to
                        cater need for any <br /> modern web application.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-4">
                    <div className="demo-box text-center">
                      <img
                        src="assets/images/layouts/layout-1.png"
                        alt="demo-img"
                        className="img-fluid shadow-sm rounded"
                      />
                      <h5 className="mt-3 f-17">Vertical Layout</h5>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="demo-box text-center mt-3 mt-lg-0">
                      <img
                        src="assets/images/layouts/layout-2.png"
                        alt="demo-img"
                        className="img-fluid shadow-sm rounded"
                      />
                      <h5 className="mt-3 f-17">Horizontal Layout</h5>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="demo-box text-center mt-3 mt-lg-0">
                      <img
                        src="assets/images/layouts/layout-3.png"
                        alt="demo-img"
                        className="img-fluid shadow-sm rounded"
                      />
                      <h5 className="mt-3 f-17">Detached Layout</h5>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-4">
                    <div className="demo-box text-center">
                      <img
                        src="assets/images/layouts/layout-5.png"
                        alt="demo-img"
                        className="img-fluid shadow-sm rounded"
                      />
                      <h5 className="mt-3 f-17">Light Sidenav Layout</h5>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="demo-box text-center mt-3 mt-lg-0">
                      <img
                        src="assets/images/layouts/layout-6.png"
                        alt="demo-img"
                        className="img-fluid shadow-sm rounded"
                      />
                      <h5 className="mt-3 f-17">Boxed Layout</h5>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="demo-box text-center mt-3 mt-lg-0">
                      <img
                        src="assets/images/layouts/layout-4.png"
                        alt="demo-img"
                        className="img-fluid shadow-sm rounded"
                      />
                      <h5 className="mt-3 f-17">Semi Dark Layout</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* END FEATURES 1 */}
            {/* START FEATURES 2 */}
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="text-center">
                      <h1 className="mt-0">
                        <i className="mdi mdi-heart-multiple-outline" />
                      </h1>
                      <h3>
                        Features you'll{" "}
                        <span className="text-danger">love</span>
                      </h3>
                      <p className="text-muted mt-2">
                        Hyper comes with next generation ui design and have
                        multiple benefits
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-2 py-5 align-items-center">
                  <div className="col-lg-5">
                    <img
                      src="assets/images/features-1.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 offset-lg-1">
                    <h3 className="font-weight-normal">
                      Inbuilt applications and pages
                    </h3>
                    <p className="text-muted mt-3">
                      Hyper comes with a variety of ready-to-use applications
                      and pages that help to speed up the development
                    </p>
                    <div className="mt-4">
                      <p className="text-muted">
                        <i className="mdi mdi-circle-medium text-primary" />{" "}
                        Projects &amp; Tasks
                      </p>
                      <p className="text-muted">
                        <i className="mdi mdi-circle-medium text-primary" />{" "}
                        Ecommerce Application Pages
                      </p>
                      <p className="text-muted">
                        <i className="mdi mdi-circle-medium text-primary" />{" "}
                        Profile, pricing, invoice
                      </p>
                      <p className="text-muted">
                        <i className="mdi mdi-circle-medium text-primary" />{" "}
                        Login, signup, forget password
                      </p>
                    </div>
                    <a href className="btn btn-primary btn-rounded mt-3">
                      Read More <i className="mdi mdi-arrow-right ml-1" />
                    </a>
                  </div>
                </div>
                <div className="row pb-3 pt-5 align-items-center">
                  <div className="col-lg-6">
                    <h3 className="font-weight-normal">
                      Simply beautiful design
                    </h3>
                    <p className="text-muted mt-3">
                      The simplest and fastest way to build dashboard or admin
                      panel. Hyper is built using the latest tech and tools and
                      provide an easy way to customize anything, including an
                      overall color schemes, layout, etc.
                    </p>
                    <div className="mt-4">
                      <p className="text-muted">
                        <i className="mdi mdi-circle-medium text-success" />{" "}
                        Built with latest Bootstrap
                      </p>
                      <p className="text-muted">
                        <i className="mdi mdi-circle-medium text-success" />{" "}
                        Extensive use of SCSS variables
                      </p>
                      <p className="text-muted">
                        <i className="mdi mdi-circle-medium text-success" />{" "}
                        Well documented and structured code
                      </p>
                      <p className="text-muted">
                        <i className="mdi mdi-circle-medium text-success" />{" "}
                        Detailed Documentation
                      </p>
                    </div>
                    <a href className="btn btn-success btn-rounded mt-3">
                      Read More <i className="mdi mdi-arrow-right ml-1" />
                    </a>
                  </div>
                  <div className="col-lg-5 offset-lg-1">
                    <img
                      src="assets/images/features-2.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* END FEATURES 2 */}
            {/* START PRICING */}
            <section className="py-5 bg-light-lighten border-top border-bottom border-light">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="text-center">
                      <h1 className="mt-0">
                        <i className="mdi mdi-tag-multiple" />
                      </h1>
                      <h3>
                        Choose Simple{" "}
                        <span className="text-primary">Pricing</span>
                      </h3>
                      <p className="text-muted mt-2">
                        The clean and well commented code allows easy
                        customization of the theme.It's designed for
                        <br />
                        describing your app, agency or business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 pt-3">
                  <div className="col-md-4">
                    <div className="card card-pricing">
                      <div className="card-body text-center">
                        <p className="card-pricing-plan-name font-weight-bold text-uppercase">
                          Standard License{" "}
                        </p>
                        <i className="card-pricing-icon dripicons-user text-primary" />
                        <h2 className="card-pricing-price">
                          $49 <span>/ License</span>
                        </h2>
                        <ul className="card-pricing-features">
                          <li>10 GB Storage</li>
                          <li>500 GB Bandwidth</li>
                          <li>No Domain</li>
                          <li>1 User</li>
                          <li>Email Support</li>
                          <li>24x7 Support</li>
                        </ul>
                        <button className="btn btn-primary mt-4 mb-2 btn-rounded">
                          Choose Plan
                        </button>
                      </div>
                    </div>
                    {/* end Pricing_card */}
                  </div>
                  {/* end col */}
                  <div className="col-md-4">
                    <div className="card card-pricing card-pricing-recommended">
                      <div className="card-body text-center">
                        <div className="card-pricing-plan-tag">Recommended</div>
                        <p className="card-pricing-plan-name font-weight-bold text-uppercase">
                          Multiple License
                        </p>
                        <i className="card-pricing-icon dripicons-briefcase text-primary" />
                        <h2 className="card-pricing-price">
                          $99 <span>/ License</span>
                        </h2>
                        <ul className="card-pricing-features">
                          <li>50 GB Storage</li>
                          <li>900 GB Bandwidth</li>
                          <li>2 Domain</li>
                          <li>10 User</li>
                          <li>Email Support</li>
                          <li>24x7 Support</li>
                        </ul>
                        <button className="btn btn-primary mt-4 mb-2 btn-rounded">
                          Choose Plan
                        </button>
                      </div>
                    </div>
                    {/* end Pricing_card */}
                  </div>
                  {/* end col */}
                  <div className="col-md-4">
                    <div className="card card-pricing">
                      <div className="card-body text-center">
                        <p className="card-pricing-plan-name font-weight-bold text-uppercase">
                          Extended License
                        </p>
                        <i className="card-pricing-icon dripicons-store text-primary" />
                        <h2 className="card-pricing-price">
                          $599 <span>/ License</span>
                        </h2>
                        <ul className="card-pricing-features">
                          <li>100 GB Storege</li>
                          <li>Unlimited Bandwidth</li>
                          <li>10 Domain</li>
                          <li>Unlimited User</li>
                          <li>Email Support</li>
                          <li>24x7 Support</li>
                        </ul>
                        <button className="btn btn-primary mt-4 mb-2 btn-rounded">
                          Choose Plan
                        </button>
                      </div>
                    </div>
                    {/* end Pricing_card */}
                  </div>
                  {/* end col */}
                </div>
              </div>
            </section>
            {/* END PRICING */}
            {/* START FAQ */}
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="text-center">
                      <h1 className="mt-0">
                        <i className="mdi mdi-frequently-asked-questions" />
                      </h1>
                      <h3>
                        Frequently Asked{" "}
                        <span className="text-primary">Questions</span>
                      </h3>
                      <p className="text-muted mt-2">
                        Here are some of the basic types of questions for our
                        customers. For more
                        <br />
                        information please contact us.
                      </p>
                      <button
                        type="button"
                        className="btn btn-success btn-sm mt-2"
                      >
                        <i className="mdi mdi-email-outline mr-1" /> Email us
                        your question
                      </button>
                      <button
                        type="button"
                        className="btn btn-info btn-sm mt-2 ml-1"
                      >
                        <i className="mdi mdi-twitter mr-1" /> Send us a tweet
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-5 offset-lg-1">
                    {/* Question/Answer */}
                    <div>
                      <div className="faq-question-q-box">Q.</div>
                      <h4 className="faq-question text-body">
                        Can I use this template for my client?
                      </h4>
                      <p className="faq-answer mb-4 pb-1 text-muted">
                        Yup, the marketplace license allows you to use this
                        theme in any end products. For more information on
                        licenses, please refere{" "}
                        <a
                          href="https://themes.getbootstrap.com/licenses/"
                          target="_blank"
                        >
                          here
                        </a>
                        .
                      </p>
                    </div>
                    {/* Question/Answer */}
                    <div>
                      <div className="faq-question-q-box">Q.</div>
                      <h4 className="faq-question text-body">
                        How do I get help with the theme?
                      </h4>
                      <p className="faq-answer mb-4 pb-1 text-muted">
                        Use our dedicated support email
                        (support@coderthemes.com) to send your issues or
                        feedback. We are here to help anytime.
                      </p>
                    </div>
                  </div>
                  {/*/col-lg-5 */}
                  <div className="col-lg-5">
                    {/* Question/Answer */}
                    <div>
                      <div className="faq-question-q-box">Q.</div>
                      <h4 className="faq-question text-body">
                        Can this theme work with Wordpress?
                      </h4>
                      <p className="faq-answer mb-4 pb-1 text-muted">
                        No. This is a HTML template. It won't directly with
                        wordpress, though you can convert this into wordpress
                        compatible theme.
                      </p>
                    </div>
                    {/* Question/Answer */}
                    <div>
                      <div className="faq-question-q-box">Q.</div>
                      <h4 className="faq-question text-body">
                        Will you regularly give updates of Hyper?
                      </h4>
                      <p className="faq-answer mb-4 pb-1 text-muted">
                        Yes, We will update the Hyper regularly. All the future
                        updates would be available without any cost.
                      </p>
                    </div>
                  </div>
                  {/*/col-lg-5*/}
                </div>
                {/* end row */}
              </div>{" "}
              {/* end container*/}
            </section>
            {/* END FAQ */}
            {/* START CONTACT */}
            <section className="py-5 bg-light-lighten border-top border-bottom border-light">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="text-center">
                      <h3>
                        Get In <span className="text-primary">Touch</span>
                      </h3>
                      <p className="text-muted mt-2">
                        Please fill out the following form and we will get back
                        to you shortly. For more
                        <br />
                        information please contact us.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mt-3">
                  <div className="col-md-4">
                    <p className="text-muted">
                      <span className="font-weight-bold">
                        Customer Support:
                      </span>
                      <br />{" "}
                      <span className="d-block mt-1">+1 234 56 7894</span>
                    </p>
                    <p className="text-muted mt-4">
                      <span className="font-weight-bold">Email Address:</span>
                      <br />{" "}
                      <span className="d-block mt-1">info@gmail.com</span>
                    </p>
                    <p className="text-muted mt-4">
                      <span className="font-weight-bold">Office Address:</span>
                      <br />{" "}
                      <span className="d-block mt-1">
                        4461 Cedar Street Moro, AR 72368
                      </span>
                    </p>
                    <p className="text-muted mt-4">
                      <span className="font-weight-bold">Office Time:</span>
                      <br />{" "}
                      <span className="d-block mt-1">9:00AM To 6:00PM</span>
                    </p>
                  </div>
                  <div className="col-md-8">
                    <form>
                      <div className="row mt-4">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="fullname">Your Name</label>
                            <input
                              className="form-control form-control-light"
                              type="text"
                              id="fullname"
                              placeholder="Name..."
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="emailaddress">Your Email</label>
                            <input
                              className="form-control form-control-light"
                              type="email"
                              required
                              id="emailaddress"
                              placeholder="Enter you email..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-1">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="subject">Your Subject</label>
                            <input
                              className="form-control form-control-light"
                              type="text"
                              id="subject"
                              placeholder="Enter subject..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-1">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="comments">Message</label>
                            <textarea
                              id="comments"
                              rows={4}
                              className="form-control form-control-light"
                              placeholder="Type your message here..."
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12 text-right">
                          <button className="btn btn-primary">
                            Send a Message{" "}
                            <i className="mdi mdi-telegram ml-1" />{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
                {/* END CONTACT */}
                <Footer />
          </div>
        );
    }
}
