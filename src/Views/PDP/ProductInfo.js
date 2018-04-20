import React, { Component } from 'react';
import './PDP.css';

class BuyBtn extends Component {
  render() {
    return (
      <div className="buyBtn">
      </div>
    )
  }
}

class ProductInfo extends Component {
  render () {
    return (
      <div className="productInfo">
        <BuyBtn />
      </div>
    )
  }
}

export default ProductInfo