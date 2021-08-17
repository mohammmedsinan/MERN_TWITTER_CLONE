import { Avatar } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Footer() {
  const [img, setImg] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',
        marginTop: '101px',
        paddingBottom: '20px',
        cursor: 'pointer',
      }}
      onClick={() => history.push(`/profile/${img.name}`)}
    >
      <span>
        <Avatar size="large" src={img.imageUrl} />
      </span>
      <div style={{ marginLeft: '12px' }}>
        <p style={{ margin: '0px', fontWeight: 'bold' }}>{img.name}</p>
        <p style={{ margin: '0px', fontSize: '12px' }}>@{img.name}</p>
      </div>
    </div>
  );
}

export default Footer;
