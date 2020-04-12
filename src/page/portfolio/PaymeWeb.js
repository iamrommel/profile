import React from 'react'
import { Item } from './Item'
import { useCloudinaryImages } from '../../hooks/useCloudinaryImages'

export const PaymeWeb = () => {
  const { items, loading } = useCloudinaryImages({ folder: 'payme-web' })

  if (loading) return null
  return (
    <Item
      carouselItems={items}
      mainImage="https://res.cloudinary.com/tmmshauler/image/upload/v1546745676/profile/payme-web/overview.png"
      projectName="Payme"
      category="Web Development"
      tags="Web Design, https://payme.totalmilk.com"
      endDate="MARCH 2016"
      client="PCMLI"
      description="The application was initially developed as internal payment system for PCMLI,
          but was decided as SAAS product later. It supports credit card and bank ACH for processing payment.
          It was designed with simplicity (as epicenter) for paying invoices. Project and task modules are included to easily
          tracks and manages projects and generate invoices from it. It was developed using the latest web technologies such
          as Nodejs, React, Graphql, MongoDb and deployed on Digital Ocean. Third party system integration are;
          Stripe was for payment gateway,
          Mailgun for mail communication,
          Zendesk for customer support. As of now, it is used internally by PCM for it's payment systems
          and still looking for other small organization that can benefit for its simple
          and core features. We still continue to maintain/enhance the application depending on our users inputs.
          We are 2-man-team working on this project and I am the lead of it."
    />
  )
}
