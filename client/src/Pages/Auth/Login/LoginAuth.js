import React, { useState } from 'react';
import './style.css';
import { Card } from 'antd';
import { GoogleLogin } from 'react-google-login';
import { Button } from 'antd';
import { GooglePlusCircleFilled } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function LoginAuth() {
  const history = useHistory();
  const [loginData, setLoginData] = useState({ username: '', date: Date.now() });
  const GoogleOnSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    const data = { ...result, token };
    try {
      localStorage.setItem('profile', JSON.stringify(data));
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };
  const GoogleOnFailure = (err) => console.log(err);
  return (
    <div className="Container-Auth">
      <Card
        style={{
          width: '35vw',
          height: '35vh',
          border: 'solid 3px #1da1f2',
          borderRadius: '10px',
          boxShadow: 'inset 0px 0px 20px #000000',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <GoogleLogin
          clientId="808833697851-0qugmedqn8clrna8crspfjspr2ean279.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button
              style={{
                width: '15vw',
                height: '6vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              color="primary"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Google Sign In <GooglePlusCircleFilled style={{ fontSize: '30px' }} />
            </Button>
          )}
          onSuccess={GoogleOnSuccess}
          onFailure={GoogleOnFailure}
          cookiePolicy="single_host_origin"
        />
      </Card>
    </div>
  );
}

export default LoginAuth;
