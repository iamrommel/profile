import React from 'react'
import { Navigator } from '../../component/Navigator'
import { Footer } from '../../component/Footer'

import { Header } from './Header'
import { Index as Portfolio } from '../portfolio'
import { Index as Contact } from '../contact'
import { Index as Blog } from '../blog'

export default class Index extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Navigator/>
        <Header/>
        <Portfolio/>
        <Blog/>
        <Contact/>
        <Footer/>
      </React.Fragment>

    )
  }
}

