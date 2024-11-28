import React from "react";
import "./style.css";
import deleteIcon from "../../../assets/images/icons/delete.png";
import GoldIcon from "../../../assets/images/sectors/gold.png";
import Logo from "../.././../assets/images/common/logo.png";

export default function CompareCard(props) {
  const { etf, index, handleRemoveEtf } = props;
  return (
    <div className="selected-compare-card">
      <img src={GoldIcon} className="selected-compare-card-img" alt="섹터 이미지" />
      <div className="selected-compare-card-name">{etf.name}</div>
      <div className="selected-compare-card-content-wrapper">
        <div className="selected-compare-card-content-title">현재가</div>
        <div className="selected-compare-card-content-value">15,800원</div>
      </div>

      <div className="selected-compare-card-content-wrapper">
        <div className="selected-compare-card-content-title">수수료</div>
        <div className="selected-compare-card-content-value">0.13%</div>
      </div>

      <img src={Logo} className="selected-compare-card-logo" alt="로고 이미지" />
      <img src={deleteIcon} onClick={() => handleRemoveEtf(index)} className="selected-compare-card-delete-icon"></img>
    </div>
  );
}
