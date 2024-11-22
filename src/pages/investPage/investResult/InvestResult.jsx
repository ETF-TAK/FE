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
import ResultConfetti from '../../../components/invest/resultConfetti/ResultConfetti';
import ResultRain from '../../../components/invest/resultRain/ResultRain';
import InvestResultCard from '../../../components/invest/investResultCard/InvestResultCard';

export default function InvestResult() {
  const etfData = [
    {
      id: 1,
      name: '한중반도체(합성)',
      company: 'Kodex',
      profitAmount: 3241223,
      profitRate: 10.0,
      isPositive: true,
    },
    {
      id: 2,
      name: '미국 기술주 ETF',
      company: 'TIGER',
      profitAmount: 1001230,
      profitRate: 11.0,
      isPositive: false,
    },
    {
      id: 3,
      name: 'S&P 500 인버스',
      company: 'ARIRANG',
      profitAmount: 10234500,
      profitRate: 23.0,
      isPositive: true,
    },
    {
      id: 4,
      name: '한중반도체(합성)',
      company: 'Kodex',
      profitAmount: 10011,
      profitRate: 78.0,
      isPositive: false,
    },
  ];
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="invest-result-wrapper">
      {etfData[activeIdx].isPositive ? <ResultConfetti /> : <ResultRain />}

      <div className="invest-result-title">
        총 13,234,123원의 <br />
        수익금을 받았을거예요!
      </div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setActiveIdx(swiper.activeIndex);
        }}
      >
        {etfData.map((etf) => (
          <SwiperSlide>
            <InvestResultCard etf={etf} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Link to={'/compare'} className="invest-result-compare-btn">
        ETF 비교하러가기
      </Link>
    </div>
  );
}
