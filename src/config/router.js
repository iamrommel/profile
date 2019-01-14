import cloudinary from 'cloudinary'
import _ from 'lodash'
import { Mailer } from '../utils/Mailer'

cloudinary.config({
  cloud_name: process.env.RAZZLE_CLOUDINARY_CLOUDNAME,
  api_key: process.env.RAZZLE_CLOUDINARY_APIKEY,
  api_secret: process.env.RAZZLE_CLOUDINARY_APISECRET
})

export const setupRouter = (server) => {

  server.get('/images/cloudinary/:folder', function (req, res, next) {
    const folder = _.get(req, 'params.folder', '')

    cloudinary.v2.api.resources(
      {
        type: 'upload',
        prefix: `profile/${folder}/medium`
      },
      function (error, result) {
        if (error) {
          next(error)
        }
        else {
          const resources = _.get(result, 'resources', [])
          const images = resources.map(m => m.secure_url)
          res.json(images)
        }
      })

  })

  server.post('/contact-us', function (req, res, next) {

    const mailer = new Mailer()

    mailer.send(req.body)
      .then(() => {
          res.sendStatus(200)
          next()
        }
      )
      .catch((e) => {
        next(e)
      })

  })

}
