import React from 'react';
import AvatarTwitter from './AvatarTwitter';
import Headertwitter from './Headertwitter';
import ImageTwitter from './imageTwitter';
import SectionsTwitter from './sectionsTwitter';

function index() {
  return (
    <div style={{ width: '45%' }}>
      <Headertwitter />
      <ImageTwitter />
      <AvatarTwitter />
      <SectionsTwitter />
    </div>
  );
}

export default index;
