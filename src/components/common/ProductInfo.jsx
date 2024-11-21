function ProductInfo() {
    const productInfo = {
      points: [
        "국내 조선업을 선도하는 TOP3(삼성중공업, 한화오션, HD한국조선해양) 및 조선업 배후산업에 집중 투자하는 ETF",
        "장기적으로 성장 가능성이 높은 조선업 관련 산업에 투자",
      ],
      dividends: [
        { date: "2024.03.31", basePrice: "10,000", amount: "16", rate: "1.6%", afterPrice: "10,002.71" },
        { date: "2024.01.31", basePrice: "10,002.77", amount: "16", rate: "1.6%", afterPrice: "10,002.71" },
      ],
    };
  
    return (
      <div>
        {/* 투자포인트 */}
        <div style={{ marginBottom: "20px" }}>
          <h2>투자포인트</h2>
          {productInfo.points.map((point, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#F5F5F5",
                borderRadius: "10px",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <p>{point}</p>
            </div>
          ))}
        </div>
  
        {/* 분배금 */}
        <div>
          <h2>분배금</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
            <thead>
              <tr style={{ backgroundColor: "#F5F5F5" }}>
                <th style={{ padding: "10px", border: "1px solid #CCC" }}>지급일</th>
                <th style={{ padding: "10px", border: "1px solid #CCC" }}>기준가격</th>
                <th style={{ padding: "10px", border: "1px solid #CCC" }}>분배금액</th>
                <th style={{ padding: "10px", border: "1px solid #CCC" }}>분배금율</th>
                <th style={{ padding: "10px", border: "1px solid #CCC" }}>기준가격(분배 후)</th>
              </tr>
            </thead>
            <tbody>
              {productInfo.dividends.map((dividend, index) => (
                <tr key={index}>
                  <td style={{ padding: "10px", border: "1px solid #CCC" }}>{dividend.date}</td>
                  <td style={{ padding: "10px", border: "1px solid #CCC" }}>{dividend.basePrice}</td>
                  <td style={{ padding: "10px", border: "1px solid #CCC" }}>{dividend.amount}</td>
                  <td style={{ padding: "10px", border: "1px solid #CCC" }}>{dividend.rate}</td>
                  <td style={{ padding: "10px", border: "1px solid #CCC" }}>{dividend.afterPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default ProductInfo;
  