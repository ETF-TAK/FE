import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../scrollPage/style.css";
import goldImage from "../../assets/images/common/sectors/gold.png";
import SectorMapperNoCircle from "../../components/etf/sectorMapper/SectorMapperNoCircle";

export default function ScrollPage({
  scrollInfo,
  showScrollMessage,
  setShowScrollMessage,
  basicInfo,
  overlappingStocks,
}) {
  const [isScrolled, setIsScrolled] = useState(false); // 스크롤 여부 상태
  const [isContentVisible, setIsContentVisible] = useState(false); // 콘텐츠 표시 여부 상태
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerHeight = 100; // 스크롤 여부를 판단하는 높이
      const contentTriggerHeight = 200; // 콘텐츠 표시를 위한 높이

      setIsScrolled(scrollY > triggerHeight);

      setIsContentVisible(scrollY > contentTriggerHeight);

      if (showScrollMessage && scrollY > triggerHeight) {
        setShowScrollMessage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showScrollMessage, setShowScrollMessage]);

  return (
    <div className={`scroll-page-container ${isScrolled ? "visible" : "hidden"}`}>
      {showScrollMessage && <div className="message">스크롤 해보세요</div>}
      {basicInfo.length > 0 && (
        <>
          <div className="comparison-result">
            <h1>기본정보</h1>
            <table>
              <thead>
                <tr>
                  <th></th>
                  {basicInfo.map((info, index) => (
                    <th key={index}>{info.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="label-cell">운용사</td>
                  {basicInfo.map((info, index) => (
                    <td key={index}>{info.company}</td>
                  ))}
                </tr>
                <tr>
                  <td className="label-cell">상장일</td>
                  {basicInfo.map((info, index) => (
                    <td key={index}>{info.listingDate}</td>
                  ))}
                </tr>
                <tr>
                  <td className="label-cell">순자산</td>
                  {basicInfo.map((info, index) => (
                    <td key={index}>
                      {info.etfNum === null
                        ? `$${info.netWorth.toLocaleString()}`
                        : `${info.netWorth.toLocaleString()}억원`}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="label-cell">연간배당률</td>
                  {basicInfo.map((info, index) => (
                    <td key={index}>{info.dividendRate}%</td>
                  ))}
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="duplicated-result">
            <h1>중복종목</h1>
            <table>
              <thead>
                <tr>
                  <th></th>
                  {basicInfo.map((info, index) => (
                    <th key={index}>{info.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {overlappingStocks.map((info, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="label-cell">구성종목 {rowIndex + 1}</td>
                    <td className="label-cell">
                      {info.stockName} ({info.etf1Weight}%)
                    </td>
                    <td className="label-cell">
                      {info.stockName} ({info.etf2Weight}%)
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <br />
            <br />
            <br />
          </div>

          {/* ComparePage 섹션 */}
          <div className="compare-detail-page">
            {basicInfo.map((info, index) => (
              // <div key={index} className="button-container" onClick={() => navigate("/compare/detail?etfId=484880")}>
              <div
                key={index}
                className="button-container"
                onClick={() => navigate(`/compare/detail?etfId=${info.ticker || info.etfNum}`)}
              >
                <div className="footer">
                  <h1 className="footer-name">{info.name}</h1>
                  <h2>더 알아보기</h2>
                </div>
                <div className="footer-image-wraaper">
                  <img
                    className="footer-image"
                    src={SectorMapperNoCircle[info.sector] || SectorMapperNoCircle.default}
                    alt="Gold"
                  ></img>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
