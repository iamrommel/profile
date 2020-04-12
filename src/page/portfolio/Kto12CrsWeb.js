import React from 'react'
import { Item } from './Item'
import { useCloudinaryImages } from '../../hooks/useCloudinaryImages'

export const Kto12CrsWeb = () => {
  const { items, loading } = useCloudinaryImages({ folder: 'kto12crs-web' })
  if (loading) return null
  return (
    <Item
      carouselItems={items}
      mainImage="https://res.cloudinary.com/tmmshauler/image/upload/v1570544641/profile/kto12crs-web/medium/classrecord-entry.png"
      projectName="KTO12 Class Record System"
      category="Web Development"
      tags=" mongodb, architectural-design,  node.js"
      endDate="DECEMBER 2018"
      client="N/A"
      description="The epicenter of the application is to help the teachers (of Philippines) compute the grade of students and generate reports that are required from them. This is my personal project that is planning to roll-out by the end of 2016. I did a regular discussion with my resource person so we tweak what was needed and necessary as the minimum viable product."
    />
  )
}
