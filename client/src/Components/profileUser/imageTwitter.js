import React from 'react';

function imageTwitter(Cover) {
  return (
    <div style={{ position: 'relative', zIndex: '1' }}>
      <div
        style={{
          height: '200px',
          position: 'absolute',
          zIndex: '0',
          backgroundImage: `url(${Cover.Cover})`,
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  );
}

export default imageTwitter;
