import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Head from './components/Head';
import Foot from './components/Foot';

const root = ReactDOM.createRoot(
  document.getElementById('drum-machine') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Head />
    <App />
    <Foot />
  </React.StrictMode>
);
