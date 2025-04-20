import React, { useState, useRef, useEffect } from 'react';
import Board from './components/Board';
import themeSong from './data/lets-get-rich-theme.mp3';
import './styles.css';
import './App.css';
function App() {
  const audioRef = useRef(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.01; // Nilai dari 0.0 (paling pelan) sampai 1.0 (paling keras)
    }
  }, []);
  return (
    <div className="App">
      <p1>Monopoly Wedding Invitation</p1>
      <Board />
      <audio ref={audioRef} src={themeSong} autoPlay loop />
    </div>
  );
}
export default App;
