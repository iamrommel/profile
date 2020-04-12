import React from 'react'
import { Utils } from 'pcmli.umbrella.uni-core'

export const useCloudinaryImages = ({ folder } = {}) => {
  const [items, setItems] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        //fetch the images
        let items = await Utils.fetch(`/images/cloudinary/${folder}`)
        setItems(items)
      } finally {
        setLoading(false)
      }
    })()
  }, [folder])

  return { items, loading }
}
