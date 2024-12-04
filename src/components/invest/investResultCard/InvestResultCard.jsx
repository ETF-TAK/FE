import React from "react";
import "./style.css";
import ETFProfile from "../../etf/etfProfile/ETFProfile";
import NullIcon from "../../../assets/images/icons/sol_sorry.png";

export default function InvestResultCard(props) {
  const { etf, textWidth } = props;
  return (
    <div className="invest-result-card-container">
      <ETFProfile etfData={etf} color="white" textWidth={textWidth} />
      <div className="invest-result-card-amount">
        {etf.profitAmount ? (
          <>{etf.profitAmount.toLocaleString()}원</>
        ) : (
          <>
            <img src={NullIcon} alt="null 이미지" className="invest-result-card-null-img" />
          </>
        )}
      </div>
      {etf.profitAmount ? (
        <div className={`invest-result-card-rate ${etf.positive ? "" : "blue"}`}>
          수익률 {etf.positive ? "+" : ""}
          {etf.profitAmount == 0 ? "0%" : <>{etf.profitRate}% </>}
        </div>
      ) : (
        <>1년 전 가격 정보가 없어요</>
      )}
    </div>
  );
}
