import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Breadcomb from "../components/breadcomb";


export default class index extends Component {
    render() {
        return (
          <div className="container-fluid">
            {/* start page title */}
            <Breadcomb pageTitle="Faq" />

            {/* end page title */}
            <div className="row">
              <div className="col-sm-12">
                <div className="text-center">
                  <h3 className>Frequently Asked Questions</h3>
                  <p className="text-muted mt-3">
                    {" "}
                    Nisi praesentium similique totam odio obcaecati,
                    reprehenderit, dignissimos rem temporibus ea inventore
                    alias!
                    <br /> Beatae animi nemo ea tempora, temporibus laborum
                    facilis ut!
                  </p>
                  <button type="button" className="btn btn-success btn-sm mt-2">
                    <i className="mdi mdi-email-outline mr-1" /> Email us your
                    question
                  </button>
                  <button
                    type="button"
                    className="btn btn-info btn-sm mt-2 ml-1"
                  >
                    <i className="mdi mdi-twitter mr-1" /> Send us a tweet
                  </button>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
            <div className="row pt-5">
              <div className="col-lg-5 offset-lg-1">
                {/* Question/Answer */}
                <div>
                  <div className="faq-question-q-box">Q.</div>
                  <h4 className="faq-question" data-wow-delay=".1s">
                    What is Lorem Ipsum?
                  </h4>
                  <p className="faq-answer mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                {/* Question/Answer */}
                <div>
                  <div className="faq-question-q-box">Q.</div>
                  <h4 className="faq-question">Why use Lorem Ipsum?</h4>
                  <p className="faq-answer mb-4">
                    Lorem ipsum dolor sit amet, in mea nonumes dissentias
                    dissentiunt, pro te solet oratio iriure. Cu sit consetetur
                    moderatius intellegam, ius decore accusamus te. Ne primis
                    suavitate disputando nam. Mutat convenirete.
                  </p>
                </div>
                {/* Question/Answer */}
                <div>
                  <div className="faq-question-q-box">Q.</div>
                  <h4 className="faq-question">How many variations exist?</h4>
                  <p className="faq-answer mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                {/* Question/Answer */}
                <div>
                  <div className="faq-question-q-box">Q.</div>
                  <h4 className="faq-question" data-wow-delay=".1s">
                    What is Lorem Ipsum?
                  </h4>
                  <p className="faq-answer mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
              {/*/col-md-5 */}
              <div className="col-lg-5">
                {/* Question/Answer */}
                <div>
                  <div className="faq-question-q-box">Q.</div>
                  <h4 className="faq-question">Is safe use Lorem Ipsum?</h4>
                  <p className="faq-answer mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                {/* Question/Answer */}
                <div>
                  <div className="faq-question-q-box">Q.</div>
                  <h4 className="faq-question">When can be used?</h4>
                  <p className="faq-answer mb-4">
                    Lorem ipsum dolor sit amet, in mea nonumes dissentias
                    dissentiunt, pro te solet oratio iriure. Cu sit consetetur
                    moderatius intellegam, ius decore accusamus te. Ne primis
                    suavitate disputando nam. Mutat convenirete.
                  </p>
                </div>
                {/* Question/Answer */}
                <div>
                  <div className="faq-question-q-box">Q.</div>
                  <h4 className="faq-question">License &amp; Copyright</h4>
                  <p className="faq-answer mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                {/* Question/Answer */}
                <div>
                  <div className="faq-question-q-box">Q.</div>
                  <h4 className="faq-question">Is safe use Lorem Ipsum?</h4>
                  <p className="faq-answer mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
              </div>
              {/*/col-md-5*/}
            </div>
            {/* end row */}
          </div>
        );
    }
}
