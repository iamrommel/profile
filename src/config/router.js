import cloudinary from 'cloudinary'
import _ from 'lodash'
import bodyParser from 'body-parser'
import apicache from 'apicache'
const cache = apicache.middleware

import { Mailer } from '../utils/Mailer'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET
})

export const setupRouter = (express) => {
  express.use(bodyParser.json())
  express.use(bodyParser.urlencoded({ extended: false }))

  express.get('/images/cloudinary/:folder', cache('20 hours'), function (req, res, next) {
    const folder = _.get(req, 'params.folder', '')

    cloudinary.v2.api.resources(
      {
        type: 'upload',
        prefix: `profile/${folder}/medium`
      },
      function (error, result) {
        if (error) {
          //just provide 10 fake images
          const images = _.range(10).map(() => "https://picsum.photos/seed/3/400/600" )
          res.json(images)
        }
        else {
          const resources = _.get(result, 'resources', [])
          const images = resources.map(m => m.secure_url)
          res.json(images)
        }
      })

  })

  express.post('/contact-us', function (req, res, next) {

    const mailer = new Mailer()

    mailer.send(req.body)
      .then(() => {
          res.sendStatus(200)
          //next()
        }
      )
      .catch((e) => {
        next(e)
      })

  })

}
