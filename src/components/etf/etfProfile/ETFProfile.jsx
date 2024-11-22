import React from 'react';
import KoreaIcon from '../../../assets/images/common/sectors/korea.png';
import './style.css';

export default function ETFProfile(props) {
  const { etfData, isSelected, size, fontsize, color } = props;

  return (
    <div className="etf-profile-wrapper">
      <img className="etf-profile-img" src={KoreaIcon} alt="sector 아이콘" style={{ width: size, height: size }} />
      <div className={`etf-profile-name ${isSelected ? 'selected' : ''}`} style={{ fontSize: fontsize, color: color }}>
        {etfData.name}
      </div>
      <div className="etf-profile-company" style={{ fontSize: fontsize }}>
        {etfData.company}
      </div>
    </div>
  );
}
