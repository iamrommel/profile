import React from 'react'
import {Item} from './Item'
import {withCloudinaryImages} from './withCloudinaryImages'


let TotalMilkHaulerMobile = ({cloudinaryImages = {}}) => {
  const {items, loading} = cloudinaryImages
  if (loading) return null

  return (

    <Item carouselItems={items}
          mainImage="https://res.cloudinary.com/tmmshauler/image/upload/v1546745275/profile/hauler-mobile/login_pixel_really_blue_portrait.png"
          projectName="Total Milk Hauler Mobile"
          category="Mobile App Development"
          tags="Mobile Design, React Native, Docker, Digital Ocean"
          endDate="FEBRUARY 2018"
          client="PCMLI"
          description="The application focuses on Milk Hauling. It consists the mobile app for the truck driver to use in inputting milk weights and components, and the web app for the back-office guy to collate and generate reports about the hauled milks. It was developed using the latest web technologies such as Nodejs, meteor, React, Graphql, MongoDb, React-Native, Expo and deployed on Digital Ocean. It is SAAS and planned to be full blown product of PCM. As of now, we got 2 major haulers and around 100 truck drivers as an active users. We still continue to maintain/enhance the application depending on our users inputs. We are 2-man-team working on this project and I am the lead of it."/>

  )
}

TotalMilkHaulerMobile = withCloudinaryImages({folder: 'hauler-mobile'})(TotalMilkHaulerMobile)
export {TotalMilkHaulerMobile}
