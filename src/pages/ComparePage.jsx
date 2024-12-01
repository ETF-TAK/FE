import axios from "axios";
import "../styles/ComparePage.css";
import deleteIcon from "../assets/images/icons/delete.png";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollPage from "./scrollPage/ScrollPage";

export default function ComparePage() {
  const [etfData, setEtfData] = useState([
    {
      name: "Kodex 성장주",
      price: 12800,
      operator: "삼성자산운용",
      listedDate: "2020-03-15",
      netAsset: 2000000000,
      dividendRate: 2.5,
      components: ["삼성전자", "LG화학", "카카오"],
    },
    {
      name: "Kodex 배당주",
      price: 15000,
      operator: "KB자산운용",
      listedDate: "2018-07-01",
      netAsset: 1500000000,
      dividendRate: 3.0,
      components: ["삼성전자", "SK하이닉스", "네이버"],
    },
    {
      name: "Kodex 가치주",
      price: 14200,
      operator: "미래에셋자산운용",
      listedDate: "2019-10-01",
      netAsset: 2500000000,
      dividendRate: 1.8,
      components: ["LG전자", "현대차", "SK텔레콤"],
    },
    {
      name: "Kodex 인덱스",
      price: 13500,
      operator: "NH아문디자산운용",
      listedDate: "2021-05-20",
      netAsset: 3000000000,
      dividendRate: 2.0,
      components: ["삼성전자", "현대차", "NAVER"],
    },
    {
      name: "Kodex 코스닥",
      price: 12100,
      operator: "한국투자신탁운용",
      listedDate: "2022-03-01",
      netAsset: 1500000000,
      dividendRate: 1.5,
      components: ["카카오게임즈", "펄어비스", "CJ ENM"],
    },
    {
      name: "Kodex 헬스케어",
      price: 18000,
      operator: "삼성자산운용",
      listedDate: "2020-12-15",
      netAsset: 2200000000,
      dividendRate: 1.2,
      components: ["셀트리온", "삼성바이오로직스", "유한양행"],
    },
    {
      name: "Kodex IT",
      price: 16000,
      operator: "미래에셋자산운용",
      listedDate: "2017-08-01",
      netAsset: 3200000000,
      dividendRate: 2.3,
      components: ["삼성전자", "SK하이닉스", "LG디스플레이"],
    },
    {
      name: "Kodex 에너지",
      price: 14000,
      operator: "KB자산운용",
      listedDate: "2021-11-11",
      netAsset: 1700000000,
      dividendRate: 2.7,
      components: ["SK이노베이션", "S-OIL", "한국가스공사"],
    },
    {
      name: "Kodex 금융",
      price: 12300,
      operator: "NH아문디자산운용",
      listedDate: "2016-09-30",
      netAsset: 1800000000,
      dividendRate: 1.9,
      components: ["KB금융", "신한지주", "하나금융지주"],
    },
    {
      name: "Kodex 해외주식",
      price: 20000,
      operator: "한국투자신탁운용",
      listedDate: "2020-01-01",
      netAsset: 4000000000,
      dividendRate: 3.2,
      components: ["Apple", "Tesla", "Microsoft"],
    },
    {
      name: "Kodex ESG",
      price: 15500,
      operator: "삼성자산운용",
      listedDate: "2021-07-10",
      netAsset: 1900000000,
      dividendRate: 1.7,
      components: ["삼성SDI", "LG화학", "포스코홀딩스"],
    },
    {
      name: "Kodex 자동차",
      price: 13000,
      operator: "미래에셋자산운용",
      listedDate: "2019-04-20",
      netAsset: 2100000000,
      dividendRate: 2.1,
      components: ["현대차", "기아", "현대모비스"],
    },
    {
      name: "Kodex 소재",
      price: 12500,
      operator: "KB자산운용",
      listedDate: "2018-12-01",
      netAsset: 2000000000,
      dividendRate: 1.4,
      components: ["POSCO홀딩스", "롯데케미칼", "한화솔루션"],
    },
    {
      name: "Kodex 통신",
      price: 11000,
      operator: "NH아문디자산운용",
      listedDate: "2017-01-15",
      netAsset: 1400000000,
      dividendRate: 2.6,
      components: ["KT", "SK텔레콤", "LG유플러스"],
    },
  ]);
  const [selectedEtfs, setSelectedEtfs] = useState([]);
  const [isCompareEnabled, setIsCompareEnabled] = useState(false);
  const [showScrollMessage, setShowScrollMessage] = useState(true);
  const [scrollInfo, setScrollInfo] = useState([]);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const navigate = useNavigate();

  const handleSelectedEtf = (etf) => {
    if (selectedEtfs.length < 2 && !selectedEtfs.some((item) => item.name === etf.name)) {
      setSelectedEtfs([...selectedEtfs, etf]);
    }
  };

  const handleRemoveEtf = (index) => {
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
      setShowScrollMessage(true);

      const selectedData = selectedEtfs.map((etf) => ({
        name: etf.name,
        operator: etf.operator,
        listedDate: etf.listedDate,
        netAsset: etf.netAsset,
        dividendRate: etf.dividendRate,
        components: etf.components,
      }));
      setScrollInfo(selectedData);
      setIsContentVisible(true);
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

  return (
    <div className="container">
      <div className="left-panel">
        <div className="etfSearch-Top">
          <h1>ETF 둘러보기</h1>
          <input type="text" placeholder="검색어를 입력해주세요"></input>
        </div>
        <div className="etfSearch-Bottom">
          <table>
            <thead>
              <tr>
                <th>종목</th>
                <th>현재가</th>
              </tr>
            </thead>
            <tbody>
              {etfData.map((etf, index) => (
                <tr key={index} onClick={() => handleSelectedEtf(etf)}>
                  <td>{etf.name}</td>
                  <td>{etf.price.toLocaleString()}원</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="right-panel">
        <div className="etfSelect">
          {selectedEtfs.map((etf, index) => (
            <div className={`etfSelect-${index + 1}`} key={index}>
              <h1>{etf.name}</h1>
              <img src={deleteIcon} onClick={() => handleRemoveEtf(index)}></img>
            </div>
          ))}
          {Array.from({ length: 2 - selectedEtfs.length }).map((_, index) => (
            <div className={`etfSelect-${selectedEtfs.length + index + 1}`} key={index}>
              <h1>ETF를 선택해주세요.</h1>
            </div>
          ))}
        </div>
        <div className={`compare-btn ${isCompareEnabled ? "active" : "inactive"}`} onClick={handleCompareClick}>
          <h1>비교하기</h1>
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
