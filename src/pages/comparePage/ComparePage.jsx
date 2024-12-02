import axios from "axios";
import "../comparePage/style.css";
import ScrollPage from "../scrollPage/ScrollPage";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompareCard from "../../components/etf/compareCard/CompareCard";
import CategoryTabs from "../../components/etf/categoryTabs/CategoryTabs";
import SectorKorea from "../../assets/images/common/sectors/korea.png";
import SearchIcon from "../../assets/images/icons/search.png";

export default function ComparePage() {
  const [etfData, setEtfData] = useState([
    {
      id: "484880", // API에서 사용하는 고유 ID
      name: "테스트 1 Kodex 성장주",
      price: 12800,
      operator: "삼성자산운용",
      listedDate: "2020-03-15",
      netAsset: 2000000000,
      dividendRate: 2.5,
      components: ["삼성전자", "LG화학", "카카오"],
    },
    {
      id: "466940", // API에서 사용하는 고유 ID
      name: "테스트 1Kodex 배당주",
      price: 15000,
      operator: "KB자산운용",
      listedDate: "2018-07-01",
      netAsset: 1500000000,
      dividendRate: 3.0,
      components: ["삼성전자", "SK하이닉스", "네이버"],
    },
    {
      name: "Kodex 성장주",
      price: 12800,
      operator: "삼성자산운용",
      listedDate: "2020-03-15",
      netAsset: 2000000000,
      dividendRate: 2.5,
      components: ["삼성전자", "LG화학", "카카오"],
    },
  ]);

  const [overlapCount, setOverlapCount] = useState(0); // overlapCount 상태 추가
  const [overlappingStocks, setOverlappingStocks] = useState([]); // 중복 종목 정보
  const [selectedEtfs, setSelectedEtfs] = useState([]);
  const [isCompareEnabled, setIsCompareEnabled] = useState(false);
  const [showScrollMessage, setShowScrollMessage] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [scrollInfo, setScrollInfo] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filterdData, setFilterdData] = useState(etfData);
  const navigate = useNavigate();

  const handleSelectedEtf = (etf) => {
    if (selectedEtfs.length < 2 && !selectedEtfs.some((item) => item.name === etf.name)) {
      setSelectedEtfs([...selectedEtfs, etf]);
    }
    setShowScrollMessage(false);
  };

  const handleRemoveEtf = (index) => {
    setShowResult(false);
    const updateEtfs = [...selectedEtfs];
    updateEtfs.splice(index, 1);
    setSelectedEtfs(updateEtfs);

    if (updateEtfs.length === 0) {
      setShowScrollMessage(false);
      setScrollInfo([]); // 스크롤 정보 초기화
    }
  };

  const fetchOverlapCount = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/compare", {
        etfList: selectedEtfs.map((etf) => etf.name), // ETF 이름 또는 ID 전송
      });
      setOverlapCount(response.data.overlapCount); // overlapCount 값 업데이트
    } catch (err) {
      console.error("Error fetching overlap count:", err.message);
    }
  };

  const handleCompareClick = async () => {
    if (isCompareEnabled) {
      try {
        const response = await axios.post("http://localhost:8080/api/compare", {
          etfList: selectedEtfs.map((etf) => etf.id), // id 값으로 전송
        });

        const { overlapCount } = response.data;
        setOverlapCount(overlapCount); // 서버 응답 값을 상태로 저장
        setShowResult(true); // 결과 표시
      } catch (error) {
        console.error("Error fetching overlapCount:", error.message);
      }
    }
  };

  // const handleCompareClick = () => {
  //   if (isCompareEnabled) {
  //     setShowResult(true);
  //     setShowScrollMessage(true);

  //     const selectedData = selectedEtfs.map((etf) => ({
  //       name: etf.name,
  //       operator: etf.operator,
  //       listedDate: etf.listedDate,
  //       netAsset: etf.netAsset,
  //       dividendRate: etf.dividendRate,
  //       components: etf.components,
  //     }));
  //     setScrollInfo(selectedData);
  //     setIsContentVisible(true);
  //   }
  // };

  const handleScroll = () => {
    if (showScrollMessage) {
      setShowScrollMessage(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("");
      setEtfData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    setIsCompareEnabled(selectedEtfs.length === 2);
  }, [selectedEtfs]);

  useEffect(() => {
    if (searchKeyword.trim() === "") {
      setFilterdData(etfData);
    } else {
      const regex = new RegExp(searchKeyword, "i");
      const filtered = etfData.filter((etf) => regex.test(etf.name));
      setFilterdData(filtered);
    }
  }, [searchKeyword, etfData]);

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <div className="page-container">
      <div className="container">
        <div className="left-panel">
          <div className="etfSearch-Top">
            <h1>ETF 둘러보기</h1>
            <div className="etfSearch-Wrapper">
              <input
                type="text"
                placeholder="검색어를 입력해주세요"
                value={searchKeyword}
                onChange={handleInputChange}
              ></input>
              <img src={SearchIcon} alt="돋보기 아이콘" className="etfSearch-Icon" />
            </div>
          </div>
          <div className="etfSearch-Bottom">
            <CategoryTabs fontsize="16px" />

            <table>
              <thead>
                <tr>
                  <th className="etfSearch-Bottom-List-Title-th">종목</th>
                  <th className="etfSearch-Bottom-List-Price-th">현재가</th>
                </tr>
              </thead>
              <div className="etfSearch-Bottom-List">
                <tbody>
                  {filterdData.length > 0 ? (
                    filterdData.map((etf, index) => (
                      <tr
                        key={index}
                        onClick={() => handleSelectedEtf(etf)}
                        className={
                          // 나중에 name => id로 바꿔야할 수도
                          selectedEtfs.some((selected) => selected.name === etf.name) ? "etfSearch-Bottom-Selected" : ""
                        }
                      >
                        <td className="etfSearch-Bottom-List-Title">
                          <img src={SectorKorea} alt="섹터 이미지" className="etfSearch-Bottom-List-Img" />
                          <span>{etf.name}</span>
                        </td>
                        <td className="etfSearch-Bottom-List-Price">
                          <span className="etfSearch-Bottom-List-Price-Bold">{etf.price.toLocaleString()}원</span> (
                          <span style={{ color: etf.dividendRate >= 0 ? "#EB1B1D" : "#0249FF" }}>
                            {etf.dividendRate >= 0 ? "+" : ""}
                            {etf.dividendRate}%
                          </span>
                          )
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="no-Result">
                      <td colSpan="2">검색결과가 없습니다.</td>
                    </tr>
                  )}
                </tbody>
              </div>
            </table>
          </div>
        </div>
        <div className="right-panel">
          <div className="etfSelect">
            {selectedEtfs.map((etf, index) => (
              <>
                <CompareCard etf={etf} index={index} handleRemoveEtf={handleRemoveEtf} />
                {/* <div className={`etfSelect-${index + 1}`} key={index}>
                <h1>{etf.name}</h1>
                <img src={deleteIcon} onClick={() => handleRemoveEtf(index)} className="etfSelect-delete-icon"></img>
              </div> */}
              </>
            ))}
            {Array.from({ length: 2 - selectedEtfs.length }).map((_, index) => (
              <div className={`etfSelect-${selectedEtfs.length + index + 1}`} key={index}>
                <h1>ETF를 선택해주세요.</h1>
              </div>
            ))}
          </div>

          {/* <div className={`comparison-result-summary ${showResult ? "active" : ""}`}>
            {showResult && (
              <>
                <span>15</span>개의 종목이 겹쳐요. <br /> 분산투자 효과가 충분히 유지될 수 있어요.👍🏻
              </>
            )}
          </div> */}

          <div className={`comparison-result-summary ${showResult ? "active" : ""}`}>
            {showResult && (
              <>
                <span>{overlapCount}</span>개의 종목이 겹쳐요. <br />
                {overlapCount > 5
                  ? "분산투자 효과가 충분히 유지될 수 있어요. 👍🏻"
                  : "분산투자 효과가 다소 부족할 수 있어요. 🤔"}
              </>
            )}
          </div>

          <div className={`compare-btn ${isCompareEnabled ? "active" : "inactive"}`} onClick={handleCompareClick}>
            <h1>비교하기</h1>
          </div>
        </div>
      </div>
      <ScrollPage
        scrollInfo={scrollInfo}
        showScrollMessage={showScrollMessage}
        setShowScrollMessage={setShowScrollMessage}
      />
    </div>
  );
}
