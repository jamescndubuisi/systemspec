import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Dashboard from "./components/layout/Dashboard";
import "./App.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { withRouter } from "react-router";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Navbar></Navbar>
              <Route exact path="/" component={Landing}></Route>
            </Switch>
            <div className="container">
              <Switch>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/" component={Login}></Route>
                <Route
                  exact
                  path="/dashboard"
                  component={withRouter(Dashboard)}
                ></Route>
              </Switch>
            </div>

            {/* <Footer></Footer> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
