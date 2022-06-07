import React from 'react';
import './App.css';

type ButtonProps = {
    text: string;
    url: string;
    id: string;
    passText: Function;
}

const Button: React.FunctionComponent<ButtonProps> = ({ text, url, id, passText }) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget);
        const audio = new Audio(url);
        audio.play();
        passText(id);
    }

  return (
      <button className="drum-pad" id={id} onClick={handleClick}>{text}</button>
  );
}

export default Button;