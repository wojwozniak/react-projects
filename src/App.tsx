import './css.css';
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

    // Calculate function
    const calculate = (num: string) => {
      let counted = eval(num);
      let output = Math.round((counted + Number.EPSILON) * 100) / 100;
      return output.toString();
    }

    // Making sure that user can't have just sign (that isn't minus) on the screen
    if (state === "0") {
      if (action === "plus" || action === "multiply" || action === "dot" || action === "divide") {
        return "0";
      }
    // Appending numbers to state, but avoiding zeros at the start
      helper = "";
    } else {
      helper = state;
    }

    // Function that checks if last character is a sign
    const isLastSign = () => {
      if (last !== "+" && last !== "*" && last !== "/" && last !== "." && last !== "-") {
        return false;
      }
      return true;
    }

    // Check if calculation won't throw an error
    const isCalculationElgible = () => {
      if (isLastSign()) {
        return false;
      }
      return true;
    }

    // Check if there is a dot in state that isn't followed by a sign (making sure that there is at least one number inbetween is taken care by main switch statement)
    const isDotPlacable = () => {
      // Check if given character is a sign or not
      const isAnySign = (x: string) => {
        if (x === "+" || x === "-" || x === "/" || x === "*" || x === ".") {
          return true;
        }
        return false;
      }

      // Same as above but excluding dots
      const isFunctionSign = (x: string) => {
        if (x === "+" || x === "-" || x === "/" || x === "*") {
          return true;
        }
        return false;
      }

      let number = true;
      let sign = true;

      for (let i = 0; i < state.length; i++) {
        if (state[i]==='.') {
          number = false;
          sign = false;
        } else if (isFunctionSign(state[i])) {
          sign = true;
        } else if (!isAnySign(state[i])) {
          number = true;
        }
      }
      if (number === true && sign === true && !isLastSign()) {
        return true;
      } else return false;
    }
 
    // Main reducer
    switch (action) {
      // Calculation
      case 'equals':
        if (isCalculationElgible()) {
          helper = state;
          newState = calculate(helper);
        } else {
          newState = state;
        }
        break;
      case 'square':
      // Square root uses same function as calculation (it calculates first)
        if (isCalculationElgible()) {
          helper = state;
          newState = calculate(Math.sqrt(parseInt(calculate(helper), 10)).toString());
        } else {
          newState = state;
        }
        break;
      // AC button resets calculator to default
      case 'AC':
        newState = "0";
        break;
      // Numbers are no problem, you can put then anywhere
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
        if (!isLastSign()) {
          newState = helper + "+";
        } else {
          newState = helper;
        }
        break;
      case 'multiply':
        if (!isLastSign()) {
          newState = helper + "*";
        } else {
          newState = helper;
        }
        break;
      case 'divide':
        if (!isLastSign()) {
          newState = helper + "/";
        } else {
          newState = helper;
        }
        break;
      // Minus are a bit more special - they can be the only sign or appear after other signs that are not a dot
      case "minus":
        if (last === '.' || (isLastSign() && (preLast === "+" || preLast === 
          "-" || preLast === "/" || preLast === "*" || preLast===undefined))) {
          newState = helper;
        }
        else {
          newState = helper + '-';
        } 
        break;
      // Dot are most tricky, we need to make sure that there won't be any sign directly after a dot and that there won't be two dots without any sign inbetween
      case "dot":
        if (isDotPlacable()) {
          newState = state + ".";
        } else {
          newState = state;
        }
        break;
      default:
        throw new Error();
    } // end of switch
    return newState;
  }

  // Main state of app
  const [state, dispatch] = useReducer(reducer, "0");
  
  // Receive data of button clicked and pass it to the reducer
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
