import { Button } from 'antd';
import React from 'react';
import './style.scss';

function SectionsTwitter() {
  let ChangeAble = '';
  const HandleTweets = () => {
    if (ChangeAble !== 'Tweets') {
      console.log('Tweets Section', ChangeAble);
      ChangeAble = 'Tweets';
    }
  };
  const HandleReplies = () => {
    if (ChangeAble !== 'Replies') {
      console.log('Replies Section', ChangeAble);
      ChangeAble = 'Replies';
    }
  };
  const HandleMedia = () => {
    if (ChangeAble !== 'Media') {
      console.log('Media Section', ChangeAble);
      ChangeAble = 'Media';
    }
  };
  const HandleLikes = () => {
    if (ChangeAble !== 'Likes') {
      console.log('Likes Section', ChangeAble);
      ChangeAble = 'Likes';
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px 20px',
        borderBottom: '1px solid #2f3336',
        paddingBottom: '10px',
        marginTop: '10px',
      }}
    >
      <Button className="btn-section" type="link" onClick={HandleTweets}>
        Tweets
      </Button>
      <Button className="btn-section" type="link" onClick={HandleReplies}>
        Tweets&Replies
      </Button>
      <Button className="btn-section" type="link" onClick={HandleMedia}>
        Media
      </Button>
      <Button className="btn-section" type="link" onClick={HandleLikes}>
        Likes
      </Button>
    </div>
  );
}

export default SectionsTwitter;
