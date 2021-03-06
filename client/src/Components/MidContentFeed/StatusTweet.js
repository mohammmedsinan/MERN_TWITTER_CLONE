import { Avatar, Input, Upload, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { PostTheTweets, GetYourProfile, GitMeInfo } from '../../Api/index';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  FileImageOutlined,
  CalendarOutlined,
  SmileOutlined,
  OrderedListOutlined,
  FileGifOutlined,
} from '@ant-design/icons';

const { TextArea } = Input;
function StatusTweet() {
  const [Info, setInfo] = useState([]);
  const history = useHistory();
  const [data, setData] = useState(JSON.parse(localStorage.getItem('profile')));
  const [infos, setIfnos] = useState(useSelector((state) => state.GlobalReducer));
  const [tweetContent, setTweetContent] = useState({
    username: '',
    TweetText: '',
    Img: '',
    Avatar: '',
    RealName: '',
    Date: Date.now(),
  });

  useEffect(() => {
    setTweetContent({ ...tweetContent, Avatar: data.imageUrl, username: data.name });
  }, [tweetContent.username]);
  useEffect(() => {
    GetYourProfile(`${data.name}`)
      .then((e) => e.data)
      .then((e) => e.map((e) => setInfo(e)));
  }, []);
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
            setTweetContent({ ...tweetContent, Img: ew.target.result });
          };
        };
      });
    },
  };
  console.log(infos);

  return (
    <div style={{ padding: '14px 20px', display: 'flex', borderBottom: 'solid 1px #2f3336' }}>
      <div>
        {/* {infos &&
          infos.map((e) => {
            return (
              <Avatar
                src={e.Avatar}
                size="large"
                onClick={() => history.push(`/profile/${data.name}`)}
                style={{ cursor: 'pointer' }}
              />
            );
          })} */}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <TextArea
          autoSize={{ minRows: 1, maxRows: 17 }}
          placeholder="What's Happening"
          style={{
            backgroundColor: '#000',
            border: 'none',
            fontSize: '20px',
            height: '65px',
            color: 'white',
            boxShadow: 'none',
            marginLeft: '20px',
          }}
          value={tweetContent.TweetText}
          onChange={(e) => setTweetContent({ ...tweetContent, TweetText: e.target.value })}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div
            style={{
              fontSize: '20px',
              cursor: 'pointer',
              color: '#1da1f2',
              paddingTop: '30px',
              marginLeft: '20px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Upload {...propsUpload}>
              <Button
                icon={<FileImageOutlined style={{ margin: '0px 8px', fontSize: '20px' }} />}
                type="ghost"
                style={{ color: '#1da1f2', border: 'none' }}
              ></Button>
            </Upload>
            <FileGifOutlined style={{ margin: '0px 8px' }} />
            <OrderedListOutlined style={{ margin: '0px 8px' }} />
            <SmileOutlined style={{ margin: '0px 8px' }} />
            <CalendarOutlined style={{ margin: '0px 8px' }} />
          </div>
          <Button
            type="primary"
            style={{ fontSize: '15px', fontWeight: 'bold', borderRadius: '20px' }}
            disabled={!tweetContent ? true : false}
            size="large"
            onClick={() =>
              tweetContent.TweetText &&
              PostTheTweets(tweetContent).then(() => setTweetContent({ Img: '' }))
            }
          >
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StatusTweet;
