import App from './App'
import React from 'react'
import {StaticRouter} from 'react-router-dom'
import express from 'express'
import {renderToString} from 'react-dom/server'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {}
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App/>
      </StaticRouter>
    )

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Rommel C. Manalo Profile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
        <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
            
        ${assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ''}
        ${process.env.NODE_ENV === 'production'
          ? `<script src="${assets.client.js}" defer></script>`
          : `<script src="${assets.client.js}" defer crossorigin></script>`}
    </head>
    <body id="page-top">
        <div id="root">${markup}</div>
    </body>
</html>`
      )
    }
  })

export default server
