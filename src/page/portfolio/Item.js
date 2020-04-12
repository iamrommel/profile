import React from 'react'
import ReactGA from 'react-ga'
import { ImageModal } from './ImageModal'
import { ImageLightbox } from './ImageLightbox'

export const Item = ({ projectName, carouselItems, category, tags, endDate, client, description, mainImage }) => {
  const [show, setShow] = React.useState(false)

  const toggle = () => {
    setShow(!show)

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
        <ImageLightbox {...{ show, setShow, projectName, carouselItems, category, tags, endDate, client, description, mainImage }} />
      </div>
    </React.Fragment>
  )
}
