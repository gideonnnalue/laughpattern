import React, { Component } from "react";
import PageHeader from "../../utils/PageHeader";
import ImageGallery from "./ImageGallery";

class Gallery extends Component {

  componentWillUnmount() {
    this.props.turnOffNav();
  }

  render() {
    return (
      <div>
        <PageHeader title="Gallery" />
        <ImageGallery />
      </div>
    );
  }
}

export default Gallery;
