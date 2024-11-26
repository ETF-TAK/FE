import React, { useState } from 'react';
import './style.css';

export default function CategoryTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const categoryList = ['성장', '레버리지', '배당', '금', '한국', '미국'];

  return (
    <>
      <div className="category-tabs-wrapper">
        {categoryList.map((category, index) => {
          return (
            <div
              className={`category-tabs-item ${selectedTab === index ? 'active' : ''}`}
              onClick={() => {
                setSelectedTab(index);
              }}
            >
              {category}
            </div>
          );
        })}
      </div>
    </>
  );
}
