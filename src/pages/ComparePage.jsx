import axios from 'axios';
import '../styles/ComparePage.css';
import React, { useEffect, useState } from 'react';

export default function ComparePage() {
  const [etfData, setEtfData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('');
      setEtfData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              {/* {etfData.map(etf)} */}
              <tr>
                <td>삼성전자</td>
                <td>11,800원</td>
              </tr>
              <tr>
                <td>Kodex 배당 성장주</td>
                <td>12,800원</td>
              </tr>
              <tr>
                <td>미국 사랑해요 성장주</td>
                <td>12,800원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="right-panel">
        <div className="etfSelect">
          <div className="etfSelect-1">
            <h1>ETF를 선택해주세요.</h1>
          </div>
          <div className="etfSelect-2">
            <h1>ETF를 선택해주세요.</h1>
          </div>
        </div>
        <div className="compare-btn">
          <h1>비교하기</h1>
        </div>
      </div>
    </div>
  );
}
