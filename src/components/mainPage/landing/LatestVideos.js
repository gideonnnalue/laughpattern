import React, { Component } from "react";
import img from "../../../assets/images/img.jpg";
import LatestVideoCard from '../../utils/LatestVideoCard';

class LatestVideos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [1,2,3,4]
        }
    }
  render() {

    const latest = this.state.videos.map(video => <LatestVideoCard img={img} key={video} />)

    return (
      <div className="section-latest-videos">
        <div className="container">
          <h3 className="heading heading-primary my-5">Latest Videos</h3>
          <div className="row">
            <div className="latest-video d-flex flex-row justify-content-center flex-wrap">
                {latest}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestVideos;
