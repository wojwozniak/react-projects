import React, { useEffect } from 'react';
import './App.css';

// Declarations of props type
type ButtonProps = {
    text: string;
    url: string;
    id: string;
    passText: Function;
    clicked: string;
    play: number;
}

// Component declaration
const Button: React.FunctionComponent<ButtonProps> = ({ text, url, id, passText, clicked, play }) => {

    // Creating audio file
    const audio = new Audio(url);

    // Handling click of button, then passing text to parent to display it on screen
    const handleClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
        audio.play();
        passText(id);
    }

    // Dealing with keydown events, updated with play variable (so it doesn't break after clicking same button twice)
    useEffect(() => {
        if (clicked === text) {
            handleClick();
        }
    }, [play]);

    // Rendering component
  return (
      <button className="drum-pad" id={id} onClick={handleClick}>{text}</button>
  );
}

export default Button;