import fetch from 'cross-fetch'
import FormData from 'form-data'
import _ from 'lodash'
import { btoa } from 'abab'

export class Mailer {
  constructor () {
    this.fetchOptions = {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`api:${process.env.RAZZLE_MAILGUN_APIKEY}`)
      }
    }
    this.from = `Rommel C. Manalo <${process.env.RAZZLE_MAILGUN_SMTPLOGIN}>`
    this.url = process.env.RAZZLE_MAILGUN_URL
  }

  send = async ({ to, from, subject, message } = {}) => {

    //do some validation first
    if (_.isEmpty(from))
      throw new Error('NO RECIPIENT')

    subject = subject || 'NO - SUBJECT'
    message = message || 'NO - MESSAGE'

    from = from || this.from
    const formData = new FormData()
    formData.append('subject', subject)
    formData.append('text', message)
    formData.append('from', from) //the to here where to send the message

    //the from here is the sender
    if (_.isArray(to)) {
      to.forEach(m => formData.append('to', m))
    }
    else {
      formData.append('to', to)
    }

    const url = `${this.url}/messages`
    const options = { ...this.fetchOptions, body: formData }

    const response = await fetch(url, options)
    if (response.status >= 400) throw new Error(response.statusText)

    return response.json()

  }

}
