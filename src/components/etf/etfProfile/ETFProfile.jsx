import React from "react";

//섹터 이미지 import
import BatteryIcon from "../../../assets/images/sectors/circle/battery.png";
import ConsumerIcon from "../../../assets/images/sectors/circle/consumer.png";
import EnergyIcon from "../../../assets/images/sectors/circle/energy.png";
import EntertainmentIcon from "../../../assets/images/sectors/circle/entertainment.png";
import EsgIcon from "../../../assets/images/sectors/circle/esg.png";
import FinanceIcon from "../../../assets/images/sectors/circle/finance.png";
import GoldIcon from "../../../assets/images/sectors/circle/gold.png";
import HealthIcon from "../../../assets/images/sectors/circle/health.png";
import ItIcon from "../../../assets/images/sectors/circle/it.png";
import ReitsIcon from "../../../assets/images/sectors/circle/reits.png";
import SemiconductorIcon from "../../../assets/images/sectors/circle/semiconductor.png";
import ShipIcon from "../../../assets/images/sectors/circle/ship.png";
import Snp500Icon from "../../../assets/images/sectors/circle/snp500.png";
import SteelIcon from "../../../assets/images/sectors/circle/steel.png";
import TransportIcon from "../../../assets/images/sectors/circle/transport.png";
import DefaultIcon from "../../../assets/images/sectors/circle/default.png";

import KoreaIcon from "../../../assets/images/common/sectors/korea.png";
import "./style.css";

export default function ETFProfile(props) {
  const { etfData, isSelected, size, fontsize, color } = props;
  console.log(etfData.sector);

  let SectorIcon;
  switch (etfData.sector) {
    case "배터리":
      SectorIcon = BatteryIcon;
      break;
    case "소비재":
      SectorIcon = ConsumerIcon;
      break;
    case "에너지/화학":
      SectorIcon = EnergyIcon;
      break;
    case "엔터테인먼트":
      SectorIcon = EntertainmentIcon;
      break;
    case "ESG":
      SectorIcon = EsgIcon;
      break;
    case "금융":
      SectorIcon = FinanceIcon;
      break;
    case "금":
      SectorIcon = GoldIcon;
      break;
    case "바이오/헬스":
      SectorIcon = HealthIcon;
      break;
    case "IT":
      SectorIcon = ItIcon;
      break;
    case "리츠":
      SectorIcon = ReitsIcon;
      break;
    case "반도체":
      SectorIcon = SemiconductorIcon;
      break;
    case "조선":
      SectorIcon = ShipIcon;
      break;
    case "S&P 500":
      SectorIcon = Snp500Icon;
      break;
    case "철강":
      SectorIcon = SteelIcon;
      break;
    case "운송":
      SectorIcon = TransportIcon;
      break;
    default:
      SectorIcon = DefaultIcon;
  }

  return (
    <div className="etf-profile-wrapper">
      <img className="etf-profile-img" src={SectorIcon} alt="sector 아이콘" style={{ width: size, height: size }} />
      <div className={`etf-profile-name ${isSelected ? "selected" : ""}`} style={{ fontSize: fontsize, color: color }}>
        {etfData.name}
      </div>
      <div className="etf-profile-company" style={{ fontSize: fontsize }}>
        {etfData.company}
      </div>
    </div>
  );
}
