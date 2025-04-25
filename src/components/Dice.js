import React, { useState, useRef } from 'react';
import '../styles/boardStyles.css';

const Dice = ({ onRoll }) => {
  const [diceValues, setDiceValues] = useState([1, 1, 1]);
  const diceRefs = [useRef(null), useRef(null), useRef(null)];
  const audioRef = useRef(null);

  const handleRoll = () => {
    // Nilai acak untuk setiap dadu
    const randomValues = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
    const rollTimes = [1000, 2000, 3000]; // Durasi per dadu (2 detik per dadu)

    // Putar suara
    if (audioRef.current) {
      audioRef.current.volume = 1.0;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    // Fungsi animasi untuk setiap dadu
    diceRefs.forEach((ref, index) => {
      if (ref.current) {
        // Mulai putar
        ref.current.style.transform = 'rotate(360deg)';
        // Selesaikan animasi dan perbarui angka setelah waktu tertentu
        setTimeout(() => {
          ref.current.style.transform = 'rotate(0deg)';
          // Setelah animasi selesai, update nilai dadu
          setDiceValues(prev => {
            const newValues = [...prev];
            newValues[index] = randomValues[index];
            return newValues;
          });
        }, rollTimes[index]);
      }
    });

    // Hitung total dan kirimkan hasilnya ke Board setelah semua dadu selesai
    setTimeout(() => {
      const total = randomValues.reduce((sum, val) => sum + val, 0);
      onRoll(total); // Kirim total nilai ke Board
    }, 7000); // Tunggu hingga semua dadu selesai berputar
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }} className='dice-container'>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }} className='dice'>
        {diceValues.map((value, index) => (
          <img
            key={index}
            ref={diceRefs[index]}
            src={`/images/dice${value}.png`}
            alt={`Dice ${value}`}
            style={{ width: '80px', height: '80px', transition: 'transform 0.5s' }}
          />
        ))}
      </div>
      <button onClick={handleRoll} style={{ marginTop: '10px' }} className='roll-button'>
          Push
      </button>
      <audio ref={audioRef} src="/audio/dadu.mp3" preload="auto" />
    </div>
  );
};

export default Dice;
