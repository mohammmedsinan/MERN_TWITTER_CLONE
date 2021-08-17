import React from 'react';
import { Image } from 'antd';

function imageTwitter(Cover) {
  const img = Cover;
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
