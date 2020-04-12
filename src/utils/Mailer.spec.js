import * as td from 'testdouble'

describe('Mailer', function() {
  let ut, Mailer

  before(function() {
    Mailer = require('./Mailer').Mailer
  })

  beforeEach(function() {
    ut = new Mailer()
  })

  describe('send', function() {
    beforeEach(function() {})

    it('should run successfully', async function() {
      const args = {
        to: 'manalo.rommel@gmail.com',
        from: 'manalo.rommel.dev@gmail.com',
        subject: 'test subject',
        message: 'test message',
      }

      //await ut.send(args)
    })
  })
})
