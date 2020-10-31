import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import routes from "../../route";
import Header from "../header";
import Footer from "../footer";
import Settings from "../settings";
import PageContent from "../pageContent";

class Layout extends Component {
  async componentDidMount() {}

  render() {
    return (
      <div className="app" id="app">
        <div className="wrapper">
          <Suspense>
            <Header />
          </Suspense>

          <div className="content-page">
            <div className="content">
              <Suspense>
                <PageContent />
              </Suspense>
              <Switch>
                {routes.map((route, index) => {
                  console.log("hello");
                  return route.component ? (
                    <Route
                      key={index}
                      path={route.path}
                      name={route.name}
                      render={(props) => <route.component {...props} />}
                      // component={route.component}
                    />
                  ) : null;
                })}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </div>
            <Suspense>
              <Footer />
            </Suspense>
          </div>
        </div>
        <Settings />
      </div>
    );
  }
}
export default Layout;
