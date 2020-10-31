import React, { Component } from 'react'

export default class message extends Component {
    render() {
        return (
          <div className="inbox-widget">
            <div className="inbox-item">
              <div className="inbox-item-img">
                <img
                  src="assets/images/users/avatar-2.jpg"
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <p className="inbox-item-author">Tomaslau</p>
              <p className="inbox-item-text">I've finished it! See you so...</p>
              <p className="inbox-item-date">
                <a href="#" className="btn btn-sm btn-link text-info font-13">
                  
                  Reply
                </a>
              </p>
            </div>
            <div className="inbox-item">
              <div className="inbox-item-img">
                <img
                  src="assets/images/users/avatar-3.jpg"
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <p className="inbox-item-author">Stillnotdavid</p>
              <p className="inbox-item-text">This theme is awesome!</p>
              <p className="inbox-item-date">
                <a href="#" className="btn btn-sm btn-link text-info font-13">
                  
                  Reply
                </a>
              </p>
            </div>
            <div className="inbox-item">
              <div className="inbox-item-img">
                <img
                  src="assets/images/users/avatar-4.jpg"
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <p className="inbox-item-author">Kurafire</p>
              <p className="inbox-item-text">Nice to meet you</p>
              <p className="inbox-item-date">
                <a href="#" className="btn btn-sm btn-link text-info font-13">
                  
                  Reply
                </a>
              </p>
            </div>
            <div className="inbox-item">
              <div className="inbox-item-img">
                <img
                  src="assets/images/users/avatar-5.jpg"
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <p className="inbox-item-author">Shahedk</p>
              <p className="inbox-item-text">Hey! there I'm available...</p>
              <p className="inbox-item-date">
                <a href="#" className="btn btn-sm btn-link text-info font-13">
                  
                  Reply
                </a>
              </p>
            </div>
            <div className="inbox-item">
              <div className="inbox-item-img">
                <img
                  src="assets/images/users/avatar-6.jpg"
                  className="rounded-circle"
                  alt=""
                />
              </div>
              <p className="inbox-item-author">Adhamdannaway</p>
              <p className="inbox-item-text">This theme is awesome!</p>
              <p className="inbox-item-date">
                <a href="#" className="btn btn-sm btn-link text-info font-13">
                  
                  Reply
                </a>
              </p>
            </div>
          </div>
        );
    }
}
