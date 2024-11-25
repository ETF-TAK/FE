import React from "react";
import "./style.css";
import AggressiveImg from "../../../../assets/images/mbti/aggressive.png";
import StableImg from "../../../../assets/images/mbti/stable.png";
import NeutralImg from "../../../../assets/images/mbti/neutral.png";
import AmericanImg from "../../../../assets/images/mbti/american.png";
import KoreanImg from "../../../../assets/images/mbti/korean.png";
import { categoryData } from "../categoryCard/CategoryCard";

export const mbtiData = [
  {
    id: 1,
    title: "공격투자형",
    content: "단기적인 배팅을 통해 수익을 추구하고 싶어요",
    imgSrc: AggressiveImg,
    bgColor: "#FB6D52",
    categoryData: [categoryData[0].title, categoryData[1].title],
  },
  {
    id: 2,
    title: "안정추구형",
    content: "안정된 자산에 투자를 선호하고 싶어요",
    imgSrc: StableImg,
    bgColor: "#A0D369",
    categoryData: [categoryData[2].title, categoryData[3].title],
  },

  {
    id: 3,
    title: "위험중립형",
    content: "위험을 크게 감수하지 않는 투자를 하고 싶어요",
    imgSrc: NeutralImg,
    bgColor: "#FFCE55",
    categoryData: [categoryData[1].title, categoryData[2].title],
  },
  {
    id: 4,
    title: "미국 선호형",
    content: "애플, 엔비디아처럼 미국 기업에 투자하고 싶어요",
    imgSrc: AmericanImg,
    bgColor: "#AC92ED",
    categoryData: [categoryData[4].title],
  },
  {
    id: 5,
    title: "한국 선호형",
    content: "삼성, 현대와 같은 한국 기업에 투자하고 싶어요",
    imgSrc: KoreanImg,
    bgColor: "#5C9CEC",
    categoryData: [categoryData[5].title],
  },
];

export default function MbtiCard({ index }) {
  const mbti = mbtiData[index] || mbtiData[0];
  return (
    <div className="mbti-card-container" style={{ backgroundColor: mbti.bgColor }}>
      <div className="mbti-card-title">{mbti.title}</div>
      <div className="mbti-card-content">{mbti.content}</div>
      <img className="mbti-card-img" src={mbti.imgSrc} alt="mbti 이미지" />
    </div>
  );
}
