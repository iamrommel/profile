import React from 'react'
import {Navigator} from '../../component/Navigator'
import {Header} from './Header'
import {Index as Services} from '../services'
import {Index as Portfolio} from '../portfolio'
import {Index as About} from '../about'
import {Index as Client} from '../client'


export default class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigator/>
        <Header/>
        <Services/>
        <Portfolio/>
        <About/>
        <Client/>
      </React.Fragment>

    )
  }
}

