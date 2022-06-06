import React from 'react';
import ReactDOM from 'react-dom/client';
import Top from './components/Top';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Foot from './components/Foot';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Top />
    <Editor />
    <Preview />
    <Foot />
  </React.StrictMode>
);
