import fetch from 'cross-fetch'
import React from 'react'

export class Form extends React.Component {

  state = { sending: false }
  submit = async (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const phone = e.target.phone.value
    const name = e.target.phone.value
    const message = e.target.message.value

    if (!email || !name || !message) {
      window && window.alert('Please put value for email, name and message before sending!')
      return
    }

    const body = {
      from: email,
      message: `Phone: ${phone} \n  ${message}`,
      subject: `${name} - Someone contacted you from www.lsf.ph `,
      to: 'manalo.rommel@gmail.com'
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json'
      },
    }

    this.setState({ sending: true })
    const response = await fetch('/contact-us', options)
    if (response.status === 200)
      this.props.onSent && this.props.onSent()

    this.setState({ sending: false })

  }

  render () {

    const { sending } = this.state

    return (
      <form id="contactForm" onSubmit={this.submit} name="sentMessage">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control" id="name" type="text" placeholder="Your Name *" required/>
            </div>
            <div className="form-group">
              <input className="form-control" id="email" type="email" placeholder="Your Email *" required
              />
            </div>
            <div className="form-group">
              <input className="form-control" id="phone" type="tel" placeholder="Your Phone *"/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
                      <textarea className="form-control" id="message" placeholder="Your Message *" required="required"
                      />

            </div>
          </div>
          <div className="clearfix"/>
          <div className="col-lg-12 text-center">
            <div id="success"/>
            <button id="sendMessageButton" disabled={sending} className="btn btn-primary btn-xl text-uppercase" type="submit">
              {sending ? 'Sending' : 'Send Message'}
            </button>
          </div>
        </div>
      </form>
    )
  }

}
