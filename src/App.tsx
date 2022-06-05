import { useEffect, useState, useCallback} from 'react'
import './App.css'

const App: React.FC = () => {
  // Get quote from API
  const fetchRequest = useCallback(async () => {
    const response = await fetch("https://zenquotes.io/api/random/");
    let data = await response.json();
    newQuote({ "q": data[0].q, "a": data[0].a });
    randomColour();
  }, []);

  // Generate Background colour 
  const randomColour = () => {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + a + "," + b + "," + c + ")";
    document.body.style.background = bgColor;
    document.body.style.color = bgColor;
  }
  
  // First load of the app
  useEffect(() => {
    fetchRequest();
    randomColour();
  }, []);

  // State with quote
  const [quote, newQuote] = useState({"q":"","a":""});

  // Render Quote box
    return (
      <div id="quote-box">
        <p id="text" className="text">{quote.q}</p>
        <div className="subdivision">
          <p id="author" className="text">~ {quote.a}</p>
          <div id="button-container" className="btn">
            <a id="tweet-quote" className="text" href="https://twitter.com/intent/tweet" target="_blank">Tweet</a>
            <button id="new-quote" className="btn text" onClick={fetchRequest}>New quote</button>
          </div>
        </div>
      </div>
    )
}

  export default App
