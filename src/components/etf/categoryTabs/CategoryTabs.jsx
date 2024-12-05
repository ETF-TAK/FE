import React, { useState } from "react";
import "./style.css";

export default function CategoryTabs(props) {
  const { fontsize, setCategory, filterValue } = props;

  const categoryList = ["금", "레버리지", "배당", "성장", "한국", "미국"];
  const categoryListEng = ["GOLD", "LEVERAGE", "DIVIDEND", "GROWTH", "KOREA", "US"];

  const initialIndex = categoryListEng.indexOf(filterValue);
  const [selectedTab, setSelectedTab] = useState(initialIndex >= 0 ? initialIndex : 0);

  return (
    <>
      <div className="category-tabs-wrapper">
        {categoryList.map((category, index) => {
          return (
            <div
              className={`category-tabs-item ${selectedTab === index ? "active" : ""}`}
              onClick={() => {
                setSelectedTab(index);
                setCategory(categoryListEng[index]);
              }}
              style={{ fontSize: fontsize }}
            >
              {category}
            </div>
          );
        })}
      </div>
    </>
  );
}
