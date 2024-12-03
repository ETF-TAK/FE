import React, { useState } from "react";
import "./style.css";

export default function CategoryTabs(props) {
  const { fontsize, setCategory } = props;
  const [selectedTab, setSelectedTab] = useState(0);

  const categoryList = ["성장", "레버리지", "배당", "금", "한국", "미국"];
  const categoryListEng = ["GROWTH", "LEVERAGE", "DIVIDEND", "GOLD", "KOREA", "US"];

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
