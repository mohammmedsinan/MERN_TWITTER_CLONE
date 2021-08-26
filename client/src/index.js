import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './ReduxConfig/Store';

ReactDOM.render(
  <Provider store={Store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
