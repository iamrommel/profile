import React from 'react'
import {Item} from './Item'
import {withCloudinaryImages} from './withCloudinaryImages'

let PrincipalDashboard = ({cloudinaryImages = {}}) => {
  const {items, loading} = cloudinaryImages
  if (loading) return null
  return (

    <Item carouselItems={items}
          mainImage="https://res.cloudinary.com/tmmshauler/image/upload/v1558671938/profile/principal-web/overview.png"
          projectName="Principal Dashboard"
          category="Web Development"
          tags="Web Design, https://principal.totalmilk.com"
          endDate="SEPTEMBER 2016"
          client="PCMLI"
          description="Another project for Total Milk umbrella that enable registered public users to view the
          details of their engagement with US milk plants. It uses ReactJs, NodeJs, Graphql and Mongodb and connecting to
          the external service (but still in totalmilk domain) for fetching information.
          It was deployed on Digital Ocean server which peaks up to 4k+ users specially during mid and end of every month. "/>

  )
}


PrincipalDashboard = withCloudinaryImages({folder: 'principal-web'})(PrincipalDashboard)
export {PrincipalDashboard}
