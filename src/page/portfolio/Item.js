import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import { ContentCarousel } from './ContentCarousel'

export class Item extends React.Component {

  state = { modal: false }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render () {
    const { carouselItems, projectName, category, tags, endDate, client, description, mainImage } = this.props

    return (
      <div className="col-md-4 col-sm-6 portfolio-item">
        <a className="portfolio-link" onClick={this.toggle}>
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x"/>
            </div>
          </div>
          <img className="img-fluid"
               src={mainImage}
               alt="Main project"/>
        </a>
        <div className="portfolio-caption">
          <h4>{projectName}</h4>
          <p className="text-muted">{category}</p>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="portfolio-modal xl-modal-dialog">
          <ModalBody>
            <div className="row">
              <div className="col-lg-12 mx-auto">
                <h2 className="text-uppercase">{projectName}</h2>
                <p className="item-intro text-muted">{tags}</p>

                <ContentCarousel carouselItems={carouselItems}/>

                <p>{description}</p>
                <ul className="list-inline">
                  <li>Date: {endDate}</li>
                  <li>Client: {client}</li>
                  <li>Category: {category}</li>
                </ul>
              </div>
            </div>
            <button className="btn btn-primary" onClick={this.toggle} type="button">
              <i className="fas fa-times"/> Close
            </button>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
