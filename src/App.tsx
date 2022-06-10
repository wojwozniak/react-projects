import React from 'react';
import './css.css';

function App() {
  return (
    <div id="wrapper">
      <div id="clock" className="timer">25:00</div>
      <p id="label" className="timer">Session</p>
      <p><a id="start">Start</a></p>
      <div id="picker-wrap">
        <div id="session" className="picker">
          <button id="session-plus" className="btn"><span>+</span></button>
          <p id="session-timer" className="show">25</p>
          <button id="session-minus" className="btn"><span>-</span></button>
        </div>
        <div id="break" className="picker">
          <button id="break-plus" className="btn"><span>+</span></button>
          <p id="break-timer" className="show">5</p>
          <button id="break-minus" className="btn"><span>-</span></button>
        </div>
      </div>
    </div>
  );
}

export default App;
