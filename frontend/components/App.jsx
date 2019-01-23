import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import RegisterFormContainer from './session_form/register_form_container';


const App = () => (
  <div>
    <h1>Harmony App</h1>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/register" component={RegisterFormContainer} />

    <Route exact path="/" component={SplashContainer}></Route>
  </div>
);

export default App;