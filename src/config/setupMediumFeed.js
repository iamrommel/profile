import feed2json from 'feed2json'
import request from 'request'

export const setupMediumFeed = (server) => {
  server.get('/medium-feeds', (req, res) => {

    //get the medium publication url
    const feedUrl = `https://medium.com/feed/${process.env.RAZZLE_MEDIUM_PUBLICATION}`
    const requestObj = request(feedUrl)

    feed2json.fromStream(requestObj, feedUrl, (err, json) => {
      // check for err and exit immediately
      if (err) {
        throw new Error('BROKEN FEED: ' + JSON.stringify(err))
      }

      // otherwise `json` is populated with JSONFeed format
      const {items} = json
      res.json(items)
    })

  })

}
