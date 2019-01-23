import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import RegisterFormContainer from './session_form/register_form_container';

const App = () => (
  <div>
    <SplashContainer />
    <h1>Harmony App component</h1>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/register" component={RegisterFormContainer} />
  </div>
);

export default App;