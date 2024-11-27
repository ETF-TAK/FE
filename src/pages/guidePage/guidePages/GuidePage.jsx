import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
import WordCard from "../../../components/word/WordCard"
import wordImg from "../../../assets/images/word/word_card1.svg";
import wordImg2 from "../../../assets/images/word/word_card2.svg";
import wordImg3 from "../../../assets/images/word/word_card3.svg";
import wordImg4 from "../../../assets/images/word/word_card4.svg";
import wordImg5 from "../../../assets/images/word/word_card5.svg";
import wordImg6 from "../../../assets/images/word/word_card6.svg";
import wordImg7 from "../../../assets/images/word/word_card7.svg";
import wordImg8 from "../../../assets/images/word/word_card8.svg";
import wordImg9 from "../../../assets/images/word/word_card9.svg";
import wordImg10 from "../../../assets/images/word/word_card10.svg";

//
export default function GuidePage() {
  const navigate = useNavigate();

  const wordCards = [
    { img: wordImg, num: 1, title: "ETF 소개" },
    { img: wordImg2, num: 2, title: "ETF 투자 방법" },
    { img: wordImg3, num: 3, title: "ETF NAV" },
    { img: wordImg4, num: 4, title: "LP(유동성공급자)" },
    { img: wordImg5, num: 5, title: "ETF 세금" },
    { img: wordImg6, num: 6, title: "ETF 상장폐지" },
    { img: wordImg7, num: 7, title: "(H)와 (UH)" },
    { img: wordImg8, num: 8, title: "현물 ETF" },
    { img: wordImg9, num: 9, title: "합성 ETF" },
    { img: wordImg10, num: 10, title: "레버리지 ETF" },
  ];

  const handleCardClick = (num) => {
    console.log(`Navigating to /guide/detail/${num}`);
    navigate(`/guide/detail/${num}`);
  };

  return (
    <div>
      <div className="etf-guide-title">ETF 투자 기초 가이드</div>
      <div className="grid-container">
        {wordCards.map(({ img, num, title }) => (
          <WordCard
            num={num}
            img={img}
            title={title}
            onClick={() => handleCardClick(num)}
          />
        ))}
      </div>
    </div>
  );
}
