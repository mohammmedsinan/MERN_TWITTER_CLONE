import React from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function AvatarTwitter() {
  return (
    <div style={{ marginTop: '140px', zIndex: '2', position: 'relative', padding: '0px 20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div
            style={{
              width: '27%',
              height: '140px',
              backgroundImage:
                'url(https://pbs.twimg.com/profile_images/1396778415269761024/KhPw6ZzX_400x400.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '100%',
              border: 'black solid 5px',
              marginBottom: '10px',
            }}
          />
          <Button
            type="ghost"
            style={{
              width: '110px',
              color: 'white',
              borderRadius: '20px',
              height: '35px',
              fontSize: '15px',
            }}
          >
            Edit Profile
          </Button>
        </div>
        <p
          style={{
            padding: '0px',
            margin: '0px',
            fontSize: '22px',
            color: 'white',
            lineHeight: '1',
          }}
        >
          Train_Heartent
        </p>
        <p
          style={{
            padding: '0px',
            margin: '0px',
            fontSize: '16px',
            color: '#6e767d',
            marginBottom: '10px',
          }}
        >
          @Train_Heartent
        </p>
        <p style={{ fontSize: '14px' }}>
          -Full stack programmer -u can say I fall in love with books -ازلي و عدمي معا استقراطي
          برجوازي -Speaking three languages (English , Arabic , Spanish)
        </p>
        <p style={{ color: '#6e767d' }}>
          <CalendarOutlined /> Joined October 2020
        </p>
        <div style={{ display: 'flex' }}>
          <p>
            8 <span style={{ color: '#6e767d' }}>Following</span>
          </p>
          <p style={{ lineHeight: '2', marginLeft: '20px' }}>
            13 <span style={{ color: '#6e767d' }}>Followers</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AvatarTwitter;
