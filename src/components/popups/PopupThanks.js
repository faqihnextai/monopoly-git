// components/popups/PopupThanks.js
import React from 'react';
import '../../styles/boardStyles.css'; // Pastikan ini ditarik kalau CSS-nya di sana

const PopupThanks = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Ucapan Syukur & Terima Kasih</h2>
        <img src="/images/gambar-pengantin.jpg" alt="Pengantin" className="popup-image" />
        <p>Terima kasih telah hadir dan menjadi bagian dari hari bahagia kami.</p>
        <button className="close-btn" onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
};

export default PopupThanks;
