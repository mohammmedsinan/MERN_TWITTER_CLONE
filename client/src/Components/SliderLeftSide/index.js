import React from 'react';
import Slides from './Slides';
import Footer from './Footer';
import './style.css';
import { Button } from 'antd';
import {
  HomeFilled,
  TwitterOutlined,
  BorderlessTableOutlined,
  BellOutlined,
  MailOutlined,
  BookOutlined,
  ProfileOutlined,
  UserOutlined,
  SmallDashOutlined,
} from '@ant-design/icons';

function index() {
  const slides = [
    { Logo: <TwitterOutlined style={{ fontSize: '35px' }} />, SlideName: null, PathUrl: '/' },
    { Logo: <HomeFilled />, SlideName: 'Home', PathUrl: '/' },
    { Logo: <BorderlessTableOutlined />, SlideName: 'Explore' },
    { Logo: <BellOutlined />, SlideName: 'Notification' },
    { Logo: <MailOutlined />, SlideName: 'Message' },
    { Logo: <BookOutlined />, SlideName: 'BookMarks' },
    { Logo: <ProfileOutlined />, SlideName: 'Lists' },
    { Logo: <UserOutlined />, SlideName: 'Profile' },
    { Logo: <SmallDashOutlined />, SlideName: ' More' },
  ];
  return (
    <div
      style={{
        borderRight: 'solid 1px #2f3336',
        width: 'fit-content',
        paddingRight: '20px',
        position: 'fixed',
      }}
    >
      <div
        style={{
          width: 'fit-content',
          paddingTop: '10px',
        }}
      >
        <Slides SlideContent={slides} />
      </div>
      <Button
        type="primary"
        style={{
          color: 'white',
          fontWeight: 'bold',
          width: '230px',
          height: '50px',
          borderRadius: '30px',
          fontSize: '17px',
        }}
      >
        Tweet
      </Button>
      <Footer />
    </div>
  );
}

export default index;
