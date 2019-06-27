import React, { Component } from "react";

class Info extends Component {
  render() {
    return (
      <div className="section-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <span className="info-icons">
                <i className="far fa-map" />
              </span>
              <h3>Address</h3>
              <p>198 West 21th Street, Suite 721 <br/>New York NY 10016</p>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <span className="info-icons">
                <i class="far fa-clock" />
              </span>
              <h3>Opening Time</h3>
              <p>Monday - Sunday <br/>8am - 9pm</p>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <span className="info-icons">
                <i class="fas fa-mobile-alt" />
              </span>
              <h3>Phone</h3>
              <p>+ 001 234 567 <br/>+ 001 234 567</p>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <span className="info-icons">
                <i class="far fa-envelope" />
              </span>
              <h3>Email</h3>
              <p>info@domain.com <br/>luto@email.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
