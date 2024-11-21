import React from 'react';
import './style.css';
import ETFProfile from '../../etf/etfProfile/ETFProfile';

export default function InvestCard(props) {
  const { etfData, selectedETFList, setSelectedETFList } = props;

  const handleCardClick = () => {
    setSelectedETFList((prevList) => {
      // 중복이 하나라도 있으면
      if (prevList.some((etf) => etf.id === etfData.id)) {
        return prevList.filter((etf) => etf.id !== etfData.id); // 해당 카드 제거
      } else {
        // 중복이 없는 경우
        if (prevList.length < 4) {
          // 4개 미만이면
          return [...prevList, etfData]; // 해당 카드 추가
        } else {
          // 4개 이상이면
          return prevList; // 추가 불가
        }
      }
    });
  };

  const isSelected = selectedETFList.some((etf) => etf.id === etfData.id);

  return (
    <div
      className={`invest-card-wrapper ${isSelected ? 'selected' : ''}`}
      onClick={() => {
        handleCardClick();
      }}
    >
      <ETFProfile etfData={etfData} isSelected={isSelected} />
    </div>
  );
}
