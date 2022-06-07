import './css.css';
import { useState, useEffect } from 'react';

// Declare type of prop that components gets from parent component
type EditorProps = {
  passData: Function;
}

const Editor: React.FunctionComponent<EditorProps> = ({passData}) => {

  // State
  const [text, newText] = useState("");

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
