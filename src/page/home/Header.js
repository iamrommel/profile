import React from 'react'

export class Header extends React.Component {

  render() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Hi, I'm Rommel </div>
            <div className="intro-heading text-uppercase">I design and build mobile and web apps!</div>
            <a className="btn btn-primary btn-lg text-uppercase js-scroll-trigger" href="#services">More about what I do</a>
          </div>
        </div>
      </header>
    )
  }
}
