import React from 'react';

export default function FooterBarTemplate() {
  return (
    <div className="footer-container">
      <div className="current-pick-status">
        <div className="box-container">
          <div className="current-pick">
            Current Pick
          </div>
          <div className="pick-timer">
            01:30
          </div>
        </div>
      </div>
      <div className="player-scroll">
        1. Adrian Peterson    2. Aaron Rodgers    3. Dez
      </div>
    </div>
  );
}
