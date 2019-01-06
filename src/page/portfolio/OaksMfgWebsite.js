import React from 'react'
import {Item} from './Item'
import {withCloudinaryImages} from './withCloudinaryImages'


let OaksMfgWebsite = ({cloudinaryImages = {}}) => {
  const {items, loading} = cloudinaryImages
  if (loading) return null
  return (
    <Item carouselItems={items}
          mainImage="https://res.cloudinary.com/tmmshauler/image/upload/v1546747501/profile/oaksmfg/medium/Home.jpg"
          projectName="www.oaksmfg.com"
          category="Web Development"
          tags="Web & Mobile Design, docker, react-js, adobe-photoshop, node.js, digital-ocean"
          endDate="May 2018"
          client="Oak's Manufacturing"
          description="Oaks Manufacturing is a startup company that wants to have presence
                  on the web. So a landing website that talks about their product and services, contact information are
                  the best solution i can provide for them.
                  I built the website from scratch using plain ReactJs, NodeJs, some CSS and deployed on digital ocean's
                  virtual server. All communication are sent to their zendesk ticketing portal
                  After the deployment, we notice a spike of site visitors using the Google Adwords that I setup for
                  them tool"
    />

  )
}

OaksMfgWebsite = withCloudinaryImages({folder: 'oaksmfg'})(OaksMfgWebsite)
export {OaksMfgWebsite}
