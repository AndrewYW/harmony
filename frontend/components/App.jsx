import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import RegisterFormContainer from './session_form/register_form_container';
import test from './channels/me';

const App = () => (
  <Switch>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/register" component={RegisterFormContainer} />
    <ProtectedRoute exact path="/channels/@me" component={test} />
    <Route exact path="/" component={SplashContainer}></Route>
  </Switch>
);

export default App;