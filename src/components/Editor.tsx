import './css.css';
import { useState, useEffect } from 'react';

// Declare type of prop that components gets from parent component
type EditorProps = {
  passData: Function;
}

const Editor: React.FunctionComponent<EditorProps> = ({ passData }) => {
  // Default text to show in editor
  const defaultState = `# HTML Markdown Editor
  You can add any links like this: https://youtu.be/dQw4w9WgXcQ.   
  You can albo make things **bold**, *italic* or even write blocks of code!

  ---
  
  ~~~
  
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
            
                 
  
  ~~~
  
  ---
  
  Block quotes are no problem either

  > Dorothy followed her through many of the beautiful rooms in her castle.
  >
  >> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

  1. Numbered list
  2. is a great way
  3. to show something
  4. step by step
  - Numbers aren't nessesary though
  
  ![Img](https://ih1.redbubble.net/image.1456184519.3847/flat,128x,075,f-pad,128x128,f8f8f8.jpg)   
  And this is your github readme after doing it using this editor
  `

  // State
  const [text, newText] = useState(defaultState);

  // Prevent default behaviour, then update state
  function handleChange(event: React.FormEvent<HTMLTextAreaElement>) {
    event.preventDefault();
    newText(event.currentTarget.value);
  }

  //After state updates pass it to parent
  useEffect(() => {
    passData(text);
  }, [text]);

  //Render textarea
  return (
    <textarea id="editor" onChange={(e) => handleChange(e)} value={text}></textarea>
  );
}

export default Editor;
