import React from 'react';
import './style.css';
import KoreaIcon from '../../../assets/images/common/sectors/korea.png';
import DeleteIcon from '../../../assets/images/icons/delete.png';

export default function SelectedETF() {
  return (
    <div className="selected-etf-wrapper">
      <div className="selected-etf-profile">
        <img className="selected-etf-img" src={KoreaIcon} />
        <div className="selected-etf-name">한중반도체(합성)</div>
        <div className="selected-etf-company">Kodex</div>
      </div>
      <img className="selected-etf-delete" src={DeleteIcon} />
    </div>
  );
}
