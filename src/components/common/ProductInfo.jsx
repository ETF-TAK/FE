function ProductInfo() {
  const productInfo = {
    points: [
      "국내 조선업을 선도하는 TOP3(삼성중공업, 한화오션, HD한국조선해양) 및 조선업 배후산업에 집중 투자하는 ETF",
      "장기적으로 성장 가능성이 높은 조선업 관련 산업에 투자",
    ],
    dividends: [
      { date: "2024.03.31", actualDate: "2024.04.01", amount: "16.7", unit: "$" },
      { date: "2024.04.28", actualDate: "2024.05.01", amount: "1,700", unit: "₩" },
    ],
  };

  return (
    <div>
      {/* 투자포인트 */}
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "500", marginBottom: "20px", marginTop: "20px" }}>투자포인트</h2>
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
        <h2 style={{ fontSize: "20px", fontWeight: "500", marginBottom: "20px", marginTop: "20px" }}>분배금</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
            tableLayout: "fixed",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#F5F5F5" }}>
              <th style={{ padding: "10px", border: "1px solid #CCC" }}>지급기준일</th>
              <th style={{ padding: "10px", border: "1px solid #CCC" }}>실제지급일</th>
              <th style={{ padding: "10px", border: "1px solid #CCC" }}>분배금액</th>
              <th style={{ padding: "10px", border: "1px solid #CCC" }}>단위</th>
            </tr>
          </thead>
          <tbody>
            {productInfo.dividends.map((dividend, index) => (
              <tr key={index}>
                <td style={{ padding: "10px", border: "1px solid #CCC", textAlign: "center" }}>{dividend.date}</td>
                <td style={{ padding: "10px", border: "1px solid #CCC", textAlign: "center" }}>
                  {dividend.actualDate}
                </td>
                <td style={{ padding: "10px", border: "1px solid #CCC", textAlign: "center" }}>{dividend.amount}</td>
                <td style={{ padding: "10px", border: "1px solid #CCC", textAlign: "center" }}>{dividend.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductInfo;
