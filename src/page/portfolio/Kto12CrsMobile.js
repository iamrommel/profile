import React from 'react'
import { Item } from './Item'
import { withCloudinaryImages } from './withCloudinaryImages'

export let Kto12CrsMobile = ({ cloudinaryImages = {} }) => {
    const { items, loading } = cloudinaryImages
    if (loading) return null
    return (

        <Item carouselItems={items}
              mainImage="https://res.cloudinary.com/tmmshauler/image/upload/v1570602497/profile/kto12crs-mobile/feature-graphic.jpg"
              projectName="KTO12 Class Record System"
              category="Mobile App Development"
              tags="Mobile Design, React Native, Docker, Digital Ocean"
              endDate="DECEMBER 2018"
              client="N/A"
              description="The epicenter of the application is to help the teachers (of Philippines) compute the grade of
          students and generate reports that are required from them. This is my personal project that is planning to roll-out by the end of 2016.
          I did a regular discussion with my resource person so we tweak what was needed and necessary as the minimum viable product.
          https://play.google.com/store/apps/details?id=ph.lsf.pantas"/>

    )
}


Kto12CrsMobile = withCloudinaryImages({ folder: 'kto12crs-mobile' })(Kto12CrsMobile)
