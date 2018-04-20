import React, { Component } from 'react';
import './PDP.css';

class Image extends Component {
  render () {
    return (
      <div className="image"></div>
    )
  }
}

class ImagesNav extends Component {
  render () {
    return (
      <div className="imagesNav">
        <Image />
        <Image />
        <Image />
        <Image />
      </div>
    )
  }
}

class ImagesCarousel extends Component {
  render () {
    return (
      <div className="imagesCarousel">
        <ImagesNav />
      </div>
    )
  }
}

export default ImagesCarousel