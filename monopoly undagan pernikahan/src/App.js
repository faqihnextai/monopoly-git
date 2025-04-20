import React, { useState } from 'react';
import Board from './components/Board';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Monopoly Wedding Invitation</h1>
      <Board />
      {/* TODO: insert music here */}
    </div>
  );
}

export default App;