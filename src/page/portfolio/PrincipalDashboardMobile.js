import React from 'react'
import {Item} from './Item'
import {withCloudinaryImages} from './withCloudinaryImages'


let PrincipalDashboardMobile = ({cloudinaryImages = {}}) => {
  const {items, loading} = cloudinaryImages
  if (loading) return null

  return (

    <Item carouselItems={items}
          mainImage="https://res.cloudinary.com/tmmshauler/image/upload/v1558684617/profile/principal-mobile/medium/screenshot8_samsung-galaxynote5-white-portrait.png"
          projectName="Principal / Nutritionist Dashboard"
          category="Mobile App Development"
          tags="Mobile Design, React Native, Docker, Digital Ocean, https://play.google.com/store/apps/details?id=com.totalmilk.principal"
          endDate="NOVEMBER 2016"
          client="PCMLI"
          description="Milk producers and nutritionist can review the information about the milk that was delivered to
          each plant like test result, milk weight, milk payment. The project was created using react-native and expo.
          Backend API is already developed using the principal.totalmilk.com (which is another project i made)"/>
  )
}

PrincipalDashboardMobile = withCloudinaryImages({folder: 'principal-mobile'})(PrincipalDashboardMobile)
export {PrincipalDashboardMobile}
