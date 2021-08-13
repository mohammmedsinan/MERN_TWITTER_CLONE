import React, { useState } from 'react';
import TwitterFrontPage from './Pages/HomePage/TwitterFrontPage';
import LoginAuth from './Pages/Auth/Login/LoginAuth';
import { Route, Switch } from 'react-router-dom';
import PageNotFind from './Pages/404/PageNotFind';
import ProtectedRoutes from './Components/RouteS/ProtectedRoutes';
import './style.css';

function App() {
  return (
    <>
      <Switch>
        <ProtectedRoutes exact path="/" component={TwitterFrontPage} />
        <Route path="/Auth/Login" component={LoginAuth} />
        <Route path="*" component={PageNotFind} />
      </Switch>
    </>
  );
}

export default App;
