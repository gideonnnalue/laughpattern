import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/styles/sass/styles.scss";
import Navigation from "./components/navigation";
import Landing from "./components/mainPage/landing";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
    </div>
  );
}

export default App;
