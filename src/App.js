import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import HomeIndex from './page/home/index.js'
import { TermsAndCondition } from './page/contact/TermsAndCondition'
import { PrivacyPolicy } from './page/contact/PrivacyPolicy'
import './style'
import ReactGa from 'react-ga'
import { ClientSettings } from './config/clientSettings'

const App = () => {
    //initial Google Analytics once
    useEffect(() => {
        ReactGa.initialize(ClientSettings.appSettings.GA_TRACKINGID)
        ReactGa.pageview('/index')
    }, [])


    return (
        <Switch>
            <Route exact path="/" component={HomeIndex}/>
            <Route exact path="/terms-and-condition" component={TermsAndCondition}/>
            <Route exact path="/privacy-policy" component={PrivacyPolicy}/>
        </Switch>
    )


}


export default App
