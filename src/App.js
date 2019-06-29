import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/styles/sass/styles.scss";
import Navigation from "./components/navigation";
import Landing from "./components/mainPage/landing";
import About from "./components/mainPage/about";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navShow: false
    };

    this.showNav = this.showNav.bind(this);
    this.turnOffNav = this.turnOffNav.bind(this);
  }

  showNav() {
    this.setState({ navShow: !this.state.navShow });
  }

  turnOffNav() {
    this.setState({ navShow: false});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation showNav={this.showNav} navShow={this.state.navShow} />
          <Route
            path="/"
            exact
            render={routeProps => <Landing {...routeProps} turnOffNav={this.turnOffNav} />}
          />
          <Route
            path="/about"
            render={routeProps => <About {...routeProps} turnOffNav={this.turnOffNav} />}
          />
          {/* <Route exact path="/" component={Landing} /> */}
          {/* <Route exact path="/about" component={About} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
