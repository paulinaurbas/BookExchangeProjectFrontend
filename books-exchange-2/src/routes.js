import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import AppSecond from './SecondPage/AppSecond';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={App}></Route>
      <Route exact path='/second' component={AppSecond}></Route>
    </Switch>
  );
}

export default Routes;