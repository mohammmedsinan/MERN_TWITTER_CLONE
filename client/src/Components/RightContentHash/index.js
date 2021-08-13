import Header from './Header';
import TrendSection from './TrendSection';
import React from 'react';
import './style.css';

function index() {
  return (
    <div
      style={{
        width: '30%',
        paddingLeft: '45px',
        borderLeft: 'solid 1px #2f3336',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100%',
      }}
    >
      <Header />
      <TrendSection />
    </div>
  );
}

export default index;
