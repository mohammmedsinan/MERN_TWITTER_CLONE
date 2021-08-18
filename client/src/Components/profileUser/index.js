import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { GetYourProfile } from '../../Api';
import AvatarTwitter from './AvatarTwitter';
import Headertwitter from './Headertwitter';
import ImageTwitter from './imageTwitter';
import SectionsTwitter from './SectionsTwitter';
import './style.scss';

function index({ match }) {
  const [ProfileInformation, setProfileInformation] = useState();
  const [Exuss, setExuss] = useState(false);
  useEffect(() => {
    GetYourProfile(match.params.username)
      .then((e) => e.data)
      .then((ProfileInfo) => setProfileInformation(ProfileInfo));
  }, [match.params.username]);

  return (
    <div style={{ width: '45%' }}>
      {ProfileInformation ? (
        ProfileInformation.map((Profile) => {
          let MoreInfo = { ...Profile, Exuss, setExuss };
          return (
            <>
              <Headertwitter />
              <ImageTwitter Cover={Profile.CoverImg} />
              <AvatarTwitter {...MoreInfo} />
              <SectionsTwitter />
            </>
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
