import { useReducer } from 'react';
import './css.css';
function App() {
  // Declaring possible Actions for reducer
  type Actions = 
  | "start" | "stop" | "session-increase" | "session-decrease" | "break-increase" | "break-decrease"

  // Declaring State type
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

  // Declaring initial state
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

  // Main reducer
  const reducer = (state:State, action: Actions) => {
    let newState: State = { ...state };
    switch (action) {
      case "start":
        newState.running = true;
        break;
      case "stop":
        newState.running = false;
        break;
      case "session-increase":
        newState.sessiontimer += 1;
        newState.session += 60;
        break;
     case "session-decrease":
        newState.sessiontimer -= 1;
        newState.session -= 60;
        break;
      case "break-increase":
        newState.breaktimer += 1;
        newState.break += 60;
        break;
      case "break-decrease":
        newState.breaktimer -= 1;
        newState.break -= 60;
        break; 
      default:
        throw new Error();
    }
    return newState;
  }

  // Reducer declaration, calling reducer function and initialState
  const [state, dispatch] = useReducer(reducer, initialState);

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
      <a id="start" className="startreset" onClick={handleStartStop}>{ state.startstop }</a>
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
      <a id="reset" className="startreset"><span>Reset</span></a>
    </div> 
  );
}

export default App;
