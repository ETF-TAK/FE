import React from "react";
import "./style.css";
// 카테고리 아이콘
import ReverageIcon from "../../../../assets/images/mbti/category/leverage.png";
import GrowthIcon from "../../../../assets/images/mbti/category/growth.png";
import DividendIcon from "../../../../assets/images/mbti/category/dividend.png";
import GoldIcon from "../../../../assets/images/mbti/category/gold.png";
import AmericanIcon from "../../../../assets/images/mbti/category/american.png";
import KoreanIcon from "../../../../assets/images/mbti/category/korean.png";

// 카테고리 데이터
export const categoryData = [
  {
    id: 1,
    title: "레버리지",
    content: "단기간에 빠르고\n높은 수익을 얻어요",
    imgSrc: ReverageIcon,
  },
  {
    id: 2,
    title: "성장",
    content: "미래의 높은 성장을 기대하며\n기술주에 투자해요",
    imgSrc: GrowthIcon,
  },
  {
    id: 3,
    title: "배당",
    content: "안정한 길을 택해\n꾸준한 수익을 얻어요",
    imgSrc: DividendIcon,
  },
  {
    id: 4,
    title: "금",
    content: "자산 분할 수단으로\n안전한 자산인 금에 투자해요",
    imgSrc: GoldIcon,
  },
  {
    id: 5,
    title: "미국",
    content: "세계 1위 경제대국\n미국 기업에 투자해요",
    imgSrc: AmericanIcon,
  },
  {
    id: 6,
    title: "한국",
    content: "국내의 다양한 기업의\n기술과 성장에 투자해요",
    imgSrc: KoreanIcon,
  },
];

export default function CategoryCard({ index }) {
  const category = categoryData[index] || categoryData[0];
  return (
    <div className="category-card-container">
      <div className="category-card-text">
        <div className="category-card-text-title">{category.title}</div>
        <div className="category-card-text-content">{category.content}</div>
      </div>
      <img className="category-card-img" src={category.imgSrc} />
    </div>
  );
}
