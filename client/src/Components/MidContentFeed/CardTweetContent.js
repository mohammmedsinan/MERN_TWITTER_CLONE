import React, { useEffect, useState } from 'react';
import { DashOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';
import { GetTheTweets } from '../../Api/index';

function CardTweetContent({}) {
  const [TweetsList, setTweetsList] = useState([]);
  useEffect(() => {
    GetTheTweets().then((e) => setTweetsList(e.data));
  }, []);
  if (!TweetsList) {
    return <div style={{ width: '100%', minHeight: '100%' }}>Loading</div>;
  } else {
    return TweetsList.map((TweetsInfo) => {
      return (
        <div
          key={TweetsInfo._id}
          style={{
            borderTop: 'solid 1px #2f3336',
            marginTop: '10px',
            borderTop: 'solid 1px #2f3336',
            padding: '25px',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                fontWeight: 'bold',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ display: 'flex' }}>
                <Avatar size="large" src={TweetsInfo.Avatar} />
                <p style={{ marginLeft: '15px', fontSize: '16px' }}>{TweetsInfo.username}</p>
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  <p
                    style={{
                      marginLeft: '8px',
                      fontSize: '16px',
                      fontWeight: 'lighter ',
                      color: '#5f5f5f',
                    }}
                  >
                    @{TweetsInfo.username}
                  </p>
                  <p
                    style={{
                      padding: '0px',
                      margin: '0px',
                      fontWeight: 'lighter ',
                      color: '#5f5f5f',
                      fontSize: '15px',
                    }}
                  >
                    . {TweetsInfo.Date}
                  </p>
                </div>
              </div>
              <DashOutlined style={{ cursor: 'pointer' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '0px 10px' }}>
            <p style={{ color: 'white', marginTop: '10px' }}>{TweetsInfo.TweetText}</p>
            <Image src={TweetsInfo.Img} style={{ borderRadius: '10px' }} />
          </div>
        </div>
      );
    });
  }
}

export default CardTweetContent;
