import React from 'react';
import './style.css';
import CategoryTabs from '../../components/etf/categoryTabs/CategoryTabs';
import InvestCard from '../../components/invest/investCard/investCard';
import SelectedETF from '../../components/invest/selectedETF/SelectedETF';

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
          <div className="invest-selection-card-list">
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
            <InvestCard />
          </div>
        </div>

        {/* 오른쪽 : 선택한 etf 목록 */}
        <div className="invest-selected-container">
          <div className="invest-selected-header">
            <div className="invest-selected-header-title">원하는 ETF를 선택해주세요.</div>
            <div className="invest-selected-header-cnt">
              <div className="invest-selected-header-cnt-now">3</div>/4
            </div>
          </div>
          <div className="invest-selected-list">
            <SelectedETF />
            <SelectedETF />
            <SelectedETF />
            <SelectedETF />
          </div>
        </div>
      </div>
    </>
  );
}
