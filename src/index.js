import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css'
import App from './App';

axios.defaults.baseURL = `http://0.0.0.0:5454`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
