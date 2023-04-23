import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Foot from './Foot';
import Head from './Head';

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