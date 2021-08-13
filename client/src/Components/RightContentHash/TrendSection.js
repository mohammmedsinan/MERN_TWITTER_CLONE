import { SettingOutlined } from '@ant-design/icons';
import React from 'react';

function TrendSection() {
  const TrendCard = ({ trndNumber, trendName, tweetsCount }) => {
    return (
      <div style={{ paddingTop: '15px', borderBottom: 'solid 1px #2f3336' }}>
        <div>
          <span style={{ color: '#5a6166' }}>{trndNumber} - Trending</span>
          <p style={{ float: 'right', marginTop: '20px', fontSize: '17px', fontWeight: 'bold' }}>
            # {trendName}
          </p>
          <p style={{ color: '#5a6166', marginTop: '20px' }}>{tweetsCount} - Tweets</p>
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#15181c',
        borderRadius: '20px',
        padding: '20px',
        marginTop: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          fontSize: '20px',
          fontWeight: 'bold',
          borderBottom: 'solid 1px #2f3336',
        }}
      >
        <p>Iraq Trends</p>
        <SettingOutlined style={{ cursor: 'pointer', color: '#1890ff' }} />
      </div>
      <TrendCard trendName={'We_Need_Exile'} trndNumber={1} tweetsCount={'300K'} />
      <TrendCard trendName={'We_Need_Exile'} trndNumber={1} tweetsCount={'300K'} />
      <TrendCard trendName={'We_Need_Exile'} trndNumber={1} tweetsCount={'300K'} />
      <TrendCard trendName={'We_Need_Exile'} trndNumber={1} tweetsCount={'300K'} />
      <TrendCard trendName={'We_Need_Exile'} trndNumber={1} tweetsCount={'300K'} />
    </div>
  );
}

export default TrendSection;
