import { Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GetYourProfile } from '../../Api/index';

function Footer() {
  const [img, setImg] = useState(JSON.parse(localStorage.getItem('profile')));
  const [Info, setInfo] = useState([]);
  useEffect(() => {
    GetYourProfile(`${img.name}`)
      .then((e) => e.data)
      .then((e) => e.map((e) => setInfo(e)));
  }, []);
  console.log(Info);
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
        <Avatar size="large" src={Info.Avatar} />
      </span>
      <div style={{ marginLeft: '12px' }}>
        <p style={{ margin: '0px', fontWeight: 'bold' }}>{Info.username}</p>
        <p style={{ margin: '0px', fontSize: '12px' }}>@{Info.username}</p>
      </div>
    </div>
  );
}

export default Footer;
