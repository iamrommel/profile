import React from 'react'
import {Item} from './Item'
import {withCloudinaryImages} from './withCloudinaryImages'

let PrincipalDashboard = ({cloudinaryImages = {}}) => {
  const {items, loading} = cloudinaryImages
  if (loading) return null
  return (

    <Item carouselItems={items}
          mainImage="https://res.cloudinary.com/tmmshauler/image/upload/v1546745338/profile/principal-web/medium/dashboard.png"
          projectName="Principal Dashboard"
          category="Web Development"
          tags="Web Design, https://principal.totalmilk.com"
          endDate="SEPTEMBER 2016"
          client="PCMLI"
          description="Another project for Total Milk umbrella that enable registered public users to view the details of their engagement with US milk plants. It uses MeteorJs (with blaze) as the framework and connecting to the external service (but still in totalmilk domain) for fetching information. It was deployed using the Meteor Galaxy and sometimes hits up to 4000 users specially during peak or end of every month. "/>

  )
}


PrincipalDashboard = withCloudinaryImages({folder: 'principal-web'})(PrincipalDashboard)
export {PrincipalDashboard}
