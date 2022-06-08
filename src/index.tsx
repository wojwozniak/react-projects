import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Head from './Head';
import Foot from './Foot';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Head />
    <App />
    <Foot />
  </React.StrictMode>
);