import React, { useRef, useState } from "react";
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
  console.log("data", location.state);

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="invest-result-wrapper">
      {data.etfResults[activeIdx].positive ? <ResultConfetti /> : <ResultRain />}

      <div className="invest-result-title">
        총 {data.totalProfit.toLocaleString()}원의 <br />
        수익금을 받았을거예요!
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
            <InvestResultCard etf={etf} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Link to={"/compare"} className="invest-result-compare-btn">
        ETF 비교하러가기
      </Link>
    </div>
  );
}
