import React from 'react'
import { Item } from './Item'
import { useCloudinaryImages } from '../../hooks/useCloudinaryImages'

export const Ss360 = () => {
  const { items, loading } = useCloudinaryImages({ folder: 'studio-solution360' })
  if (loading) return null
  return (
    <Item
      carouselItems={items}
      mainImage="https://res.cloudinary.com/tmmshauler/image/upload/v1546753227/profile/studio-solution360/medium/sshome.png"
      projectName="Studio Solutions 360"
      category="Web Development"
      tags="Web Design"
      endDate="DECEMBER 2016"
      client="Studio Solutions 360"
      description="This is the website for start-up call-center business in Philippines. We decided to have a lean & mean approach by using a single page landing website for https://www.studiosolutions360.com/"
    />
  )
}
