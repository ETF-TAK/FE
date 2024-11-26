import React, { useState } from "react";
import { etfData } from "../lib/apis/data";
import DetailTable from "../components/common/DetailTable";
import ProductInfo from "../components/common/ProductInfo";
import WeightedTreemap from "../components/common/WeightedTreemap";
import questionIcon from "../assets/images/common/question.png";

export default function DetailPage() {
  const [activeTab, setActiveTab] = useState("구성종목");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const showTooltip = (content, event) => {
    setTooltipContent(content);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
    setTooltipContent("");
  };

  return (
    <div style={{ fontFamily: "Pretendard, sans-serif", backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* 파란색 박스 */}
      <div
        style={{
          position: "relative",
          width: "80%",
          height: "250px", // 높이 유지
          marginLeft: "auto",
          marginRight: "auto",
          background: "#0249FF",
          borderRadius: "32px",
          padding: "20px 40px 20px 40px",
          display: "flex",
          flexDirection: "column", // 내부 요소를 위아래로 정렬
          justifyContent: "flex-start", // 내부 요소를 위쪽으로 정렬
          alignItems: "flex-start", // 왼쪽 정렬
        }}
      >
        {/* 좌측 텍스트 */}
        <div style={{ marginLeft: "20px", marginTop: "10px" }}>
          <p
            style={{
              fontFamily: "Pretendard",
              fontSize: "16px",
              fontWeight: "400",
              color: "#FFFFFF",
              marginBottom: "10px", // 아래 간격
            }}
          >
            한국 | 상장
          </p>
          <h1
            style={{
              fontFamily: "Pretendard",
              fontSize: "36px",
              fontWeight: "600",
              color: "#FFFFFF",
              marginBottom: "10px",
            }}
          >
            SOL 조선TOP3플러스
          </h1>
          <p
            style={{
              fontFamily: "Pretendard",
              fontSize: "20px",
              fontWeight: "500",
              color: "#FFFFFF",
            }}
          >
            466920
          </p>
        </div>

        {/* 우측 이미지 */}
        <img
          src="../asset/logo.png"
          alt="logo"
          style={{
            position: "absolute",
            width: "250px",
            height: "200px",
            right: "20px", // 박스 우측 끝에서 여백
            top: "20px", // 위쪽 정렬
          }}
        />
      </div>

      {/* 흰색 박스 */}
      <div
        style={{
          position: "relative",
          width: "70%",
          height: "135px",
          margin: "-60px auto 0", // 파란 박스와 겹치도록 설정
          background: "#FFFFFF",
          boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.26)",
          borderRadius: "32px",
          zIndex: 2,
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          {/* 현재가 */}
          <div style={{ textAlign: "center", position: "relative", flex: 1 }}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={questionIcon}
                alt="tooltip"
                style={{
                  width: "16px",
                  height: "16px",
                  marginRight: "1px",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  display: "inline-block",
                }}
                onMouseEnter={(e) =>
                  showTooltip(
                    "ETF가 시장에서 매매되는 1좌당 거래가격을 말합니다.\nETF를 투자할 때에는 현재가와 실시간 추정 순자산가치(iNAV)와 차이가 얼마나 나는지 체크해보는 것이 중요합니다.",
                    e,
                  )
                }
                onMouseLeave={hideTooltip}
              />
              현재가
            </p>
            <p style={{ fontSize: "24px", fontWeight: "600", margin: "10px 0" }}>{etfData.marketPrice}</p>
            <p style={{ fontSize: "16px", fontWeight: "400" }}>{etfData.marketChange}</p>
          </div>

          {/* 세로 선 */}
          <div
            style={{
              width: "1px",
              height: "60%", // 높이 조정
              backgroundColor: "#CCCCCC",
              margin: "0 10px",
            }}
          ></div>

          {/* 기준가 */}
          <div style={{ textAlign: "center", position: "relative", flex: 1.2 }}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={questionIcon}
                alt="tooltip"
                style={{
                  width: "16px",
                  height: "16px",
                  marginRight: "1px",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  display: "inline-block",
                }}
                onMouseEnter={(e) =>
                  showTooltip(
                    "기준가(NAV)\nETF의 자산에서 ETF가 갚아야 할 부채를 차감한 것을 순자산총액이라고 하는데, 이 순자산 총액을 ETF의 총 증권수로 나눈 값을 기준가 또는 순자산가치라고 부릅니다. 다시 말해 ETF 1좌당 가치를 의미하며, 전일 종가를 기준 하루 1번 발표됩니다.\n\n추정기준가(iNAV, indicative NAV)\nETF가 편입하고 있는 자산들의 현재 가격을 반영하여 실시간으로 산출되는 ETF의 가치입니다. 투자자들은 이 가격을 참고하면서 매매합니다. 따라서 ETF의 거래가격은 대체로 iNAV 근처에서 형성됩니다. 하지만, 시장 참여자들의 심리에 따라 거래가격이 iNAV에 비하여 높은 수준에 형성(고평가)되거나, 반대로 iNAV보다 낮은 수준에 형성(저평가)될 수도 있습니다.",
                    e,
                  )
                }
                onMouseLeave={hideTooltip}
              />
              기준가(iNAV)
            </p>
            <p style={{ fontSize: "24px", fontWeight: "600", margin: "10px 0" }}>{etfData.navPrice}</p>
            <p style={{ fontSize: "16px", fontWeight: "400" }}>{etfData.navChange}</p>
          </div>

          {/* 세로 선 */}
          <div
            style={{
              width: "1px",
              height: "60%", // 높이 조정
              backgroundColor: "#CCCCCC",
              margin: "0 10px",
            }}
          ></div>

          {/* 수익률 */}
          <div style={{ textAlign: "center", flex: 1 }}>
            <p style={{ fontSize: "16px", fontWeight: "400" }}>수익률</p>
            <p style={{ fontSize: "24px", fontWeight: "600", margin: "10px 0", color: "#FF3D00" }}>{etfData.yield}</p>
            <p style={{ fontSize: "16px", fontWeight: "400" }}>1개월</p>
          </div>
        </div>
      </div>

      {/* 탭 부분 박스 */}
      <div
        style={{
          width: "80%",
          margin: "40px auto 40px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.26)",
          borderRadius: "32px",
          padding: "0 40px 40px 40px",
        }}
      >
        {/* 탭 메뉴 */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #CCC",
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
              fontFamily: "Pretendard, sans-serif",
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
              fontFamily: "Pretendard, sans-serif",
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
            <h2 style={{ fontSize: "20px", fontWeight: "500", marginBottom: "20px", marginTop: "20px" }}>
              구성종목(비율)
            </h2>
            <WeightedTreemap data={etfData} />
            <h2 style={{ fontSize: "20px", fontWeight: "500", marginBottom: "20px", marginTop: "20px" }}>
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

      {/* Tooltip */}
      {tooltipVisible && (
        <div
          style={{
            position: "fixed",
            // bottom: `calc(100vh - ${tooltipPosition.y + 300}px)`,
            // left: `${tooltipPosition.x}px`,
            // transform: "translateY(-100%)",
            top: `${tooltipPosition.y - 20}px`, // 마우스 커서의 Y 좌표를 기준으로
            left: `${tooltipPosition.x}px`, // 마우스 커서의 X 좌표를 기준으로
            transform: "translate(-50%, -100%)", // 커서 위에 툴팁 배치 및 X축 중심 맞춤
            background: "#F7F8FA",
            boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.26)",
            borderRadius: "16px",
            padding: "16px",
            zIndex: 1000,
            maxWidth: "310px",
            fontFamily: "Pretendard, sans-serif",
          }}
        >
          <h4
            style={{
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "19px",
              color: "#000000",
              marginBottom: "12px",
            }}
          >
            {tooltipContent.includes("현재가") ? "현재가(원)" : "기준가(NAV)"}
          </h4>
          <p
            style={{
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "20px",
              color: "#000000",
              margin: "0",
              whiteSpace: "pre-wrap",
            }}
          >
            {tooltipContent}
          </p>
        </div>
      )}
    </div>
  );
}
