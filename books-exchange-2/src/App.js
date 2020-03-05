import React, { Component } from 'react';
//style
import './App.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import AppSecond from './SecondPage/AppSecond';
import Home from './Home/Home';

function App() {
 
  return (
    
       <div className = "Routes">
      <Switch>
        <Route exact path='/exchange' component={AppSecond}></Route>
        <Route exact path='/' render={(routeProps) => <Home {...routeProps}/>} component ={Home}></Route>
      </Switch>
      </div>
  );
}
export default App;
