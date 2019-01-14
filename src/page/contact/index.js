import React from 'react'
import fetch from 'cross-fetch'

export class Index extends React.Component {

  submit = async (e) => {
    e.preventDefault()
    const body = {
      from: 'manalo.rommel.dev@gmail.com',
      message: 'hellow world',
      subject: 'Some message here',
      to: 'manalo.rommel@gmail.com'
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json'
      },
    }
    await fetch('/contact-us', options)

  }

  render () {
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
              <form id="contactForm" onSubmit={this.submit} name="sentMessage" noValidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" id="name" type="text" placeholder="Your Name *"
                             required="required" data-validation-required-message="Please enter your name."/>
                      <p className="help-block text-danger"/>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="email" type="email" placeholder="Your Email *"
                             required="required" data-validation-required-message="Please enter your email address."/>
                      <p className="help-block text-danger"/>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="phone" type="tel" placeholder="Your Phone *"
                             required="required" data-validation-required-message="Please enter your phone number."/>
                      <p className="help-block text-danger"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea className="form-control" id="message" placeholder="Your Message *" required="required"
                                data-validation-required-message="Please enter a message."/>
                      <p className="help-block text-danger"/>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send
                      Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    )
  }
}
