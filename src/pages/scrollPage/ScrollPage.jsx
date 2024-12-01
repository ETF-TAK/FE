import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../scrollPage/style.css";
import goldImage from "../../assets/images/common/sectors/gold.png";

export default function ScrollPage({ scrollInfo, showScrollMessage, setShowScrollMessage }) {
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
      {isContentVisible && scrollInfo.length > 0 && (
        <>
          <div className="comparison-result">
            <h1>기본 정보</h1>
            <table>
              <thead>
                <tr>
                  <th></th>
                  {scrollInfo.map((info, index) => (
                    <th key={index}>{info.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="label-cell">운용사</td>
                  {scrollInfo.map((info, index) => (
                    <td key={index}>{info.operator}</td>
                  ))}
                </tr>
                <tr>
                  <td className="label-cell">상장일</td>
                  {scrollInfo.map((info, index) => (
                    <td key={index}>{info.listedDate}</td>
                  ))}
                </tr>
                <tr>
                  <td className="label-cell">순자산</td>
                  {scrollInfo.map((info, index) => (
                    <td key={index}>{info.netAsset.toLocaleString()}원</td>
                  ))}
                </tr>
                <tr>
                  <td className="label-cell">연간배당률</td>
                  {scrollInfo.map((info, index) => (
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
            <h1>중복 정보</h1>
            <table>
              <thead>
                <tr>
                  <th></th>
                  {scrollInfo.map((info, index) => (
                    <th key={index}>{info.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scrollInfo.map((info, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="label-cell">구성종목 {rowIndex + 1}</td>
                    {scrollInfo.map((info, colIndex) => (
                      <td key={colIndex}>삼성전자 (8.1%)</td>
                    ))}
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
            {scrollInfo.map((info, index) => (
              <div key={index} className="button-container" onClick={() => navigate("/compare/detail?etfId=1")}>
                <div className="footer">
                  <h1>{info.name}</h1>
                  <h2>더 알아보기</h2>
                </div>
                <div className="image">
                  <img src={goldImage} alt="Gold"></img>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
