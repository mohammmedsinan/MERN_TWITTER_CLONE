import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function Headertwitter() {
  const history = useHistory();
  return (
    <div style={{ borderBottom: 'solid 1px #2f3336' }}>
      <div style={{ display: 'flex', padding: '5px 20px', alignItems: 'center' }}>
        <ArrowLeftOutlined
          style={{ fontSize: '20px', cursor: 'pointer' }}
          onClick={() => history.push('/')}
        />
        <div style={{ marginLeft: '25px' }}>
          <p
            style={{
              padding: '0px',
              margin: '0px',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            Train_Heartent
          </p>
          <span style={{ color: '#6e767d', margin: '0px' }}>217 Tweets</span>
        </div>
      </div>
    </div>
  );
}

export default Headertwitter;
