import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import DetailTable from "../components/common/DetailTable";
import WeightedTreemap from "../components/common/WeightedTreemap";
import questionIcon from "../assets/images/common/question.png";
import ProductInfo from "../components/common/ProductInfo";

export default function DetailPage() {
  const [searchParams] = useSearchParams();
  const etfId = searchParams.get("etfId");
  const etfIdentifier = searchParams.get("etfNum") || searchParams.get("ticker");
  const [etfData, setEtfData] = useState({
    data: null,
    distribution: [],
    componentStocks: [],
    investPoint: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("구성종목");

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/compare/detail/${etfId}`);
      console.log(response.data.result[0]);
      const result = response.data.result?.[0];
      setEtfData({
        data: result.data,
        distribution: result.distribution,
        componentStocks: result.componentStocks,
        investPoint: result.investPoint,
      });
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
    // if (etfIdentifier) {
    //   axios
    //     .get(`http://localhost:8080/api/compare/detail/484880`)
    //     .then((response) => {
    //       console.log(response)
    //       const result = response.data.result?.[0];
    //       if (result) {
    //         setEtfData({
    //           data: result.data,
    //           distribution: result.distribution,
    //           componentStocks: result.componentStocks,
    //           investPoint: result.investPoint,
    //         });
    //       } else {
    //         console.error("API 응답에 결과가 없습니다.");
    //         setEtfData({
    //           data: null,
    //           distribution: [],
    //           componentStocks: [],
    //           investPoint: "",
    //         });
    //       }
    //       setIsLoading(false);
    //     })
    //     .catch((error) => {
    //       console.error("API 요청 실패:", error);
    //       setEtfData({
    //         data: null,
    //         distribution: [],
    //         componentStocks: [],
    //         investPoint: "",
    //       });
    //       setIsLoading(false);
    //     });
    // } else {
    //   console.error("etfNum 또는 ticker가 제공되지 않았습니다.");
    //   setIsLoading(false);
    // }
  }, [etfIdentifier]);

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

  if (isLoading) {
    return <>로딩중</>;
  }

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
          <div
            style={{
              display: "flex", // 수평 정렬
              alignItems: "center", // 세로 가운데 정렬
              marginBottom: "10px", // 아래 간격
            }}
          >
            {/* 국가 아이콘 */}
            <img
              src={
                etfData.data.nation === "KOREA"
                  ? "..\\src\\assets\\images\\common\\sectors\\korea.png"
                  : "..\\src\\assets\\images\\common\\sectors\\us.png"
              }
              alt="국가 아이콘"
              style={{
                width: "30px",
                height: "30px",
                marginRight: "8px",
              }}
            />
            {/* 국가와 섹터 */}
            <p
              style={{
                fontFamily: "Pretendard",
                fontSize: "16px",
                fontWeight: "400",
                color: "#FFFFFF",
                margin: 0, // 기본 여백 제거
              }}
            >
              {etfData.data.nation === "KOREA" ? "한국" : etfData.data.nation === "US" ? "미국" : etfData.data.nation}
              {etfData.data.sector ? ` | ${etfData.data.sector}` : ""}
            </p>
          </div>
          {/* ETF 이름 */}
          <h1
            style={{
              fontFamily: "Pretendard",
              fontSize: "36px",
              fontWeight: "600",
              color: "#FFFFFF",
              marginBottom: "10px",
            }}
          >
            {etfData.data.name}
          </h1>
          {/* ETF 번호 */}
          <p
            style={{
              fontFamily: "Pretendard",
              fontSize: "20px",
              fontWeight: "500",
              color: "#FFFFFF",
            }}
          >
            {etfData.data.etfNum}
            {etfData.data.ticker}
          </p>
        </div>

        {/* 우측 이미지 */}
        {/* <img
          // src="..\src\assets\images\common\sectors\gold.png"
          alt="logo"
          style={{
            position: "absolute",
            width: "230px",
            height: "200px",
            right: "50px", // 박스 우측 끝에서 여백
            top: "20px", // 위쪽 정렬
          }}
        /> */}
        <img
          // Todo 섹터 전부 넣기
          src={
            etfData.data.sector === "금"
              ? "..\\src\\assets\\images\\common\\sectors\\gold.png"
              : etfData.data.sector === "금융"
                ? "..\\src\\assets\\images\\common\\sectors\\finance.png"
                : etfData.data.sector === "반도체"
                  ? "..\\src\\assets\\images\\common\\sectors\\semiconductor.png"
                  : ""
          }
          alt="sector logo"
          style={{
            position: "absolute",
            width: "230px",
            height: "200px",
            right: "50px", // 박스 우측 끝에서 여백
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
                    "ETF가 시장에서 매매되는 1주당 거래가격을 말합니다.\nETF를 투자할 때에는 현재가와 실시간 추정 순자산가치(iNAV)와 차이가 얼마나 나는지 체크해보는 것이 중요합니다.",
                    e,
                  )
                }
                onMouseLeave={hideTooltip}
              />
              현재가
            </p>
            <p style={{ fontSize: "24px", fontWeight: "600", margin: "10px 0" }}>
              <span style={{ fontSize: "22px", fontWeight: "400" }}>{etfData.data.ticker ? "$ " : ""}</span>
              {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(
                etfData.data.price,
              )}
              <span style={{ fontSize: "16px", fontWeight: "400" }}>{etfData.data.ticker ? "" : " 원"}</span>
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color:
                  etfData.data.prdyVrssSign === "상승"
                    ? "#EB1B1D" // 빨강
                    : etfData.data.prdyVrssSign === "하락"
                      ? "#0349FF" // 파랑
                      : "#000000", // 검정 (동일 또는 기본값)
              }}
            >
              {etfData.data.prdyVrssSign === "상승"
                ? "▲"
                : etfData.data.prdyVrssSign === "동일"
                  ? "-"
                  : etfData.data.prdyVrssSign === "하락"
                    ? "▼"
                    : ""}{" "}
              {etfData.data.prdyVrss} ({etfData.data.prdyCtrt}%)
            </p>
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
            <p style={{ fontSize: "24px", fontWeight: "600", margin: "10px 0" }}>
              <span style={{ fontSize: "22px", fontWeight: "400" }}>{etfData.data.ticker ? "$ " : ""}</span>
              {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(
                etfData.data.inav,
              )}
              <span style={{ fontSize: "16px", fontWeight: "400" }}>{etfData.data.ticker ? "" : " 원"}</span>
            </p>

            {/* <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color:
                  etfData.data.navPrdyVrssSign === "상승"
                    ? "#EB1B1D" // 빨강
                    : etfData.data.navPrdyVrssSign === "하락"
                      ? "#0349FF" // 파랑
                      : "#000000", // 검정 (동일 또는 기본값)
                visibility: etfData.data.etfNum ? "visible" : "hidden", // etfNum 없으면 보이지 않음
              }}
            >
              {etfData.data.etfNum && ( // etfNum이 있을 때만 값 표시
                <>
                  {etfData.data.navPrdyVrssSign === "상승"
                    ? "▲"
                    : etfData.data.navPrdyVrssSign === "동일"
                      ? "-"
                      : etfData.data.navPrdyVrssSign === "하락"
                        ? "▼"
                        : ""}{" "}
                  {etfData.data.navPrdyVrss} ({etfData.data.navPrdyCtrt}%)
                </>
              )}
            </p> */}
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color:
                  etfData.data.navPrdyVrssSign === "상승"
                    ? "#EB1B1D" // 빨강
                    : etfData.data.navPrdyVrssSign === "하락"
                      ? "#0349FF" // 파랑
                      : "#000000", // 검정 (동일 또는 기본값)
              }}
            >
              {etfData.data.etfNum ? (
                <>
                  {etfData.data.navPrdyVrssSign === "상승"
                    ? "▲"
                    : etfData.data.navPrdyVrssSign === "동일"
                      ? "-"
                      : etfData.data.navPrdyVrssSign === "하락"
                        ? "▼"
                        : ""}{" "}
                  {etfData.data.navPrdyVrss} ({etfData.data.navPrdyCtrt}%)
                </>
              ) : (
                // 공간만 차지
                <span style={{ visibility: "hidden" }}> ▲ 0 (0%)</span>
              )}
            </p>
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
            <p
              style={{
                fontSize: "24px",
                fontWeight: "600",
                margin: "10px 0",
                color: etfData.data.isPositive ? "#EB1B1D" : "#0349FF", // 상승은 빨강, 하락은 파랑
              }}
            >
              {etfData.data.profitRate}%
            </p>
            <p style={{ fontSize: "16px", fontWeight: "400", color: "rgba(0, 0, 0, 0.5)" }}>(1개월)</p>
          </div>
        </div>
      </div>

      {/* 탭 부분 박스 */}
      <div
        style={{
          width: "75%",
          margin: "40px auto 40px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.26)",
          borderRadius: "32px",
          padding: "0 75px 40px 75px",
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
              padding: "25px 15px 25px 15px",
              fontSize: "25px",
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
              padding: "25px 15px 25px 15px",
              fontSize: "25px",
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
            <h2 style={{ fontSize: "25px", fontWeight: "500", marginBottom: "30px", marginTop: "30px" }}>
              구성종목(비율)
            </h2>
            {etfData.componentStocks.length > 0 ? (
              <WeightedTreemap data={etfData.componentStocks} />
            ) : (
              // 한국투자증권 답변 메일
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <img
                  src="..\src\assets\images\common\koreaInvest_answer.png"
                  alt="데이터 없음"
                  style={{ width: "90%", height: "auto", opacity: 0.6 }}
                />
              </div>
              // 미국 구성종목 준비 중 안내 문구
              // <div
              //   style={{
              //     display: "flex",
              //     flexDirection: "column",
              //     justifyContent: "center",
              //     alignItems: "center",
              //     height: "200px",
              //     backgroundColor: "#F5F5F5",
              //     borderRadius: "16px", // 둥글게 만들기
              //     margin: "20px auto",
              //     width: "80%",
              //   }}
              // >
              //   <p style={{ fontSize: "35px", fontWeight: "500", color: "#555" }}>미국 구성종목은 준비 중입니다.</p>
              // </div>
            )}

            {/* <h2 style={{ fontSize: "20px", fontWeight: "500", marginBottom: "20px", marginTop: "20px" }}>
              구성종목(전체)
            </h2> */}
            {etfData.componentStocks.length > 0 ? (
              <h2 style={{ fontSize: "25px", fontWeight: "500", marginBottom: "30px", marginTop: "30px" }}>
                구성종목(전체)
              </h2>
            ) : (
              <p> </p>
            )}
            {etfData.componentStocks.length > 0 ? <DetailTable details={etfData.componentStocks} /> : <p> </p>}
          </div>
        )}
        {activeTab === "상품정보" && (
          <div>
            <ProductInfo distributions={etfData.distribution} investPoint={etfData.investPoint} />
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
