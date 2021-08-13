import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';

function Header() {
  return (
    <div>
      <Input
        style={{
          backgroundColor: '#202327',
          marginTop: '10px',
          border: 'none',
          fontSize: '20px',
          marginLeft: '20px',
          borderRadius: '20px',
          width: '90%',
        }}
        size="large"
        placeholder="Search Twitter"
        prefix={<SearchOutlined style={{ color: '#6e767d', marginRight: '10px' }} />}
      />
    </div>
  );
}

export default Header;
