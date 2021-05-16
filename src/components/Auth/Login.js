import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import {
  // BrowserRouter as Router,
  // Route,
  Redirect,
  // Switch,
} from "react-router-dom";
import { loginUser } from "../../actions/authactions";
import { connect } from "react-redux";
// import Dashboard from "../../components/layout/Dashboard";
// import axios from "axios";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      // isloggedin: false,

      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      rememberMe: true,
    };
    console.log(newUser);
    const correct = {
      password: "@systemspecS30",
      rememberMe: true,
      username: "+2347040092726",
    };

    this.props.loginUser(correct);
  }

  render() {
    if (this.props.isloggedin) {
      return <Redirect push to="dashboard" />;
    } else {
      return (
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Log In</h1>
                <p className="lead text-center">
                  Sign in to your LocateMe account
                </p>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="username"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  isloggedin: state.auth.isAuthenticated, //state.posts posts set in post reducer as its name
  user: state.auth.user,
});

export default connect(mapStateToProps, { loginUser })(Login);
