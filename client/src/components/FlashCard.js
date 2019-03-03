import React from 'react';
import CancelIcon from '../images/navCancel.svg';

export default function FlashCard() {
  return (
    <div className="flash">
      <div>Flash Message</div>
      <img className="cancel" src={CancelIcon} alt="Cancel Icon" />
    </div>
  );
}
