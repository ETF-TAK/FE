import React from 'react';
import './style.css';
import ETFProfile from '../../etf/etfProfile/ETFProfile';

export default function InvestResultCard(props) {
  const { etf } = props;
  return (
    <div className="invest-result-card-container">
      <ETFProfile etfData={etf} color="white" />
      <div className="invest-result-card-amount">{etf.profitAmount.toLocaleString()}원</div>
      <div className={`invest-result-card-rate ${etf.isPositive ? '' : 'blue'}`}>
        수익률 {etf.isPositive ? '+' : '-'}
        {etf.profitRate}%
      </div>
    </div>
  );
}
