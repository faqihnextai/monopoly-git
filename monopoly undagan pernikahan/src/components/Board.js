import React, { useState } from 'react';
import Dice from './Dice';
import Message from './Message';

const messages = [
  "You're invited to our wedding on [date]!",
  "Location: [venue details]",
  "Donation info: [bank transfer details]",
  "A personal message to our guests: Thank you for being part of our special day!"
];

const Board = () => {
  const [position, setPosition] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleRoll = () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1; // Roll a dice (1-6)
    const newPosition = (position + diceRoll) % 16; // Move through 16 positions
    setPosition(newPosition);
    setCurrentMessage(messages[Math.floor(newPosition / 4)]); // Get message based on block
    setShowMessage(true);
  };

  return (
    <div>
      <Dice onRoll={handleRoll} />
      {showMessage && <Message text={currentMessage} />}
      <div className="board">
        {/* TODO: insert image here for the Monopoly board */}
        <p>Current Position: {position + 1}</p>
      </div>
    </div>
  );
};

export default Board;