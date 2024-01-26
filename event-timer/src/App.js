import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <div>
        Showing Timer in this div

        <div>
          <div id="eventTimer">
            <h2>Event Timer</h2>
            <p id="eventTimerDisplay">00:30</p>
          </div>
        </div>

      </div>
    </div>
  );
}

React.useEffect(() => {
  timer();

  return () => {
    second
  }
}, [third])


React.useEffect(timer, [])

function timer(){
  var sec = 30;
  var timer = setInterval(function(){
      document.getElementById('eventTimerDisplay').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
}

export default App;
