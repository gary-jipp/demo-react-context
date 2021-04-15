import React from 'react';
import ReactDOM from 'react-dom';
import AuthProvider from './AuthProvider';
import './index.css';
import App from './App';

// check if user still logged in.

// Wrap entire app in AuthProvider so its also available to <App>
ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
