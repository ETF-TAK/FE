import React, { useEffect, useRef, useState } from "react";
import "./style.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import ETFProfile from "../../../components/etf/etfProfile/ETFProfile";
import { Link, useLocation } from "react-router-dom";
import ResultConfetti from "../../../components/invest/resultConfetti/ResultConfetti";
import ResultRain from "../../../components/invest/resultRain/ResultRain";
import InvestResultCard from "../../../components/invest/investResultCard/InvestResultCard";

export default function InvestResult() {
  const location = useLocation();
  const { data } = location.state || {};

  const [activeIdx, setActiveIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data && data.etfResults) {
      setIsLoading(false);
    }
  }, [data]);

  if (isLoading || !data || !data.etfResults) {
    return (
      <div className="loading-container">
        <p>로딩 중...</p>
      </div>
    );
  }

  const currentResult = data.etfResults[activeIdx];

  return (
    <div className="invest-result-wrapper">
      {currentResult && currentResult.positive ? <ResultConfetti /> : <ResultRain />}

      <div className="invest-result-title">
        {data.totalProfit != null ? (
          <>
            총 {data.totalProfit.toLocaleString()}원의 <br />
            수익금을 받았을거예요!
          </>
        ) : (
          <>1년 전 가격 정보가 없어요</>
        )}
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setActiveIdx(swiper.activeIndex);
        }}
      >
        {data.etfResults.map((etf) => (
          <SwiperSlide>
            <InvestResultCard etf={etf} textWidth="360px" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Link to={"/compare"} className="invest-result-compare-btn">
        ETF 비교하러가기
      </Link>
    </div>
  );
}
