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
    <div style={{ fontFamily: "Pretendard, sans-serif", backgroundColor: "#ffffff" }}>
      {/* 윗부분 박스 */}
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          background: "#FFFFFF",
          boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.26)",
          borderRadius: "32px",
          padding: "40px",
        }}
      >
        <ETFHeader data={etfData} />
      </div>

      {/* 탭 부분 박스 */}
      <div
        style={{
          width: "80%",
          margin: "40px auto 0",
          marginBottom: "40px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.26)",
          borderRadius: "32px",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingBottom: "40px",
        }}
      >
        {/* 탭 메뉴 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #CCC",
            marginBottom: "20px",
          }}
        >
          <button
            style={{
              flex: 1,
              padding: "15px",
              fontSize: "24px",
              fontWeight: activeTab === "구성종목" ? "600" : "400",
              color: activeTab === "구성종목" ? "#0249FF" : "#000000",
              position: "relative",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => handleTabClick("구성종목")}
          >
            구성종목
            {activeTab === "구성종목" && (
              <span
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "30%",
                  height: "3px",
                  backgroundColor: "#0249FF",
                }}
              ></span>
            )}
          </button>
          <button
            style={{
              flex: 1,
              padding: "15px",
              fontSize: "24px",
              fontWeight: activeTab === "상품정보" ? "600" : "400",
              color: activeTab === "상품정보" ? "#0249FF" : "#000000",
              position: "relative",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => handleTabClick("상품정보")}
          >
            상품정보
            {activeTab === "상품정보" && (
              <span
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "30%",
                  height: "3px",
                  backgroundColor: "#0249FF",
                }}
              ></span>
            )}
          </button>
        </div>

        {/* 탭 내용 */}
        {activeTab === "구성종목" && (
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: "500", marginBottom: "10px", marginTop: "10px" }}>
              구성종목(비율)
            </h2>
            <WeightedTreemap data={etfData} />
            <h2 style={{ fontSize: "24px", fontWeight: "500", marginBottom: "10px", marginTop: "10px" }}>
              구성종목(전체)
            </h2>
            <DetailTable details={etfData.details} />
          </div>
        )}
        {activeTab === "상품정보" && (
          <div>
            <ProductInfo />
          </div>
        )}
      </div>
    </div>
  );
}
