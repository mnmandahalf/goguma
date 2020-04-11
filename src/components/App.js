import React from 'react';
import './App.css';
import logo from '../logo.png';
import { Form } from './Form.js';
import { AnalysisResultArea } from './AnalysisResultArea.js';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <AnalysisResultArea />
      </header>
    </div>
  );
}

export default App;
