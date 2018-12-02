import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import HomeIndex from './page/home/index.js'

import './style'
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomeIndex}/>
  </Switch>
)

export default App
