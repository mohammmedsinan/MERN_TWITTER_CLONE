import React from 'react';
import CardTweetContent from './CardTweetContent';
import Header from './Header';
import StatusTweet from './StatusTweet';
function index() {
  return (
    <div style={{ width: 'content-fit' }}>
      <Header />
      <StatusTweet />
      <CardTweetContent />
    </div>
  );
}

export default index;
