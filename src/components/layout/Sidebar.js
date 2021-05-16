import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <div className="cool">
        <div className="sidebar">
          <nav>
            <li className="active"> </li>

            <ul>
              <li className=""></li>

              <li className="active">{this.props.user.user.firstName}</li>

              <li className="active">{this.props.user.user.lastName}</li>

              <li className="active">{this.props.user.address}</li>
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
