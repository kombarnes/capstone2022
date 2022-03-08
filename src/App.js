import React from 'react';
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

// import from components

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

 class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <div className='App'>
          <Switch>

          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>

          </Switch>
         </div>
      </BrowserRouter>
    )
  }
}
export default App;