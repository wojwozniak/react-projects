import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';
import Switch from './Switch';

// # Main drum machine component

// Sounds array
const sounds1 = [
  {
    keyCode: 0,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 1,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 2,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 3,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 4,
    keyTrigger: 'S',
    id: 'Clap',
    url:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 5,
    keyTrigger: 'D',
     id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 6,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 7,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 8,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

// Alternative sound array
const sounds2 = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

//Default chosen sounds to sounds1
let sounds = sounds1;

// Component declaration
const App: React.FunctionComponent = () => {

  // State for display
  const [display, setDisplay] = useState("Now playing");
  
  // State for button clicked (keyboard)
  const [clicked, setClicked] = useState("");

  // State allowing to press same key twice and keep playing music
  const [play, forcePlay] = useState(0);

  // Setting display after clicking button
  const getClicked = (data: string) => {
    setDisplay(data);
  }

  // Change music set
  const handleChange = (set: string) => {
    setDisplay(set);
    if (sounds === sounds1) {
      sounds = sounds2;
    } else {
      sounds = sounds1;
    }
  }

  // Handling key pressing
  const handleKeyPress = (e: React.KeyboardEvent) => {
    let output = sounds.filter((sound) => {
      if (sound.keyTrigger === e.key.toUpperCase()) {
        return sound.keyTrigger;
      }
    });
    setClicked(output[0].keyTrigger);
    setDisplay(output[0].id);
    forcePlay(play+1);
  }

  // Rendering drums
  return (
    <>
      <div id="drums" onKeyDown={(e) => handleKeyPress(e)}>
      {sounds.map((sound) => {
        return <Button play={play} key={sound.keyCode} id={sound.id} url={sound.url} text={sound.keyTrigger} passText={getClicked} clicked = { clicked } />;
      })}
      </div>
      <Display text={display} />
      <Switch switcher={ handleChange }/>
    </>
  );
}

export default App;
