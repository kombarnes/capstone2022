import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home';
function App() {
  return (
    <Router>
    <div className="App">
      <Route path='/' component={Home}/>
    </div>
    </Router>
  );
}

export default App;