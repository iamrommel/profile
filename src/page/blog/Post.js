import React from 'react'
import moment from 'moment'

export class Post extends React.Component {

  render() {

    const {content_html, title, date_published, url, author: {name}} = this.props

    return (
      <div className="col-lg-4">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">{title}</h3>
            <h5 className="card-subtitle mb-2 text-muted">
              <small> {name} </small>
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              <small>{moment(date_published).format('MMM DD, YYYY')}  </small>
            </h6>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div dangerouslySetInnerHTML={{__html: content_html}}/>
            </div>
            <a href={url} target="_blank" className="btn btn-primary">Read more...</a>
          </div>
        </div>
      </div>
    )
  }
}
