import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';


const Routes: React.FC = () => (
  <Switch>
    <Route pathe="/" exact component={SignIn} />
    <Route pathe="/sigunp" component={SignUp} />
  </Switch>
)



export default Routes;
