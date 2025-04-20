import React from 'react';

const Dice = ({ onRoll }) => {
  return (
    <div>
      <button onClick={onRoll}>Roll the Dice</button>
    </div>
  );
};

export default Dice;