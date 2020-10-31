import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./home";
import SignIn from "./auth/signin";
import SignUp from "./auth/signup";
import DefaultLayout from "./defaultLayout/Layout";
// import HttpClient from "./../utils/HttpClient";
import { reactLocalStorage } from "reactjs-localstorage";
import $ from "jquery";
window.jQuery = window.$ = $;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
    };
  }
  componentDidMount() {
    this.getAccount();
  }
  getAccount = () => {
    let data = reactLocalStorage.getObject("user_data");
    if (
      data &&
      Object.keys(data).length !== 0 &&
      data &&
      Object.keys(data).length !== " "
    ) {
      this.setState({ isLogin: true });
    } else {
      this.setState({ isLogin: false });
    }
  };

  render() {
    return (
      <Router>
        <React.Suspense>
          <Switch>
            {this.state.isLogin ? (
              <Switch>
                <Route
                  path="/"
                  name="Home"
                  render={(props) => <DefaultLayout {...props} />}
                />
              </Switch>
            ) : (
              <Switch>
                <Route path="/signin" name="SignIn" component={SignIn} />
                <Route path="/signup" name="SignUp" component={SignUp} />

                <Route path="/home" name="Home" component={Home} />
                <Route path="/" name="Home" component={Home} />
              </Switch>
            )}
            <Redirect from="/" to="/home" />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}
