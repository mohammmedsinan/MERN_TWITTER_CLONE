import React, { useEffect, useState } from 'react';
import { GetYourProfile } from '../../Api';
import AvatarTwitter from './AvatarTwitter';
import Headertwitter from './Headertwitter';
import ImageTwitter from './imageTwitter';
import SectionsTwitter from './SectionsTwitter';
import './style.scss';

function index({ match }) {
  const [ProfileInformation, setProfileInformation] = useState();
  useEffect(() => {
    GetYourProfile(match.params.username)
      .then((e) => e.data)
      .then((ProfileInfo) => setProfileInformation(ProfileInfo));
  }, [match.params.username]);
  return (
    <>
      {ProfileInformation &&
        ProfileInformation.map((Profile) => {
          return (
            <div style={{ width: '45%' }}>
              <Headertwitter />
              {console.log(Profile)}
              <ImageTwitter />
              <AvatarTwitter {...Profile} />
              <SectionsTwitter />
            </div>
          );
        })}
    </>
  );
}

export default index;
