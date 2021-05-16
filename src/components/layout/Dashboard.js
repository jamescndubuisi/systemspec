import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { connect } from "react-redux";
import Maps from "../layout/Maps";
import MapContainer from "../layout/Mapz";
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch,
// } from "react-router-dom";
import "./style.css";
import {
  // BrowserRouter as Router,
  // Route,
  Redirect,
  // Switch,
} from "react-router-dom";
export class Dashboard extends Component {
  render() {
    if (!this.props.isloggedin) {
      return <Redirect push to="/" />;
    } else {
      return (
        <div className="container">
          <Sidebar user={this.props.user} />
          <MapContainer />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  isloggedin: state.auth.isAuthenticated, //state.posts posts set in post reducer as its name
  user: state.auth.user.user,
});

export default connect(mapStateToProps)(Dashboard);

// export default Dashboard;
