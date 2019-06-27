import React from "react";

const Service = (props) => {
  return (
    <div className="service-info">
      <div className="service-icon service-info-item pr-5">
        <i className={props.icon} />
        {/* <i class="fas fa-mobile-alt" /> */}
      </div>
      <div className="service-desc service-info-item">
        <h4>{props.heading}</h4>
        <p>
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default Service;
