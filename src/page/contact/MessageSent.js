import React from 'react'

export const MessageSent = () => {

  return (
    <React.Fragment>
      <div className="row justify-content-center p-lg-5">
        <div className="col-lg-6">
          <div className="title text-center text-white">
            <div className="pt-3 pb-3">
              <div className="title-box"/>
              <div className="title-line"/>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="bg-price mt-3 text-center">
            <img src={require('../../img/email-sent.png')} alt="Message sent"/>
            <div className="mt-4 pt-2 price-features text-white">
              <h2>Stay tuned!</h2>
              <h6>Your email has been received and we'll get back to you within 24 hours.</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center p-lg-5">
        <div className="col-lg-6">
          <div className="title text-center text-white">
            <div className="pt-3 pb-3">
              <div className="title-box"/>
              <div className="title-line"/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )

}
