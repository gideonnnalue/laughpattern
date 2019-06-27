import React, { Component } from "react";
import Carousel from "./Carousel";
import Info from "./Info";
import About from "./About";
import Services from "./Services";
import Overview from "./Overiew";
import Ceo from "./Ceo";

class Landing extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Info />
        <About />
        <Services />
        <Overview />
        <Ceo />
      </div>
    );
  }
}

export default Landing;
