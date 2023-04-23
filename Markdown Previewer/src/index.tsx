import React from 'react';
import ReactDOM from 'react-dom/client';
import Top from './components/Top';
import Foot from './components/Foot';
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Top />
    <App />
    <Foot />
  </React.StrictMode>
);
