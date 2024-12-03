function ProductInfo({ distributions, investPoint }) {
  return (
    <div>
      {/* 투자포인트 */}
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "25px", fontWeight: "500", marginBottom: "30px", marginTop: "30px" }}>투자포인트</h2>
        {investPoint ? (
          investPoint
            .split(".") // 마침표를 기준으로 분리
            .filter((point) => point.trim()) // 공백 제외
            .map((point, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(2, 73, 255, 0.05)", // 박스 배경색
                  borderRadius: "40px", // 둥근 테두리
                  height: "120px",
                  padding: "20px", // 내부 여백
                  marginBottom: "20px", // 박스 간 간격
                  display: "flex", // 번호와 텍스트 정렬
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "30px", // 번호 크기
                    fontWeight: "500", // 번호 굵기
                    alignContent: "center",
                    color: "rgba(2, 73, 255, 0.5)", // 번호 색상
                    marginLeft: "15px",
                    transform: "translateY(-35px)", // 위로 이동
                  }}
                >
                  {String(index + 1).padStart(2, "0")} {/* 01, 02 형식 */}
                </span>
                <p
                  style={{
                    margin: 0,
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#000",
                    paddingRight: "100px",
                    paddingLeft: "100px",
                    marginLeft: "40px",
                    marginRight: "40px",
                    textAlign: "center", // 텍스트를 가로로 가운데 정렬
                    width: "100%", // 너비를 박스에 맞추기
                  }}
                >
                  {point.trim()} {/* 마침표 없이 표시 */}
                </p>
              </div>
            ))
        ) : (
          <p>투자포인트 데이터가 없습니다.</p>
        )}
      </div>

      {/* 분배금 */}
      <div style={{ position: "relative", marginBottom: "30px", marginTop: "30px" }}>
        <h2 style={{ fontSize: "25px", fontWeight: "500", marginBottom: "30px", marginTop: "30px" }}>분배금</h2>
        <div
          style={{
            // position: "absolute",
            background: "rgba(2, 73, 255, 0.05)",
            borderRadius: "40px",
            padding: "5px 20px 20px 20px",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              tableLayout: "fixed",
              background: "transparent",
              fontSize: "16px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "transparent" }}>
                <th style={{ padding: "10px", textAlign: "center", fontSize: "18px", fontWeight: "500" }}>
                  지급기준일
                </th>
                <th style={{ padding: "10px", textAlign: "center", fontSize: "18px", fontWeight: "500" }}>
                  실제지급일
                </th>
                <th style={{ padding: "10px", textAlign: "center", fontSize: "18px", fontWeight: "500" }}>분배금액</th>
                <th style={{ padding: "10px", textAlign: "center", fontSize: "18px", fontWeight: "500" }}>단위</th>
              </tr>
            </thead>
            {/* 선 추가 */}
            <tr>
              <td colSpan="4" style={{ borderBottom: "1px solid rgba(202, 202, 202, 0.5)", padding: "0" }}></td>
            </tr>
            <tbody>
              {distributions?.map((dividend, index) => (
                <tr key={index}>
                  <td style={{ padding: "10px", textAlign: "center" }}>{dividend.paymentStandardDate}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>{dividend.actualPaymentDate}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>{dividend.distributionAmount}</td>
                  <td style={{ padding: "10px", textAlign: "center" }}>{dividend.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
