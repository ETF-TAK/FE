import React, { useState } from "react";
import { etfData } from "../lib/apis/data";
import ETFHeader from "../components/common/ETFHeader";
import ComponentList from "../components/common/ComponentList";
import DetailTable from "../components/common/DetailTable";
import ProductInfo from "../components/common/ProductInfo";

export default function DetailPage() {
  const [activeTab, setActiveTab] = useState("구성종목");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Pretendard, sans-serif" }}>
      {/* 상단 카드 */}
      <ETFHeader data={etfData} />

      {/* 탭 메뉴 */}
      <div style={{ display: "flex", marginTop: "20px", borderBottom: "2px solid #CCC" }}>
        <button
          style={{
            flex: 1,
            padding: "10px",
            border: "none",
            borderBottom: activeTab === "구성종목" ? "2px solid #0249FF" : "none",
            fontWeight: activeTab === "구성종목" ? "bold" : "normal",
          }}
          onClick={() => handleTabClick("구성종목")}
        >
          구성종목
        </button>
        <button
          style={{
            flex: 1,
            padding: "10px",
            border: "none",
            borderBottom: activeTab === "상품정보" ? "2px solid #0249FF" : "none",
            fontWeight: activeTab === "상품정보" ? "bold" : "normal",
          }}
          onClick={() => handleTabClick("상품정보")}
        >
          상품정보
        </button>
      </div>

      {/* 탭 내용 */}
      {activeTab === "구성종목" && (
        <div style={{ marginTop: "20px" }}>
          <ComponentList components={etfData.components} />
          <DetailTable details={etfData.details} />
        </div>
      )}
      {activeTab === "상품정보" && (
        <div style={{ marginTop: "20px" }}>
          <ProductInfo />
        </div>
      )}
    </div>
  );
}
