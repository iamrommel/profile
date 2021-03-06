import React from 'react'
import {MenuItem} from './MenuItem'

export class Navigator extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">#me</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                  data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                  aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              {/*<MenuItem location="services">Services</MenuItem>*/}
              <MenuItem location="portfolio">Work</MenuItem>
              <MenuItem location="blog">Blog</MenuItem>
              {/*<MenuItem location="about">About</MenuItem>*/}
              <MenuItem location="contact">Contact</MenuItem>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

