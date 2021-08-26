import { Spin } from 'antd';
import React from 'react';
import AvatarTwitter from './AvatarTwitter';
import Headertwitter from './Headertwitter';
import ImageTwitter from './imageTwitter';
import SectionsTwitter from './SectionsTwitter';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalReducerAction } from '../../ReduxConfig/Reducers/GlobalReducer';

function index({ match }) {
  const disptach = useDispatch();
  disptach(GlobalReducerAction(match.params.username));
  const ProfileInformation = useSelector((state) => state.GlobalReducer);
  return (
    <div>
      {ProfileInformation ? (
        ProfileInformation.map((Profile) => {
          return (
            <div key={Profile.username}>
              <Headertwitter />
              <ImageTwitter Cover={Profile.CoverImg} />
              <AvatarTwitter {...Profile} />
              <SectionsTwitter />
            </div>
          );
        })
      ) : (
        <Spin
          size="large"
          style={{
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        />
      )}
    </div>
  );
}

export default index;
