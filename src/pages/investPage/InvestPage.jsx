import React, { useEffect, useState } from "react";
import "./style.css";
import CategoryTabs from "../../components/etf/categoryTabs/CategoryTabs";
import InvestCard from "../../components/invest/investCard/InvestCard";
import SelectedETF from "../../components/invest/selectedETF/SelectedETF";
import { Link } from "react-router-dom";
import { getInvestETFList } from "../../lib/apis/invest";

export default function InvestPage() {
  const [etfData, setEtfData] = useState([]);
  const [selectedETFList, setSelectedETFList] = useState([]);
  const [category, setCategory] = useState("GROWTH");

  // const etfData = [
  //   {
  //     id: 1,
  //     name: "한중반도체(합성)",
  //     company: "Kodex",
  //   },
  //   {
  //     id: 2,
  //     name: "미국 기술주 ETF",
  //     company: "TIGER",
  //   },
  //   {
  //     id: 3,
  //     name: "S&P 500 인버스",
  //     company: "ARIRANG",
  //   },
  //   {
  //     id: 4,
  //     name: "한중반도체(합성)",
  //     company: "Kodex",
  //   },
  //   {
  //     id: 5,
  //     name: "미국 헬스케어 ETF",
  //     company: "KBSTAR",
  //   },
  //   {
  //     id: 6,
  //     name: "금 투자 ETF",
  //     company: "HANARO",
  //   },
  //   {
  //     id: 7,
  //     name: "신흥국 배당주",
  //     company: "TIGER",
  //   },
  //   {
  //     id: 8,
  //     name: "차이나 항셍 테크",
  //     company: "KOSEF",
  //   },
  // ];

  useEffect(() => {
    getInvestETFList(category).then((data) => {
      setEtfData(data);
    });
  }, [category]);

  return (
    <>
      <div className="invest-page-container">
        {/* 왼쪽 : etf 선택 목록 */}
        <div className="invest-selection-container">
          {/* etf 선택 목록 타이틀 */}
          <div className="invest-selection-title">
            <div className="invest-selection-title-blue">과거로 돌아가</div>
            <div className="invest-selection-title-black">1년 전에 투자했다면?</div>
          </div>

          <CategoryTabs setCategory={setCategory} />
          <div className="invest-selection-card-list">
            {etfData &&
              etfData.map((etf) => (
                <InvestCard
                  key={etf.id}
                  selectedETFList={selectedETFList}
                  setSelectedETFList={setSelectedETFList}
                  etfData={etf}
                />
              ))}
          </div>
        </div>

        {/* 오른쪽 : 선택한 etf 목록 */}
        <div className="invest-selected-container">
          <div className="invest-seleted-container-top">
            <div className="invest-selected-header">
              <div className="invest-selected-header-title">원하는 ETF를 선택해주세요.</div>
              <div className="invest-selected-header-cnt">
                <div className="invest-selected-header-cnt-now">{selectedETFList.length}</div>/4
              </div>
            </div>
            <div className="invest-selected-list">
              {selectedETFList.map((etf, index) => (
                <SelectedETF key={index} etf={etf} setSelectedETFList={setSelectedETFList} />
              ))}
            </div>
          </div>
          <Link to={"/invest/amount"} state={{ selectedETFList }}>
            <button
              className={`invest-btn ${selectedETFList.length > 0 ? "" : "deactivate"}`}
              disabled={selectedETFList.length === 0}
            >
              투자하기
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
