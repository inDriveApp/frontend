import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Files from '../pages/Files';
import Shared from '../pages/Shared';

export default function Routes(){
  return(
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/forgot-password" exact component={ForgotPassword} />
    <Route path="/reset-password" exact component={ResetPassword} />

    <Route path="/files" exact component={Files} isPrivate />
    <Route path="/shared" exact component={Shared} isPrivate />
  </Switch>
  );
}