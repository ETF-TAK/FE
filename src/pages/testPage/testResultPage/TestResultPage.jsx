import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import MbtiCard from "../../../components/common/test/mbtiCard/MbtiCard";
import CategoryCard from "../../../components/common/test/categoryCard/CategoryCard";
import Button from "../../../components/common/button/Button";

export default function TestResultPage() {
  const location = useLocation();
  const { answers } = location.state || { answers: [] };
  console.log(location.state);

  return (
    <div className="test-result-page-container">
      <div className="test-result-page-title">ETF MBTI 테스트 결과 확인</div>
      <div className="test-result-page-sub-title">나의 ETF MBTI는?</div>
      <div className="test-result-page-mbti-card-wrapper">
        <MbtiCard index={1} />
        <MbtiCard index={4} />
      </div>
      <div className="test-result-page-mbti-text">
        <span>공격투자형</span>, <span>미국선호형</span> 성향을 가진 당신을 위한 ETF 추천
        <br />#<span>성장</span> #<span>레버리지</span> #<span>미국</span> 카테고리를 확인해보세요
      </div>

      <div className="test-result-page-category-card-wrapper">
        <CategoryCard index={1} />
        <CategoryCard index={2} />
        <CategoryCard index={4} />
      </div>

      <Button text="ETF 확인하러가기" />

      <div className="test-result-page-shinhan-button-wrapper">
        <Button text="신한 SOL 증권 앱 다운로드" />
        <Button text="신한투자증권 홈페이지" />
      </div>
    </div>
  );
}
