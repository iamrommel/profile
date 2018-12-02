import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import HomeIndex from './page/home/index.js'

import './style'

const App = () => (
  <div id="wrapper" className="body">
    <Switch>
      <Route exact path="/" component={HomeIndex}/>
    </Switch>
  </div>
)

export default App
