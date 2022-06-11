import React, { useReducer, useEffect } from 'react';
import './css.css';

function App() {

  type Actions = 
    | "start" | "stop" | "session-increase" | "session-decrease" | "break-increase" | "break-decrease"
  
  type State = {
    clock: string,
    label: string,
    startstop: string,
    running: boolean,
    sessiontimer: number,
    session: number,
    breaktimer: number,
    break: number
  }

  const initialState:State = {
    clock: "25:00",
    label: "Session",
    startstop: "Start",
    running: false,
    sessiontimer: 25,
    session: 1500,
    breaktimer: 5,
    break: 300
  };

  const reducer = (state: State, action: Actions) => {
    let newState = state;
    switch (action) {
      case "start":
        newState.running = true;
        break;
      case "stop":
        newState.running = false;
        break;
      default:
        throw new Error();
    }
    return newState;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleStartStop = () => {
    if (!state.running) {
      dispatch("start");
    } else {
      dispatch("stop");
    }
  }

  const handleBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
  }

 /* useEffect(() => {
    const interval = setInterval(() => {
      console.log("aaa");
    }, 1000);
  }, [state]); */

  return (
    <div id="wrapper">
      <div id="clock" className="timer">{ state.clock }</div>
      <p id="label" className="timer">{state.label}</p>
      <div id="picker-wrap">
        <div id="session-wrap">
          <div id="session" className="picker">
            <button id="session-plus" onClick={(e)=>handleBtn(e)}  className="btn"><span>+</span></button>
            <p id="session-timer" className="show">{ state.sessiontimer }</p>
            <button id="session-minus" onClick={(e)=>handleBtn(e)} className="btn"><span>-</span></button>
          </div>
          <p className="sublabel">Session</p>
        </div>
        <div id="break-wrap">
          <div id="break" className="picker">
            <button id="break-plus" onClick={(e)=>handleBtn(e)} className="btn"><span>+</span></button>
            <p id="break-timer" className="show">{ state.breaktimer }</p>
            <button id="break-minus" className="btn" onClick={(e)=>handleBtn(e)}><span>-</span></button>
          </div>
          <p className="sublabel">Break</p>
        </div>
      </div>
      <a id="start" onClick={handleStartStop}>{ state.startstop }</a>
    </div>
  );
}

export default App;
