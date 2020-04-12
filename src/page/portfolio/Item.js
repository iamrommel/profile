import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import { ContentCarousel } from './ContentCarousel'
import ReactGA from 'react-ga'

export const Item = ({ projectName, carouselItems, category, tags, endDate, client, description, mainImage }) => {
  const [modal, setModal] = React.useState(false)

  const toggle = () => {
    setModal(!modal)

    //event on project name click
    ReactGA.event({
      category: 'portfolio',
      action: `Opened ${projectName}`,
    })
  }

  return (
    <React.Fragment>
      <div className="col-md-4 col-sm-6 portfolio-item">
        <a className="portfolio-link" onClick={toggle}>
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x" />
            </div>
          </div>
          <img className="img-fluid" src={mainImage} alt="Main project" />
        </a>
        <div className="portfolio-caption">
          <h4>{projectName}</h4>
          <p className="text-muted">{category}</p>
        </div>
        <Modal isOpen={modal} toggle={toggle} className="portfolio-modal xl-modal-dialog">
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
      </div>
    </React.Fragment>
  )
}
