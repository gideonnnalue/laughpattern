import React from "react";
import Slider from "react-slick";

import slide_one from "../../../assets/images/carousel1.jpg";
import slide_two from "../../../assets/images/carousel2.jpg";
import slide_three from "../../../assets/images/img.jpg";
import logo from "../../../assets/images/lpn-large.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        right: "10%"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        left: "10%"
      }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToScroll: 1,
    customPaging: i => (
      <div
        className="carousel__paging"
        style={{
          width: "10px",
          height: "10px",
          color: "#fff",
          opacity: "0.5",
          border: "2px solid #fff",
          borderRadius: "100px",
          marginTop: "-50px",
          textAlign: "center",
          position: "relative",
          backfaceVisibility: "hidden"
        }}
      >
        {/* <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "100px",
            backgroundColor: "#fff",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backfaceVisibility: "hidden"
          }}
        > */}
        {/* &nbsp;
        </div> */}
        {/* {i + 1} */}
      </div>
    )
  };

  return (
    <div className="carousel__wrapper">
      <Slider {...settings}>
        <div>
          <div
            className="carousel__images"
            style={{
              background: `linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0.2)), url(${slide_one})`
            }}
          >
            <div className="carousel__logo pt-5">
              <div className="container pt-5">
                <div className="row pt-5">
                  <div className="col text-white text-left carousel__content text-center">
                    {/* <img src={logo} alt="" /> */}
                    <h1 className="carousel__heading">This is Laugh Pattern</h1>
                    <p className="carousel__paragraph mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus, accusantium perspiciatis voluptates expedita
                      provident temporibus dolor voluptas iste.
                    </p>
                    <a href="#" className="button button-large">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="carousel__images"
            style={{
              background: `linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0.2)), url(${slide_two})`
            }}
          >
            <div className="carousel__logo pt-5">
              <div className="container pt-5">
                <div className="row pt-5">
                  <div className="col text-white text-left carousel__content text-center">
                    {/* <img src={logo} alt="" /> */}
                    <h1 className="carousel__heading">Touching Lives</h1>
                    <p className="carousel__paragraph mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus, accusantium perspiciatis voluptates expedita
                      provident temporibus dolor.
                    </p>
                    <a href="#" className="button button-large">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="carousel__images"
            style={{
              background: `linear-gradient(to right,rgba(48,48,48,0.5),rgba(48,48,48,0.5)), url(${slide_three})`
            }}
          >
            <div className="carousel__logo pt-5">
              <div className="container pt-5">
                <div className="row pt-5">
                  <div className="col text-white text-left carousel__content text-center">
                    {/* <img src={logo} alt="" /> */}
                    <h1 className="carousel__heading">Touching Lives</h1>
                    <p className="carousel__paragraph mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus, accusantium perspiciatis voluptates expedita
                      provident temporibus dolor.
                    </p>
                    <a href="#" className="button button-large">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
