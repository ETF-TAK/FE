import axios from "axios";
import "../comparePage/style.css";
import ScrollPage from "../scrollPage/ScrollPage";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CompareCard from "../../components/etf/compareCard/CompareCard";
import CategoryTabs from "../../components/etf/categoryTabs/CategoryTabs";
import SectorKorea from "../../assets/images/common/sectors/korea.png";
import SearchIcon from "../../assets/images/icons/search.png";
import { getCompareETFList, postCompareETF } from "../../lib/apis/compare";
import SectorMapper from "../../components/etf/sectorMapper/SectorMapper";

export default function ComparePage() {
  const location = useLocation();
  const { filterValue } = location.state || {};
  console.log("Filter Value:", filterValue);

  const [etfData, setEtfData] = useState([]);
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
    const isAlreadySelected = selectedEtfs.some((item) => item.name === etf.name);

    if (isAlreadySelected) {
      const updatedEtfs = selectedEtfs.filter((item) => item.name !== etf.name);
      setSelectedEtfs(updatedEtfs);
    } else {
      if (selectedEtfs.length < 2) {
        setSelectedEtfs([...selectedEtfs, etf]);
        setShowScrollMessage(false);
      }
    }
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

  const handleCompareClick = async () => {
    if (isCompareEnabled) {
      setShowResult(true);
      setShowScrollMessage(true);

      const payload = {
        etfList: selectedEtfs.map((etf) => etf.ticker || etf.etfNum),
      };

      console.log("payload!!!!!!!!!!!!!!", payload);

      try {
        const data = await postCompareETF(payload);
        console.log(data);
        setBasicInfo(data.basicInfo);
        setOverlappingStocks(data.overlappingStocks);
        setScrollInfo(data);
      } catch (e) {
        console.error(e);
      }
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
            <CategoryTabs fontsize="16px" filterValue={filterValue} setCategory={setCategory} />

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
                    filterdData
                      .filter((etf) => etf.price.toLocaleString() !== "0")
                      .map((etf, index) => (
                        <tr
                          key={index}
                          onClick={() => handleSelectedEtf(etf)}
                          className={
                            // 나중에 name => id로 바꿔야할 수도
                            selectedEtfs.some((selected) => selected.name === etf.name)
                              ? "etfSearch-Bottom-Selected"
                              : ""
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
                <span>{scrollInfo.overlapCount}</span>개의 종목이 겹쳐요. <br />
                {scrollInfo.overlapCount <= 5 && "분산투자 효과가 충분히 유지될 수 있어요.👍🏻"}
                {scrollInfo.overlapCount > 5 && scrollInfo.overlapCount <= 10 && "분산 효과가 조금 줄어들 수 있어요.🤔"}
                {scrollInfo.overlapCount > 10 && "분산 효과가 크게 줄어들 수 있어요.⚠️"}
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
