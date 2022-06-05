import { useEffect, useState, useCallback, useRef } from 'react'
import './App.css'

const App: React.FC = () => {
  // Get quote from API
  const fetchRequest = useCallback(async () => {
    const url = "https://zenquotes.io/api/random/";
    const proxy = "https://cors-anywhere.herokuapp.com/"
    const response = await fetch(proxy + url);
    let data = await response.json();
    newQuote({ "q": data[0].q, "a": data[0].a });
    randomColour();
    setIntent(`https://twitter.com/intent/tweet?text=${data[0].q}`)
  }, []);

  // Generate Background colour 
  const randomColour = () => {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + a + "," + b + "," + c + ")";
    document.body.style.background = bgColor;
    document.body.style.color = bgColor;
    if (btn.current !== null) {
      btn.current.style.backgroundColor = bgColor;
    }
    if (tweet.current !== null) {
      tweet.current.style.color = bgColor;
    }
  }
    
  
  // First load of the app
  useEffect(() => {
    fetchRequest();
    randomColour();
  }, []);

  // State with quote
  const [quote, newQuote] = useState({ "q": "", "a": "" });
  const [intent, setIntent] = useState("https://twitter.com/intent/tweet");
  
  // Button and tweet color reference
  const btn = useRef<HTMLButtonElement>(null);
  const tweet = useRef<HTMLAnchorElement>(null);

  // Render Quote box
  return (
      <div id="wrap">
        <div id="quote-box">
          <p id="text" className="text">{quote.q}</p>
          <div className="subdivision">
            <p id="author" className="text">~ {quote.a}</p>
            <div id="button-container" className="btn">
              <a id="tweet-quote" className="text" href={intent} ref = { tweet } target="_blank">Tweet</a>
              <button id="new-quote" className="btn text" onClick={fetchRequest} ref = {btn}>New quote</button>
            </div>
          </div>
      </div>
      <p id="subtitle">Made by <a href="https://twitter.com/woj_wozniak" target="_blank">woj.wozniak</a> for freecodecamp.org course</p>
    <p id="more"><a href="https://wojwozniak.github.io/">More projects</a></p>
    <p id="credits">Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a></p>
      </div>
    )
}

  export default App