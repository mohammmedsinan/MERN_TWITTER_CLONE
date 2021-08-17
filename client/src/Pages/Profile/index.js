import React from 'react';
import ProfileUser from '../../Components/profileUser';
import SliderLeftSide from '../../Components/SliderLeftSide/index';
import RightContentHash from '../../Components/RightContentHash/index';

function index({ match }) {
  return (
    <>
      <div className="Container-App" style={{ minHeight: '759px' }}>
        {/* SLIDER LEFT SIDE */}
        <div style={{ minWidth: '20.5%' }}>
          <SliderLeftSide />
        </div>
        {/* MID CONTENT FEED */}
        <ProfileUser match={match} />
        {/* RIGHT CONTENT # N OTHER */}
        <div style={{ position: 'relative' }}>
          <RightContentHash />
        </div>
      </div>
    </>
  );
}

export default index;
