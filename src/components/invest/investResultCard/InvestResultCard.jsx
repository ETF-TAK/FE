import React from "react";
import "./style.css";
import ETFProfile from "../../etf/etfProfile/ETFProfile";

export default function InvestResultCard(props) {
  const { etf, textWidth } = props;
  return (
    <div className="invest-result-card-container">
      <ETFProfile etfData={etf} color="white" textWidth={textWidth} />
      <div className="invest-result-card-amount">{etf.profitAmount.toLocaleString()}원</div>
      <div className={`invest-result-card-rate ${etf.positive ? "" : "blue"}`}>
        수익률 {etf.positive ? "+" : ""}
        {etf.profitRate}%
      </div>
    </div>
  );
}
