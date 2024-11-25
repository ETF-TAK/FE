import React, { useState } from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import MbtiCard, { mbtiData } from "../../../components/common/test/mbtiCard/MbtiCard";
import CategoryCard from "../../../components/common/test/categoryCard/CategoryCard";
import Button from "../../../components/common/button/Button";
import { useEffect } from "react";
import ShinhanIcon from "../../../assets/images/common/shinhanLogo.png";

export default function TestResultPage() {
  const location = useLocation();
  const { answer } = location.state || { answers: 0 };

  const [mbtiResult, setMbtiResult] = useState([]);
  const naviagte = useNavigate();

  const mbtiCalculation = () => {
    const result = [];
    let new_answer = answer;

    if (answer > 100) {
      result.push(4); // 100 넘으면 한국
      new_answer = new_answer % 100;
    } else {
      result.push(3); // 100 안 넘으면 미국
    }

    if (new_answer >= 2 && new_answer <= 3) {
      // 안정추구 index 1
      result.push(1);
    } else if (new_answer >= 4 && new_answer <= 5) {
      // 위험중립 index 2
      result.push(2);
    } else if (new_answer >= 6 && new_answer <= 8) {
      // 공격투자 index 0
      result.push(0);
    }

    setMbtiResult(result);
  };

  useEffect(() => {
    mbtiCalculation();
  }, [answer]);

  return (
    <div className="test-result-page-container">
      <div className="test-result-page-title">ETF MBTI 테스트 결과 확인</div>
      <div className="test-result-page-sub-title">나의 ETF MBTI는?</div>
      <div className="test-result-page-mbti-card-wrapper">
        <MbtiCard index={mbtiResult[1]} />
        <MbtiCard index={mbtiResult[0]} />
      </div>
      <div className="test-result-page-mbti-text">
        {mbtiData[mbtiResult[0]] && mbtiData[mbtiResult[1]] ? (
          <>
            <span>{mbtiData[mbtiResult[1]].title}</span>, <span>{mbtiData[mbtiResult[0]].title}</span>
            &nbsp;성향을 가진 당신을 위한 ETF 추천
            <br />#<span>{mbtiData[mbtiResult[1]].categoryData[0]}</span> #
            <span>{mbtiData[mbtiResult[1]].categoryData[1]}</span> #
            <span>{mbtiData[mbtiResult[0]].categoryData[0]}</span> 카테고리를 확인해보세요
          </>
        ) : (
          <span>결과를 불러오는 중입니다...</span>
        )}
      </div>

      <div className="test-result-page-category-card-wrapper">
        {mbtiData[mbtiResult[1]] &&
        mbtiData[mbtiResult[1]].categoryIndex &&
        mbtiData[mbtiResult[0]] &&
        mbtiData[mbtiResult[0]].categoryIndex ? (
          <>
            <CategoryCard index={mbtiData[mbtiResult[1]].categoryIndex[0]} />
            <CategoryCard index={mbtiData[mbtiResult[1]].categoryIndex[1]} />
            <CategoryCard index={mbtiData[mbtiResult[0]].categoryIndex[0]} />
          </>
        ) : (
          <span>결과를 불러오는 중입니다...</span>
        )}
      </div>

      <Button
        text="ETF 확인하러가기"
        onClickFunction={() => {
          naviagte("/compare");
        }}
      />

      <div className="test-result-page-shinhan-button-wrapper">
        <Button
          text="신한 SOL 증권 앱 다운로드"
          onClickFunction={() => {
            window.open("https://play.google.com/store/apps/details?id=com.shinhaninvest.nsmts&hl=ko", "_blank");
            window.open(
              "https://apps.apple.com/kr/app/%EC%8B%A0%ED%95%9C-sol%EC%A6%9D%EA%B6%8C-%EB%8C%80%ED%91%9Cmts/id1168512940",
              "_blank",
            );
          }}
          imgSrc={ShinhanIcon}
          padding="12px"
        />
        <Button
          text="신한투자증권 홈페이지"
          onClickFunction={() => {
            window.open("https://www.shinhansec.com/", "_blank");
          }}
          imgSrc={ShinhanIcon}
          padding="12px"
        />
      </div>
    </div>
  );
}
