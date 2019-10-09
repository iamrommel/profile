import React from 'react'
import { Kto12CrsWeb } from './Kto12CrsWeb'
import { OaksMfgWebsite } from './OaksMfgWebsite'
import { PaymeWeb } from './PaymeWeb'
import { PrincipalDashboard } from './PrincipalDashboard'
import { PrincipalDashboardMobile } from './PrincipalDashboardMobile'
import { ProducerPayroll } from './ProducerPayroll'
import { Ss360 } from './Ss360'
import { TechUsed } from './TechUsed'
import { TotalMilkHaulerMobile } from './TotalMilkHaulerMobile'
import { TotalMilkHaulerWeb } from './TotalMilkHaulerWeb'
import { Kto12CrsMobile } from './Kto12CrsMobile'

export class Index extends React.Component {

  render () {
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
            <PaymeWeb/>
            <TotalMilkHaulerMobile/>
            <PrincipalDashboardMobile/>
            <ProducerPayroll/>
            <Kto12CrsWeb/>
            <Kto12CrsMobile/>
            <Ss360/>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Technologies</h2>
              <h3 className="section-subheading text-muted">Software, frameworks, and technologies I am using for my recent projects.
                I refrain from using old technologies but their good concepts, design patterns and philosophy are not forgotten and even
                implemented and re-use with the new one.
              </h3>
            </div>
          </div>
          <div className="row">
            <TechUsed/>
          </div>
        </div>

      </section>

    )
  }
}
