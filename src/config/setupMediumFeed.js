import feed2json from 'feed2json'
import request from 'request'

export const setupMediumFeed = (server) => {
  server.get('/medium-feeds', (req, res) => {

    //get the medium publication url
      const feedUrl = `https://medium.com/feed/${process.env.MEDIUM_PUBLICATION}`
    const requestObj = request(feedUrl)

    feed2json.fromStream(requestObj, feedUrl, (err, json) => {
      // check for err and exit immediately
      if (err) {
        throw new Error('BROKEN FEED: ' + JSON.stringify(err))
      }

      // otherwise `json` is populated with JSONFeed format
      let {items} = json

      items = items.map((item) => {
        const {content_html, title} = item

        //needs to parse the content so all images has fluid class
        ;
        //let newContent_html = content_html.replace('<img ', '<img class="img-fluid" ')
        let newContent_html = content_html.replace(new RegExp('<img ', 'g'), '<img class="img-fluid" ')


        //parse the content so that footer text wont show up
        const lastIndexOfHr = newContent_html.lastIndexOf('<hr>')
        newContent_html = newContent_html.slice(0, lastIndexOfHr)

        //slice the text up to only 300 chars max
        newContent_html = newContent_html.slice(0, 600)
        newContent_html = newContent_html + '...'

        return {
          ...item,
          content_html: newContent_html
        }
      })

      res.json(items)
    })
  })
}

