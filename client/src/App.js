import React from 'react';
import TwitterFrontPage from './Pages/HomePage/TwitterFrontPage';
import LoginAuth from './Pages/Auth/Login/LoginAuth';
import Profile from './Pages/Profile/index';
import ProtectedRoutes from './Components/RouteS/ProtectedRoutes';
import RightContentHash from './Components/RightContentHash/index';
import SliderLeftSide from './Components/SliderLeftSide/index';
import { Route, Switch, withRouter } from 'react-router-dom';
import { GlobalReducerAction } from './ReduxConfig/Reducers/GlobalReducer';
import { useDispatch } from 'react-redux';
import './style.css';

function App(match) {
  console.log(match.match.params.username);
  return (
    <>
      <div className="Container-App" style={{ minHeight: '759px' }}>
        <div style={{ minWidth: '20.5%' }}>
          <SliderLeftSide />
        </div>
        <Switch>
          <div style={{ width: '50%' }}>
            <ProtectedRoutes exact path="/" component={TwitterFrontPage} />
            <Route path="/Auth/Login" component={LoginAuth} />
            <Route path="/Profile/:username" component={Profile} />
          </div>
        </Switch>
        <div style={{ position: 'relative' }}>
          <RightContentHash />
        </div>
      </div>
    </>
  );
}

export default withRouter(App);
