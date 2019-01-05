import React, {Component} from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'


export class ContentCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {activeIndex: 0}
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    const {carouselItems=[]} =  this.props
    if (this.animating) return
    const nextIndex = this.state.activeIndex === carouselItems.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({activeIndex: nextIndex})
  }

  previous() {
    if (this.animating) return
    const {carouselItems=[]} =  this.props

    const nextIndex = this.state.activeIndex === 0 ? carouselItems.length - 1 : this.state.activeIndex - 1
    this.setState({activeIndex: nextIndex})
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({activeIndex: newIndex})
  }

  render() {
    const {activeIndex} = this.state
    const {carouselItems=[]} =  this.props

    const slides = carouselItems.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item}
        >
          <img src={item} alt="Project image" className="img-fluid"/>
        </CarouselItem>
      )
    })

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={carouselItems} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
      </Carousel>
    )
  }
}

