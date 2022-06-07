import React from 'react';
import ReactDOM from 'react-dom/client';
import Top from './components/Top';
import Foot from './components/Foot';
import Editor from './components/Editor';
import Preview from './components/Preview';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Top />
    <div id="main">
      <Editor />
      <Preview />
    </div>
    <Foot />
  </React.StrictMode>
);
