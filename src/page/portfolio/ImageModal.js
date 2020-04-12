import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import { ContentCarousel } from './ContentCarousel'

export const ImageModal = ({ show, toggle, projectName, carouselItems, description, endDate, client, category }) => {
  return (
    <React.Fragment>
      <Modal isOpen={show} toggle={toggle} className="portfolio-modal xl-modal-dialog">
        <ModalBody>
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <h2 className="text-uppercase">{projectName}</h2>
              <p className="item-intro text-muted">{tags}</p>

              <ContentCarousel carouselItems={carouselItems} />

              <p>{description}</p>
              <ul className="list-inline">
                <li>Date: {endDate}</li>
                <li>Client: {client}</li>
                <li>Category: {category}</li>
              </ul>
            </div>
          </div>
          <button className="btn btn-primary" onClick={toggle} type="button">
            <i className="fas fa-times" /> Close
          </button>
        </ModalBody>
      </Modal>
    </React.Fragment>
  )
}
