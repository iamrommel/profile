import React from 'react'
import { Item } from './Item'
import { useCloudinaryImages } from '../../hooks/useCloudinaryImages'

export const OaksMfgWebsite = () => {
  const { items, loading } = useCloudinaryImages({ folder: 'oaksmfg' })

  if (loading) return null
  return (
    <Item
      carouselItems={items}
      mainImage="https://res.cloudinary.com/tmmshauler/image/upload/v1546747501/profile/oaksmfg/medium/Home.jpg"
      projectName="www.oaksmfg.com"
      category="Web Development"
      tags="Web & Mobile Design, docker, react-js, adobe-photoshop, node.js, digital-ocean"
      endDate="May 2018"
      client="Oak's Manufacturing"
      description="Oaks Manufacturing is a startup company that wants to have presence
                  on the web. So a landing website that talks about their product and services, contact information are
                  the best solution that I can provide for them.
                  I built the website from scratch using plain ReactJs, NodeJs, some CSS and deployed on Digital Ocean's
                  virtual server. All communication are sent to their Zendesk ticketing portal
                  After the deployment, we notice a spike of site visitors using the Google Adwords that I setup for
                  them too."
    />
  )
}
