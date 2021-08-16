import React from 'react';
import { Image } from 'antd';

function imageTwitter() {
  const img = 'https://pbs.twimg.com/profile_banners/3331605652/1522573833/1500x500';
  return (
    <div style={{ position: 'relative', zIndex: '1' }}>
      <img
        src={img}
        width="100%"
        style={{ height: 'auto', maxHeight: '200px', position: 'absolute', zIndex: '0' }}
      />
    </div>
  );
}

export default imageTwitter;
