import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import "./transition.css";
import MainPage from "./pages/MainPage";
import DemoPage from "./pages/DemoPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                classNames="fade"
                timeout={1000}
                key={location.key}
              >
                <React.Fragment>
                  <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/demo" component={DemoPage} />
                  </Switch>
                </React.Fragment>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    );
  }
}

export default App;
