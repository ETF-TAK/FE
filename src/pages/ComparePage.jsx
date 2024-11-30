import axios from "axios";
import "../styles/ComparePage.css";
import deleteIcon from "../assets/images/icons/delete.png";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompareCard from "../components/etf/compareCard/CompareCard";
import CategoryTabs from "../components/etf/categoryTabs/CategoryTabs";
import SectorKorea from "../assets/images/common/sectors/korea.png";
import SearchIcon from "../assets/images/icons/search.png";

export default function ComparePage() {
  const [etfData, setEtfData] = useState([
    {
      name: "Kodex 성장주",
      price: 12800,
      type: "성장",
      operator: "삼성자산운용",
      listedDate: "2020-03-15",
      baseAsset: "성장주",
      netAsset: 2000000000,
      dividendRate: 2.5,
      components: ["삼성전자", "LG화학", "카카오"],
    },
    {
      name: "Kodex 배당주",
      price: 15000,
      type: "배당",
      operator: "KB자산운용",
      listedDate: "2018-07-01",
      baseAsset: "배당주",
      netAsset: 1500000000,
      dividendRate: 3.0,
      components: ["삼성전자", "SK하이닉스", "네이버"],
    },
    {
      name: "Kodex 가치주",
      price: 14200,
      type: "가치",
      operator: "미래에셋자산운용",
      listedDate: "2019-10-01",
      baseAsset: "가치주",
      netAsset: 2500000000,
      dividendRate: 1.8,
      components: ["LG전자", "현대차", "SK텔레콤"],
    },
    {
      name: "Kodex 인덱스",
      price: 13500,
      type: "인덱스",
      operator: "NH아문디자산운용",
      listedDate: "2021-05-20",
      baseAsset: "코스피200",
      netAsset: 3000000000,
      dividendRate: 2.0,
      components: ["삼성전자", "현대차", "NAVER"],
    },
    {
      name: "Kodex 코스닥",
      price: 12100,
      type: "코스닥",
      operator: "한국투자신탁운용",
      listedDate: "2022-03-01",
      baseAsset: "코스닥150",
      netAsset: 1500000000,
      dividendRate: 1.5,
      components: ["카카오게임즈", "펄어비스", "CJ ENM"],
    },
    {
      name: "Kodex 헬스케어",
      price: 18000,
      type: "헬스케어",
      operator: "삼성자산운용",
      listedDate: "2020-12-15",
      baseAsset: "헬스케어",
      netAsset: 2200000000,
      dividendRate: 1.2,
      components: ["셀트리온", "삼성바이오로직스", "유한양행"],
    },
    {
      name: "Kodex IT",
      price: 16000,
      type: "IT",
      operator: "미래에셋자산운용",
      listedDate: "2017-08-01",
      baseAsset: "IT주",
      netAsset: 3200000000,
      dividendRate: 2.3,
      components: ["삼성전자", "SK하이닉스", "LG디스플레이"],
    },
    {
      name: "Kodex 에너지",
      price: 14000,
      type: "에너지",
      operator: "KB자산운용",
      listedDate: "2021-11-11",
      baseAsset: "에너지주",
      netAsset: 1700000000,
      dividendRate: 2.7,
      components: ["SK이노베이션", "S-OIL", "한국가스공사"],
    },
    {
      name: "Kodex 금융",
      price: 12300,
      type: "금융",
      operator: "NH아문디자산운용",
      listedDate: "2016-09-30",
      baseAsset: "금융주",
      netAsset: 1800000000,
      dividendRate: 1.9,
      components: ["KB금융", "신한지주", "하나금융지주"],
    },
    {
      name: "Kodex 해외주식",
      price: 20000,
      type: "해외",
      operator: "한국투자신탁운용",
      listedDate: "2020-01-01",
      baseAsset: "해외ETF",
      netAsset: 4000000000,
      dividendRate: 3.2,
      components: ["Apple", "Tesla", "Microsoft"],
    },
    {
      name: "Kodex ESG",
      price: 15500,
      type: "ESG",
      operator: "삼성자산운용",
      listedDate: "2021-07-10",
      baseAsset: "ESG주",
      netAsset: 1900000000,
      dividendRate: -1.7,
      components: ["삼성SDI", "LG화학", "포스코홀딩스"],
    },
    {
      name: "Kodex 자동차alsdkjlaskjdladkjlaskjdlajsl",
      price: 130000000,
      type: "자동차",
      operator: "미래에셋자산운용",
      listedDate: "2019-04-20",
      baseAsset: "자동차주",
      netAsset: 2100000000,
      dividendRate: 2.1,
      components: ["현대차", "기아", "현대모비스"],
    },
    {
      name: "Kodex 소재",
      price: 12500,
      type: "소재",
      operator: "KB자산운용",
      listedDate: "2018-12-01",
      baseAsset: "소재주",
      netAsset: 2000000000,
      dividendRate: 1.4,
      components: ["POSCO홀딩스", "롯데케미칼", "한화솔루션"],
    },
    {
      name: "Kodex 통신",
      price: 11000,
      type: "통신",
      operator: "NH아문디자산운용",
      listedDate: "2017-01-15",
      baseAsset: "통신주",
      netAsset: 1400000000,
      dividendRate: 2.6,
      components: ["KT", "SK텔레콤", "LG유플러스"],
    },
  ]);
  const [selectedEtfs, setSelectedEtfs] = useState([]);
  const [isCompareEnabled, setIsCompareEnabled] = useState(false);
  const [showScrollMessage, setShowScrollMessage] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [scrollInfo, setScrollInfo] = useState([]);
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

  const handleCompareClick = () => {
    if (isCompareEnabled) {
      setShowResult(true);
      setShowScrollMessage(true);

      const selectedData = selectedEtfs.map((etf) => ({
        name: etf.name,
        type: etf.type,
        operator: etf.operator,
        listedDate: etf.listedDate,
        baseAsset: etf.baseAsset,
        netAsset: etf.netAsset,
        dividendRate: etf.dividendRate,
        components: etf.components,
      }));
      setScrollInfo(selectedData);
    }
  };

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
    if (showScrollMessage) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showScrollMessage]);

  return (
    <div className="container">
      <div className="left-panel">
        <div className="etfSearch-Top">
          <h1>ETF 둘러보기</h1>
          <div className="etfSearch-Wrapper">
            <input type="text" placeholder="검색어를 입력해주세요"></input>
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
                {etfData.map((etf, index) => (
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
                ))}
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

        <div className="comparison-result-summary">
          {showResult && (
            <>
              <span>15</span>개의 종목이 겹쳐요. <br /> 분산투자 효과가 충분히 유지될 수 있어요.
            </>
          )}
        </div>

        <div className={`compare-btn ${isCompareEnabled ? "active" : "inactive"}`} onClick={handleCompareClick}>
          <h1>비교하기</h1>
        </div>

        {showScrollMessage && <div className="message">스크롤 해보세요</div>}
        {!showScrollMessage && scrollInfo.length > 0 && (
          <div className="comparison-result">
            <h1>기본 정보</h1>
            <table>
              <thead>
                <tr>
                  {scrollInfo.map((info, index) => (
                    <th key={index}>{info.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {scrollInfo.map((info, index) => (
                    <td key={index}>{info.type}</td>
                  ))}
                </tr>
                <tr>
                  {scrollInfo.map((info, index) => (
                    <td key={index}>{info.operator}</td>
                  ))}
                </tr>
                <tr>
                  {scrollInfo.map((info, index) => (
                    <td key={index}>{info.listedDate}</td>
                  ))}
                </tr>
                <tr>
                  {scrollInfo.map((info, index) => (
                    <td key={index}>{info.baseAsset}</td>
                  ))}
                </tr>
                <tr>
                  {scrollInfo.map((info, index) => (
                    <td key={index}>{info.netAsset.toLocaleString()}원</td>
                  ))}
                </tr>
                <tr>
                  {scrollInfo.map((info, index) => (
                    <td key={index}>{info.dividendRate}%</td>
                  ))}
                </tr>
              </tbody>
            </table>
            <h2>구성 종목</h2>
            <ul>
              {scrollInfo.map((info, index) => (
                <li key={index}>
                  {info.name}: {info.components.join(", ")}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <h1>ComparePage</h1>
          <button onClick={() => navigate("/compare/detail?etfId=1")}>Go to DetailPage (ETF1)</button>
          <button onClick={() => navigate("/compare/detail?etfId=2")}>Go to DetailPage (ETF2)</button>
        </div>
      </div>
    </div>
  );
}
