import React from 'react';
import ProfileUser from '../../Components/profileUser';

function index({ match }) {
  return (
    <>
      <ProfileUser match={match} />
    </>
  );
}

export default index;
