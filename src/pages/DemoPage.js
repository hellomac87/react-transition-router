import React, { Component } from "react";
import DemoContainer from "../containers/DemoContainer";
import Layout from "../components/Layout";

class DemoPage extends Component {
  render() {
    return (
      <Layout>
        <DemoContainer />
      </Layout>
    );
  }
}

export default DemoPage;
