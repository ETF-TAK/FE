import React from 'react';
import KoreaIcon from '../../../assets/images/common/sectors/korea.png';
import './style.css';

export default function ETFProfile(props) {
  const { etfData, isSelected } = props;

  return (
    <div className="etf-profile-wrapper">
      <img className="etf-profile-img" src={KoreaIcon} alt="sector 아이콘" />
      <div className={`etf-profile-name ${isSelected ? 'selected' : ''}`}>{etfData.name}</div>
      <div className="etf-profile-company">{etfData.company}</div>
    </div>
  );
}
