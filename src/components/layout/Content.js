import React, { Component } from "react";

export class Content extends Component {
  render() {
    return (
      <div className="content">
        <header>
          <div className="logo">
            Xero<span>Source</span>
          </div>
        </header>
        <div className="nav-btn">Menu</div>
        <div className="container">
          <div className="main-content">
            <h1>Dashboard</h1>
            <p>Here you can stuff!</p>
            <div className="panel-wrapper">
              <div className="panel-head">News</div>
              <div className="panel-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                fugiat culpa quia possimus molestiae id sapiente ad eveniet,
                aliquid, eum sint fuga eius, ratione suscipit ut minus
                voluptates dicta nesciunt.
              </div>
            </div>
            <div className="panel-wrapper">
              <div className="panel-head">News</div>
              <div className="panel-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                fugiat culpa quia possimus molestiae id sapiente ad eveniet,
                aliquid, eum sint fuga eius, ratione suscipit ut minus
                voluptates dicta nesciunt.
              </div>
            </div>
            <div className="panel-wrapper">
              <div className="panel-head">News</div>
              <div className="panel-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                fugiat culpa quia possimus molestiae id sapiente ad eveniet,
                aliquid, eum sint fuga eius, ratione suscipit ut minus
                voluptates dicta nesciunt. Totam fugiat culpa quia possimus
                molestiae id sapiente ad eveniet, aliquid, eum sint fuga eius,
                ratione suscipit ut minus voluptates dicta nesciunt.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
