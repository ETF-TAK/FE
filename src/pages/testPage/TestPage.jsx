import React from "react";
import "./style.css";
import QuestionMarkIcon from "../../assets/images/mbti/questionMark.png";
import Button from "../../components/common/button/Button";

export default function TestPage() {
  return (
    <div className="test-page-container">
      <div className="test-page-title">ETF MBTI 테스트하기</div>
      <div className="test-page-sub-title">
        간단한 MBTI 테스트를 통해 투자 성향을 파악하고
        <br /> 성향에 맞는 투자 상품을 추천 받아요
      </div>
      <img className="test-page-icon" src={QuestionMarkIcon} alt="물음표 아이콘" />
      <Button text="테스트 시작하기" width="420px" fontsize="20px" />
    </div>
  );
}
