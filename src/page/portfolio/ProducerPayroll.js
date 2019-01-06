import React from 'react'
import {Item} from './Item'
import {withCloudinaryImages} from './withCloudinaryImages'

let ProducerPayroll = ({cloudinaryImages = {}}) => {
  const {items, loading} = cloudinaryImages
  if (loading) return null
  return (

    <Item carouselItems={items}
          mainImage="https://res.cloudinary.com/tmmshauler/image/upload/v1546745925/profile/producer-payroll/medium/Principal.png"
          projectName="Total Milk Producer Payroll"
          category="Web Development"
          tags="Web Design, Lighswitch"
          endDate="DECEMBER 2015"
          client="PCMLI"
          description="A software application for dairy industries. For more information visit http://www.totalmilk.com/"/>

  )
}


ProducerPayroll = withCloudinaryImages({folder: 'producer-payroll'})(ProducerPayroll)
export {ProducerPayroll}
