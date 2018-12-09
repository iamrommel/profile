import React from 'react'
import {Navigator} from '../../component/Navigator'
import {Footer} from '../../component/Footer'

import {Header} from './Header'
import {Index as Services} from '../services'
import {Index as Portfolio} from '../portfolio'
import {Index as About} from '../about'
import {Index as Client} from '../client'
import {Index as Contact} from '../contact'
import {Index as Blog} from '../blog'


export default class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigator/>
        <Header/>
        <Services/>
        <Portfolio/>
        <Blog/>
        <About/>
        <Client/>
        <Contact/>
        <Footer/>
      </React.Fragment>

    )
  }
}

