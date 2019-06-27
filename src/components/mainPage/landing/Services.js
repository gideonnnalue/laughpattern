import React from "react";
import Slider from "react-slick";

const Services = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="section-services">
      <div className="container">
        <h3 className="heading heading-primary my-5">
          Services
          {/* <hr style={{ width: "20%", backgroundColor: "#fd0101" }} /> */}
        </h3>
        <div className="service-slider">
        <Slider {...settings}>
          <div className="service-info">
            <div className="service-icon service-info-item pr-5">
                <i class="fas fa-mobile-alt" />
            </div>
            <div className="service-desc service-info-item">
                <h4>Dj Services</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a.
                </p>
            </div>
          </div>
          <div className="service-info">
            <div className="service-icon service-info-item pr-5">
                <i class="fas fa-mobile-alt" />
            </div>
            <div className="service-desc service-info-item">
                <h4>Dj Services</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a.
                </p>
            </div>
          </div>
          <div className="service-info">
            <div className="service-icon service-info-item pr-5">
                <i class="fas fa-mobile-alt" />
            </div>
            <div className="service-desc service-info-item">
                <h4>Dj Services</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit autem officia ut debitis a.
                </p>
            </div>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Services;
