import React, { Component } from "react";
import img1 from '../../../assets/images/carousel1.jpg';
import img2 from '../../../assets/images/carousel2.jpg';
import img3 from '../../../assets/images/carousel1.jpg';

class About extends Component {
  render() {
    return (
      <div className="section-about">
        <div className="container">
          
          

          <div className="row">
            <div className="col-md-6">
            <h3 className="heading heading-primary mt-5">
            What We Offer
            {/* <hr style={{width: "20%", backgroundColor: "#fd0101", textAlign: "left"}}/> */}
          </h3>
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus labore, mollitia aliquid deserunt sequi,
                praesentium at repellat veritatis dolorem odit natus amet
                incidunt officia vitae ea iure qui illum voluptates?Iure commodi
                provident voluptate explicabo eius! Ducimus, sequi nostrum eos
                cum nesciunt veritatis consequuntur aspernatur quibusdam natus
                unde voluptatibus?
              </p>
            </div>
            <div className="col-md-6 p-5 about-images">
              <div className="about-image image-1">
                  <img src={img1} alt=""/>
              </div>
              <div className="about-image image-2">
                  <img src={img1} alt=""/>
              </div>
              <div className="about-image image-3">
                  <img src={img1} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
