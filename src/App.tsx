import { useReducer, useEffect } from 'react';
import './css.css';
function App() {
  // Declaring possible Actions for reducer
  type Actions =
    | "start" | "stop" | "session-increase" | "session-decrease" | "break-increase" | "break-decrease" | "reset" | "clockdown"

  // Declaring State type
  type State = {
    clock: string,
    label: string,
    startstop: string,
    running: boolean,
    sessiontimer: number,
    breaktimer: number,
    remaining: number
  }

  // Declaring initial state
  const initialState:State = {
    clock: "25:00",
    label: "Session",
    startstop: "Start",
    running: false,
    sessiontimer: 25,
    breaktimer: 5,
    remaining: 1500
  };
  
  // Function handling clock update
  const handleClockUpdate = (input: number) => {
    let a = Math.floor(input / 60).toString();
    if (a.length === 1) {
      a = "0" + a;
    }
    let b = (input % 60).toString();
    if (b.length === 1) {
      b = "0" + b;
    }
    let output = `${a}:${b}`;
    return output;
  }
  
  // Main reducer
  const reducer = (state:State, action: Actions) => {
    let newState: State = { ...state };
    switch (action) {
      case "clockdown":
        if (newState.remaining > 1) {
          newState.remaining = state.remaining - 1;
          newState.clock = handleClockUpdate(newState.remaining);
        } else {
          // else fires when clock reaches 0, so change of mode is needed
          if (newState.label === "Session") {
            newState.label = "Break";
            newState.remaining = state.breaktimer * 60;
            newState.clock = handleClockUpdate(newState.remaining);
          } else {
            newState.label = "Session";
            newState.remaining = state.sessiontimer * 60;
            newState.clock = handleClockUpdate(newState.remaining);
          }
        }
        break;
      case "start":
        newState.running = true;
        newState.startstop = "Stop";
        break;
      case "stop":
        newState.running = false;
        newState.startstop = "Start";
        break;
      case "reset":
        newState.running = false;
        newState.label = "Session";
        newState.startstop = "Start";
        break;
      case "session-increase":
        newState.sessiontimer += 1;
        if (state.label === "Session") {
          newState.remaining += 60;
          newState.clock = handleClockUpdate(newState.remaining);
        }
        break;
      case "session-decrease":
        if (state.sessiontimer >= 2) {
          newState.sessiontimer -= 1;
          if (state.label === "Session") {
            newState.remaining -= 60;
            newState.clock = handleClockUpdate(newState.remaining);
          }
        }
        break;
      case "break-increase":
        newState.breaktimer += 1;
        if (state.label === "Break") {
          newState.remaining += 60;
          newState.clock = handleClockUpdate(newState.remaining);
        }
        break;
      case "break-decrease":
        if (state.breaktimer >= 2) {
          newState.breaktimer -= 1;
          if (state.label === "Break") {
            newState.remaining -= 60;
            newState.clock = handleClockUpdate(newState.remaining);
          }
        }
        break; 
      default:
        throw new Error();
    }
    return newState;
  }

  // Reducer declaration, calling reducer function and initialState
  const [state, dispatch] = useReducer(reducer, initialState);

  // If clock is running dispatch clockdown action (every second -1 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      if (state.running === true) {
        dispatch("clockdown");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [state]);

  // Start/stop button handler
  const handleStartStop = () => {
    if (!state.running) {
      dispatch("start");
    } else {
      dispatch("stop");
    }
  }
    
  // Handle four main setting buttons
  const handleBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (e.currentTarget.id) {
      case "session-plus":
        dispatch("session-increase");
        break;
      case "session-minus":
        dispatch("session-decrease");
        break;
      case "break-plus":
        dispatch("break-increase");
        break;
      case "break-minus":
        dispatch("break-decrease");
        break;
      default:
        throw new Error();
    }
  }
  
  // Render function
  return (
    <div id="wrapper">
      <div id="clock" className="timer"><p>{state.clock}</p></div>
      <div id="buttonwrap">
        <a id="start" className="startreset" onClick={handleStartStop}>{state.startstop}</a>
        <a id="reset" className="startreset" onClick = {()=> dispatch("reset") }>Reset</a>
      </div>
      <div id="picker-label-wrap">
        <p id="label" className="timer">{state.label}</p>
        <div id="picker-wrap">
          <div id="session-wrap">
            <div id="session" className="picker">
              <button id="session-plus" onClick={(e)=>handleBtn(e)}  className="btn"><span>+</span></button>
              <p id="session-timer" className="show">{ state.sessiontimer }</p>
              <button id="session-minus" onClick={(e)=>handleBtn(e)} className="btn"><span>-</span></button>
            </div> {/* End of session */}
            <p className="sublabel">Session Length</p>
          </div> {/* End of session-wrap */}
          <div id="break-wrap">
            <div id="break" className="picker">
              <button id="break-plus" onClick={(e)=>handleBtn(e)} className="btn"><span>+</span></button>
              <p id="break-timer" className="show">{ state.breaktimer }</p>
              <button id="break-minus" className="btn" onClick={(e)=>handleBtn(e)}><span>-</span></button>
            </div> {/* End of break */}
            <p className="sublabel">Break Length</p>
          </div> {/* End of break-wrap */}
        </div> {/* End of picker-wrap */}
      </div> {/* End of picker-label-wrap */}
    </div> 
  );
}

export default App;
