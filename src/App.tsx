import './App.css';
import Button from './Button'

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
  { name: "nine", symbol: "9" },
];


const App:React.FunctionComponent = () => {
  return (
    <div id="app">
      <p id="brand">Vadowitz</p>
      <p id="brand-text">Electronic Calculator</p>
      <div id="screen">
        <p id="screen-display">0</p>
      </div>
      <div className="button-container">
        {buttons.map((button) => {
          return <Button key={button.name} name={button.name} symbol={button.symbol} />
        })}
      </div>
    </div>
  );
}

export default App;
