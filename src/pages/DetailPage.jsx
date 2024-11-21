import React, { useState } from "react";
import { etfData } from "../lib/apis/data";
import ETFHeader from "../components/common/ETFHeader";
import DetailTable from "../components/common/DetailTable";
import ProductInfo from "../components/common/ProductInfo";
import WeightedTreemap from "../components/common/WeightedTreemap";

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
            fontSize: "30px",
            position: "relative", // 언더바 위치를 위한 상대 위치 지정
            fontWeight: activeTab === "구성종목" ? "600" : "normal",
          }}
          onClick={() => handleTabClick("구성종목")}
        >
          구성종목
          {activeTab === "구성종목" && (
            <span
              style={{
                position: "absolute",
                bottom: "0", // 버튼 아래쪽에 위치
                left: "50%", // 버튼의 중앙으로 이동
                transform: "translateX(-50%)", // 중앙 정렬
                width: "30%", // 언더바의 길이
                height: "3px", // 언더바 두께
                backgroundColor: "#0249FF", // 언더바 색상
              }}
            ></span>
          )}
        </button>
        <button
          style={{
            flex: 1,
            padding: "10px",
            border: "none",
            fontSize: "30px",
            position: "relative", // 언더바 위치를 위한 상대 위치 지정
            fontWeight: activeTab === "상품정보" ? "600" : "normal",
          }}
          onClick={() => handleTabClick("상품정보")}
        >
          상품정보
          {activeTab === "상품정보" && (
            <span
              style={{
                position: "absolute",
                bottom: "0", // 버튼 아래쪽에 위치
                left: "50%", // 버튼의 중앙으로 이동
                transform: "translateX(-50%)", // 중앙 정렬
                width: "30%", // 언더바의 길이
                height: "3px", // 언더바 두께
                backgroundColor: "#0249FF", // 언더바 색상
              }}
            ></span>
          )}
        </button>
      </div>

      {/* 탭 내용 */}
      {activeTab === "구성종목" && (
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ fontSize: "30px", fontWeight: "500", marginBottom: "64px", marginTop: "64px" }}>
            구성종목(비율)
          </h2>
          <WeightedTreemap data={etfData} />
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
