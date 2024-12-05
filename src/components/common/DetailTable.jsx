function DetailTable({ details }) {
  const formatNumberWithCommas = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };

  return (
    <div>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
          fontFamily: "Pretendard, sans-serif",
        }}
      >
        <thead>
          <tr style={{ borderTop: "2px solid #000", borderBottom: "2px solid #000" }}>
            <th
              style={{
                padding: "12px 8px",
                width: "40%",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              종목
            </th>
            <th
              style={{
                padding: "12px 8px",
                width: "20%",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              단위
            </th>
            <th
              style={{
                padding: "12px 8px",
                width: "20%",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              현재가
            </th>
            <th
              style={{
                padding: "12px 8px",
                width: "20%",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              비중
            </th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td
                style={{
                  padding: "12px 8px",
                  borderBottom: "1px solid #EEE",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                {detail.stockName}
              </td>
              <td
                style={{
                  padding: "12px 8px",
                  borderBottom: "1px solid #EEE",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                {detail.unit || "₩"}
              </td>
              <td
                style={{
                  padding: "12px 8px",
                  borderBottom: "1px solid #EEE",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                {formatNumberWithCommas(detail.currentPrice)}
              </td>
              <td
                style={{
                  padding: "12px 8px",
                  borderBottom: "1px solid #EEE",
                  textAlign: "center", // 비중 가운데 정렬
                  fontSize: "14px",
                }}
              >
                {detail.weight}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetailTable;
