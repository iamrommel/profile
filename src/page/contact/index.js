import React from 'react'
import fetch from 'cross-fetch'
import { Form } from './Form'
import { MessageSent } from './MessageSent'

export class Index extends React.Component {

  state = { messageSent: false }

  render () {

    const { messageSent } = this.state

    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">Fill up this form to contact me of use the social media</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {!messageSent && <Form onSent={() => this.setState({ messageSent: true })}/>}
              {messageSent && <MessageSent/>}
            </div>
          </div>
        </div>
      </section>

    )
  }
}

