import React, { Component } from 'react'
import ImagesCarousel from './ImageCarousel'
import './PDP.css';
import ProductInfo from './ProductInfo';

// const Images = loadPDPImagesService.load()

class PDP extends Component {
  render () {
    return (
      <div className="PDP">
        <ImagesCarousel />
        <ProductInfo />
      </div>
    )
  }
}

export default PDP;
