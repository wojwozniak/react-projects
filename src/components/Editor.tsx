import './css.css';
import { useState } from 'react';

function Editor() {

  const [text, newText] = useState("");

  function handleChange(event: React.FormEvent<HTMLTextAreaElement>) {
    event.preventDefault();
    newText(event.currentTarget.value);
  }

  return (
    <textarea id="editor" onChange={(e) => handleChange(e)} value={text}></textarea>
  );
}

export default Editor;
