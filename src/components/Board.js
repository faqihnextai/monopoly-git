import React, { useState } from 'react';
import Dice from './Dice';
import Message from './Message';
import '../styles/boardStyles.css';
import PopupThanks from './popups/PopupThanks';
import PopupInvite from './popups/PopupInvite';
import PopupLocation from './popups/PopupLocation';
import PopupPayment from './popups/PopupPayment';
import PopupSchedule from './popups/PopupSchedule';
import PopupGuestMessages from './popups/PopupGuestMessages';

const messages = [
  // Akad (1–4)
  "Save the date: June 15, 2025!",
  "Akad starts at 9:00 AM, don't be late!",
  "Reception follows right after the ceremony.",
  "Dress code: Traditional or Formal.",
  
  // Lokasi acara (5–8)
  "Ceremony: Central Park Garden Hall.",
  "Reception: The Grand Ballroom, 2nd floor.",
  "After-party: Rooftop Lounge, City Tower.",
  "Use Gate B for easier access.",
  
  // Donasi (9–12)
  "Want to give love? Here's how!",
  "Bank transfer: ABC Bank, Acc: 123456789",
  "Wishlist: Kitchen tools, Cozy sofa, Wall decor.",
  "Gift cards are welcome too! 😄",
  
  // Pesan pribadi (13–16)
  "Your presence is our greatest gift ❤️",
  "Thank you for sharing this joy with us!",
  "We’re excited to celebrate together!",
  "See you on our special day!",
  
  // Kotak tambahan (17–18)
  "We can’t wait to see you!",
  "Your love makes our day brighter!"
];

const Board = () => {
  const [activeBox, setActiveBox] = useState(null);
  const [position, setPosition] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleRoll = (totalDiceValue) => {
    const newPosition = (position + totalDiceValue) % 18;
    setPosition(newPosition);
    setActiveBox(newPosition); // <- ini nentuin kotak mana yang akan animasi terbuka
    setCurrentMessage(messages[Math.floor(newPosition / 4)]);
    setShowMessage(true);
  };
  
  const [popupType, setPopupType] = useState(null);

  const renderPopup = () => {
    switch (popupType) {
      case 1: return <PopupThanks onClose={() => setPopupType(null)} />;
      case 2: return <PopupInvite onClose={() => setPopupType(null)} />;
      case 3: return <PopupSchedule onClose={() => setPopupType(null)} />;
      case 4: return <PopupLocation onClose={() => setPopupType(null)} />;
      case 5: return <PopupPayment onClose={() => setPopupType(null)} />;
      case 6: return <PopupGuestMessages onClose={() => setPopupType(null)} />;
      default: return null;
    }
  };
  
  {renderPopup()}
  return (
    <div className="board-container">
      <div className="board">
        {/* Membuat 18 kotak */}
        {Array.from({ length: 18 }).map((_, index) => (
  <div
    key={index}
    className={`block block-${index + 1} ${activeBox === index ? 'active' : ''}`}
  >
      {/* TODO: Insert wedding-themed icon here */}
    <div className="icon">💍</div>
  </div>
))}

      </div>
      <Dice onRoll={handleRoll} />
      {showMessage && (
        <>
          <div className="overlay" onClick={() => setShowMessage(false)}></div>
          <div className="popup">
            <p>{currentMessage}</p>
            <button onClick={() => setShowMessage(false)}>Close</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
