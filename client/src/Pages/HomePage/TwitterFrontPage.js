import React from 'react';
import SliderLeftSide from '../../Components/SliderLeftSide/index';
import MidContentFeed from '../../Components/MidContentFeed/index';
import RightContentHash from '../../Components/RightContentHash/index';

function TwitterFrontPage() {
  return (
    // style={{ height: '759px' }}
    <div className="Container-App" style={{ minHeight: '759px' }}>
      {/* SLIDER LEFT SIDE */}
      <div style={{ minWidth: '20.5%' }}>
        <SliderLeftSide />
      </div>
      {/* MID CONTENT FEED */}
      <MidContentFeed />
      {/* RIGHT CONTENT # N OTHER */}
      <div style={{ position: 'relative' }}>
        <RightContentHash />
      </div>
    </div>
  );
}

export default TwitterFrontPage;
