import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './index.css';

const root = document.getElementById('root');
const appRoot = ReactDOM.createRoot(root);

appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
