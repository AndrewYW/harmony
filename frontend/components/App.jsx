import React from 'react';
import SplashContainer from './splash/splash_container';
import { Route } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import RegisterFormContainer from './session_form/register_form_container';

// const landing = () => {
//   return (
//     <div>
//       <SplashContainer />
//       <h1>Harmony App</h1>
//       <Route path="/login" component={LoginFormContainer} />
//       <Route path="/register" component={RegisterFormContainer} />
//     </div>
//   )
// };

// const App = () => {
  
//   return window.currentUser ? null : landing();
// };

const App = () => (
  <div>
    <SplashContainer />
    <h1>Harmony App</h1>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/register" component={RegisterFormContainer} />
  </div>
);

export default App;