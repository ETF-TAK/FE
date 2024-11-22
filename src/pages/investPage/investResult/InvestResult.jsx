import React, { useRef, useState } from 'react';
import './style.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';
import ETFProfile from '../../../components/etf/etfProfile/ETFProfile';
import { Link } from 'react-router-dom';

export default function InvestResult() {
  const etfData = [
    {
      id: 1,
      name: '한중반도체(합성)',
      company: 'Kodex',
    },
    {
      id: 2,
      name: '미국 기술주 ETF',
      company: 'TIGER',
    },
    {
      id: 3,
      name: 'S&P 500 인버스',
      company: 'ARIRANG',
    },
    {
      id: 4,
      name: '한중반도체(합성)',
      company: 'Kodex',
    },
  ];

  return (
    <div className="invest-result-wrapper">
      <div className="invest-result-title">
        총 13,234,123원의 <br />
        수익금을 받았을거예요!
      </div>
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper">
        {etfData.map((etf) => (
          <SwiperSlide>
            <div className="invest-result-card-container">
              <ETFProfile etfData={etf} color="white" />
              <div className="invest-result-card-amount">3,234,123원</div>
              <div className="invest-result-card-rate">수익률 +48%</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Link to={'/compare'} className="invest-result-compare-btn">
        ETF 비교하러가기
      </Link>
    </div>
  );
}
