import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '../pages/Login';

import Page404 from '../pages/Page404';
import PrivateRoute from './PrivateRoute';

export default function AppRoutes() {
  return (
    <Switch>
      <PrivateRoute path="/login/" component={Login} />
      <PrivateRoute path="*" component={Page404} />
    </Switch>
  );
}
