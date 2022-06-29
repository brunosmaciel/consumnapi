import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';

import Page404 from '../pages/Page404';
import PrivateRoute from './PrivateRoute';

export default function AppRoutes() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Alunos} isClosed={false} />
      <PrivateRoute path="/aluno/:id/edit" component={Aluno} isClosed />
      <PrivateRoute path="/aluno/" component={Aluno} isClosed />
      <PrivateRoute path="/fotos/:id" component={Fotos} isClosed />
      <PrivateRoute path="/login/" component={Login} isClosed={false} />
      <PrivateRoute path="/register" component={Register} isClosed={false} />
      <PrivateRoute path="*" component={Page404} />
    </Switch>
  );
}
