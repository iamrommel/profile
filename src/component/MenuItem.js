import React from 'react'

export class MenuItem extends React.Component {


  render() {
    return (
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={`#${this.props.location}`}>{this.props.children}</a>
      </li>
    )
  }
}
