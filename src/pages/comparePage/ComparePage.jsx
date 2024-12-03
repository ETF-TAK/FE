import axios from "axios";
import "../comparePage/style.css";
import ScrollPage from "../scrollPage/ScrollPage";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompareCard from "../../components/etf/compareCard/CompareCard";
import CategoryTabs from "../../components/etf/categoryTabs/CategoryTabs";
import SectorKorea from "../../assets/images/common/sectors/korea.png";
import SearchIcon from "../../assets/images/icons/search.png";
import { getCompareETFList, postCompareETF } from "../../lib/apis/compare";
import SectorMapper from "../../components/etf/sectorMapper/SectorMapper";

export default function ComparePage() {
  const [etfData, setEtfData] = useState([
    // {
    //   name: "Kodex 성장주",
    //   price: 12800,
    //   operator: "삼성자산운용",
    //   listedDate: "2020-03-15",
    //   netAsset: 2000000000,
    //   dividendRate: 2.5,
    //   components: ["삼성전자", "LG화학", "카카오"],
    // },
    // {
    //   name: "Kodex 배당주",
    //   price: 15000,
    //   operator: "KB자산운용",
    //   listedDate: "2018-07-01",
    //   netAsset: 1500000000,
    //   dividendRate: 3.0,
    //   components: ["삼성전자", "SK하이닉스", "네이버"],
    // },
    // {
    //   name: "Kodex 가치주",
    //   price: 14200,
    //   operator: "미래에셋자산운용",
    //   listedDate: "2019-10-01",
    //   netAsset: 2500000000,
    //   dividendRate: 1.8,
    //   components: ["LG전자", "현대차", "SK텔레콤"],
    // },
    // {
    //   name: "Kodex 인덱스",
    //   price: 13500,
    //   operator: "NH아문디자산운용",
    //   listedDate: "2021-05-20",
    //   netAsset: 3000000000,
    //   dividendRate: 2.0,
    //   components: ["삼성전자", "현대차", "NAVER"],
    // },
    // {
    //   name: "Kodex 코스닥",
    //   price: 12100,
    //   operator: "한국투자신탁운용",
    //   listedDate: "2022-03-01",
    //   netAsset: 1500000000,
    //   dividendRate: 1.5,
    //   components: ["카카오게임즈", "펄어비스", "CJ ENM"],
    // },
    // {
    //   name: "Kodex 헬스케어",
    //   price: 18000,
    //   operator: "삼성자산운용",
    //   listedDate: "2020-12-15",
    //   netAsset: 2200000000,
    //   dividendRate: 1.2,
    //   components: ["셀트리온", "삼성바이오로직스", "유한양행"],
    // },
    // {
    //   name: "Kodex IT",
    //   price: 16000,
    //   operator: "미래에셋자산운용",
    //   listedDate: "2017-08-01",
    //   netAsset: 3200000000,
    //   dividendRate: 2.3,
    //   components: ["삼성전자", "SK하이닉스", "LG디스플레이"],
    // },
    // {
    //   name: "Kodex 에너지",
    //   price: 14000,
    //   operator: "KB자산운용",
    //   listedDate: "2021-11-11",
    //   netAsset: 1700000000,
    //   dividendRate: 2.7,
    //   components: ["SK이노베이션", "S-OIL", "한국가스공사"],
    // },
    // {
    //   name: "Kodex 금융",
    //   price: 12300,
    //   operator: "NH아문디자산운용",
    //   listedDate: "2016-09-30",
    //   netAsset: 1800000000,
    //   dividendRate: 1.9,
    //   components: ["KB금융", "신한지주", "하나금융지주"],
    // },
    // {
    //   name: "Kodex 해외주식",
    //   price: 20000,
    //   operator: "한국투자신탁운용",
    //   listedDate: "2020-01-01",
    //   netAsset: 4000000000,
    //   dividendRate: 3.2,
    //   components: ["Apple", "Tesla", "Microsoft"],
    // },
    // {
    //   name: "Kodex ESG",
    //   price: 15500,
    //   operator: "삼성자산운용",
    //   listedDate: "2021-07-10",
    //   netAsset: 1900000000,
    //   dividendRate: -1.7,
    //   components: ["삼성SDI", "LG화학", "포스코홀딩스"],
    // },
    // {
    //   name: "Kodex 자동차alsdkjlaskjdladkjlaskjdlajsl",
    //   price: 130000000,
    //   type: "자동차",
    //   operator: "미래에셋자산운용",
    //   listedDate: "2019-04-20",
    //   netAsset: 2100000000,
    //   dividendRate: 2.1,
    //   components: ["현대차", "기아", "현대모비스"],
    // },
    // {
    //   name: "Kodex 소재",
    //   price: 12500,
    //   operator: "KB자산운용",
    //   listedDate: "2018-12-01",
    //   netAsset: 2000000000,
    //   dividendRate: 1.4,
    //   components: ["POSCO홀딩스", "롯데케미칼", "한화솔루션"],
    // },
    // {
    //   name: "Kodex 통신",
    //   price: 11000,
    //   operator: "NH아문디자산운용",
    //   listedDate: "2017-01-15",
    //   netAsset: 1400000000,
    //   dividendRate: 2.6,
    //   components: ["KT", "SK텔레콤", "LG유플러스"],
    // },
  ]);
  const [selectedEtfs, setSelectedEtfs] = useState([]);
  const [isCompareEnabled, setIsCompareEnabled] = useState(false);
  const [showScrollMessage, setShowScrollMessage] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [scrollInfo, setScrollInfo] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filterdData, setFilterdData] = useState(etfData);
  const [category, setCategory] = useState("GROWTH");
  const [basicInfo, setBasicInfo] = useState([]); // 기본정보
  const [overlappingStocks, setOverlappingStocks] = useState([]); // 중복종목
  const navigate = useNavigate();

  useEffect(() => {
    getCompareETFList(category).then((data) => {
      setEtfData(data.result);
      console.log(data.result);
    });
  }, [category]);

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

  const handleCompareClick = async () => {
    if (isCompareEnabled) {
      setShowResult(true);
      setShowScrollMessage(true);

      const payload = {
        // etfList: selectedEtfs.map((etf) => etf.ticker),
        etfList: ["139240", "117680"],
      };

      try {
        const data = await postCompareETF(payload);
        console.log(data);
        setBasicInfo(data.basicInfo);
        setOverlappingStocks(data.overlappingStocks);
        setScrollInfo(data);
      } catch (e) {
        console.error(e);
      }

      // const selectedData = selectedEtfs.map((etf) => ({
      //   name: etf.name,
      //   operator: etf.operator,
      //   listedDate: etf.listedDate,
      //   netAsset: etf.netAsset,
      //   dividendRate: etf.dividendRate,
      //   components: etf.components,
      // }));

      // setScrollInfo(selectedData);
      // setIsContentVisible(true);
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
            <CategoryTabs fontsize="16px" setCategory={setCategory} />

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
                          <img
                            src={SectorMapper[etf.sector] || SectorMapper.default}
                            alt="섹터 이미지"
                            className="etfSearch-Bottom-List-Img"
                          />
                          <span>{etf.name}</span>
                        </td>
                        <td className="etfSearch-Bottom-List-Price">
                          <span className="etfSearch-Bottom-List-Price-Bold">{etf.price.toLocaleString()}원</span> (
                          <span style={{ color: etf.positive ? "#EB1B1D" : "#0249FF" }}>
                            {etf.positive ? "+" : ""}
                            {etf.profitRate}
                          </span>
                          )
                        </td>
                      </tr>
                    ))
                  ) : (
                    <div className="no-Result">
                      <div>검색결과가 없습니다.</div>
                    </div>
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

          <div className={`comparison-result-summary ${showResult ? "active" : ""}`}>
            {showResult && (
              <>
                <span>{scrollInfo.overlapCount}</span>개의 종목이 겹쳐요. <br /> 분산투자 효과가 충분히 유지될 수
                있어요.👍🏻
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
        basicInfo={basicInfo}
        overlappingStocks={overlappingStocks}
      />
    </div>
  );
}
