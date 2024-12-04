import React from "react";

//섹터 이미지 import
import "./style.css";
import SectorMapper from "../sectorMapper/SectorMapper";

export default function ETFProfile(props) {
  const { etfData, isSelected, size, fontsize, color, textWidth } = props;

  // sector icon
  const SectorIcon = SectorMapper[etfData.sector] || SectorMapper.default;

  return (
    <div className="etf-profile-wrapper">
      <img className="etf-profile-img" src={SectorIcon} alt="sector 아이콘" style={{ width: size, height: size }} />
      <div
        className={`etf-profile-name ${isSelected ? "selected" : ""}`}
        style={{ fontSize: fontsize, color: color, width: textWidth }}
      >
        {etfData.name}
      </div>
      <div className="etf-profile-company" style={{ fontSize: fontsize, width: textWidth }}>
        {etfData.company}
      </div>
    </div>
  );
}
