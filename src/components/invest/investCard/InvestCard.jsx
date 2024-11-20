import React from 'react';
import './style.css';
import ETFProfile from '../../etf/etfProfile/ETFProfile';

export default function InvestCard() {
  return (
    <div className="invest-card-wrapper">
      <ETFProfile />
    </div>
  );
}
