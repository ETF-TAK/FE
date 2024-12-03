import React from "react";
import "./style.css";
import KoreaIcon from "../../../assets/images/common/sectors/korea.png";
import DeleteIcon from "../../../assets/images/icons/delete.png";

export default function SelectedETF(props) {
  const { etf, setSelectedETFList } = props;

  // 선택한 ETF가 없다면
  if (!etf) {
    return null;
  }

  return (
    <div className="selected-etf-wrapper">
      <div className="selected-etf-profile">
        <img className="selected-etf-img" src={KoreaIcon} />
        <div className="selected-etf-name">
          <span>{etf.name}</span>
        </div>
        <div className="selected-etf-company">
          <span>{etf.company}</span>
        </div>
      </div>
      <img
        className="selected-etf-delete"
        alt="삭제 이미지"
        src={DeleteIcon}
        onClick={() => {
          setSelectedETFList((prevList) => {
            return prevList.filter((item) => item.id !== etf.id);
          });
        }}
      />
    </div>
  );
}
