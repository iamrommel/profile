import React from 'react'
import {Item} from './Item'
import {withCloudinaryImages} from './withCloudinaryImages'

let Kto12Crs = ({cloudinaryImages = {}}) => {
  const {items, loading} = cloudinaryImages
  if (loading) return null
  return (

    <Item carouselItems={items}
          mainImage="https://res.cloudinary.com/tmmshauler/image/upload/v1546745989/profile/kto12crs/medium/student-detail.png"
          projectName="KTO12 Class Record System"
          category="Web Development"
          tags=" mongodb, architectural-design, meteor, node.js"
          endDate="DECEMBER 2018"
          client="N/A"
          description="The epicenter of the application is to help the teachers (of Philippines) compute the grade of students and generate reports that are required from them. This is my personal project that is planning to roll-out by the end of 2016. I did a regular discussion with my resource person so we tweak what was needed and necessary as the minimum viable product."/>

  )
}


Kto12Crs = withCloudinaryImages({folder: 'kto12crs'})(Kto12Crs)
export {Kto12Crs}
