import React from 'react'
import Lightbox from 'react-image-lightbox'

export const ImageLightbox = ({ show, setShow, carouselItems, description }) => {
  if (!show) return null
  const [photoIndex, setPhotoIndex] = React.useState(0)
  return (
    <React.Fragment>
      <Lightbox
        mainSrc={carouselItems[photoIndex]}
        nextSrc={carouselItems[(photoIndex + 1) % carouselItems.length]}
        prevSrc={carouselItems[(photoIndex + carouselItems.length - 1) % carouselItems.length]}
        onCloseRequest={() => setShow(false)}
        onMovePrevRequest={() => setPhotoIndex((photoIndex + carouselItems.length - 1) % carouselItems.length)}
        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % carouselItems.length)}
        imageCaption={description}
      />
    </React.Fragment>
  )
}
