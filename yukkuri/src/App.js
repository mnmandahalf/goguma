import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>yukkuri</h1>
        <p>
          <input type="text" placeholder="Type text here"/>
          <button onClick={()=>{}}>analyze</button>
        </p>
        <text>ここに結果</text>
      </header>
    </div>
  );
}

export default App;
