import React from 'react'
import {OaksMfgWebsite} from './OaksMfgWebsite'
import {TotalMilkHaulerWeb} from './TotalMilkHaulerWeb'
import {TotalMilkHaulerMobile} from './TotalMilkHaulerMobile'
import {PrincipalDashboard} from './PrincipalDashboard'
import {PrincipalDashboardMobile} from './PrincipalDashboardMobile'
import {ProducerPayroll} from './ProducerPayroll'
import {Kto12Crs} from './Kto12Crs'
import {Ss360} from './Ss360'

export class Index extends React.Component {

  render() {
    return (
      <section className="bg-light" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Work</h2>
              <h3 className="section-subheading text-muted">From ReactJs to NodeJs (with GraphQL) then MongoDB then back
                to ReactNative, checkout my latest web and mobile app projects</h3>
            </div>
          </div>
          <div className="row">
            <OaksMfgWebsite/>
            <TotalMilkHaulerWeb/>
            <PrincipalDashboard/>
            <TotalMilkHaulerMobile/>
            <PrincipalDashboardMobile/>
            <ProducerPayroll/>
            <Kto12Crs/>
            <Ss360/>
          </div>
        </div>
      </section>

    )
  }
}
