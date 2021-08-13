import React from 'react';
import { StarOutlined } from '@ant-design/icons';

function Header() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexDirection: 'row',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingTop: '20px',
          paddingBottom: '0px',
          borderBottom: 'solid 1px #2f3336',
        }}
      >
        <p style={{ fontWeight: 'bolder', color: 'white', fontSize: '20px', cursor: 'pointer' }}>
          Home
        </p>
        <StarOutlined style={{ fontSize: '23px', color: '#1da1f2', cursor: 'pointer' }} />
      </div>
    </div>
  );
}

export default Header;
