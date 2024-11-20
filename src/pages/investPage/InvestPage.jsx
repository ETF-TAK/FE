import React from 'react';
import './style.css';
import CategoryTabs from '../../components/etf/CategoryTabs/CategoryTabs';

export default function InvestPage() {
  return (
    <>
      <div className="invest-page-container">
        {/* 왼쪽 : etf 선택 목록 */}
        <div className="invest-selection-container">
          {/* etf 선택 목록 타이틀 */}
          <div className="invest-selection-title">
            <div className="invest-selection-title-blue">과거로 돌아가</div>
            <div className="invest-selection-title-black">1년 전에 투자했다면?</div>
          </div>

          <CategoryTabs />
        </div>

        {/* 오른쪽 : 선택한 etf 목록 */}
        <div className="invest-selected-container"></div>
      </div>
    </>
  );
}
