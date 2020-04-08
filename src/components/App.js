import React from 'react';
import './App.css';
import logo from '../logo.png';
import { Form } from './Form.js';
import { AnalysisResultArea } from './AnalysisResultArea.js';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>yukkuri</h1>
        <Form />
        <AnalysisResultArea />
      </header>
    </div>
  );
}

export default App;
