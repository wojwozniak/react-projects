import './App.css';
import Button from './Button'
import Screen from './Screen'
import { useReducer } from 'react';

const buttons = [
  { name: "AC", symbol: "AC" },
  { name: "equals", symbol: "=" },
  { name: "square", symbol: "√" },
  { name: "multiply", symbol: "*" },
  { name: "divide", symbol: "/" },
  { name: "plus", symbol: "+" },
  { name: "minus", symbol: "-" },
  { name: "dot", symbol: "." },
  { name: "zero", symbol: "0" },
  { name: "one", symbol: "1" },
  { name: "two", symbol: "2" },
  { name: "three", symbol: "3" },
  { name: "four", symbol: "4" },
  { name: "five", symbol: "5" },
  { name: "six", symbol: "6" },
  { name: "seven", symbol: "7" },
  { name: "eight", symbol: "8" },
  { name: "nine", symbol: "9" }
];


const App: React.FunctionComponent = () => {

  // Possible actions for reducer
  type action =
    | "AC" | "equals" | "square" | "multiply" | "divide" | "plus" | "minus" | "dot" | "zero" | "one" | "two" | "three" | "four" | "five" | "six" | "seven" | "eight" | "nine";
  
  const reducer = (state:string, action: action) => {
    // Helper variables
    let newState, helper;
    let last = state[state.length - 1];
    let preLast = state[state.length - 2];

    const calculate = (num: string) => {
      return eval(num).toPrecision(2).toString();
    }

    // Dealing with calculation first
    if (action === "equals") {
      helper = state;
      newState = calculate(helper);

    //Square root works same way as equals, just adding square rooting it after calculation;
    } else if (action === "square") {
      helper = state;
      newState = calculate(Math.sqrt(parseInt(calculate(helper), 10)).toString());
    // Making sure that user can't have just sign (that isn't minus) on the screen
    } else if ((action==="plus" || action==="multiply" || action==="dot" || action ==="divide")&&state==="0") {
      newState = "0";
    } else {
      // Appending numbers to state, but avoiding zeros at the start
      if (state === "0") {
        helper = "";
      } else {
        helper = state;
      }
      
      // Main reducer
      switch (action) {
        // AC button resets calculator to default
        case 'AC':
          newState = "0";
          break;
        // Numbers are no problem, can put then in anywhere
        case 'one':
          newState = helper+"1";
          break;
        case 'two':
          newState = helper+"2";
          break;
        case 'three':
          newState = helper+"3";
          break;
        case 'four':
          newState = helper+"4";
          break;
        case 'five':
          newState = helper+"5";
          break;
        case 'six':
          newState = helper+"6";
          break;
        case 'seven':
          newState = helper+"7";
          break;
        case 'eight':
          newState = helper+"8";
          break;
        case 'nine':
          newState = helper+"9";
          break;
        // All the calculations (except the subtraction) - we only need to check if last sign isn't a dot or sign
        case 'plus':
          if (last !== "+" && last !== "*" && last !== "/" && last !== "." && last !== "-") {
            newState = helper + "+";
          } else {
            newState = helper;
          }
          break;
        case 'multiply':
          if (last !== "+" && last !== "*" && last !== "/" && last !== "." && last !== "-") {
            newState = helper + "*";
          } else {
            newState = helper;
          }
          break;
        case 'divide':
          if (last !== "+" && last !== "*" && last !== "/" && last !== "." && last !== "-") {
            newState = helper + "/";
          } else {
            newState = helper;
          }
          break;
        // Minus are a bit more special - they can be the only sign or appear after other signs (except dots)
        case "minus":
          if (last === '.' || ((last === "+" || last === "-" || last === "*" || last === "/") && (preLast === "+" || preLast === 
            "-" || preLast === "/" || preLast === "*"))) {
            newState = helper;
          }
          else {
            newState = helper + '-';
          } 
          break;
        default:
          throw new Error();
      } // end of switch
    } // end of else
    return newState;
  }

  const [state, dispatch] = useReducer(reducer, "0");
  
  const getClicked = (data: action) => {
    dispatch(data);
  }
  return (
    <div id="app">
      <p id="brand">Vadowitz</p>
      <p id="brand-text">Electronic Calculator</p>
      <Screen display={state} />
      <div className="button-container">
        {buttons.map((button) => {
          return <Button key={button.name} name={button.name} passData={getClicked} symbol={button.symbol} />
        })}
      </div>
    </div>
  );
}

export default App;
