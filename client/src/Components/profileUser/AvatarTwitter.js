import React, { useEffect, useState } from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';
import Modal from 'antd/lib/modal/Modal';
import { Input, Upload } from 'antd';
import { UpdateYourProfile } from '../../Api/index';

function AvatarTwitter(Profile) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const ls = JSON.parse(localStorage.getItem('profile'));
  const [Info, setInfo] = useState({
    Avatar: '',
    CoverImg: '',
    username: '',
    Bio: '',
    key: ls.name,
  });
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    UpdateYourProfile(Info).then((e) => console.log(e.data));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const Params = useParams();
  const storge = JSON.parse(localStorage.getItem('profile'));
  const propsUpload = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    beforeUpload(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (ew) => {
          const img = document.createElement('img');
          img.src = reader.result;
          img.onload = (e) => {
            setInfo({ ...Info, Avatar: ew.target.result });
          };
        };
      });
    },
  };
  const propsUpload2 = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    beforeUpload(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (ew) => {
          const img = document.createElement('img');
          img.src = reader.result;
          img.onload = (e) => {
            setInfo({ ...Info, CoverImg: ew.target.result });
          };
        };
      });
    },
  };
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
          {Params.username === storge.name ? (
            <>
              <Button
                onClick={showModal}
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
              <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Input
                  placeholder="Change Your Name"
                  onChange={(e) => setInfo({ ...Info, username: e.target.value })}
                  value={Info.username}
                />
                <Input
                  placeholder="Change Your Bio"
                  onChange={(e) => setInfo({ ...Info, Bio: e.target.value })}
                  value={Info.Bio}
                />
                <Upload {...propsUpload}>
                  <Button style={{ marginTop: '10px', display: 'block', width: '200px' }}>
                    Change The Avatar
                  </Button>
                </Upload>
                <Upload {...propsUpload2}>
                  <Button style={{ marginTop: '10px', display: 'block', width: '200px' }}>
                    Change Cover
                  </Button>
                </Upload>
              </Modal>
            </>
          ) : (
            ''
          )}
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
