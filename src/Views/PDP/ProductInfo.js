import React, { Component } from 'react';
import './PDP.css';

class BuyBtn extends Component {
  render() {
    return (
      <div className="buyBtn">ADD TO BAG</div>
    )
  }
}

class QuantitySelect extends Component {
  render () {
    return (
      <div className="quantityContainer">
        <span className="quantityMinus">-</span>
        <input className="quantityTxt" placeholder="1"/>
        <span className="quantityPlus">+</span>
      </div>
    )
  }
}

class SizeSelect extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const sizeList = this.props.sizes.map(val => {
      if (val === 6) {
        return (
          <li className="sizeItem">
            <span className="val">{val}</span><div className="outOfStockTxt">SOLD OUT</div>
          </li>
        )
      }
      return <li className="sizeItem">{val}</li>
    })

    return (
      <ul className="sizeContainer">
        {sizeList}
      </ul>
    )
  }
}

class ProductInfo extends Component {
  render () {
    return (
      <div className="productInfo">
        <h1 className="title">Premium Sandals</h1>
        <p className="price"> GBP 32.99</p>
        <p> SIZE </p>
        <SizeSelect sizes={[5, 6, 7, 8]}/>
        <a href=""> Find your size </a>
        <p>QUANTITY</p>
        <QuantitySelect />
        <BuyBtn />
        <ul className="policies">
          <li>30 Days Returns</li>
          <li>Order now and receive this item from APR 27 - APR 30</li>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default ProductInfo