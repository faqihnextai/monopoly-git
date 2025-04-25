import React, { useState, useRef, useEffect } from 'react';
import Board from './components/Board';
import themeSong from './lets-get-rich-theme.mp3';
import './styles.css';
import './App.css';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Set volume audio
    if (audioRef.current) {
      audioRef.current.volume = 0.01;
    }

    // Trigger fullscreen saat user klik pertama
    const handleUserInteraction = () => {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    };

    document.addEventListener('click', handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <div className="App">
      <p1>.</p1>
      <Board />
      <audio ref={audioRef} src={themeSong} autoPlay loop />
    </div>
  );
}

export default App;
