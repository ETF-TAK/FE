import React from 'react';
import KoreaIcon from '../../../assets/images/common/sectors/korea.png';
import './style.css';

export default function ETFProfile() {
  return (
    <div className="etf-profile-wrapper">
      <img className="etf-profile-img" src={KoreaIcon} />
      <div className="etf-profile-name">한중반도체(합성)</div>
      <div className="etf-profile-company">Kodex</div>
    </div>
  );
}
