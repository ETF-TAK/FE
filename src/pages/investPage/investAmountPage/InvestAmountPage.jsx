import React from 'react';
import './style.css';
import ETFProfile from '../../../components/etf/etfProfile/ETFProfile';
import { useLocation } from 'react-router-dom';
import { Slider } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InvestAmountPage() {
  const location = useLocation();
  const { selectedETFList } = location.state || {};
  const [amount, setAmount] = useState(0);

  return (
    <div className="invest-amount-wrapper">
      <div className="invest-amount-title">얼마를 투자하시겠어요?</div>
      <div className="invest-amount-sub-title">투자하는 금액에 따라 받는 수익금이 달라져요</div>

      <div className="invest-amount-box">
        <div className="invest-amount-box-etf-list">
          {selectedETFList && selectedETFList.length > 0 ? (
            selectedETFList.map((item) => <ETFProfile etfData={item} size="40px" fontsize="12px" />)
          ) : (
            <div>선택된 ETF가 없습니다.</div>
          )}
        </div>

        <div className="invest-amount-box-money">{amount.toLocaleString()}원</div>

        <Slider
          defaultValue={0}
          aria-label="Disabled slider"
          valueLabelDisplay="auto"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          min={0}
          max={100000000}
          sx={{
            color: '#0249FF', // 슬라이더 색상
            width: 500, // 슬라이더 길이
            height: 12, // 슬라이더 높이
            '& .MuiSlider-thumb': {
              height: 24, // 핸들 크기
              width: 24,
              backgroundColor: '#fff', // 핸들 색상
            },

            '& .MuiSlider-rail': {
              opacity: 0.3,
              backgroundColor: '#ddd', // 트랙의 뒷배경 색상
            },
          }}
        />
        <div className="invest-amount-box-content">모든 ETF 상품에는 같은 금액이 적용돼요</div>
      </div>

      <Link to={'/invest/result'}>
        <button className="invest-amount-btn">투자하기</button>
      </Link>
    </div>
  );
}
