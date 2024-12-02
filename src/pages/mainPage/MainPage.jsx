import React, { useEffect } from "react";
import "./style.css";

export default function MainPage() {
  // 페이지 로드 시, 스크롤 내리기
  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, []);

  return (
    <div className="main-container">
      <video className="main-video-background" autoPlay loop muted>
        <source src="/video_fall.mp4" type="video/mp4" />
      </video>

      <div className="main-overlay-text">
        <h3 className="main-overlay-text-sub">ETF, 이제 쉽게 비교하세요</h3>
        <h1>ETF TAK</h1>
        <div className="main-overlay-button-wrapper">
          <button className="main-overlay-button">1년 전에 투자했다면?</button>
          <button className="main-overlay-button">ETF 비교하러 가기</button>
        </div>
      </div>
    </div>
  );
}
