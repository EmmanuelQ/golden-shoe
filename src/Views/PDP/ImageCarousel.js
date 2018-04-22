import React, { Component } from 'react';
import './PDP.css';
import {getImage, getAllImages} from '../../Services/loadImagesService'

const images = []

class FocusImage extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {image, clickHandler} = this.props
    return (
      <img className="focusImg" src={image ? image.url : ''} />
    )
  }
}

class NavImage extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {image, clickHandler} = this.props
    return (
      <img
       className="image"
        src={image.url} 
        onClick={() => clickHandler(image.i)}
        />
    )
  }
}

class ImagesNav extends Component {

  constructor(props) {
    super(props)
  }

  handleClick () {

  }
  
  render () {
    const {images, clickHandler} = this.props
    return (
      <div className="imagesNav">
        <NavImage
          image={images[0] ? images[0] : ''}
          clickHandler={clickHandler}
          />
        <NavImage 
          image={images[1] ? images[1] : ''}
          clickHandler={clickHandler}
          />
        <NavImage 
          image={images[2] ? images[2] : ''}
          clickHandler={clickHandler}
          />
      </div>
    )
  }
}

class ImagesCarousel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imgs: [],
      focusImg: {
      },
      navImgs: []
    }
    this.clickHandler = this.clickHandler.bind(this)

    getAllImages().then(urls => {
      urls.forEach((url, i) => {
        this.state.imgs.push({url, i})
      })
      
      this.configureCarouselImages()
    })
  }

  configureCarouselImages () {
    this.setState({
      focusImg: this.state.imgs[0],
      navImgs: this.state.imgs.slice(1)
    })
  }

  clickHandler (i) {
    
    this.state.navImgs = this.newArr(i)
    this.setState({focusImg: this.state.imgs[i]})
  }

  newArr (i) {
    const currImgs = this.state.imgs
    const newImgs = []

    for (let j = 0; j < currImgs.length; j++) {
      if (currImgs[j].i !== i) newImgs.push(currImgs[j])
    }

    return newImgs
  }

  render () {
    const {navImgs, focusImg} = this.state
    return (
      <div className="imagesCarousel">
        <FocusImage image={focusImg} />
        <ImagesNav images={navImgs} clickHandler={this.clickHandler} />
      </div>
    )
  }
}

export default ImagesCarousel