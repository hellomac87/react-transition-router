import React, { Component } from "react";
import MainContainer from "../containers/MainContainer";
import Layout from "../components/Layout";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <MainContainer />
        </Layout>
      </div>
    );
  }
}

export default MainPage;
