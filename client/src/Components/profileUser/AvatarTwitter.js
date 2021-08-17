import React from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';

function AvatarTwitter(Profile) {
  const Params = useParams();
  console.log(Params.username);
  return (
    <div style={{ marginTop: '140px', zIndex: '2', position: 'relative', padding: '0px 20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div
            style={{
              width: '27%',
              height: '140px',
              backgroundImage: `url(${Profile.Avatar})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '100%',
              border: 'black solid 5px',
              marginBottom: '10px',
            }}
          />
          {Params.username === Profile.username
            ? console.log('matching')
            : console.log('dose not match')}
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
          {Profile.username}
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
          @{Profile.username}
        </p>
        <p style={{ fontSize: '14px' }}>{Profile.Bio} </p>
        <p style={{ color: '#6e767d' }}>
          <CalendarOutlined /> Joined October 2020
        </p>
        <div style={{ display: 'flex' }}>
          <p>
            {Profile.Following} <span style={{ color: '#6e767d' }}>Following</span>
          </p>
          <p style={{ lineHeight: '2', marginLeft: '20px' }}>
            {Profile.Followers} <span style={{ color: '#6e767d' }}>Followers</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AvatarTwitter;
