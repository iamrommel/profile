import React from 'react'
import {Item} from './Item'
import {withCloudinaryImages} from './withCloudinaryImages'

let TotalMilkHaulerWeb = ({cloudinaryImages = {}}) => {
  const {items, loading} = cloudinaryImages
  if (loading) return null
  return (

    <Item carouselItems={items}
          mainImage="https://res.cloudinary.com/tmmshauler/image/upload/v1546745010/profile/hauler-web/overvew.png"
          projectName="Total Milk Hauler Web"
          category="Web Development"
          tags="Web Design"
          endDate="DECEMBER 2018"
          client="PCMLI"
          description="The application focuses on Milk Hauling. It consists the mobile app for the truck driver to use in inputting milk weights and components, and the web app for the back-office guy to collate and generate reports about the hauled milks. It was developed using the latest web technologies such as Nodejs, meteor, React, Graphql, MongoDb, React-Native, Expo and deployed on Digital Ocean. It is SAAS and planned to be full blown product of PCM. As of now, we got 2 major haulers and around 100 truck drivers as an active users. We still continue to maintain/enhance the application depending on our users inputs. We are 2-man-team working on this project and I am the lead of it."/>

  )
}


TotalMilkHaulerWeb = withCloudinaryImages({folder: 'hauler-mobile'})(TotalMilkHaulerWeb)
export {TotalMilkHaulerWeb}
