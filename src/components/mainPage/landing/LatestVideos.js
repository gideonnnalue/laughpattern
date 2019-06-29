import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/img.jpg";
import LatestVideoCard from "../../utils/LatestVideoCard";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

class LatestVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [1, 2, 3, 4]
    };
  }
  render() {
    const latest = this.state.videos.map(video => (
      <LatestVideoCard img={img} key={video} />
    ));

    return (
      <div className="section-latest-videos">
        <div className="container">
          <h3 className="heading heading-primary my-5"><Flip bottom cascade>Latest Videos</Flip></h3>
          <Fade left>
          <div className="row justify-content-center">
            <div className="latest-video d-flex flex-row justify-content-center flex-wrap">
              {latest}
            </div>
            <Link to="/" className="btns btns--blue btns--animated my-5">
              More Videos
            </Link>
          </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default LatestVideos;
