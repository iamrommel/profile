import React from 'react'
//import Route from 'react-router-dom/Route'
//import Switch from 'react-router-dom/Switch'
import { Route, Switch } from 'react-router'
import HomeIndex from './page/home/index.js'
import {TermsAndCondition} from './page/contact/TermsAndCondition'
import {PrivacyPolicy} from './page/contact/PrivacyPolicy'

import './style'

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeIndex}/>
    <Route exact path="/terms-and-condition" component={TermsAndCondition}/>
    <Route exact path="/privacy-policy" component={PrivacyPolicy}/>
  </Switch>
)

export default App
