import React from 'react'
import {wrapDisplayName} from 'recompose'
import fetch from 'cross-fetch'


export const withCloudinaryImages = (config = {}) => {

  const {folder} = config


  return (WrappedComponent) => {
    class With extends React.Component {

      state = {items: [], loading: false}

      async componentDidMount() {

        const cloudinaryFolder = folder || this.props.folder
        try {

          this.setState({loading: true})

          //fetch the images
          let items = await fetch(`/images/cloudinary/${cloudinaryFolder}`)

          if (items.status >= 400) {
            throw new Error('Bad response from server')
          }

          items = await items.json()


          this.setState({items})
        } finally {
          this.setState({loading: false})
        }
      }

      render() {
        const {items, loading} = this.state

        const cloudinaryImages = {
          items, loading
        }
        return <WrappedComponent
          cloudinaryImages={cloudinaryImages}
          {...this.props}/>
      }
    }

    With.displayName = wrapDisplayName(WrappedComponent, 'withCloudinaryImages')
    return With
  }

}
