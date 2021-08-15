import React from 'react';
import { Image } from 'antd';

function imageTwitter() {
  const img = 'https://www.imgcorporations.com/images/home-pages/storm.jpg';
  return (
    <div style={{ position: 'relative', zIndex: '1' }}>
      <img src={img} width="100%" style={{ height: '220px', position: 'absolute', zIndex: '0' }} />
    </div>
  );
}

export default imageTwitter;
