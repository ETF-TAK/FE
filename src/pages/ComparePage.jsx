import axios from 'axios';
import '../styles/ComparePage.css';
import React, { useEffect, useState } from 'react';

export default function ComparePage() {
  const [etfData, setEtfData] = useState([
    { name: 'Kodex 성장주', price: 12800 },
    { name: 'Kodex 배당주', price: 15000 },
    { name: 'Kodex 가치주', price: 14200 },
    { name: 'Kodex 인덱스', price: 13500 },
    { name: 'Kodex 성장주', price: 12800 },
    { name: 'Kodex 배당주', price: 15000 },
    { name: 'Kodex 가치주', price: 14200 },
    { name: 'Kodex 인덱스', price: 13500 },
    { name: 'Kodex 성장주', price: 12800 },
    { name: 'Kodex 배당주', price: 15000 },
    { name: 'Kodex 가치주', price: 14200 },
    { name: 'Kodex 인덱스', price: 13500 },
  ]);
  const [selectedEtfs, setSelectedEtfs] = useState([]);
  const [isCompareEnabled, setIsCompareEnabled] = useState(false);

  const handleSelectedEtf = (etf) => {
    if (selectedEtfs.length < 2 && !selectedEtfs.some((item) => item.name === etf.name)) {
      setSelectedEtfs([...selectedEtfs, etf]);
    }
  };

  const handleRemoveEtf = (index) => {
    const updateEtfs = [...selectedEtfs];
    updateEtfs.splice(index, 1);
    setSelectedEtfs(updateEtfs);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('');
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
              <button onClick={() => handleRemoveEtf(index)}>취소</button>
            </div>
          ))}
          {Array.from({ length: 2 - selectedEtfs.length }).map((_, index) => (
            <div className={`etfSelect-${selectedEtfs.length + index + 1}`} key={index}>
              <h1>ETF를 선택해주세요.</h1>
            </div>
          ))}
        </div>
        <div className={`compare-btn ${isCompareEnabled ? 'active' : 'inactive'}`}>
          <h1>비교하기</h1>
        </div>
      </div>
    </div>
  );
}
