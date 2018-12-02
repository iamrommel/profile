import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export class MenuItem extends React.Component {


  render() {
    return (
      <li className="nav-item">
        {/*<AnchorLink offset={56} className="nav-link" href={`#${this.props.location}`}>{this.props.children}</AnchorLink>*/}
        <a className="nav-link js-scroll-trigger" href={`#${this.props.location}`}>{this.props.children}</a>
      </li>
    )
  }
}
