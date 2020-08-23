import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Credits from './Credits'
import ContactUs from './ContactUs.js'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/home" component={Home} exact />
      <Route path="/contactus" component={ContactUs} exact />
      <Route path="/credits" component={Credits} exact />
      </Switch>
    </div>

    </Router>
  );
}

export default App;
