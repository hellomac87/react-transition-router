import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "94vh" }}>
        <header
          style={{
            width: "100%",
            height: "3vh",
            background: "#000",
            color: "#fff"
          }}
        >
          <Link to="/">home</Link>
          <Link to="/demo">demo</Link>
        </header>

        {this.props.children}

        <footer
          style={{
            width: "100%",
            height: "3vh",
            background: "#000",
            color: "#fff"
          }}
        >
          footer
        </footer>
      </div>
    );
  }
}

export default withRouter(Layout);
