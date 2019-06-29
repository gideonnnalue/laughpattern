import React, { Component } from "react";
import PageHeader from "../../utils/PageHeader";
import Ceo from "./Ceo";
import Company from "./Company";

class About extends Component {
  componentDidMount() {
    this.props.turnOffNav();
  }
  render() {
    return (
      <div>
        <PageHeader title="About" />
        <Ceo />
        <Company />
      </div>
    );
  }
}

export default About;
