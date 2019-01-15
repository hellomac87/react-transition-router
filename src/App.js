import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import DemoPage from "./pages/DemoPage";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/demo" component={DemoPage} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
